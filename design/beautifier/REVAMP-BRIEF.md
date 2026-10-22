# Revamp brief — Martin Barczi

**Dátum:** 22. 10. 2026 · **Zadávateľ:** Adam Rudavský · **Značka a obsah:** Martin Barczi / Online asistent.

**Stav:** autorizovaná stavba lokálneho návrhu. Súčasný prototyp nie je schválená finálna značka ani potvrdené verejné nasadenie.

Postup: lokálne dodaný [Yanis Landing Page Beautifier](../reference/yanis/landing-page-beautifier/landing-page-beautifier/SKILL.md). Konkrétne vizuálne hodnoty sú v [DESIGN.md](DESIGN.md), pôvod obsahu v [CONTENT-SOURCE.md](CONTENT-SOURCE.md).

## Účel

- **Návštevník:** človek alebo firma, ktorá potrebuje obchodnú komunikáciu, databázu či zákaznícku podporu a často prichádza na odporúčanie.
- **Hlavná akcia:** pochopiť Martina a jeho ponuku, potom ho kontaktovať alebo prejsť na relevantný detail služby.
- **Požadovaný dojem:** moderná a osobná profesionálna prezentácia s výraznou kompozíciou, kvalitnou typografiou a navrhnutým scrollom.

## Čo zachovať

- Existujúce texty home, ich znenie a poradie. Zachovať všetkých **6 služieb, 5 krokov, 4 benefity, celý osobný úryvok a 3 referencie**.
- Pôvodné CTA a použiteľné verejné kontaktné údaje; odkazy na detailné služby a ďalšie existujúce stránky.
- Skutočné fotografie a Martinovu identitu. Dobré podklady zo starého webu tvoria základ revampu.
- Otázky k starým tvrdeniam iba označiť; neopravovať ich bez obsahového rozhodnutia.

## Referencia a smer

Yanis/Strade slúži ako referencia pre rytmus celej stránky, filmový úvod, prechody medzi časťami a jednu vlastnú scroll scénu. Jeho štúdio, identita ani texty sa na Martina neprenášajú.

Pracovná adaptácia **Cinematic Dark** spája tmavý atramentový úvod s veľkým menom a svetlými plochami pre podrobnosti. Manrope, mäta, reálny portrét a striedanie fotografie s textom majú vytvoriť súvislú osobnú prezentáciu.

## Rozsah aktuálneho prototypu

| Časť | Realizácia návrhu | Menšie okná / obmedzený pohyb |
| --- | --- | --- |
| Hero | Veľké stabilné meno, pôvodný text a CTA, skutočný portrét. | Obsah sa skladá pod seba; pri reduced motion zostáva statický. |
| Služby | Šesť úplných riadkov s pôvodnými fotografiami a detailnými odkazmi. | Jeden stĺpec, rovnaké poradie a celé texty. |
| Spolupráca | Päť čitateľných krokov, číslo a progress; hlavná scéna s pinom a scrollom. | Slučka iba pri viditeľnej sekcii s pauzou; pri reduced motion statický zoznam. |
| Benefity, príbeh, referencie | Pôvodné texty v pokojnejšom rytme a odlišných kompozíciách. | Čitateľné bloky bez závislosti od animácie. |
| Kontakt | Popisky, validácia a lokálna príprava e-mailu. | Žiadny potvrdený odosielací backend. |

## Podmienky a otvorené rozhodnutia

- Statický HTML/CSS/JS návrh; lokálne fonty, ikony, reálne médiá a GSAP/ScrollTrigger. Presné licenčné súbory a hlavičky knižníc sa zachovávajú.
- Rozloženie vychádza z existujúceho obsahu. Odkazy na detaily služieb, blog a certifikáty vedú na pôvodný WordPress.
- Písmená **mb** so šípkou v hlavičke sú návrh označenia, nie prijaté logo. Portrét bol prevzatý zo stránky príbehu; nie je vydávaný za overené pôvodné hero pozadie.
- Stav pôvodného hero CSS, neaktuálne čísla praxe, vynechaný nefunkčný odkaz na školenie a ďalšie rozdiely zaznamenáva [REVAMP-LOG.md](REVAMP-LOG.md).
- Browser QA a estetické posúdenie vedie vlastník implementácie; tento brief nevydáva výsledok týchto kontrol.

## Mimo tejto realizácie

Celý projekt ráta aj s článkami, spoločným podcastom a digitálnymi produktmi založenými na dátach. **V tomto prototypovom kroku nie je implementovaný nový blog, katalóg produktov, platba, doručenie, newsletter ani redakčný systém.** Rovnako nie je dokončený brand book, prepis ponuky či migrácia všetkých WordPress podstránok.
