# Podklady pre budúci web — informačná architektúra a migrácia

22. 10. 2026. **Návrh vychádzajúci z researchu; žiadna stavba ani nasadenie.** Zdrojové východisko: [kontext](KONTEXT-A-ROZHODNUTIA.md), [živý audit](../research/web/2026-10-22/README.md), [obsahový inventár](../research/web/2026-10-22/CONTENT-INVENTORY.json) a [značka](../brand/README.md).

## Úlohy webu

1. Človek z odporúčania rýchlo spozná Martina, overí si jeho zameranie a spojí sa s ním.
2. Nový návštevník pochopí konkrétnu odbornú prácu, uvidí jej dôkazy a nájde vhodný vstup.
3. Čitateľ nájde článok alebo neskôr podcast s autorom, dátumom, zdrojmi a súvisiacim materiálom.
4. Záujemca o produkt neskôr zistí, čo dostane, komu je určený a ako sa používa. Skutočná objednávka a doručenie sa overia samostatne.

Tieto úlohy vychádzajú zo zadania, nie z návštevnostných dát. Úspech predstavovacieho webu nemusí znamenať maximalizáciu počtu formulárov.

## Pracovný obsahový model

| Entita | Čo má obsahovať | Zdroj / stav |
| --- | --- | --- |
| Osoba | Meno, profilová veta, pracovná história, fotografie, kontakt. | Pôvodný web + Martinovo potvrdenie. |
| Služba | Pre koho, problém, vstup, čo vykoná, čo odovzdá, hranice a ďalší krok. | Existujúce služby; aktuálnosť treba potvrdiť. |
| Prípad / referencia | Kontext, obdobie, Martinova rola, vykonané kroky, výsledok, atribúcia a použiteľné podklady. | Existujúce pripísané referencie; case materiály zatiaľ chýbajú. |
| Článok | Autor/spoluautori, publikovanie a revízia, zdroje, hlavná otázka, text, súvisiaci obsah. | Existujúci blog + kurátorské briefy. |
| Epizóda | Otázka, hostia/autori, audio/video, prepis, kapitoly, zdroje, odvodené výstupy. | Zámer; žiadna epizóda týmto nevznikla. |
| Produkt | Konkrétny úžitok, obsah/verzia, ukážka, autorstvo, súbor, cena a stav predaja/doručenia. | PDF nie je odovzdané; nový katalóg je zámer. |

Stav obsahu evidovať samostatne od technického stavu. „Navrhnuté“ nie je „publikované“, „pripravený súbor“ nie je „doručený zákazníkovi“. Jeden rozhovor rozdelený do článku, podcastu a klipov nie sú automaticky tri nové produkty.

## Pracovná navigácia na ďalšie posúdenie

Martin / domov → spolupráca a služby → články a zdroje → produkty → o Martinovi → kontakt. Podcast môže po vzniku skutočných epizód tvoriť vlastný register alebo typ obsahu v zdrojoch. Ide o hypotézu informačnej architektúry, nie prijatú navigáciu.

Domov má odpovedať na kto / komu / s čím / ako to viem doložiť / ďalší krok. Výber služieb a najbližšieho obsahu určí aktuálna ponuka, nie potreba vyplniť rovnaký počet kariet.

## Migračná mapa

| Súčasná rodina URL | Odporúčaný postup pred migráciou | Čomu sa vyhnúť |
| --- | --- | --- |
| `/` | Zachovať existujúcu osobnú orientáciu a prepojiť ju s prijatým novým profilom. | Vymeniť obsah bez inventára a bez dôkazov. |
| `/moj-pribeh/` | Uchovať relevantné fakty a Martinov vlastný rozsah osobného príbehu; pri presune navrhnúť konkrétne presmerovanie. | Automaticky rozširovať súkromné okolnosti z chatov. |
| `/moje-sluzby/` a šesť detailov | Po potvrdení ponuky každú URL zachovať alebo individuálne priradiť k presnému nástupcovi. | Všetko presmerovať na domov alebo potichu zrušiť širšie služby. |
| `/aktivny-a-pasivny-telemarketing/` | Obsahovo prepojiť s príbuznou službou a rozhodnúť o samostatnosti podľa reálnej úlohy. | Nechať duplicitné nejasné vstupy bez vysvetlenia rozdielu. |
| `/skolenie-na-backoffice/` | Zdokumentované 410; zistiť, či je správne ukončená, presunutá alebo určená na obnovu. | Obnoviť/presmerovať ju automaticky bez potvrdenia ponuky. |
| `/blog/` + 14 článkov | Zachovať URL, autorstvo a skutočné dátumy; určiť evergreen revíziu, archiváciu alebo konkrétneho nástupcu každého článku. | Zmeniť všetky dátumy na deň redizajnu alebo preniesť starý právny výklad bez kontroly. |
| Kategória a dva podobné tagy | Skontrolovať skutočnú užitočnosť taxonómií a stav v indexácii; navrhnúť zlúčenie len s mapou. | Generovať prázdne/duplicitné archívy. |
| `/kontakt/` | Zachovať krátku priamu cestu; pripraviť odoslanie, chybu, potvrdenie a doručenie ako oddelené testovateľné stavy. | Označiť formulár ako funkčný iba podľa screenshotu. |
| `/obchod/`, `/kosik/`, `/kontrola-objednavky/`, `/moj-ucet/` | Pred akoukoľvek migráciou od vlastníka zistiť, či existujú objednávky, účty a integračné závislosti; teraz iba verejné prázdne stavy. | Zameniť WooCommerce stopy za dôkaz predaja alebo bezhlavo kopírovať systémové URL. |
| Obrázky, PDF a mediálne URL | Pôvod, licencia, vlastník, originál, alt, výrez, použitie v OG a prípadné presmerovanie. | Považovať existujúcu verejnú URL za dostatočné právo k novému používaniu. |

Verejné HTTP pozorovanie nemá prístup k objednávkam alebo analytike. Tieto údaje sa pri dnešnom researchi nevyžadovali ani nemenili.

## Podklady, ktoré predídeme improvizácii

- Martinom skontrolovaný profil a poradie aktuálnej ponuky.
- Zoznam prijatých tvrdení s dátumom, zdrojom a hranicou sľubu.
- Pôvodné PDF a jeho skutočná ukážka; výber prvého samostatného problému na produkt.
- Doterajšie brandové podklady, originály fotografií a práva k nim.
- Konkrétna URL mapa s rozhodnutím zachovať / upraviť / presunúť / ukončiť.
- Neskorší spoločný vizuálny jazyk pre stránku, článok a produktový materiál.

Výber technického frameworku a CMS sa rozhodne podľa publikovania, obsluhy a prevádzky po uzavretí týchto potrieb. Samotné odstránenie WordPressu nie je dôkaz modernizácie; nová realizácia musí zlepšiť obsah, použiteľnosť, vizuál a vlastníctvo výsledku.
