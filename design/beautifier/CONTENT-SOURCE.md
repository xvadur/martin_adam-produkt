# Pôvodný obsah home — zdroj pre živý revamp

Zdroj: **https://www.onlineasistent.sk/**, živý HTTP GET 22. 10. 2026, stav **200**. Ide o prevzatie existujúceho obsahu do vizuálneho revampu; v týchto podkladoch sa nevytvára nová ponuka ani nový copywriting.

HTML SHA-256: `1fd27cbe47ae87e44df59ce844c8cecef8441cb4b05e07672dbe4dfe8b4d53da`.

## Súbory a čítanie dát

- `source/home-content.json` — čisté dáta pripravené na renderovanie. Každý blok zachováva pôvodné znenie, interpunkciu, poradie a atribúciu; odseky sa neskracujú. Normalizované sú iba štrukturálne HTML medzery a zalomenia; pôvodné nedeliteľné medzery zostávajú zachované.
- `source/home.raw.html` — lokálna presná HTTP odpoveď; ignorovaná Gitom cez `source/.gitignore`. Obsahuje aj technický formulárový markup, preto sa nesmie prekopírovať do verejného náhľadu ako celok.
- `source/style-*.raw.css`, `source/fetch-report.json` — lokálne ignorované odpovede CSS a ich URL, HTTP stav a SHA-256. Sú to podklady na dohľadanie pôvodných assetov.
- `assets/real/` — reálne súbory prevzaté z existujúceho webu. `assets[]` v JSON obsahuje pôvodné URL, zdrojovú stránku, lokálnu cestu, SHA-256, počet bajtov a stav načítania každého súboru. Nie je medzi nimi generovaná fotografia ani generovaná osoba.

Všetky `localPath` sú relatívne k `design/beautifier/`, aby ich mohol náhľad priamo použiť. `sourceWidgetId` a `sourceWidgetIds` odkazujú na identifikátory Elementor widgetov v pôvodnom HTML.

```text
source
sectionOrder
navigation[] → label, url, children[]
headerLogo
hero → eyebrow, animatedHeading, title, paragraphs[], ctas[], trust[], background
services → eyebrow, title, intro[], items[]
  item → number, title, paragraphs[], cta, image, sourceWidgetIds
process → eyebrow, title, steps[]
  step → label, title, paragraphs[]
benefits → eyebrow, title, items[]
  item → title, paragraphs[]
about → eyebrow, title, paragraphs[], cta
testimonials → eyebrow, title, items[]
  item → quote, name, role
contact → eyebrow, title, image, form
footer → logo, description[], contactHeading, contactLinks[], servicesHeading, serviceLinks[]
assets[]
```

## Úplnosť a poradie

Pôvodné poradie hlavných sekcií zostáva: hero → služby → spolupráca → benefity → osobný úryvok → referencie → kontakt/formulár → pätička.

JSON obsahuje **všetkých 6 služieb v pôvodnom poradí**, **5 krokov**, **4 benefity**, úplný osobný odsek, **3 úplné referencie s autormi a atribúciou**, 6 hlavných navigačných položiek s podmenu, CTA a pätičku. Formulár obsahuje 7 vecných polí vrátane pôvodného súhlasového textu a tlačidla. Technické honeypot polia, tokeny, nonce a skryté hodnoty sa do dát neexportujú. Verejný firemný telefón a e-mail zostávajú iba v pôvodných kontaktných odkazoch pätičky.

Šiesty číselný nadpis služby je v zdroji `06` bez bodky; dáta ho automaticky neopravujú. Rovnako sa neopravuje gramatika, dobové údaje, percentá, kapitalizácia ani znenie garancie. Následné vecné revízie patria do samostatne schváleného kroku.

## Animované meno a technické duplicity

Pôvodný fancy heading obsahuje animované predpony **„Volám sa“** a **„Moje meno je“**; stabilný suffix je **„Martin Barczi“**. V JSON sú oddelené v `hero.animatedHeading.prefixes` a `stableSuffix`. Bodka v `uael-text-holder` je technický placeholder pre animáciu, nie ďalšie slovo alebo slogan. Pôvodná konfigurácia animácie je zachovaná ako zdrojová informácia.

Samostatný duplikát nadpisu Martin Barczi je v HTML skrytý na desktope, tablete aj mobile; je označený `hiddenDuplicateShouldRender: false`. Timeline má číslo kroku duplicitne pre responzívne rozloženie; dáta ponechávajú jeden obsahový krok a dokumentujú túto duplicitu. Nejde o krátenie vecného obsahu.

## Reálne fotografie

Stiahnuté a hashované sú všetky obsahové fotografie home: `OnlineAsistentWeb.jpg`, `OnlineAsistentWeb2.jpg`, `OnlineAsistentWeb6.jpg`, `OnlineAsistenWeb4.jpg`, `OnlineAsistentWeb5.jpg` a `Testovanie-softveru-a-aplikacii.jpg`; názvy ostávajú pôvodné vrátane preklepu v `OnlineAsistenWeb4.jpg`. Kontaktná fotografia používa rovnaký zdroj ako služba vkladania produktov. Doplnené sú pôvodné logo v dvoch veľkostiach a skutočný portrét `Martin-foto-optimized-1-scaled.webp` zo stránky príbehu.

**Portrét je reálny zdrojový materiál pre kompozíciu. Tento inventár ho neoznačuje za preukázané pôvodné hero pozadie home.** Existujúca verejná dostupnosť fotografií sama nepreukazuje nové publikačné práva; zachytenie je určené pre autorizovaný lokálny revamp.

## Hero CSS — otvorená zdrojová položka

Aktuálna HTML odpoveď odkazuje na `https://www.onlineasistent.sk/wp-content/uploads/elementor/css/post-127.css?ver=1792663540`, ale pri prvom priamom načítaní server vrátil **404**. Ostatné relevantné CSS balíky sa načítali, pôvodnú hero fotografiu však neobsahovali. Overenie s browserovým User-Agentom neskôr skončilo serverovým stavom **466** aj pre URL bez query. Toto nie je dôkaz, že na stránke žiadne hero pozadie nikdy nebolo.

V `hero.background` je preto explicitne `originalImageUrl: null` a `status: unresolved_current_linked_stylesheet_returns_404`. Žiadna odhadnutá či generovaná URL sa za pôvodný zdroj nevydáva. Ak browser poskytne skutočne načítané `computed background-image`, zdroj sa doplní podľa tejto stopy.

## Kopírované a navrhované

**Kopírované:** texty, poradie, navigačné ciele, pôvodné CTA, referenčné atribúcie, kontaktné popisky a reálne zdrojové súbory. **Navrhované v tomto balíku:** žiadny nový text; `proposedChangesInThisFile` je prázdny zoznam. Rozmiestnenie portrétu, typografia, kompozícia a scroll animácie patria do vizuálnej implementácie rodičovskej úlohy.

Ak náhľad zobrazuje formulár, pôvodný `sourceAction` je iba dokumentácia zdroja. Prenesenie popiskov nedokazuje funkčnosť alebo autorizáciu novej prevádzky formulára. V tejto úlohe sa nič neodoslalo, neobjednalo, nepublikovalo ani nenasadilo.
