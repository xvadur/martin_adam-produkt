# Online asistent — reverse engineering pôvodného webu

**Živý zber 22. 10. 2026. Cieľ: https://www.onlineasistent.sk/. Stav: research, bez stavby alebo zmeny webu.**

Výsledok: dnešný web má použiteľný osobný a obsahový základ. Martinove fotografie, príbeh, jasné služby, referencie a proces spolupráce sa oplatí preniesť. Príležitosťou je presnejšie sprístupniť jeho odborný úsudok, upratať ponuku a pripraviť zrozumiteľný vzťah služieb, článkov a budúcich produktov.

## Čo sa vykonalo a čo dôkazy znamenajú

- Živé prezeranie cez Codex in-app browser: desktop **1440 × 1000**, mobilný viewport **390 × 844** CSS px.
- Skutočné prechody cez navigáciu, článok a odkaz v pätičke; otvorenie mobilného menu a podmenu; kontaktný formulár bez zadania alebo odoslania údajov.
- **14 uložených a vizuálne otvorených JPEG**, meranie computed CSS a sémantická kontrola formulárových označení.
- Samostatná aktuálna HTTP inventarizácia sitemap, kľúčových stránok a článkov. Pozri [obsah a ponuku](OBSAH-A-PONUKA.md) a [strojový inventár](CONTENT-INVENTORY.json).
- Súbory a ich SHA-256 sú v [provenance.json](provenance.json); [kompletná obrazová evidencia](SCREENSHOTS.md) zobrazuje snímky v poradí.

Reverse engineering tu znamená čítanie pozorovateľného obsahu, kompozície, správania, odkazov a verejných technických stôp. Zber pre Martina prebehol browserom a HTTP; **nie je vydávaný za beh REA**, ktorým bol predtým skúmaný Strade. Nepodarilo sa získať a ani sa nevyžadovalo prihlásenie do WordPressu, databáza, zdrojová téma alebo pôvodný vývojový repozitár.

## Pozorovaná cesta návštevníka

| Krok | Čo sa skontrolovalo | Všeobecný stav | Dôkaz |
| --- | --- | --- | --- |
| 1 | Prvý vstup, cookie voľba, osobný úvod a hlavné akcie | Použiteľné; všeobecná rola prekrýva konkrétnu odbornosť a farebná vrstva oslabuje portrét/čitateľnosť. | [01](01-home-desktop-cookie.jpg), [02](02-home-desktop.jpg) |
| 2 | Vysvetlenie služieb na domove | Jasná štruktúra a texty; rozdielny význam služieb a generické fotografie. | [03](03-home-services.jpg) |
| 3 | Môj príbeh | Osobné fotografie, prvá osoba a pracovná história; dobrý základ autenticity. | [04](04-story-desktop.jpg) |
| 4 | Odkaz na školenie backOFFICE z pätičky | Chyba cesty: zobrazená neexistujúca stránka; HTTP zber potvrdil 410 Gone. | [05](05-training-link-result.jpg) |
| 5 | Blog → konkrétny článok o telemarketingu | Funkčné prepojenie a existujúci odborný materiál; široká textová sadzba a obsahové tvrdenia na revíziu. | [06](06-blog-desktop.jpg), [07](07-article-desktop.jpg) |
| 6 | Certifikáty a vysvetlenie vzdelávania | Vlastné vysvetlenie AI/komunikačnej praxe; originály certifikátov treba čitateľne inventarizovať. | [08](08-certificates-desktop.jpg) |
| 7 | Kontakt a formulár desktop/mobil | Polia a kontaktné možnosti dostupné; odoslanie a doručenie netestované. | [09](09-contact-desktop.jpg), [13](13-contact-mobile.jpg), [14](14-contact-mobile-form.jpg) |
| 8 | Mobilný úvod → menu → podmenu | Otvorenie aj podmenu fungovali, ovládanie má mená; homepage bez horizontálneho overflow pri 390 px. | [10](10-home-mobile.jpg), [11](11-mobile-menu.jpg), [12](12-mobile-submenu.jpg) |

### 1. Prvý vstup a úvod

Vlastná fotografia a meno sú prítomné hneď na začiatku. Existujú dve zrozumiteľné akcie: kontakt a viac o Martinovi. Cookie banner ponúka aj odmietnutie; táto možnosť bola použitá, banner zmizol a stránka zostala dostupná. To nepreukazuje správnosť consent implementácie ani zastavenie všetkých trackerov.

Nadpis zdôrazňuje druh služby; dlhší vysvetľujúci odsek zostáva všeobecný. Pre nový web odporúčame skrátiť orientáciu na Martinovu konkrétnu prácu a dať meno/odbornosť vyššiu váhu. Písací efekt mení predponu pred menom, preto niektoré snímky obsahujú rozpracované slovo. Je to zachytený stav animácie, nie dôkaz náhodného poškodenia textu.

![Úvod po odmietnutí cookies](02-home-desktop.jpg)

### 2. Služby

Striedanie fotografie a textu poskytuje priestor na vysvetlenie práce. Na domove je šesť služieb, potom päť krokov spolupráce, dôvody, príbeh, referencie a formulár. Netreba vyhadzovať tento obsahový základ. Nové členenie má riešiť, ktoré služby Martin dnes aktívne ponúka a pre koho; potom možno zvoliť ich poradie a presnejšie názvy akcií.

![Spôsob vysvetlenia služieb](03-home-services.jpg)

### 3. Príbeh a osobné fotografie

Fotografia človeka pri práci a jeho vlastná história sú významnejším materiálom osobnej značky než generická ilustrácia technológie. Zachovať faktografiu a jeho vlastné rozhodnutie o miere osobného rozprávania. Pracovné etapy 2009, 2013 a 2014 treba zjednotiť s rokmi praxe uvádzanými inde; nemusia opisovať rovnakú činnosť.

### 4. Školenie — konkrétne prerušená cesta

Na stránke aj na error page sa stále nachádza odkaz na pôvodnú URL školenia. Po kliknutí sa objaví hlásenie o neexistujúcej stránke. **Zo samotného webu už nemožno školenie označiť za aktuálne dostupnú ponuku.** Historická prax zo zadania zostáva relevantným vstupom; Martin má potvrdiť aktuálny stav.

![Výsledok kliknutia na školenie](05-training-link-result.jpg)

### 5. Blog a odborný obsah

Blog je živý obsahový inventár, nie prázdna rubrika. Článok o štatistike telefonovania ponúka vlastný argument o kontexte, kvalite databázy a rôznych cieľoch spolupráce. Týmto spôsobom možno ukazovať Martinov úsudok. Číselné údaje a právne texty sa však nepreberajú automaticky ako aktuálne overené rady. Neskorší návrh sadzby má otestovať užší textový stĺpec a jasnú identitu autora, dátum a nadväzujúci krok.

![Existujúca článková vrstva](06-blog-desktop.jpg)

### 6. Certifikáty

Stránka vysvetľuje motiváciu vzdelávania a použitie AI pri práci. To je vhodný vstup do praktickej ukážky. Obraz certifikátu nenahrádza vlastný výsledok alebo doklad prínosu zákazníkovi. Pri migrácii doplniť čitateľný názov, poskytovateľa, dátum a opis bez falošného dojmu novej profesijnej kvalifikácie.

### 7. Kontakt

Na desktope sú kontaktné informácie a formulár vedľa seba; na mobile sú za sebou a pred formulárom je dlhší informačný blok. Formulár má meno, firmu, e-mail, telefón, predmet, správu a povinný checkbox. DOM kontrola našla asociované labely: nemožno tvrdiť, že polia nemajú prístupné mená. Viditeľná identifikácia je však prevažne v placeholderoch, ktoré pri písaní zmiznú. Pri budúcej zmene otestovať trvalé viditeľné labely a počet potrebných polí.

Nebolo kliknuté na odoslanie; nepoznáme validáciu, antispam, úspešný stav ani doručenie správy. Bez týchto dôkazov neoznačujeme celú kontaktnú cestu ako funkčne overenú.

![Mobilný formulár bez odoslania](14-contact-mobile-form.jpg)

### 8. Mobilná navigácia

Menu aj podmenu sa otvorili a viditeľný fokus bol na ovládači. DOM pomenúva hlavné ovládanie aj zatvorenie. Šírka dokumentu na domove bola 390 px pri viewporte 390 px; rovnaká kontrola kontaktu tiež neukázala horizontálny overflow. Tento výsledok sa nevzťahuje na všetky šírky, zoom, prehliadače a telefóny.

![Mobilná navigácia](11-mobile-menu.jpg)

## Technický a vizuálny rozbor

[Computed CSS a verejné resource URL](computed-styles.json) zachytávajú Rubik, merané rozmery, viditeľné nadpisy a CTA; metadata stránky sa sama hlásia ako WordPress, WooCommerce, Elementor a Site Kit. Resource cesty ďalej ukazujú Astra addon, cache/minifikáciu a CookieYes; formulár má identifikátory WPForms.

Sú to **pozorované klientské stopy a samodeklarované verzie**, nie úplný audit inštalovaných pluginov, servera, databázy alebo bezpečnosti. WooCommerce metadata a existujúce obchodné URL nie sú dôkazom predaja, platobnej integrácie či doručenia PDF. Viditeľné Google tagy nepreukazujú funkčné meranie, kampane ani ich výkon. Názvy technológií samy nedokazujú, že práve WordPress spôsobuje obsahové či vizuálne nedostatky.

| Rola | Desktop | Mobilný viewport |
| --- | --- | --- |
| Body | Rubik, 16 px / 29,71 px | Rubik, približne 14,59 px / 27,10 px |
| H1 domova | 60 px / 84 px, váha 700 | 37 px / 51,8 px, váha 700 |
| H2 sekcií | 48 px / 62,4 px | 32 px / 41,6 px |
| CTA | 14 px, výška 46–48 px, radius 4 px | Existujúca dotyková kompozícia v snímkach. |

Tlačidlový akcent `#00b3f8`, body text `#4c5253`, pozadie `#f3f6f6` sú pôvodné namerané referencie. Nie sú zvolené ako budúca paleta. Niektoré rozmery v JSON môžu patriť skrytým prekryvným vrstvám; samotná geometria prvku nedokazuje jeho viditeľnosť. Viditeľné správanie vyhodnocujeme zo snímok a navigácie.

## Riziká prístupnosti a hranice auditu

- **Kontrast:** biela a priehľadná typografia na svetlom cyanovom fotografickom prekrytí je viditeľné riziko. Nebol vykonaný pixelový kontrastný audit všetkých stavov.
- **Dlhý text:** článková sadzba na desktope používa širokú plochu; treba otestovať pohodlné čítanie dlhších odsekov.
- **Nadpisy:** sémantický strom obsahuje dekoratívne malé štítky ako H6 a niektoré obsahové bloky ako H5. Pri budúcej sadzbe treba navrhnúť logickú osnovu nezávisle od veľkosti písma.
- **Polia:** labely existujú v DOM, viditeľné trvalé označenie treba zlepšiť. Validácia, chyby a doručenie sú neoverené.
- **Pohyb:** pozorovaný písací efekt; reduced-motion a čítačka obrazovky neboli testované.
- **Navigácia:** klikacia funkčnosť a sémantické mená sú overené v opísaných stavoch. Kompletný priechod iba klávesnicou, focus trap, Escape, zoom a asistívne technológie zostávajú otvorené.

Toto nie je vyhlásenie WCAG zhody, Lighthouse audit ani meranie výkonu. Bez reálnych údajov nehodnotíme počet zákazníkov, konverziu alebo ekonomický prínos dnešného webu.

## Odporúčané priority pre ďalší research

1. Potvrdiť Martinovu aktuálnu ponuku, rolu a časovú os; vyriešiť stav školenia.
2. Získať skutočné PDF, doterajší brandový podklad a 1–2 oprávnené prípady s materiálom.
3. Dokončiť rozhodnutie, čo sa zachová zo značky Online asistent a čo bude niesť Martinovo meno.
4. Prejsť každú existujúcu URL v migračnej mape; nemať obchodné systémové stránky omylom ako bežný obsah.
5. Až na následné zadanie skúšať nový vizuál na skutočnom obsahu. Teraz je podkladom [značka](../../../brand/README.md) a [informačné/migračné zadanie](../../../docs/ZADANIE-NOVEHO-WEBU.md).
