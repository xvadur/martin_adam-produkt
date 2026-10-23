# Nasadenie — Martinove porovnávacie homepage

Overené 23. 10. 2026. Ide o verejne dostupné návrhy na výber so zákazom indexovania, nie o prijatie finálnej Martinovej značky či migráciu jeho WordPressu.

## Publikovaná zostava

- [Rozcestník](https://barczi.xvadur.com/)
- [V1 — Osobný](https://barczi.xvadur.com/v1/)
- [V2 — Interaktívny](https://barczi.xvadur.com/v2/)
- [V3 — Výrazný](https://barczi.xvadur.com/v3/)
- [Východiskový draft](https://barczi.xvadur.com/draft/)

Cloudflare Worker: `barczi-xvadur-draft`. Konfigurácia: `wrangler.showcase.jsonc`. Publikované súbory: `showcase/`. Vlastná doména zostáva priradená k pôvodnej preview službe.

Publikovaná Worker verzia: `df663e67-2911-4c78-952d-d7311d433477`.

Zdrojový GitHub commit: `48d63a4d144637eafc637c35a13fcd6f22e2e7b1`, strom `cc30dc352b79202358eabe00d50114babaf73a31`. Strom na GitHube bol pred nasadením porovnaný s lokálnou zostavou a presne sa zhodoval. Následný dokumentačný commit nemení webové súbory.

Predošlá samostatná verzia draftu: `7652ee0c-7dc4-42f5-b997-09ce0c9fd26c`. Jej obsah z commitu `29e7efc18510c26cddb45f8907062ddda0325e16` zostáva na `/draft/`.

## Vykonané overenie

- Všetkých päť vstupných trás odpovedá HTTPS `200`; živý rozcestník má štyri načítané náhľady a funkčnú cestu do návrhu a späť.
- Všetkých **80 verejných súborov** sa po sledovaní kanonických HTML presmerovaní obsahovo zhoduje s lokálnym balíkom (SHA-256). Súbory `index.html` sa štandardne presmerujú na adresy zakončené `/`.
- Pracovné `DESIGN.md`, generátor `build-page.py` a upstream pôvodné HTML vracajú na publikovanom webe `404`, ako určuje `.assetsignore`.
- Tri nové verzie zachovávajú všetkých **21 pôvodných odsekov/citácií** vrátane úvodu služieb, šesť služieb, päť krokov, štyri benefity, celý osobný úryvok, tri celé referencie a sedem kontaktných polí.
- Browser QA: desktop 1440 × 1000 a mobil 390 × 844, bez horizontálneho pretekania. Všetky tri mobilné varianty majú čitateľný hlavný obsah aj pri `prefers-reduced-motion: reduce`.
- Overené mobilné menu a jeho zatvorenie po výbere, povinné polia formulárov, prepínanie služby a vlastného vizuálu V2, ručné prepínanie referencie a pozastavenie pohybu V2, priebeh procesnej grafiky V3 a jej veľkosť. V relevantných browser kontrolách neboli aplikačné chyby v konzole.
- Platná syntax všetkých štyroch nových JS súborov, úplnosť lokálnych odkazov a assetov, žiadne duplicitné HTML ID. Pôvodný draft zostal nezmenený.

## Hranice návrhov

Formuláre validujú a pripravujú email v používateľovej aplikácii; samy nič neodosielajú. Detaily služieb, celý príbeh, blog a certifikáty vedú na existujúci onlineasistent.sk. Neexistuje nový predaj, platba ani redakčný systém. Návrhy nepoužívajú generovanú náhradu Martinovej fotografie, vymyslené tváre klientov alebo demo KPIs.

## Opakovanie

Lokálny náhľad z koreňa repozitára:

```sh
python3 -m http.server 4397 --bind 127.0.0.1 --directory showcase
```

Nasadenie po overení novej verzie a s existujúcim prihlásením do správneho účtu:

```sh
npx wrangler@4.135.0 deploy --config wrangler.showcase.jsonc
```

Konfigurácia sa vzťahuje iba na Martinov preview Worker a subdoménu. Hlavný xvadur.com a onlineasistent.sk nie sú súčasťou tohto nasadenia.
