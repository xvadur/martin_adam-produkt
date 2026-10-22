# Realitné podklady pre Martina a Adama

Kurácia: **22. 10. 2026**. Stav: **výskumný základ a pracovné briefy**. Nie je to hotový obsah, potvrdený katalóg produktov ani rozhodnutie stavať nový web.

Vybrali sme šesť zdrojových skupín, ktoré sú blízko Martinovej práci s telefonovaním, databázami, školením a praktickým používaním nástrojov. Cieľom je pripraviť originálne články, rozhovory a malé použiteľné materiály. Cena, dopyt a výsledky produktov zatiaľ nie sú overené.

## Čo bolo naozaj skontrolované

| ID | Podklad a prínos | Stav dôkazu | Hlavná hranica |
| --- | --- | --- | --- |
| R01 | Discovery export: rámec pre výber malej vzorky realitných webov. | Lokálne znovu spočítané: 750 pozorovaní zo štyroch registrov. | Profilové pozorovania nie sú počet unikátnych kancelárií ani census. |
| R02 | Plytký copy export: kandidáti na ručný audit sľubov, procesu a dôkazov. | Lokálne znovu spočítané: 4 776 kandidátov, 358 website ID, 1 888 page ID, 1 882 URL, 3 272 rôznych úryvkov. | Kandidát nie je potvrdený claim; najčastejší identický úryvok je cookie text, 432×. |
| R03 | Whole-web crawler brief: ako uchovať URL, čas, blok, kontext a screenshot. | Dokument bol prečítaný; čísla historického behu sú reportované. | Raw snapshoty a owning graph sa v preverovaných zdrojových koreňoch nenašli; nový audit sa musí urobiť samostatne. |
| R04 | Historický query intent: situácie predávajúcich ako otázky do rozhovoru. | Report z júla; kompletný primárny query log neoverený. | Žiadne objemy vyhľadávania ani platobná ochota. |
| R05 | Existujúce CRM, monitoring, matching a AI nástroje: kontext pre tréning pracovného toku. | Augustový report + 20-riadková matica; čiastočne prečítané oficiálne stránky backOFFICE a stret.ai 22. 10. | Vyjadrenia dodávateľov, bez trialu. Historické ceny a klientské obchodné stratégie neprenášame. |
| R06 | Kontrakt merania: rozlíšenie kliknutia, doručenia a skutočného výsledku. | Návrh prevádzkového modelu, bez live výsledkov. | Pripravená definícia eventu nedokazuje meranie ani vyššiu konverziu. |

Presné relatívne workspace lokátory, SHA-256, dátumy, zrno, dostupnosť raw a povolené závery sú v [registri zdrojov](REGISTER-ZDROJOV.json). Tieto lokátory sú provenance do Adamovho lokálneho workspace; nie sú prílohami verejného repozitára. SHA-256 identifikuje prečítanú verziu súboru, nepotvrdzuje správnosť jeho obsahu.

Pri R05 boli dnes čitateľné [backOFFICE](https://www.backoffice.sk/realitny-software/) a [stret.ai](https://stret.ai/cs). Potvrdzujú existenciu verejne deklarovaných kategórií CRM/skener/exporty a hlasové CRM/návrhy odpovedí. Ide o ponuku dodávateľov, bez nezávislého testu. Otvorenie [Hooslist](https://hooslist.tech/) v research nástroji neposkytlo text, preto sa jeho aktuálny stav neoznačuje ako potvrdený.

## Štyri konkrétne témy

1. [Sľub a dôkaz na realitnom webe](briefy/01-slub-a-dokaz.md): článok, rozbor v podcaste a pracovný list, ktorý premení neurčitý prísľub na krok a overiteľný dôkaz.
2. [Prvý rozhovor so samopredajcom](briefy/02-prvy-rozhovor.md): modelový rozhovor a kvalifikačný list. Martinova prax musí doplniť to, čo query research nevie ukázať.
3. [Databáza, z ktorej viem pokračovať](briefy/03-databaza-v-praci.md): originálny stavový model kontaktu, fiktívna ukážka a tréning zápisu či follow-upu.
4. [Web ako cesta ku konkrétnemu ďalšiemu kroku](briefy/04-web-ako-cesta.md): kontrola toho, čo má návštevník pochopiť a ako vieme potvrdiť dokončenie úlohy.

Odporúčaný výskumný začiatok je rozhovor s Martinom o prvom telefonáte a anonymnom príklade práce s databázou. Je to pracovný výber podľa blízkosti jeho súčasnej ponuke, nie dôkaz trhu. Pred výrobou plateného balíka má vzniknúť jedna pôvodná ukážka a malé používateľské overenie. Článok, podcast a pracovný list o rovnakom probléme tvoria súvisiace formáty jedného zadania.

## Čo sme zámerne nezaradili

- AI visibility queue má 739 položiek `not_checked`. Nedokazuje GEO výsledok.
- Staršie veľkosti datasetov miešajú person profily, brandy a registrácie; ich chýbajúce mastery nevytvárajú nový menovateľ.
- Súkromné jazykové a BOSEN strategické návrhy patria inému klientovi. Do tohto balíka sa nekopírujú jeho copy, ceny, positioning ani kampane.
- Senior bývanie, zdravotné a makrofinančné témy sú mimo prvého úzkeho rámca. Nepotrebujeme ich na dôkaz Martinovej súčasnej operatívnej odbornosti.
- Celé kontaktné databázy, cudzie marketingové texty a screenshot knižnice sa neprenášajú. Použiteľnou súčasťou repo je táto nová syntéza, agregácie a pôvodné briefy.

## Pravidlá práce s tvrdeniami

**Pozorované** znamená dostupný zdroj a vykonanú kontrolu. **Reportované** znamená tvrdenie historického reportu bez dnešnej kontroly owning raw. **Hypotéza** znamená nové vysvetlenie, návrh obsahu alebo produktu.

Výskyt vety nie je služba, dopyt, kvalita firmy ani obchodný výsledok. Neprítomnosť vety v pozorovanej vrstve nie je neprítomnosť služby. Web bez zberného formulára môže dobre slúžiť odporúčaniam a predstaveniu človeka. Redizajn má vychádzať z overenej úlohy Martinovho webu, nie z vopred určeného cieľa zbierať čo najviac kontaktov.

Martinove roky praxe, konkrétne výsledky klientov a 12-stranové AI PDF s pracovnou cenou 15 € sú vstup od Adama. PDF tu nebolo prečítané a cena ani obsah nie sú posúdené. Nesmú sa zameniť s nezávisle overeným tvrdením ani s potvrdenou ponukou.

## Ako nadviazať

1. Vybrať jeden brief a s Martinom doplniť jeho vlastné situácie, formulácie, postup a oprávnené podklady.
2. Pri každom verejnom tvrdení doplniť stav, presný zdroj a dátum; pred aktuálnymi porovnaniami zopakovať malý zber.
3. Otestovať ukážku s pomenovanou vzorkou používateľov a zverejniť len skutočne pozorované výsledky s menovateľom.
4. Až potom rozhodnúť o článku, produkte, cene a uvedení.

Lokálne identitu prečítaných súborov a vybrané počty overí `python3 research/reality/overit-zdroje.py /cesta/k/xvadur_workspace`. Skript číta pôvodné zdroje, nevypisuje kontakty ani cudzie úryvky a nič nezapisuje. V samostatnom clone bez workspace bude zdroj explicitne označený ako nedostupný.
