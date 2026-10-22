#!/usr/bin/env python3
"""Overí lokálne zdroje bez výpisu osobných údajov alebo cudzích úryvkov.

Použitie: python3 overit-zdroje.py /cesta/k/xvadur_workspace
Skript nič nezapisuje a nepristupuje na sieť. Exit 0 = overené,
1 = nesúlad alebo chyba, 2 = niektorý zdroj nie je dostupný.
"""
import collections
import csv
import hashlib
import json
import pathlib
import sys
import urllib.parse


def rows(path):
    with path.open(encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle))


def main():
    if len(sys.argv) != 2:
        print(__doc__)
        return 2
    base = pathlib.Path(sys.argv[1]).expanduser().resolve()
    register = json.loads(pathlib.Path(__file__).with_name("REGISTER-ZDROJOV.json").read_text())
    missing = False
    failed = False
    checked = {}
    assets = [(source["id"], asset) for source in register["sources"] for asset in source["assets"]]
    assets += [("excluded", group["asset"]) for group in register["excluded_groups"] if "asset" in group]
    for source_id, asset in assets:
        locator = asset["workspace_locator"]
        path = base / locator
        if not path.is_file():
            print(json.dumps({"id": source_id, "locator": locator, "status": "unavailable"}, ensure_ascii=False))
            missing = True
            continue
        actual_hash = hashlib.sha256(path.read_bytes()).hexdigest()
        matches = actual_hash == asset["sha256"]
        failed |= not matches
        checked[locator] = path
        print(json.dumps({"id": source_id, "locator": locator, "sha256_match": matches}, ensure_ascii=False))

    sources = {source["id"]: source for source in register["sources"]}
    for source_id in ("R01", "R02"):
        locator = sources[source_id]["assets"][0]["workspace_locator"]
        if locator not in checked:
            continue
        data = rows(checked[locator])
        expected = sources[source_id]["coverage"]
        if source_id == "R01":
            actual = {
                "rows": len(data),
                "by_source_host": dict(collections.Counter(urllib.parse.urlparse(row["source_url"]).netloc for row in data)),
                "fetch_status_200": sum(row["fetch_status"] == "200" for row in data),
            }
        else:
            snippets = collections.Counter(row["exact_snippet"] for row in data)
            most_repeated, repeated_count = snippets.most_common(1)[0] if snippets else ("", 0)
            actual = {
                "candidate_rows": len(data),
                **{"distinct_" + field: len({row[field] for row in data}) for field in ("website_id", "agency_id", "page_id", "source_url", "exact_snippet")},
                "distinct_source_hosts": len({urllib.parse.urlparse(row["source_url"]).netloc for row in data}),
                "largest_repeated_snippet_count": repeated_count,
                "largest_repeated_snippet_is_cookie_related": "cookie" in most_repeated.lower(),
                "claim_types": dict(collections.Counter(row["claim_type"] for row in data)),
                "checked_at_min": min((row["checked_at"] for row in data), default=None),
                "checked_at_max": max((row["checked_at"] for row in data), default=None),
            }
        differences = {key: {"expected": expected[key], "actual": value} for key, value in actual.items() if value != expected[key]}
        failed |= bool(differences)
        print(json.dumps({"id": source_id, "aggregate_match": not differences, "differences": differences}, ensure_ascii=False))

    queue = next(group for group in register["excluded_groups"] if "observed_status_counts" in group)
    locator = queue["asset"]["workspace_locator"]
    if locator in checked:
        actual_status = dict(collections.Counter(row["status"] for row in rows(checked[locator])))
        matches = actual_status == queue["observed_status_counts"]
        failed |= not matches
        print(json.dumps({"id": "excluded_ai_visibility_queue", "status_counts": actual_status, "aggregate_match": matches}, ensure_ascii=False))
    return 1 if failed else (2 if missing else 0)


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (OSError, ValueError, KeyError) as exc:
        print(json.dumps({"status": "verification_error", "error_type": type(exc).__name__}, ensure_ascii=False))
        sys.exit(1)
