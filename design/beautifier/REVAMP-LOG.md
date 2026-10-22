# Revamp log — Martin Barczi

Stav k **22. 10. 2026**. Záznam opisuje lokálny prototyp a jeho odchýlky od pôvodnej home. Povolenie stavať návrh nie je schválenie finálnej značky ani publikácie. Postup: [Yanis Landing Page Beautifier](../reference/yanis/landing-page-beautifier/landing-page-beautifier/SKILL.md).

## Implementované v tomto rozsahu

- `[source/home-content.json]` Presný obsah home bol získaný zo živého zdroja a usporiadaný bez prepisovania odsekov; SHA-256 a pôvod assetov sú doložené v [CONTENT-SOURCE.md](CONTENT-SOURCE.md). **Stav: vykonané.**
- `[index.html]` Zachovaných je 6 služieb, 5 krokov, 4 benefity, celý osobný úryvok a 3 referencie v pôvodnom poradí. Podľa správy obsahového kontrolného agenta prešlo **91/91 sledovaných jednotiek — PASS**; ide o obsahový audit s vlastným rozsahom, nie browser QA ani prijatie vzhľadu. **Stav: hlásená obsahová kontrola.**
- `[tokens.css, styles.css]` Pridaný pracovný smer Cinematic Dark s atramentom, mätou, Manrope, svetlými obsahovými časťami a reálnou fotografiou. **Stav: implementovaný návrh.**
- `[motion.js, MOTION.md]` Pripravený úvod, fotografické odhalenia a jedna päťkroková procesná scéna; alternatíva slučky, pauza a reduced motion sú súčasťou implementácie. **Stav: implementované; browser overenie evidovať samostatne.**
- `[index.html .field, basics.js]` Formulár používa viditeľné labely bez rovnakých duplicitných placeholderov; JS validuje a vytvorí odkaz na pripravený e-mail. **Stav: lokálna implementácia, žiadna správa nebola touto úlohou odoslaná.**

## Obsah — označené, bez prepisu

- `[source/home-content.json → hero.trust, services.items[1]]` Pôvodná home uvádza „11 ročné skúsenosti“ a telemarketing „od roku 2014“. Dĺžka praxe môže byť zastaraná; treba potvrdiť druh praxe a obdobie. **Stav: potrebuje Martinovo rozhodnutie; text zachovaný.**
- `[index.html → benefity, referencie]` Pôvodné garancie, dostupnosť a percentá sa vizuálnym prenosom nestávajú novým overeným tvrdením. **Stav: označené na samostatnú obsahovú revíziu.**

## Rozdiely a rozhodnutia na posúdenie

- `[index.html .brand-initials]` Písmená **mb** so šípkou nahrádzajú v prototypovej hlavičke pôvodné grafické logo. **Stav: návrh, nie schválená identita.**
- `[index.html .hero-photo, .story-photo]` Použitý je skutočný portrét zo stránky príbehu; jeho poloha a orez sú súčasťou novej kompozície. **Stav: priznaná vizuálna zmena, nie rekonštrukcia pôvodného hero.**
- `[source → post-127.css?ver=1792663540]` Aktuálne odkazovaný hero stylesheet pri prvom načítaní vrátil 404; ďalšie overenie s browserovým User-Agentom 466. Originálne hero pozadie sa preto nepodarilo doložiť. **Stav: otvorená zdrojová položka.**
- `[index.html .hero-prefix]` „Volám sa“ je viditeľná stabilná predpona; alternatíva „Moje meno je“ zostáva v `sr-only`. Pôvodný typewriter, technická bodka a skrytý duplikát mena sa neopakujú ako ďalšia viditeľná kópia. **Stav: priznaná zmena prezentácie.**
- `[index.html → footer]` Odkaz na školenie backOFFICE bol v návrhu vynechaný, pretože pôvodný cieľ vracal HTTP 410. Neznamená to rozhodnutie zrušiť Martinovu službu. **Stav: priznaná výnimka; aktuálnu ponuku potvrdiť s Martinom.**
- `[index.html → služby, blog, certifikáty]` Detailné stránky sa otvárajú na pôvodnom WordPresse; hlavné CTA kontakt/príbeh používajú kotvy v novom náhľade. **Stav: vedomý rozsah home, nie dokončená migrácia webu.**
- `[basics.js → submit]` Pripravený `mailto:` odkaz potrebuje používateľovu e-mailovú aplikáciu a jej vlastné odoslanie. **Stav: lokálny prototyp, bez overeného doručovania.**
- `[index.html → form, režim bez JS]` Pôvodný lokálny GET cieľ bol nahradený `mailto:`; bez JavaScriptu sa tlačidlo nezobrazí a zostáva priamy e-mailový odkaz. Klávesové implicitné odoslanie sa tiež nemôže dostať na lokálnu URL s hodnotami polí. **Stav: opravené v kóde; browser dôkaz v QA.md.**
- `[styles.css → lokálne veľkosti a kompozícia]` Spoločné roly sú v tokenoch, niektoré sekčné veľkosti a geometria zostávajú priamo v CSS. **Stav: zostávajúci bod pre kontrolu úplného pokrytia tokenmi; netvrdiť nulový drift.**

## Licencie a prevádzka

- `[vendor/gsap.min.js, vendor/ScrollTrigger.min.js]` Dodané hlavičky uvádzajú GSAP 3.15.0 a **GSAP Standard License**. Nie sú týmto záznamom označené ako GPL. **Stav: zachovať originálne hlavičky a podmienky distribúcie.**
- `[licenses/]` Lokálne sú doložené licencie Manrope a Tabler ikon. Pôvodné fotografie majú evidované zdroje a hashe; úplný audit nových publikačných práv nie je týmto vykonaný. **Stav: doložený pôvod, práva preveriť pri publikácii.**

## Mimo rozsahu a stav overenia

- `[projekt]` Nové články, podcast, digitálne produkty, predaj, platba a doručenie patria do širšieho zámeru; tento home prototyp ich neimplementuje. **Stav: mimo tejto realizácie.**
- `[brand]` Kompletný brand book, finálne logo, prijatá fotografia a schválený nový jazyk ponuky zostávajú samostatnými rozhodnutiami. **Stav: návrh nie je prijatie.**
- `[QA]` Browser QA, jeho screenshoty a zistené opravy vedie vlastník implementácie. Tento log k nim nepridáva výsledok PASS, skóre ani tvrdenie o hotovom responzívnom alebo prístupnostnom overení. **Stav: výsledky pripojiť podľa skutočných dôkazov.**
