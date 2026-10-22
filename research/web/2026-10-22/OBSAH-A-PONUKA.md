# Online asistent — obsah, ponuka a dôkazy

Stav k **22. 10. 2026**. Primárny zdroj: [onlineasistent.sk](https://www.onlineasistent.sk/). Toto je výskumný podklad pre Martinovu osobnú značku a budúci redesign. Nie je to schválený brand book, nový text webu ani potvrdenie novej ponuky. Web sa v tejto fáze nestavia.

## Metóda a hranice zistení

- Verejné stránky boli čítané cez webový nástroj a priamo cez HTTP GET. Pri rozdiele má pre stav URL prednosť živé HTTP overenie z 22. 10. 2026; výsledok vyhľadávača môže byť starší.
- [robots.txt](https://www.onlineasistent.sk/robots.txt) odkazuje na [sitemap_index.xml](https://www.onlineasistent.sk/sitemap_index.xml). Index obsahuje mapu stránok, článkov, kategórií a tagov. `wp-sitemap.xml` vracia ten istý Yoast index.
- Verejná mapa obsahovala **34 URL: 17 stránok, 14 článkov, 1 kategóriu a 2 tagy**. Navyše bol overený odkaz na školenie backOFFICE z pätičky, ktorý v mape chýba. Počet sa vzťahuje na tento index, nie na úplný počet všetkých súborov či všetkých URL WordPressu.
- Všetkých 14 článkov, základné prezentačné stránky, šesť hlavných služieb, dodatočná telemarketingová stránka a archívy sa podarilo načítať. Stav obchodných ciest je popísaný nižšie. Formuláre, prihlásenie, objednávka ani platba neboli odoslané.
- Texty sú dôkazom toho, čo o svojej práci uvádza Martinov web. Referencia alebo vlastný článok nie je nezávislé overenie výsledkov. Dátum `lastmod` v sitemape znamená údaj deklarovaný systémom; nemožno ho zamieňať za vznik skúsenosti či dátum publikácie.
- Fotografie a certifikáty sú evidované iba ako zdrojové URL. Verejná dostupnosť nepreukazuje právo na nové použitie. Medicínske detaily ani osobné kontaktné údaje sa do strojového inventára nepreberajú.

Strojový doplnok: [CONTENT-INVENTORY.json](./CONTENT-INVENTORY.json).

## Čo má starý web hodnotné

Základ tvorí **konkrétny človek s pracovnou históriou, zásadou nenátlakového predaja a skúsenosťami s dlhodobou starostlivosťou o klientov**. Sú tu existujúce služby, tri referencie, postup spolupráce a vlastné odborné články. To je použiteľný základ pre osobnú značku a človeka, ktorý prichádza na odporúčanie. Funkciu webu pri odporúčaniach uviedol Adam; prínos jednotlivých stránok nebol analyticky meraný.

Najsilnejší materiál je konkrétny: pracovná chronológia na stránke príbehu, prípad spolupráce s MARKETING POST, skúsenosť s backOFFICE/eAML v článku o testovaní, príklady zákazníckej komunikácie a praktické rozlišovanie medzi jedným hovorom a dlhodobým obchodným výsledkom. Tieto podklady majú väčšiu osobitosť než všeobecná definícia online asistenta na domovskej stránke. [Príbeh](https://www.onlineasistent.sk/moj-pribeh/), [prípad cold callingu](https://www.onlineasistent.sk/dlhodoby-cold-calling-moze-mat-efekt-aj-v-sucasnosti-neverite/), [testovanie v praxi](https://www.onlineasistent.sk/preco-je-uzivatelske-testovanie-softveru-a-aplikacii-dolezite/).

## Inventár prezentačných stránok a služieb

| Zdrojová URL | Funkcia a existujúci obsah | CTA / ďalší krok | Odporúčanie pre ďalšiu prácu |
| --- | --- | --- | --- |
| [Domov](https://www.onlineasistent.sk/) | Martin + Online asistent; 6 služieb; postup od dopytu po vykonanie; benefity; úryvok príbehu; 3 referencie; dopytový formulár. | Kontaktujte ma → kontakt; Viac o mne → príbeh; Zobraziť viac → príslušná služba; Odoslať správu → formulár. | Zachovať človeka, skutočné služby a dôkazy. Skrátiť všeobecnú definíciu služby; rozhodnúť jednu zrozumiteľnú hlavnú ponuku. |
| [Môj príbeh](https://www.onlineasistent.sk/moj-pribeh/) | Existujúce rozprávanie v prvej osobe: call centrum, chat v cestovnej kancelárii, IT od 2009, väčší dátový projekt v 2013, predaj a support od 2014, filozofia pozitívneho dojmu. | Kontakt → kontakt. | Pracovnú cestu použiť ako materiál na Martinovu autorizovanú chronológiu. Rozsah osobnej výpovede určí Martin; nedopisovať motívy ani nové životopisné tvrdenia. |
| [Moje služby](https://www.onlineasistent.sk/moje-sluzby/) | Rovnakých 6 hlavných služieb ako domov. | Zobraziť viac → detaily; Kontaktuje ma → kontakt. | Zistiť, ktoré služby sú dnes prioritné, vedľajšie a dostupné. Katalóg sa nemá automaticky preklopiť do novej hierarchie. |
| [Obchodný zástupca na prenájom](https://www.onlineasistent.sk/obchodny-zastupca-na-prenajom/) | Akvizícia a oslovovanie bez tlaku; odkaz na prax od 2014; flexibilita, úspora, individuálny prístup. | Kontakt → kontakt. | Silný kandidát hlavnej ponuky. Doplniť konkrétny vstup, výstup, pre koho sa nehodí, hranice zodpovednosti a spôsob reportu. |
| [Operátor pre online chat](https://www.onlineasistent.sk/operator-pre-online-chat/) | Najpodrobnejšie opísaná služba: nastavenie, obsluha, kvalifikácia dopytu, odovzdanie do klientových nástrojov, šablóny, reporting; publikum a FAQ; cena individuálne hodinovo/paušálne. | Prečítať článok → článok o zavedení chatu; Kontakt → kontakt. | Vzor obsahovej konkrétnosti pre ostatné služby. Časy reakcie, jazyky a dostupnosť treba potvrdiť, nie prezentovať ako univerzálnu garanciu. |
| [Vytvorenie databázy](https://www.onlineasistent.sk/vytvorenie-databazy/) | Manuálna práca s verejnými zdrojmi; databáza aj bez následnej akvizície; uvádza aj výskum/analýzu/vizualizácie. | Kontakt → kontakt. | Zachovať oddeliteľný výstup. Doplniť schému dát, kritériá výberu, zdroje, aktualizáciu a príklad anonymizovaného výstupu. Právne formulácie samostatne preveriť. |
| [Zákaznícka podpora](https://www.onlineasistent.sk/zakaznicka-podpora/) | Podpora existujúcich zákazníkov, doplnenie kapacity a času. Väčšina detailu je všeobecná. | Kontakt → kontakt. | Zistiť typy požiadaviek, používané kanály, eskaláciu, prevzatie agendy a praktický výsledok pre klienta. |
| [Vkladanie produktov na e-shop](https://www.onlineasistent.sk/vkladanie-produktov-na-eshop/) | Nahrávanie názvov, popisov, cien a obrázkov do e-shopu. | Kontakt → kontakt. | Potvrdiť systémy, rozsah úpravy podkladov, kontrolu kvality, jednotky ceny a kapacitu. |
| [Testovanie softvéru a aplikácií](https://www.onlineasistent.sk/testovanie-softveru-a-aplikacii/) | Používateľský pohľad na funkčnosť a použiteľnosť; správa so zisteniami a návrhmi. | Kontakt → kontakt. | Jasne vymedziť používateľské testovanie voči vývoju a technickému QA. Vyžiadať anonymizovanú ukážku reportu. |
| [Aktívny a pasívny telemarketing](https://www.onlineasistent.sk/aktivny-a-pasivny-telemarketing/) | Verejne dostupná ďalšia stránka z mapy, mimo hlavného menu; prekrýva akvizíciu a support; obsahuje tvrdenie o 78 % dlhodobých klientov. | Kontakt → kontakt. | Určiť, či má byť samostatná, zlúčená alebo presmerovaná. Neprenášať dve konkurenčné vysvetlenia tej istej služby bez zámeru. |
| [Certifikáty](https://www.onlineasistent.sk/certifikaty/) | Tri obrazové doklady a vysvetlenie prínosu vzdelávania: AI, akvizičné telefonovanie a zákaznícka podpora. | Globálna navigácia a kontakt v pätičke. | Zachovať doklady, doplniť presný názov, organizátora, dátum a overiteľný rozsah. Text o AI nie je sám osebe dôkaz špecializácie na vývoj AI. |
| [Blog](https://www.onlineasistent.sk/blog/) | 14 titulkov článkov; bez tematického členenia na hlavnej stránke. | Titulok → článok; Kontaktuje ma → kontakt. | Obsah nezahodiť. Vytvoriť editorské témy podľa problémov publika a doplniť súvisiace služby/prípady. |
| [Kontakt](https://www.onlineasistent.sk/kontakt/) | Verejné kontakty, fakturačné údaje a formulár; mená polí, firma, e-mail, telefón, predmet, správa, súhlas so spracovaním. | Telefón/e-mail; Odoslať správu. | Overiť správnosť a oprávnenie nového zverejnenia údajov. Opraviť duplicitné/nepresné popisky; doplniť, čo má dopyt obsahovať a čo bude nasledovať. Doručiteľnosť nebola skúšaná. |
| [Školenie backOFFICE](https://www.onlineasistent.sk/skolenie-na-backoffice/) | Odkaz stále existuje v pätičke. **Živé HTTP 410 Gone**, v mape nie je. | V tomto overení žiadna dostupná ponuková stránka. | Toto je stopa bývalého obsahu a otvorená otázka pre Martina. Neprezentovať ako potvrdenú aktívnu ponuku, neodhadovať cenu ani obsah školenia. |

## Obchodné a archívne cesty

| Cesta | Pozorovaný stav 22. 10. 2026 | Čo z toho možno vyvodiť |
| --- | --- | --- |
| [/obchod/](https://www.onlineasistent.sk/obchod/) | HTTP 200; titul Obchod; v načítanom HTML neboli zistené viditeľné produktové ponuky. | Existuje verejná obchodná cesta. Nie je to dôkaz predávaného produktu ani fungujúceho doručovania. |
| [/kosik/](https://www.onlineasistent.sk/kosik/) | HTTP 200; prázdny košík a návrat do obchodu. | Overený iba prázdny stav. |
| [/kontrola-objednavky/](https://www.onlineasistent.sk/kontrola-objednavky/) | Pri prázdnom košíku výsledná URL `/kosik/`, HTTP 200. | Doklad správania prázdnej cesty, nie overenie platby. |
| [/moj-ucet/](https://www.onlineasistent.sk/moj-ucet/) | HTTP 200; prihlasovací formulár. | Účet nebol použitý; nebola vytvorená registrácia ani obnova hesla. |
| [/category/nezaradene/](https://www.onlineasistent.sk/category/nezaradene/) | HTTP 200; archív článkov pod všeobecným názvom Nezaradené. | Východisko pre lepšiu tematickú taxonómiu. |
| [/tag/obchodny-zastupca/](https://www.onlineasistent.sk/tag/obchodny-zastupca/), [/tag/obchodny-zastupca-2/](https://www.onlineasistent.sk/tag/obchodny-zastupca-2/) | Oba HTTP 200; rovnaký článok, názov raz s diakritikou a raz bez. | Kandidát na zjednotenie taxonómie a riadené presmerovanie. |

## Výber existujúcich článkov pre značku a ďalšiu tvorbu

Toto je obsahové odporúčanie, nie schválený publikačný plán. Spoločný podcast, nové dátové články a digitálne produkty sú zámer zo zadania. Nižšie uvedené články už existujú; nové odvodené produkty zatiaľ doložené nie sú.

| Existujúci článok | Materiál, ktorý má zmysel zachovať | Ďalšie spracovanie / kontrola |
| --- | --- | --- |
| [Dlhodobý Cold calling môže mať efekt aj v súčasnosti, neveríte?](https://www.onlineasistent.sk/dlhodoby-cold-calling-moze-mat-efekt-aj-v-sucasnosti-neverite/) | Najkonkrétnejší prípad: MARKETING POST, spolupráca podľa autora od konca 2022, segmentácia a postupný výsledok. | **Prvá priorita pre rozhovor/prípad.** Autor uvádza prvú zákazku po troch mesiacoch; vyžiadať časovú os, rozsah práce, výsledky a súhlas klienta. |
| [Aktívny telemarketing: Prečo si nerobím štatistiku úspešnosti?](https://www.onlineasistent.sk/aktivny-telemarketing-preco-si-nerobim-statistiku-uspesnosti/) | Odlišnosť fáz obchodu, obmedzenia porovnateľnosti a rozdiel medzi dopytom a zákazkou. | **Prvá priorita pre rozhovor o meraní.** Vysvetliť primerané meranie konkrétnej kampane; tvrdenia 2–10 % a 78 % potrebujú zdroj/metodiku. Názov neinterpretovať ako úplnú absenciu reportovania. |
| [Kde môžete získať databázu kontaktov pre svojho obchodníka?](https://www.onlineasistent.sk/kde-mozete-ziskat-databazu-kontaktov-pre-svojho-obchodnika/) | Praktické kritériá výberu firmy: lokalita, veľkosť, ekonomika, relevantnosť; porovnanie hotovej a ručne tvorenej databázy. | **Prvá priorita pre pracovný checklist.** Doplniť ukážku, spôsob validácie a limity zberu; vlastná skúsenosť nie je údaj o celom trhu databáz. |
| [Prečo je užívateľské testovanie softvéru a aplikácií dôležité?](https://www.onlineasistent.sk/preco-je-uzivatelske-testovanie-softveru-a-aplikacii-dolezite/) | Vlastná spolupráca s backOFFICE a pripomienkovanie eAML podľa autora; dobrý most k realitným pracovným postupom. | **Prvá priorita pre odborný príbeh.** Získať konkrétny povolený príklad pred/po. Výlučnosť dodávateľa a tvrdenia o slovenskom trhu overiť; nerozširovať Martinovu rolu na všetky fázy QA. |
| [Má telemarketing v dnešnej dobe ešte zmysel?](https://www.onlineasistent.sk/ma-telemarketing-v-dnesnej-dobe-este-zmysel/) | Predaj až po vyriešení servisnej požiadavky, poznanie klienta a pravidelný kontakt. | Zachovať ako základ filozofie služieb; skrátiť všeobecný úvod a pridať konkrétnu situáciu z praxe. |
| [Marketingové hovory súkromným osobám majú svoje pravidlá](https://www.onlineasistent.sk/marketingove-hovory-sukromnym-osobam-maju-svoje-pravidla/) | Rozlišuje profesionálnu komunikáciu od nátlakových praktík; venuje sa registrácii a marketingovým volaniam. | **Právna a dátumová revízia pred novým použitím.** Toto memorandum nepotvrdzuje aktuálnosť pravidiel, prefixu, výnimiek ani sankcií. |
| [Navolávanie studených kontaktov v lete – robiť, či nie](https://www.onlineasistent.sk/navolavanie-studenych-kontaktov-v-lete-robit-ci-nie/) | Argument pre pravidelnosť, nastavenie kapacity a sezónnosť; osobná praktická perspektíva. | Rozhovor o plánovaní práce. Oddeliť vlastnú skúsenosť od všeobecného tvrdenia o účinnosti a prípadne ukázať sezónne dáta. |
| [Marketing a starostlivosť o zákazníkov: kľúč k úspechu v 2025](https://www.onlineasistent.sk/marketing-a-starostlivost-o-zakaznikov-kluc-k-uspechu-v-2025/) | Plán, primerané očakávania, kombinácia kanálov a starostlivosť o existujúcich klientov. | Aktualizovať alebo ponechať ako dobový článok. Nemeňme iba rok v titulku: úvod je viazaný na vtedajšie ekonomické opatrenia. |
| [Vlastný obchodný zástupca alebo externý? Pre a proti.](https://www.onlineasistent.sk/vlastny-obchodny-zastupca-alebo-externy-pre-a-proti/) | Poznanie produktu, dôvera obchodníka v ponuku, náklady a vzťah s klientmi. | Obsahovo sa prekrýva s nasledujúcim článkom; porovnať a rozhodnúť, či zlúčiť alebo rozlíšiť situácie. |
| [Externý obchodný zástupca vs. interný tím – kedy sa čo oplatí?](https://www.onlineasistent.sk/externy-obchodny-zastupca-vs-interny-tim-kedy-sa-co-oplati/) | Podrobnejšia rozhodovacia štruktúra vrátane kombinácie interného tímu a externistu. | Kandidát hlavného rozhodovacieho článku. Dopĺňať reálne modelové scenáre; nevymýšľať cenové porovnania. |
| [Online chat na web: Kedy ho zaviesť a ako využiť naplno](https://www.onlineasistent.sk/online-chat-na-web-kedy-ho-zaviest-a-ako-vyuzit-naplno/) | Vlastná skúsenosť s chatom v cestovnej kancelárii, prechod na telefón a prevádzka chatu. | Zachovať skúsenosť a praktický postup. Tvrdenie o 70 % nedokončených objednávok a jeho príčine treba doložiť; zoznam nástrojov a odporúčania aktualizovať. |
| [Ako online chat zvyšuje dôveru zákazníkov a predaje e-shopu](https://www.onlineasistent.sk/ako-online-chat-zvysuje-doveru-zakaznikov-a-predaje-e-shopu/) | Konkrétne návyky operátora, použitie otázok ako spätnej väzby pre web a odovzdanie zložitej veci do telefónu. | Vhodné pre checklist. Uvedenú preferenciu chatu 40–45 % nemožno preniesť do novej značky bez presného zdroja a populácie. |
| [5 najčastejších chýb pri pridávaní produktov na e-shop](https://www.onlineasistent.sk/5-chyb-pri-pridavani-produktov-na-e-shop-ktore-brzdia-predaj/) | Popis, fotografie, kategórie, parametre a SEO; základ kontroly kvality produktových dát. | Sekundárna línia, ak Martin službu chce rozvíjať. Pri novom použití preveriť technologické tvrdenia o vyhľadávaní a AI. |
| [Databáza firiem a GDPR: Ako legálne osloviť nových klientov?](https://www.onlineasistent.sk/databaza-firiem-a-gdpr-ako-legalne-oslovit-novych-klientov/) | Dôležitá téma zodpovednej práce so zdrojom, relevantnosti, námietky a pôvodu kontaktu. | **Právna revízia pred produktizáciou.** Formulácie o právnom základe, typoch kontaktov a informačnej povinnosti nepreberať ako univerzálny návod. |

## Register dôkazov a tvrdení

| Existujúci podklad | Čo môže podoprieť | Čo ešte chýba |
| --- | --- | --- |
| Tri referencie na [domove](https://www.onlineasistent.sk/): SPOLOK DOBREJ NÁLADY, MARKETING POST SLOVAKIA, backOFFICE.Sk. | Dôveryhodnosť, spoľahlivosť a pomenované spolupráce; pri MARKETING POST sa uvádzajú zákazky a dopyty. | Súhlas s novým použitím mena, znenia a loga; aktuálna rola autora referencie; dátum a relevantný kontext. Texty sa tu hromadne nerepublikujú. |
| Pracovná chronológia v príbehu. | Kontinuita práce s dátami, klientmi a softvérom. | Martinovo potvrdenie presných období, názvov a dnešnej roly. Skúsenosť v IT od 2009 nie je automaticky rovnaký počet rokov telemarketingu. |
| Článok o dlhodobom cold callingu. | Existujúci príbeh jednej spolupráce a vysvetlenie rozhodovania. | Merateľný rozsah, časové obdobie a výsledok doložený klientom; zachovať, čo bol Martinov výkon a čo uzavrel klient sám. |
| Článok o testovaní. | Martin uvádza predaj softvéru backOFFICE a testovanie nových funkcií eAML. | Overiť aktuálny rozsah spolupráce a povolené ukážky. Nepovažovať to za automatické oprávnenie používať značku dodávateľa v novej ponuke. |
| Certifikáty a sprievodný text. | Absolvovanie pomenovaného vzdelávania po prečítaní samotných dokladov. | Vizuálne skontrolovať úplné názvy, vydavateľa a dátum; certifikát nevydávať za dôkaz meraného obchodného výsledku. |

### Konkrétne rozpory a rozhodnutia pred prepisom

1. **Časové údaje:** domov uvádza „11 ročné skúsenosti“, služby telemarketing od roku 2014 a príbeh IT od 2009. Pri roku 2026 statická jedenástka pravdepodobne zostarla; nejde však o dôvod zjednotiť všetky druhy praxe na jedno nové číslo. Použiť potvrdenú chronológiu a stabilné „od roku…“.
2. **78 % dlhodobých klientov:** číslo je na dodatočnej telemarketingovej stránke aj v článku o štatistikách. Je to iná metrika než úspešnosť hovoru, takže samé osebe nejde o rozpor. Chýba obdobie, menovateľ, definícia opakovanej spolupráce a zdroj; v novej značke je to zatiaľ nepotvrdené tvrdenie.
3. **Školenie:** pätička sľubuje cestu na backOFFICE školenie, ale cieľ vracia 410. Dôvod odstránenia a dnešná dostupnosť neboli zistené.
4. **Identita:** Martinove konkrétne skúsenosti sú silnejšie než všeobecné vysvetlenie „online asistenta“. Kandidát smerovania je osobné meno ako nositeľ odbornosti a Online asistent ako súčasný pracovný názov/služba. Je to návrh na rozhodnutie, nie schválený rebranding.
5. **Služby:** novší detail chatu má rozsah, FAQ a odovzdávané výstupy; ostatné stránky často opakujú rovnaké všeobecné benefity. Prepracovať ich z rozhovoru o konkrétnej práci.
6. **Garancia a dostupnosť:** staré stránky obsahujú vrátenie nevyužitých peňazí, flexibilitu a formulácie o úsporách; chat sľubuje reakcie spravidla do pár minút. Záväzky a kapacitu musí potvrdiť Martin pred prevzatím do novej ponuky.
7. **Odborné čísla a právo:** vlastné články obsahujú percentá bez presných odkazov a časovo citlivé právne informácie. Označenie na revíziu nie je záver, že sú nesprávne; bez kontroly ich nemožno použiť ako dôkaz.
8. **Formulár a súkromie:** kontrola zaznamenala súhlasové pole; v skúmaných navigačných odkazoch a mape sa neobjavila samostatná stránka ochrany údajov. Treba preveriť finálnu cestu, informovanie a správne texty; samotný tento inventár nehodnotí právny súlad.

## Assety a práva

Len evidencia zdrojových súborov; neboli preberané do novej stránky. Rozmery sú deklarované v HTML. Lazy loading používa aj `data-wpfc-original-src`; `blank.gif` je technický placeholder a nepatrí medzi použiteľné brandové materiály.

| Asset / zdroj | Zdrojové URL | Pred novým použitím |
| --- | --- | --- |
| Existujúce horizontálne logo; originál v pätičke, 367 × 97. | [logo-horizontal-white.png](https://www.onlineasistent.sk/wp-content/uploads/2025/10/logo-horizontal-white.png) | Potvrdiť vlastníka a správnu verziu, vyžiadať vektor; nepovažovať symbol ® v alt texte za overenie registrácie. |
| Portrét na stránke príbehu, 1699 × 2560. | [Martin-foto-optimized-1-scaled.webp](https://www.onlineasistent.sk/wp-content/uploads/2026/05/Martin-foto-optimized-1-scaled.webp) | Fotograf, licencia/súhlas, originál, schválený výber a orez pre osobnú značku. |
| Existujúca fotografia používaná na domove a v príbehu, 570 × 380. | [OnlineAsistentWeb.jpg](https://www.onlineasistent.sk/wp-content/uploads/2022/12/OnlineAsistentWeb.jpg) | Potvrdiť pôvod a kto je na fotografii; doplniť vhodný alternatívny text. |
| Fotografia služby tvorby databázy. | [OnlineAsistent-3-scaled.jpg](https://www.onlineasistent.sk/wp-content/uploads/2022/12/OnlineAsistent-3-scaled.jpg) | Potvrdiť autora/licenciu a vecnú vhodnosť. |
| Fotografia služby chat, 2560 × 1707. | [OnlineAsistent-7-scaled.jpg](https://www.onlineasistent.sk/wp-content/uploads/2022/12/OnlineAsistent-7-scaled.jpg) | Potvrdiť autora/licenciu a zamýšľanú rolu v značke. |
| Ilustrácia testovania. | [Testovanie-softveru-a-aplikacii.jpg](https://www.onlineasistent.sk/wp-content/uploads/2024/03/Testovanie-softveru-a-aplikacii.jpg) | Preskúmať pôvod a nahradiť len vtedy, ak prínos novej práce bude konkrétny. |
| Certifikát AI, 2560 × 1809. | [Online-asistent-AI-kurz-scaled.jpg](https://www.onlineasistent.sk/wp-content/uploads/2025/12/Online-asistent-AI-kurz-scaled.jpg) | Prečítať a autorizovať opis; nové publikovanie dokladu vrátane podpisov/identifikátorov posúdiť osobitne. |
| Certifikát akvizičných hovorov, 1190 × 1683. | [certifikat-Ako-zvysit-uspesnost-akvizicnych-1.jpg](https://www.onlineasistent.sk/wp-content/uploads/2023/09/certifikat-Ako-zvysit-uspesnost-akvizicnych-1.jpg) | Rovnaká kontrola; dátum adresára nie je dátum absolvovania. |
| Certifikát podpory, 1190 × 1683. | [Zlepsenie-zakaznickej-podpory.jpg](https://www.onlineasistent.sk/wp-content/uploads/2023/09/Zlepsenie-zakaznickej-podpory.jpg) | Rovnaká kontrola; zachovať vecný rozsah kvalifikácie. |

Pri článkových ilustráciách treba urobiť neskôr úplný export médií s licenciami. Z názvu súboru ani vzhľadu sa nesmie odhadnúť autorstvo alebo generatívny pôvod. V súčasnom inventári sa nenavrhuje ich automatický prenos.

## Podklady, ktoré teraz stačí získať

1. S Martinom prejsť aktuálne služby, zameranie na realitné kancelárie a vzťah k backOFFICE; oddeliť dnešnú ponuku, skúsenosť a novú ambíciu.
2. Získať existujúce PDF v skutočnej verzii, názov, cieľového čitateľa a stav autorských práv. Research realitiek bude doplnkový zdroj; nesmie sa vydávať za Martinovu vlastnú prax.
3. Urobiť jeden odborný rozhovor nad prípadom MARKETING POST, kvalitou databázy, vyhodnotením kampane a pracovným postupom realitky. Použiť existujúce články ako konkrétne otázky, nie ako podklad pre vymyslené výsledky.
4. Potvrdiť pracovnú chronológiu, rozsah osobného príbehu, použiteľné referencie a práva k vizuálom.
5. Až z týchto odpovedí pripraviť brandový základ: identita a publikum, ponuka, dôkazy, hlas, obsahové piliere a pravidlá tvrdení. Následne možno vybrať vizuálny smer a stabilný dizajnový systém.

Tento dokument nemení web, ceny, služby, verejné tvrdenia ani publikačný stav produktu.
