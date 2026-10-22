# B03 — Databáza, z ktorej viem pokračovať

Stav: **redakčný a produktový návrh, 22. 10. 2026**. Publikum: maklér alebo asistent, ktorý už má kontakty a nástroje, ale potrebuje spoľahlivo pokračovať v konkrétnej rozrobenej práci.

## Otázka a výsledok

Dokáže po mojom zápise iný človek povedať, čo sa stalo, čo ešte nevieme a čo má nasledovať? Použiteľný výsledok je malý model záznamu a stavu práce, ukázaný na fiktívnych dátach a prispôsobený konkrétnemu nástroju.

Pracovný článok: **Kontakt je začiatok záznamu. Ako zapísať situáciu a ďalší krok?** Podcast začne jedným nedokončeným prípadom a ukáže, čo chýba na nadviazanie. Nehodnotí kanceláriu podľa počtu riadkov v CRM.

## Evidencia a jej limity

**R05** dokumentuje existujúce kategórie CRM, monitoring, matching a AI. Oficiálne stránky [backOFFICE](https://www.backoffice.sk/realitny-software/) a [stret.ai](https://stret.ai/cs) boli čiastočne znovu prečítané 22. 10. 2026; deklarujú príslušné CRM a AI možnosti. To nie je test ich spoľahlivosti, bezpečnosti ani obchodného efektu. Pri konkrétnej ukážke treba overiť aktuálnu verziu a prístupové oprávnenia.

**R06** poskytuje metodické rozlíšenie definovaného eventu a výsledku. Tu ho adaptujeme na záznam práce. [Register R05 a R06](../REGISTER-ZDROJOV.json) obsahuje lokátory a hash. Nedokazuje, že konkrétne kancelárie majú zlú databázu alebo že chcú tento produkt.

## Pôvodný návrh modelu pre diskusiu

| Pole | Príklad hodnoty | Čo znamená |
| --- | --- | --- |
| ID prípadu | DEMO-01 | Fiktívny neosobný identifikátor. |
| Situácia | Zvažuje predaj, termín nepotvrdený | Rozlíšiť povedané a neznáme. |
| Posledná udalosť | Modelový rozhovor sa skončil otázkou na ďalší postup | Udialo sa; nie budúci plán. |
| Stav práce | Potrebujeme doplniť zadanie | Má definovanú príčinu a podmienku zmeny. |
| Ďalší krok | Dohodnúť, ktoré podklady sú potrebné | Navrhnutý alebo potvrdený krok výslovne odlíšiť. |
| Zodpovednosť | Rola: maklér | Kto vie prípad posunúť. |
| Čas ďalšej kontroly | Zatiaľ nedohodnutý | Neznámy čas nezameniť za omeškanie. |
| Zdroj a neistota | Modelový príklad; bez reálneho klienta | Žiadny domyslený výsledok. |

Model sa musí prispôsobiť Martinovej praxi. Nie je predpísanou databázovou schémou ani implementovanou integráciou.

## Čo môže tvoriť prvý balík

1. Pracovná šablóna s definíciou polí a niekoľkými stavmi: zadanie neúplné, čaká sa na človeka, krok dohodnutý, ukončené.
2. Päť úplne fiktívnych prípadov vrátane duplicity, zmeneného zadania a záznamu bez termínu.
3. Martinova ukážka práce v povolenom demo prostredí alebo neutrálnom pracovnom liste.
4. Voliteľná AI ukážka: vlastná modelová poznámka → návrh zápisu → kontrola človekom. Chýbajúce údaje ostanú neznáme. AI nič neodosiela a nevymýšľa klientov.

Prvý článok môže existovať bez softvéru a bez integrácie. Predajná hodnota plateného materiálu závisí od dokončenej použiteľnej úlohy a odborného posúdenia.

## Ako overiť použiteľnosť

- Doplniť s Martinom tri konkrétne situácie, pri ktorých sa dnes stráca kontext. Nie je potrebné kopírovať žiadnu reálnu databázu.
- Traja používatelia spracujú rovnakých päť fiktívnych prípadov. Sledovať nesprávny stav, domyslený fakt, stratený krok a chybne spojenú duplicitu. Uviesť absolútne počty aj menovateľ.
- Po odstupe iný používateľ nadviaže bez ústneho vysvetlenia. Zistiť, či vie nájsť poslednú udalosť a dohodnutý krok.
- Pri AI variante porovnať modelovú poznámku s každým vyplneným poľom; bez zdroja sa položka označí na kontrolu alebo ostane prázdna.
- Ak sa má tvrdiť úspora času, vopred definovať rovnakú úlohu a kvalitu výstupu, zmerať východiskový postup a uviesť aj opravy. Samotné rýchle generovanie textu nie je ušetrený čas.

V tomto balíku nie je nový používateľský test, demo nástroj ani CRM integrácia. Nespája sa s ním sľub reaktivácie databázy, získaných obchodov alebo percentuálnej úspory.
