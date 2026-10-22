# Vizuálny brief — podklady pre Martinovu novú prezentáciu

22. 10. 2026 / research. Toto je brief a evidencia pôvodného vzhľadu. Nový vzhľad, logo, farby a typografia ešte neboli vybrané.

## Východisko z existujúceho webu

Zdroj: [screenshoty a audit](../research/web/2026-10-22/README.md), [computed CSS](../research/web/2026-10-22/computed-styles.json). Zachytené 1440 × 1000 a 390 × 844 CSS px.

| Existujúci prvok | Čo robí dobre | Čo má research riešiť |
| --- | --- | --- |
| Martinova vlastná fotografia | Dáva tvár konkrétnemu človeku a predchádza anonymite všeobecnej služby. | Menej kryť tvár farebným prekrytím; naplánovať bezpečné orezanie pre mobil aj desktop. |
| Svetlý obsah a cyanový akcent | Pôsobí otvorene, zrozumiteľne a konzistentne. | Overiť čitateľnosť akcentu, novú mieru farby a význam jednotlivých plôch. |
| Rubik a silné nadpisy | Jasná rodina a výrazná hierarchia základných sekcií. | Otestovať dlhé slovenské nadpisy a texty; nezamieňať malé písmo za kultivovanosť. |
| Striedanie fotografie a textu | Čitateľný obsahový rytmus; služby nie sú iba drobné ikony v mriežke. | Stock motívy nahradiť konkrétnou prácou, artefaktom alebo vysvetlením tam, kde pridajú poznanie. |
| Osobný príbeh a referencie | Poskytujú materiál dôvery. | Dať rozhodujúci dôkaz bližšie k príslušnej službe. |
| Mobilné menu | Otvorenie, zatvorenie aj podmenu fungovali; má pomenované ovládanie. | Zachovať funkčné správanie a otestovať klávesnicu aj po prípadnej zmene technológie. |

### Namerané referenčné hodnoty

- Body desktop: Rubik, 16 px / 29,71 px; mobil: približne 14,59 px / 27,10 px.
- H1 domova: 60 px / 84 px desktop; 37 px / 51,8 px mobil, váha 700.
- H2 sekcií: 48 px / 62,4 px desktop; 32 px / 41,6 px mobil.
- CTA desktop: 14 px, výška 46–48 px, polomer 4 px.
- Nameraný akcent tlačidiel: `rgb(0,179,248)` / `#00b3f8`; body text `#4c5253`; svetlý základ `#f3f6f6`.

Sú to hodnoty pôvodného webu, nie nové tokeny. Svetlé písmo v hero vrstve má aj alfa priehľadnosť a prekrytú fotografiu; bezpečný kontrast nemožno určiť iba z jednej farby pozadia.

## Požadovaný charakter zo zadania

**Pokojný, osobný, kultivovaný a profesionálny.** Pre návštevníka má byť ľahké pochopiť Martina, jeho skúsenosť a vhodný ďalší krok. Súdržnosť majú niesť fotografia, typografická hierarchia, rytmus obsahu a konkrétne dôkazy.

Tento charakter treba neskôr ukázať na reálnom obsahu. Je to zadanie, nie dôkaz, že konkrétna nová kompozícia už funguje.

## Fotografický podklad

Pre budúce fotenie pripraviť výber scén podľa použitia:

1. Pokojný portrét s priamym kontaktom; horizontálny aj vertikálny záber a dostatok priestoru pre samostatne umiestnený text.
2. Martin pri práci alebo vysvetľovaní — jeho skutočné prostredie a nástroje, bez viditeľných klientskych údajov.
3. Rozhovor alebo učenie — iba skutočná situácia, nie predstierané školenie či klientská referencia.
4. Detail pracovného materiálu, ktorý možno zverejniť a ku ktorému má Martin vzťah.

Pri každej vybranej fotografii evidovať originál, autora, súhlas s použitím, odporúčané výrezy a miesto použitia. Verejná URL starého obrázka sama nepreukazuje licenciu na nové exporty, reklamy či predajný obal.

## Otvorené vizuálne rozhodnutia

| Rozhodnutie | Čo má rozhodnutie vyriešiť | Potrebný podklad |
| --- | --- | --- |
| Meno a značka Online asistent | Čo bude návštevník identifikovať ako hlavnú značku. | Martinovo rozhodnutie a doterajší rebranding. |
| Zachovanie alebo zmena cyanového akcentu | Kontinuita rozpoznateľnosti a čitateľnosť. | Pôvodné brand podklady + neskoršia vizuálna skúška. |
| Typografické roly | Rozlíšenie odborného textu, osobného vstupu a ovládania. | Dlhý slovenský text, služba a produktová ukážka. |
| Materiál, hustota a tiene | Kultivovaný charakter bez neúčelnej dekorácie. | Jedna reálna kompozícia. |
| Pohyb | Čo skutočne pomáha porozumeniu. | Statický základ a rešpektovanie reduced-motion. |
| Produktové obaly a grafy | Ako označovať autora, verziu a dôkaz. | Skutočné PDF, prípady a zdrojové dáta. |

## Vzťah k XVADUR Stacku

Aktuálny Stack vlastní spoločné komponenty a tokeny; klientsky projekt vlastní obsah a skladbu stránok. Prenositeľná je aj metóda: konkrétne podklady, obrazovka so skutočným obsahom, iterácia a prijatie, potom odvodenie pravidiel. Oranžový technický/neumorfický smer XVADURu sa na Martina neprenáša automaticky.

Lokálne zdroje metódy: `projekty/xvadur-design-system/AGENTS.md`, `README.md`, `design/interview/INTERVIEW.md` a `design/reference/yanis/design-system-interviewer/SKILL.md` (body „Preview before system“ a „Real content, never lorem ipsum“). Tieto cesty patria do nadradenej workspace; nie sú chýbajúce súbory tohto repozitára. Tento text nevydáva pracovné Stack hodnoty za schválený systém.

## Neskoršie kritériá prijatia vizuálu

Na jednej skutočnej domovskej kompozícii v desktope aj mobile má byť čitateľné: kto je Martin, pre koho je vhodná ponuka, čo dokladá jeho prácu a čo môže človek urobiť ďalej. Fotografia, článok, služba a produkt majú patriť tomu istému človeku. Pravidlá až potom zachytia princípy, farby, typografiu, rozostupy, navigáciu, komponenty a stavy, obsahové vzory, pohyb a prístupnosť.

**Dnes je dokončený research brief. Vizuálna ukážka a stavba webu nie sú súčasťou tohto kroku.**
