# Martin — výber sekcií pre tri homepage

Adam 23. 10. 2026 vybral tri postupne odvážnejšie verzie s odlišným hero. Obsah, poradie sekcií a celé odseky zostávajú z dekompozície onlineasistent.sk. Stav: implementované návrhy na výber; nie finálne Martinovo vizuálne prijatie.

| Sekcia | V1 — Osobný | V2 — Interaktívny | V3 — Výrazný |
| --- | --- | --- | --- |
| Hero | Minimalist Hero: prísľub / fotografia / meno, pokojný kruh | Orrin: veľký serifový prísľub a vlastná animovaná cesta od databázy k dopytu | Sillage: veľké meno a celoplošná skutočná fotografia |
| 6 služieb | Číslované fotografické riadky s úplným odsekom | Služby prepínajú vlastnú animovanú scénu a existujúcu fotografiu | Sillage portrét vedľa 6 riadkov; aktívna služba mení schematický popis práce |
| 5 krokov spolupráce | Pokojná päťbodová línia | Voliteľný krok s úplnými pôvodnými textmi | Onda kruh a aktívny bod podľa scrollu; žiadny scroll pin |
| 4 benefity | Otvorená typografická kompozícia | Štyri bloky v rovnakom vizuálnom systéme | Kontrastná veľká typografia a linky |
| Príbeh | Pôvodná fotografia a celý osobný úryvok | Pôvodná fotografia, celý úryvok, odkaz na celý príbeh | Výrazný fotografický/textový prechod, celý úryvok |
| 3 referencie | Všetky tri čitateľné naraz; podnet Studiova | Manuálny rotátor s menom a firmou | Vrstvené citáty pri scrollovaní; na mobile čitateľná postupnosť |
| Kontakt | 7 pôvodných polí, príprava emailu | 7 pôvodných polí, príprava emailu | 7 pôvodných polí, príprava emailu |
| Footer | Osobný kontaktný footer | Veľký kontrastný kontakt v jazyku Orrin | Sillage veľký kontakt a meno |

## Zdrojové rodiny

- [Minimalist Hero / Ravi Katiyar](https://21st.dev/@ravikatiyar162/components/minimalist-hero), presný komponent získaný cez platený 21st účet. React source zostáva v `source/`; samotná V1 je statická adaptácia.
- [AI Automation Agency / Kedhareswer](https://21st.dev/community/templates/ai-automation-agency-website-template), [upstream](https://github.com/Kedhareswer/21stdev-my-components/tree/main/components/long-exposure-agency-template). V2 preberá kompozičné východisko; pohybová grafika je vlastná a nepreberá agentúrne demo tvrdenia ani shader. Newsreader má OFL.
- [Sillage / 8B](https://21st.dev/community/templates/sillage-creative-agency-website-template), [upstream](https://github.com/8bsite/creative-agency-website-template), MIT.
- [Onda / 8B](https://21st.dev/community/templates/onda-design-studio-website-template), [upstream](https://github.com/8bsite/design-studio-website-template), MIT.
- [Studiova / WrapPixel](https://21st.dev/community/templates/studiova-agency-business-bootstrap-template), kompozičná referencia troch textových citácií; nie referenčný carousel.

Podrobné provenance: `V1.md`, `V2.md`, `V3.md`. Fotografie Martina sa neregenerujú. Experimentálny AI výrez bol odmietnutý a nie je v publikovanom balíku. Nevkladajú sa cudzie portréty klientov, hviezdičky, demo KPIs ani tvrdenie o AI agentúre. Z historického source footeru je vo všetkých nových verziách vynechaný nefunkčný odkaz na školenie backOFFICE; samotná referencia backOFFICE.Sk zostáva celá.

## Rozcestník a nasadenie

Publikovateľné súbory sú v `showcase/`; index odkazuje na `/v1/`, `/v2/`, `/v3/` a nezmenený `/draft/`. `.assetsignore` vylučuje generátory, pracovné Markdown dokumenty a originálne upstream HTML zo serverového balíka. Náhľady kariet sú skutočné screenshoty stránok.

Konfigurácia `wrangler.showcase.jsonc` rozširuje existujúci preview Worker `barczi-xvadur-draft` na `barczi.xvadur.com`; nevytvára novú službu na už obsadenej doméne. Pôvodné verejné nasadenie onlineasistent.sk sa nemení.
