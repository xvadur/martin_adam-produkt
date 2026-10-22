# Overenie lokálneho návrhu — 22. 10. 2026

Výsledok: implementovaný a otvorený živý prototyp na vizuálne posúdenie. Funkčné kontroly nižšie prešli v Codex IAB/Chromium; nepredstavujú prijatie vzhľadu, hotový brand book ani overenie produkčnej prevádzky.

## Obsah

Obsahový agent porovnal 91 jednotiek vrátane nadpisov, šiestich služieb, piatich krokov, štyroch benefitov, osobného úryvku, troch referencií s atribúciou a formulárových labelov. Výsledok 91/91. Po poslednej úprave bol nezávisle zopakovaný doslovný test všetkých 22 označených odsekov v poradí vrátane všetkých 20 NBSP. [Výsledok a hashe](qa/content-check.json).

Predpony mena, technické duplicity, formulárový fallback a odkaz na školenie s HTTP 410 sú vysvetlené v [REVAMP-LOG.md](REVAMP-LOG.md). Znenie pôvodných obchodných tvrdení sa týmto neoveruje.

## Prehliadač

Rozmery sú skutočné CSS viewporty prečítané z DOM. Hostiteľský prehliadač používa zoom 1.17, preto majú priame PNG snímky viac fyzických pixelov. Časť snímok vznikla pred drobnou opravou výšky hero a klávesnicového menu; aktuálne primárne snímky `desktop-1440-hero` a `mobile-375-hero` zodpovedajú finálnemu náhľadu.

| Kontrola | Pozorovaný výsledok |
| --- | --- |
| 1440×900 | Bez vodorovného presahu, hero má 869 CSS px a ďalšia sekcia naznačuje pokračovanie. Procesný stage 804 px sa pripne približne 88 px pod hlavičkou. |
| Skutočný scroll v procesnej scéne | Číslo sa menilo01 → 02 → 05, stage zostával pod hlavičkou, všetkých päť textov malo opacity 1 a visibility visible. |
| 1280×720 | Bez vodorovného presahu, procesný stage 624 px sa zmestí a používa pin. CTA v hero zostáva viditeľné pri spodnom okraji; trust položky pokračujú pod prvou obrazovkou. |
| 375×812 | Bez vodorovného presahu, portrét vedľa mena, navigácia cez tlačidlo, proces používa pauzovateľnú slučku. |
| 320×812 | Bez vodorovného presahu; CTA sa zalomia. |
| 1440×1600 | Bez pinu a bez pinspacera, proces používa slučku. |
| Mobilné menu | Otvorenie, zavretie, Escape a cyklus klávesnice medzi tlačidlom a odkazmi overené. Shift+Tab z tlačidla vedie na posledný odkaz Kontakt; Escape vráti fokus. |
| Systémové prefers-reduced-motion | Runtime reduced, bez chýb a pinspacerov, všetky texty krokov viditeľné. |
| JavaScript vypnutý v prehliadači | Viditeľný nadpis, mobilná navigácia ako bežné odkazy, žiadne piny; tlačidlo formulára sa nezobrazuje a zostáva priamy e-mailový kontakt. |
| 4× CPU throttle | 1280×720: runtime enhanced/ready, errors [], viditeľný nadpis, oba hlavné scrolltriggery dostupné. Nejde o FPS benchmark. |
| Prázdny formulár | Päť potrebných hodnôt vrátane súhlasu dostalo konkrétne validačné hlásenie, fokus ide na prvé neplatné pole. |
| Vyplnený testovací formulár | Nula zostávajúcich chýb, ponúknutý `mailto:` odkaz a výslovná informácia, že správa ešte nebola odoslaná. E-mailová aplikácia ani odoslanie sa nespúšťali. |

[Surové pozorovania](qa/browser-observations.json) uchovávajú rozmery, runtime a stavy bez hodnôt formulára.

## Snímky

- [Desktopový úvod](qa/desktop-1440-hero.png).
- [Mobilný úvod](qa/mobile-375-hero.png).
- [Proces pri scrollovaní](qa/desktop-1440-process-midscroll.png).
- [Proces01](qa/desktop-1440-process-01.png) a [proces05](qa/desktop-1440-process-05.png).
- [Notebook a 4× CPU](qa/desktop-1280-720-cpu4.png).
- [Vysoké okno](qa/desktop-1440-1600-tall.png).
- [Mobil bez JS](qa/mobile-nojs.png).

## Opravy počas overenia

Mobilný portrét bol presunutý vedľa mena, hero na desktope skrátené pri zachovaní obsahu. Trieda funkčného menu sa pridáva až po zapojení ovládania. Validačná chyba checkboxu sa vkladá mimo jeho label, aby nemenila prístupné pomenovanie. Hero animuje vnorené meno iba raz. Pomer strán osobnej fotografie riadi wrapper; pôvodný HTML atribút výšky už nemôže roztiahnuť príbeh na výšku originálneho súboru. Pause button používa meniaci sa príkaz bez mätúceho `aria-pressed`. Formulárový fallback bez JS smeruje na e-mail.

Pri navigácii kotvami sa používa natívny okamžitý skok. Plynulý CSS presun na dlhej stránke mohol byť prerušený prepočtom lazy obrazov; bol odstránený. Animácie na scroll zostávajú samostatnou vrstvou.

## Hranice overenia

Syntax oboch modulov prešla. Licencie, pôvod lokálnych knižníc a zdrojové hashe sú uložené. Nevykonal sa Lighthouse/axe audit, FPS meranie, test na fyzickom telefóne ani kontrola v Safari/Firefox. Fallback pri zlyhaní vendor siete a vypínanie slučky pri skrytej karte boli posúdené v kóde; samostatný browser test týchto dvoch situácií sa neeviduje. Produkčné doručovanie, WordPress migrácia, SEO presmerovania a finálne právne stránky nie sú súčasťou tohto návrhu.
