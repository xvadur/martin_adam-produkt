# Martin Barczi — živý návrh homepage

Pracovný animovaný prototyp založený na pôvodnom obsahu [onlineasistent.sk](https://www.onlineasistent.sk/) a postupe [Yanis Landing Page Beautifier](../reference/yanis/landing-page-beautifier/landing-page-beautifier/SKILL.md). Vzhľad a pohyb sa posudzujú v prehliadači. Finálna identita ani publikácia nie sú schválené.

## Spustenie

Z koreňa repozitára:

```sh
python3 -m http.server 4395 --bind 127.0.0.1 --directory design/beautifier
```

Otvorte [lokálny náhľad](http://127.0.0.1:4395/). Bez inštalácie balíkov; fonty, fotografie, ikony aj GSAP sú lokálne. Server je viazaný na loopback.

Statický režim: [bez animácií](http://127.0.0.1:4395/?motion=off). Systémové obmedzenie pohybu sa rešpektuje automaticky.

## Čo je implementované

Animovaný osobný úvod so skutočným Martinovým portrétom, všetkých šesť pôvodných služieb, päť krokov spolupráce so scrollovou scénou na desktope, štyri benefity, celý osobný úryvok, tri referencie a kontaktný formulár. Na telefónoch a veľmi vysokých oknách proces nepoužíva pin; jeho dekoráciu možno pozastaviť.

Formulár kontroluje údaje a ponúkne otvorenie pripraveného e-mailu. Sám žiadnu správu neodošle. Detailné služby, blog a certifikáty smerujú na pôvodný web.

## Zdroje a pravidlá

- [Pôvod obsahu a fotografií](CONTENT-SOURCE.md), [presný zdrojový obsah](source/home-content.json).
- [Pracovný brief](REVAMP-BRIEF.md), [dizajnový systém](DESIGN.md), [pohyb a fallbacky](MOTION.md).
- [Odchýlky a otvorené rozhodnutia](REVAMP-LOG.md), [vykonané overenie a snímky](QA.md).
- [Tokeny](tokens.css), [štýly](styles.css), [bežné interakcie](basics.js), [animácie](motion.js).

`index.html` je hotové čitateľné HTML. Zostavuje sa zo zdrojového JSON:

```sh
python3 design/beautifier/build-page.py
```

Pôvodné texty sa v tomto kroku neprepisujú. Zmeny v ponuke, tvrdeniach a hlasovej identite patria do obsahového rozhodnutia s Martinom. Po zmene štýlov alebo modulov zvýšte ich query verziu v `build-page.py`, aby lokálny náhľad nepoužíval starú cache.

## Rozsah

Tento priečinok obsahuje lokálny návrh homepage. Nové podstránky, CMS, publikovanie článkov, digitálne produkty, platby a doručovanie nie sú súčasťou tejto implementácie. Na pôvodný WordPress sa nezapisovalo.
