# Dizajnový systém — Martin Barczi

**Pracovný lokálny prototyp, 22. 10. 2026.** Dokument opisuje aktuálny `index.html`, `tokens.css` a `styles.css`. Povolenie postaviť návrh nie je prijatie finálnej značky ani povolenie publikovať.

Postup vychádza z dodaného [Yanis Landing Page Beautifier](../reference/yanis/landing-page-beautifier/landing-page-beautifier/SKILL.md) a jeho [šablóny dizajnového systému](../reference/yanis/landing-page-beautifier/landing-page-beautifier/references/design-system.md).

## Smer a princípy

Základom je **Cinematic Dark upravený pre osobnú značku**: tmavý atramentový úvod, veľké meno, skutočný portrét a jeden výraznejší scroll moment. Svetlé obsahové časti nechávajú priestor úplným pôvodným textom; mäta označuje akcie a orientačné detaily.

- Martin a jeho existujúca práca sú hlavný vizuálny aj obsahový materiál.
- Zachovať všetkých šesť služieb a pôvodné poradie sekcií; kompozíciu meniť okolo textu.
- Hĺbku tvoria fotografia, orez, plné plochy a jemné linky. Nepoužívať ďalší paralelný systém skla, žiary či kariet.
- Hotový obsah je v HTML. Pohyb je doplnenie a nesmie byť podmienkou čítania.
- Zdrojové tvrdenia sa pri vizuálnej úprave automaticky neopravujú; otvorené otázky patria do [REVAMP-LOG.md](REVAMP-LOG.md).

## Tokeny

Spoločné hodnoty sú v [tokens.css](tokens.css). Tabuľka zachytáva hlavné roly aktuálneho prototypu; nie je tvrdením, že všetky lokálne hodnoty v CSS už prešli úplným auditom.

| Rola | Token a hodnota | Použitie |
| --- | --- | --- |
| Svetlé pozadie | `--c-bg: #f3f5f1` | Služby, benefity, príbeh, kontakt. |
| Sekundárne plochy | `--c-surface: #e7ece7`, `--c-surface-2: #d8e1dc` | Jemné oddelenie a podklad fotografií. |
| Text | `--c-ink: #102c31`, `--c-ink-2: #41595c` | Hlavné a podporné texty na svetle. |
| Tmavé plochy | `--c-dark: #0a252b`, `--c-dark-2: #13373e` | Hero, proces, referencie, pätička. |
| Svetlý text | `--c-light: #f2f5ef`, `--c-light-2: #bed0ce` | Text na tmavých plochách. |
| Akcent | `--c-accent: #9ae6dc`, `--c-accent-deep: #236e68` | Primárne CTA, čísla, drobné značky; hlbšia verzia na svetle. |
| Fokus a chyba | `--c-focus: #286e89`, `--c-danger: #9b282f` | Klávesnicový fokus a formulárová validácia. |
| Rozostupy | `--sp-1` až `--sp-10`: 4–128 px | Spoločný rytmus a odstupy. |
| Zaoblenie | `--r-1: 6px`, `--r-2: 16px`, `--r-3: 32px`, `--r-pill: 999px` | Polia, fotografie a tlačidlá. |
| Vrstvy | `--z-bg: -1` až `--z-toast: 300` | Dekorácia, obsah, navigácia a fokusový skip link. |

## Typografia

Lokálne načítaný **Manrope** obsluhuje meno, nadpisy aj text. Display má tesné prestrkávanie, bežný text širší riadok a pokojné tempo. Latinka aj rozšírená latinka sú v `assets/fonts/`; licencia je v `licenses/manrope-LICENSE.txt`.

| Použitie | Rez | Token veľkosti | Riadok / prestrkávanie |
| --- | --- | --- | --- |
| Martinovo meno | 600 | `--fs-display`, 4–8,8 rem podľa okna | `--lh-display: .98`, `--track-display: -.065em` |
| Nadpis sekcie | 600 | `--fs-h2`, 2,15–4,2 rem | `--lh-head: 1.1`, `--track-head: -.04em` |
| Nadpis služby | 600 | `--fs-h3`, 1,5–2,6 rem | Prispôsobenie dĺžke pôvodného titulku. |
| Úvod a citát | 400–500 | `--fs-lead`, 1,125–1,5 rem | Väčší priestor pre čítanie. |
| Bežný text | 400 | `--fs-body`, 1–1,125 rem | `--lh-body: 1.65` |
| Popisky | 600–700 | `--fs-small: .875rem`, `--fs-label: .75rem` | Krátke označenia, uppercase iba pri eyebrow. |

## Rozloženie a obsahové časti

Kontajner `--wrap` má maximum 1 312 px, širší obal 1 536 px a textový limit 680 px. Okraj `--gutter` je fluidný 20–72 px; hlavné vertikálne odstupy 72–128 px. Rozhrania sú 900 px pre mobilnú navigáciu a 640 px pre skladanie do jedného stĺpca. Podmienky pinu určujú aj výška okna a skutočná výška scény.

| Časť stránky | Paleta a kompozícia | Vizuálna úloha |
| --- | --- | --- |
| Hero | Tmavá, meno vedľa reálneho portrétu, mätové CTA. | Predstaviť človeka a dať jasný ďalší krok. |
| Šesť služieb | Svetlá, striedanie fotografie a textu, číslovanie. | Zachovať úplnú ponuku a dlhšie titulky. |
| Päť krokov | Tmavá, úplný zoznam vedľa čísla a progress linky. | Jediná hlavná scroll scéna; text zostáva čitateľný. |
| Benefity a príbeh | Svetlá, štyri bloky a väčší portrét s odsekom. | Pokojnejšia časť pre podrobnosti a osobný kontext. |
| Referencie | Tmavá, jeden väčší citát a dva menšie. | Skutočné slová klientov s pôvodnou atribúciou. |
| Kontakt a pätička | Svetlý formulár, tmavé zakončenie s veľkým menom. | Kontakt a orientácia v pôvodných službách. |

## Komponenty a pohyb

Navigácia mení paletu podľa sekcie; na menšej šírke má menu ovládané tlačidlom. CTA používa pill tvar a mierny posun šípky; fokus má samostatnú viditeľnú linku. Služby používajú jeden spoločný riadok s fotografiou, číslom, nadpisom, celým odsekom a odkazom na pôvodný detail. Formulár má stále viditeľné labely; rovnaké texty sa neopakujú v placeholderoch.

Hero používa krátky maskovaný vstup a fotografia jemný posun pri scrollovaní. Proces pri vhodnom desktope pinne jednu scénu, na menších alebo nevhodne vysokých oknách používa tú istú časovú os ako slučku viditeľnú iba v zábere s možnosťou pauzy. Reduced motion a režimy `?motion=reduce|off` zachovávajú statický obsah. Presné pravidlá a zodpovednosť za transformácie uvádza [MOTION.md](MOTION.md).

## Rozširovanie

Zatiaľ existuje jeden vizuálny smer home; samostatné skiny produktov ani podstránok nie sú implementované. Prípadné ďalšie stránky majú používať rovnaké roly tokenov a spoločnú navigáciu. Nová značka, nové logo, ďalšia rodina písma alebo nová paleta sú samostatné rozhodnutia.

Nepoužívať generovanú náhradu Martina, nekrátiť text pre pohodlnú kartu a neschovávať neaktívne procesné kroky. Neoznačovať tento prototyp za prijatý brand book. Browser QA a vizuálne prijatie sa evidujú samostatne.
