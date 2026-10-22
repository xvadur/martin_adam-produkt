# Martin — výskumný základ pre značku, web a odbornú tvorbu

**22. 10. 2026 / verzia 0.1.** Vykonaný research a pracovné návrhy. Nový web sa zatiaľ nestavia. Tento balík rozvíja Martinovu prvú realizáciu v rámci [tézy XVADURu](README.md); nemení repozitár na hotovú platformu.

## Čo z výskumu vychádza

Martinov dnešný web má hodnotu: konkrétny človek, jeho vlastné fotografie, pracovná história, spôsob komunikácie, služby a referencie. Jeho konkrétne články a prípady poskytujú lepší základ novej osobnej značky než všeobecná definícia online asistenta. Cieľom je sprístupniť jeho odbornosť kultivovanejšie a pripraviť priestor pre vlastnú tvorbu a produkty.

Prečítaná bola celá konverzácia **Nájdi nový projekt** a aktuálne usmernenia. [Výber pracovného kontextu](docs/KONTEXT-A-ROZHODNUTIA.md) zachováva rozhodnutia potrebné pre projekt; neexportuje súkromný rozhovor.

## Kde sú použiteľné podklady

| Podklad | Čo sa z neho dá urobiť |
| --- | --- |
| [Reverse engineering webu](research/web/2026-10-22/README.md) | Pochopiť obsah, kompozíciu, navigáciu, mobil a technické stopy; odlíšiť zachovanie od zlepšení. |
| [Obsah a ponuka](research/web/2026-10-22/OBSAH-A-PONUKA.md) + [inventár JSON](research/web/2026-10-22/CONTENT-INVENTORY.json) | Pripraviť rozhovor nad konkrétnymi službami, článkami, dôkazmi, URL a tvrdeniami. |
| [14 snímok pôvodného webu](research/web/2026-10-22/SCREENSHOTS.md) + [provenance](research/web/2026-10-22/provenance.json) | Vrátiť sa k tomu, čo sa skutočne zobrazilo, a overiť identitu súborov. |
| [Pracovný základ značky](brand/README.md) | Uzavrieť profil, publikum, prínos, hlas, ponuku a dôkazy pred finálnym brand bookom. |
| [Vizuálny brief](brand/VIZUALNY-BRIEF.md) | Zachovať autentický materiál, zvoliť kritériá nového vizuálu a pripraviť vhodné fotografie. |
| [Informačná architektúra a migrácia](docs/ZADANIE-NOVEHO-WEBU.md) | Rozhodnúť o úlohách webu, obsahových typoch a osude existujúcich URL. |
| [Výber realitných výskumov](research/reality/INDEX.md) + [register zdrojov](research/reality/REGISTER-ZDROJOV.json) | Písať a produktovo skúmať nad dohľadateľnými dátami s priznaným zrnom a limitmi. |

## Rozsah a konkrétne zistenia

- **Web:** sitemap má 34 URL — 17 stránok, 14 článkov a 3 taxonomické archívy. Navyše bol skontrolovaný odkaz na školenie: spolu 35 verejných ciest, nie tvrdenie o úplnom počte URL celej inštalácie.
- **Prerušená cesta:** pôvodná URL školenia backOFFICE je stále v pätičke, ale dnes vracia **410 Gone** a zobrazuje neexistujúcu stránku. Dnešnú ponuku musí potvrdiť Martin.
- **Odborný materiál:** konkrétny prípad MARKETING POST, kritériá databázy, kontext merania telefonovania a skúsenosť s testovaním backOFFICE/eAML sú vhodné prvé témy rozhovoru.
- **Obchod:** verejné WooCommerce cesty existujú; overené sú len prázdne či prihlasovacie stavy. Neznamená to dostupný produkt, funkčnú platbu alebo doručenie PDF.
- **Realitné dáta:** 750 registry pozorovaní a 4 776 automatických copy kandidátov sú overené historické exporty s odlišným zrnom a šumom. Nepotvrdzujú výkon trhu ani dopyt po produkte. GEO queue so 739 `not_checked` sa nepoužíva ako vykonané meranie.

## Štyri vybrané redakčné a produktové briefy

1. [Sľub a dôkaz na realitnom webe](research/reality/briefy/01-slub-a-dokaz.md).
2. [Prvý rozhovor so samopredajcom](research/reality/briefy/02-prvy-rozhovor.md).
3. [Databáza, z ktorej viem pokračovať](research/reality/briefy/03-databaza-v-praci.md).
4. [Web ako cesta ku konkrétnemu ďalšiemu kroku](research/reality/briefy/04-web-ako-cesta.md).

Každý brief prepája otázku, zdrojové východisko, Martinov potrebný vstup, výsledok pre čitateľa/používateľa a ďalšie overenie. Článok, podcast a pracovný list sa počítajú ako súvisiace formáty jednej témy. Nie sú hotovým ani cenovo prijatým katalógom.

## Čo nám ešte chýba

Skutočné Martinovo PDF; doterajšie brandové materiály; jeho rozhodnutie o prioritnej ponuke a pomenovaní roly; potvrdená pracovná chronológia; oprávnené case podklady a originály fotografií. Informácie o približne 12 stranách a pracovnej cene 15 € pochádzajú od Adama, nie z kontroly produktu.

Najbližší výskumný krok je vecný rozhovor s Martinom nad už existujúcim prípadom, PDF a ponukou. Konkrétny nový vizuál sa skúša až v ďalšej fáze; finálny rulebook a tokeny sa odvodia z prijatej ukážky, aby pravidlá zodpovedali skutočne použiteľnému výsledku.

## Overenie tohto balíka

JSON súbory, odkazy medzi lokálnymi dokumentmi a JPEG hlavičky/rozmery sú strojovo kontrolovateľné. Zdrojový register navyše obsahuje čisto čítací `research/reality/overit-zdroje.py`, ktorý v Adamovom workspace opakuje kontrolu hashov a agregácií bez výpisu osobných údajov.

Research nemení onlineasistent.sk, účty, ceny, platby alebo reklamy. Obsahuje pôvodné syntézy, agregácie a referenčné snímky; celé kontaktné databázy, cudzí copy corpus a súkromné stratégie ďalších klientov sa do repozitára nepreberajú.
