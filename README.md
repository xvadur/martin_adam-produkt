# XVADUR

## Martin — tri návrhy webu, 23. 10. 2026

Adam vybral tri postupne odvážnejšie titulné stránky s pôvodným obsahom onlineasistent.sk. Zostava na [barczi.xvadur.com](https://barczi.xvadur.com/) má rozcestník, tri nové verzie a zachovaný doterajší draft:

- [V1 — Osobný](https://barczi.xvadur.com/v1/): Minimalist Hero, skutočný portrét, pokojné teal/mint spracovanie.
- [V2 — Interaktívny](https://barczi.xvadur.com/v2/): Orrin kompozícia a vlastné animované vysvetlenia šiestich služieb.
- [V3 — Výrazný](https://barczi.xvadur.com/v3/): Sillage hero a rytmus, Onda proces, vrstvené referencie.
- [Východiskový draft](https://barczi.xvadur.com/draft/): nezmenená implementácia z commitu `29e7efc` na porovnanie.

Ide o kompletné porovnávacie návrhy homepage; odkazy na pôvodné podstránky zostávajú na onlineasistent.sk. Formuláre pripravujú email, nič samy neodosielajú. Finálne Martinovo prijatie vizuálu týmto nevzniká.

Zdroj: [showcase/](showcase/). [Výber sekcií a provenance](design/variants-2026-10-23/MAPA-SEKCII.md), [zadanie](design/variants-2026-10-23/BRIEF.md), [overené nasadenie](design/variants-2026-10-23/NASADENIE.md).

Lokálne spustenie: `python3 -m http.server 4397 --bind 127.0.0.1 --directory showcase`. Nasadenie používa vlastnú konfiguráciu `wrangler.showcase.jsonc` a existujúci preview Worker `barczi-xvadur-draft`; nemení hlavný xvadur.com ani Martinov WordPress. Publikačný balík vylučuje generátory a pracovné podklady cez `.assetsignore`.

**Spoločná infraštruktúra pre osobnú prácu, autorskú tvorbu a digitálne podnikanie klientov.**

Tento repozitár zachytáva základný zámer XVADURu a jeho prvú klientsku realizáciu: Martina Barcziho. Vznikol z rozhovoru Adama a Codexu 22. októbra 2026. Názov repozitára `martin_adam-produkt` zostáva zachovaný; projekt tu opisujeme ako súčasť XVADURu.

**Stav: koncepčný základ.** README opisuje cieľový systém a postup jeho vytvorenia. Neznamená, že sú už implementované spoločné moduly, nasadený Martinov nový web, zapojené platby alebo spustené kampane. Konkrétna ponuka a publikačné rozhodnutia sa určujú s Martinom.

### Výskumný základ pre Martina — 22. 10. 2026

V repozitári je doplnený [research balík pre Martinovu značku, web a odbornú tvorbu](RESEARCH.md): živý rozbor pôvodného onlineasistent.sk, inventár obsahu, 14 referenčných snímok, výber existujúcich realitných výskumov a pracovné briefy. [Základ značky](brand/README.md) oddeľuje doložené východiská od návrhov a otvorených rozhodnutí.

**Aktuálne: research a lokálny animovaný prototyp homepage.** [Živý návrh podľa Yanis Landing Page Beautifier](design/beautifier/README.md) zachováva pôvodné texty a reálne fotografie. Obsahuje scrollové scény, mobilný variant a dokumentovaný vizuálny systém. Ide o návrh na posúdenie; pôvodný WordPress sa nemenil. Platby ani kampaň nie sú implementované. [Rozsah a overenie prototypu](design/beautifier/QA.md).

## Grand thesis

XVADUR je Adamom vedený pracovný a podnikateľský systém, ktorý premieňa skúsenosti, rozhovory, výskum a rozhodnutia na autorské diela, produkty a fungujúce služby. Adam určuje smer a prináša úsudok. Spoločná pamäť, nástroje a agenti zabezpečujú, aby sa vykonaná práca dala ďalej používať pre Adama, jeho publikum aj klientov.

Základný pracovný okruh:

```text
skúsenosť a zdroje
        ↓
otázka → porozumenie → rozhodnutie
        ↓
výstup → uvedenie → používanie
        ↓
spätná väzba → nové poznanie a lepší spoločný postup
```

Ten istý princíp môže obslúžiť Adamov článok, Martinov produkt, prezentáciu makléra, klientsky podcast aj samostatný výskum. Jednotlivé oblasti majú vlastný účel a obsah. Spoločné sú výrobné prostriedky, kontinuita a spôsob vykonávania práce.

Hodnota sa má kumulovať: dokončená realizácia zlepší schopnosť systému obslúžiť ďalšieho človeka. Nový klient sa pridáva do existujúceho spôsobu práce, namiesto nového vymýšľania celého technického a organizačného základu.

## Čo je celý súbor XVADURu

XVADUR má vedieť pripraviť, prepojiť a priebežne obsluhovať celý digitálny celok jedného človeka alebo firmy.

| Schopnosť | Konkrétne výstupy a úlohy |
| --- | --- |
| Identita a značka | Odbornosť, publikum, ponuka, príbeh, hlas, fotografie, typografia, farby a pravidlá prezentácie. |
| Web a predajné plochy | Osobná prezentácia, služby, obchod, produktové stránky, články, podcast, kontakt a rezervácia. |
| Obchod a zákazník | Platba, objednávka, doručenie produktu, potvrdenie, zákaznícka evidencia a nadväzujúca komunikácia. |
| Obsahové štúdio | Články, newslettery, podcasty, krátke videá, infografiky, animácie, náhľady a reklamné materiály. |
| Distribúcia | Vyhľadateľnosť, e-mail, sociálne siete, publikovanie a reklamné kampane spojené s konkrétnou ponukou. |
| Meranie a prevádzka | Zdroje návštev, dopyty, objednávky, nákupy, náklady kampaní, technické chyby a otázky zákazníkov. |
| Obsluha agentmi | Príprava výstupov, aktualizácie, kontroly, reporty a pokračovanie práce cez rozhovor. |

Nejde iba o dostupnosť jednotlivých funkcií. Ich obsah a stav musia zostať prepojené. Produkt, jeho stránka, ukážka, video, reklama a výsledky kampane vychádzajú z jedného zadania.

## Ako do seba zapadajú jednotlivé časti

| Časť | Zodpovednosť v cieľovom systéme |
| --- | --- |
| Korpus | Zachytáva pôvodné písanie, rozhovory a zdroje; umožňuje dohľadať pôvod a vývoj myšlienky. |
| Core a pracovná pamäť | Udržiava platné poznanie, identitu, rozhodnutia, ciele, projektový kontext a stav práce. |
| Lab | Pracovná plocha na otvorenie projektu, zdrojov, náhľadov, produktov, textov a výsledkov agentov. |
| Harness a agenti | Vykonávajú pomenované činnosti nad správnym kontextom, ukladajú výsledky, overujú ich a pripravujú pokračovanie. |
| XVADUR Stack a spoločné moduly | Poskytujú opakovane použiteľný vizuál a funkcie webu, obchodu, publikovania, rezervácií, obsahu, automatizácie a merania. |
| Verejný XVADUR | Predstavuje Adama, zverejnené diela, prípady, produkty a ponuku; pomáha ďalším ľuďom pochopiť jeho prácu. |
| Klientske prostredia | Používajú spoločnú infraštruktúru s vlastným obsahom, právami, účtami, zákazníkmi a cieľmi. |

Ide o rozdelenie zodpovedností. Nevyžaduje sedem nových aplikácií ani jednu obrovskú databázu so všetkými údajmi. Hriech, Netopier a ďalšie autorské alebo výskumné línie môžu používať spoločné schopnosti a zachovať si vlastný účel.

## Čo znamená klient / tenant

Tenant je konkrétne klientovo pracovné a obchodné prostredie nad spoločným základom. Má vlastnú identitu, vzhľad, ponuku, obsah, produkty, pripojenia a údaje.

Spoločné zostávajú napríklad komponenty, výrobné postupy, obchodné moduly, obsahové nástroje a meranie. Nová realizácia má hlavne doplniť klientove podklady a zvoliť vhodné schopnosti.

Prvý model klientskych podkladov má pokryť:

- človeka alebo firmu, jazyk a domény;
- publikum, ciele, ponuku a dôkazy odbornosti;
- brand pack, fotografie a ďalšie materiály;
- služby, produkty, články a podcast;
- zapnuté moduly a vlastníkov účtov;
- platné rozhodnutia, rozpracované výstupy a ďalší krok;
- stav každej schopnosti: navrhnuté, pripravené, pripojené, overené, publikované.

Tenant nemusí znamenať jeden centrálny server pre všetkých. Spoločný model a postup môžu vytvárať samostatné weby a nasadenia, ktoré možno prevádzkovať alebo odovzdať klientovi.

Adam je prvým používateľom pracovného systému a vlastnú prezentáciu môže obsluhovať rovnakými výrobnými schopnosťami. Jeho súkromná pamäť tým nie je sprístupnená klientom.

## Brand pack ako vstup pre celú výrobu

Brand pack má niesť vizuál aj význam: kto človek je, čo vie, komu pomáha, ako rozpráva, čo ponúka a čím to dokladá.

Má obsahovať najmä:

- profil, odbornosť, témy a relevantný príbeh;
- publikum, potreby zákazníkov a konkrétnu ponuku;
- pravidlá hlasu, slovníka a práce s tvrdeniami;
- fotografie, značkové materiály, typografiu a farby;
- kompozície pre web a pravidlá pre video, grafiku a reklamné výstupy;
- referencie, prípady a ďalšie použiteľné dôkazy.

Z rovnakých podkladov má vychádzať titulná stránka, produkt, video, článok aj reklama. Klientova osobitosť zostáva zachovaná pri opakovanom používaní technického základu.

## Jedna identita produktu naprieč systémom

Produkt má vlastný záznam, ktorý prepája:

- zákazníka, problém a očakávaný úžitok;
- obsah, verziu, autora a podklady;
- schválené tvrdenia, ukážky a cenu;
- predajnú stránku, platbu a súbor na doručenie;
- súvisiace články, videá, e-maily a kampane;
- objednávky, doručenia, otázky a výsledky.

Úprava produktu má ukázať, ktoré súvisiace výstupy potrebujú aktualizáciu. Pracovná a publikovaná verzia zostávajú rozlíšené. Spätná väzba sa viaže na konkrétny obsah, ktorý zákazník videl alebo dostal.

## Prvá realizácia: Martin Barczi

Martin verejne pôsobí ako [Online asistent](https://www.onlineasistent.sk/). Ponúka prácu s klientmi a databázami, telefonické oslovovanie a [školenia backOFFICE](https://www.onlineasistent.sk/skolenie-na-backoffice/). Tieto skúsenosti poskytujú odborný materiál pre osobnú značku, vzdelávanie, konzultácie a digitálne produkty.

Podľa aktuálneho zadania už pripravil PDF o marketingu pre realitné kancelárie. Jeho obsah zatiaľ v tomto repozitári nie je. Prvým zámerom je jeho vlastná prezentácia a predaj produktu, s pripraveným priestorom pre ďalší obsah a služby.

Zamýšľaná adresa prvého náhľadu: `barczi.xvadur.com`. Je to zámer z rozhovoru, nie potvrdenie existujúceho nasadenia.

### Zamýšľaná obsluha

> Pridaj Martina. Použi jeho brand pack. Nahraj tento produkt. Priprav uvedenie.

Z takéhoto vstupu sa má pripraviť súvislá zostava:

1. **Prezentácia:** Martin, jeho odbornosť, služby, dôkazy a kontakt.
2. **Obchod:** produktová stránka PDF, ukážka, úžitok, schválená cena a nákupná cesta.
3. **Doručenie:** potvrdenie platby, objednávka, bezpečné sprístupnenie príslušnej verzie súboru a nadväzujúci e-mail.
4. **Vysvetľujúce video:** infografické alebo iné vhodné video vychádzajúce z produktu a brand packu.
5. **Kampaň:** reklamné varianty, príslušné materiály, cieľová stránka, rozpočet a meranie.
6. **Obsah:** úvodný článok, príspevky a e-mail, ktoré predstavia problém a Martinovu odbornosť.
7. **Pracovný prehľad:** aktuálne verzie, pripravenosť, výsledky, otázky a ďalšie úpravy.

Pri pripravených podkladoch a moduloch je cieľom ukázať ucelený náhľad už počas stretnutia a umožniť rýchle uvedenie pripravených častí. Zapojenie predaja závisí aj od obsahu, účtov a pripojení klienta. Pripravená, odoslaná a skutočne bežiaca reklama sú odlišné stavy.

### Priebežná tvorba a rozvoj

Martin a Adam môžu písať články a pripravovať spoločný podcast. Konkrétna situácia z praxe sa môže spracovať do rozhovoru, článku, krátkych videí, newslettera a praktického materiálu. Každý výstup má vlastný účel a stav; jeden rozhovor sa automaticky nepočíta ako niekoľko nových platených produktov.

Produktové oblasti na preskúmanie:

- telefonovanie, námietky a kvalifikácia dopytu;
- databázy, follow-up a reaktivácia kontaktov;
- školenia a pracovné postupy realitných kancelárií;
- osobná značka, prezentácia služieb a dôkazy;
- praktické používanie AI pri každodennej práci;
- obsah, distribúcia, meranie a automatizácia.

Sú to možnosti odvodené zo zadania a verejnej ponuky, nie hotový katalóg ani potvrdenie trhového dopytu. Produkt potrebuje konkrétny použiteľný výsledok a odborné posúdenie.

## Ako systém obsluhujú Adam a agenti

Adam používa rozhovor na odovzdanie zámeru a Lab na posúdenie konkrétnych výsledkov. Agent číta a aktualizuje tie isté pracovné záznamy. Po vykonanej práci netreba druhýkrát ručne rekonštruovať, čo sa stalo.

Príklady požadovaných operácií:

- otvor klienta a obnov platný kontext;
- priprav náhľad z vybraných podkladov a kompozície;
- vytvor alebo aktualizuj produkt;
- priprav obsahové a reklamné varianty;
- skontroluj funkčnú cestu a pripravenosť;
- ukáž výsledky a navrhni ďalší krok;
- ulož stav a pokračuj v inom rozhovore.

Každá operácia má mať známy vstup, zodpovedný projekt, výstup, spôsob overenia a rozsah oprávnenia. Rutinnú prácu môže agent vykonávať v dohodnutom rozsahu. Obsahové prijatie, obchodné rozhodnutia a publikovanie majú jasného vlastníka.

Vlastnený harness znamená vlastníctvo pracovného modelu, kontextu, pravidiel, postupov, histórie a kontroly výsledku. Výmena konkrétneho modelu nesmie znamenať stratu klienta, rozhodnutia alebo rozrobeného výstupu.

## Osobné, klientske a verejné použitie

Systém má spoločnú architektúru a oddelené údaje a prístupy. Klient vidí svoje materiály a výsledky. Verejný web čerpá z vybraných publikovaných výstupov. Do spoločného základu sa vracajú použiteľné postupy a moduly; klientove podklady zostávajú jeho podkladmi.

Osobná poznámka nemusí byť úloha ani produkt. Výskum môže mať vlastný autorský účel. Korpus uchová stopu, pracovná pamäť význam a rozhodnutia a Lab umožní pokračovanie.

Tri navzájom prepojené okruhy:

- **Osobný a autorský:** skúsenosť → písanie → poznanie → dielo → nové otázky.
- **Klientsky:** potreba človeka → návrh → zavedený systém → používanie → zlepšenie.
- **Produktový:** opakované riešenie → zachovaný postup alebo modul → produkt → ďalšie použitie.

## Ako XVADUR získava a obsluhuje ďalšiu prácu

Z vykonanej práce môže vzniknúť verejný prípad, článok alebo nástroj. Ďalší človek pochopí schopnosti XVADURu a príde s otázkou. Dopyt dostane kontext, počas stretnutia možno ukázať relevantný výsledok a pripraviť konkrétny návrh. Dodávka následne rozšíri spoločný základ.

Verejná prezentácia tak čerpá zo skutočnej práce a priebežne sa aktualizuje. Vytvorený obsah, produkty, služby a výskum sa môžu vzájomne podporovať bez toho, aby sa každá osobná alebo autorská činnosť musela podriadiť predaju.

## Vznik prvého základu

Nový repozitár má byť čistým základom spoločného systému. Existujúce projekty slúžia ako zdroje overených dielov a skúseností; ich plošná migrácia ani kopírovanie nie sú súčasťou tohto zápisu.

Postup vytvárania:

1. Ustáliť klientsky podklad, produktový záznam a stavy práce.
2. Vybrať existujúce použiteľné diely a vhodné kompozície; zachovať ich pôvod a licencie.
3. Prepojiť Lab, projektovú kontinuitu a prvý klientsky náhľad.
4. S Martinovým skutočným PDF a brandovými podkladmi dokončiť prezentáciu a nákup s doručením.
5. Pridať príslušný obsah, video, kampaň a meranie ako súvisiace časti jedného uvedenia.
6. Overiť bežné používanie a pokračovanie práce v novom rozhovore.
7. Použiť ten istý základ pri ďalšej realizácii a riadene prenášať spoločné zlepšenia.

Prvý ucelený dôkaz: Adam odovzdá zámer, vznikne náhľad a produkt, dohodnutá obchodná cesta skutočne funguje, stav je dohľadateľný v pracovnom prostredí a ďalší agent vie správne pokračovať. Druhá realizácia má potvrdiť opakovateľnosť.

## Dlhodobý smer

XVADUR má vyrásť na malú autorskú a produktovú firmu s klientskymi partnerstvami, vlastným výskumom a portfóliom nástrojov a služieb. Pracovným horizontom je päť rokov. Konkrétne počty klientov, produktov, členov tímu alebo tržby nie sú týmto textom stanovené.

Každá dokončená realizácia má pridať schopnosť. Každý výskum má rozšíriť dohľadateľné poznanie. Každá oprava má zlepšiť spoločný postup. Rast má rozširovať to, čo systém dokáže, pri zachovaní prehľadu, osobitosti jednotlivých ľudí a použiteľnosti pre Adama.

**Cieľom je vlastnená infraštruktúra Adamovej schopnosti myslieť, tvoriť a konať — použiteľná pre jeho život, vlastné dielo aj podnikanie s ďalšími ľuďmi. Martin je prvá konkrétna realizácia, na ktorej sa má celý tento okruh spojiť.**
