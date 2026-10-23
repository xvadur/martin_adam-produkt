# Martin — tri porovnateľné titulné stránky

Adam potvrdil 23. 10. 2026: tri postupne odvážnejšie homepage, rovnaký existujúci obsah a poradie sekcií. Dnešný draft zostáva štvrtou voľbou. GitHub xvadur/martin_adam-produkt, cieľ barczi.xvadur.com.

## Záväzné vstupy

- Obsah: `design/beautifier/source/home-content.json`. Zachovať úplné odseky, 6 služieb, 5 krokov, 4 benefity, osobný úryvok, 3 referencie, kontakt a footer. Nevymýšľať výsledky, čísla, klientov, tváre ani ponuku AI automatizácie.
- Hero má skutočné meno, rolu, pôvodný prísľub a obidve CTA. Martinovo meno môže mať stabilnú typografiu bez pôvodného typewriter efektu. Tvrdenie „11 ročné skúsenosti“ zostáva zdrojové, nie nové potvrdenie počtu rokov; nevytvárať z neho ďalšie čísla.
- Detaily služieb, celý príbeh, certifikáty a blog vedú na pôvodný onlineasistent.sk. Kontaktné CTA smie viesť na lokálny formulár. Formulár iba otvorí pripravený email; nesmie tvrdiť, že správu odoslal.
- Navigácia a potrebné UI sú po slovensky. Pri návrhoch na webe iba malý odkaz „Všetky návrhy“; žiadne implementačné vysvetlenia či designový žargón v produktovom obsahu.
- Fotografie Martina a služieb sú v `showcase/shared/assets/real/`; lokálny Manrope v `showcase/shared/assets/fonts/`. Na fonty a GSAP zachovať licencie v `showcase/shared/licenses/` a `showcase/shared/vendor/`.

## Tri verzie

1. **Osobný / pokojný — `/v1/`**: Minimalist Hero z uloženého 21st komponentu (`source/minimalist-hero.tsx`). Dominantný skutočný portrét, typografia a farebný kruh; kultivované a ľudské. Mierny reveal, pokojné služby, tri dobre čitateľné referencie podľa Studiova, kontaktný footer. Východisko môže zostať blízko teal/mint draftu, ale nie je to záväzná schválená paleta.
2. **Interaktívny — `/v2/`**: hero a kompozičný jazyk AI Automation Agency / Orrin. Použiť skutočné Martinove meno, texty a svoju grafiku jeho práce. Žiadne agentúrne AI tvrdenia ani demo percentá. Prepínateľné služby s názornou animáciou databázy, oslovenia, podpory, chatu, produktov a testovania. Kruhové alebo lineárne 5-krokové vysvetlenie; čitateľný rotátor 3 referencií. Footer s výrazným kontaktom. Primárny vzor https://21st.dev/community/templates/ai-automation-agency-website-template ; live https://21stdev-my-components-one.vercel.app/#long-exposure-agency-template ; source https://github.com/Kedhareswer/21stdev-my-components/tree/main/components/long-exposure-agency-template .
3. **Výrazný / motion — `/v3/`**: hero a rytmus Sillage. Veľké stabilné meno, reálny portrét, rozdielne sekčné kompozície. Sillage služby s portrétom a zvýrazňovaním riadkov; Onda procesná grafika pre 5 krokov, vrstvené referenčné karty so všetkými úplnými citáciami. Veľký kontakt a typografický footer. Primárny vzor https://8bsite.github.io/creative-agency-website-template/ ; source https://github.com/8bsite/creative-agency-website-template ; proces https://github.com/8bsite/design-studio-website-template .

## Implementácia a kontrola

- Výstup sú samostatné statické HTML/CSS/JS stránky v `showcase/v1`, `showcase/v2`, `showcase/v3`; spoločné lokálne médiá v `../shared/`. Existujúci draft je v `showcase/draft`.
- Každá verzia vlastní vlastné súbory a štýly. Žiadne zmeny pôvodného `design/beautifier` ani cudzej varianty. Root spravuje rozcestník, hosting a spoločné assety.
- HTML obsah musí byť čitateľný aj bez JS. Mobilná navigácia funguje, CTA a odkazy fungujú, ovládanie klávesnicou, reduced-motion, žiadny horizontálny overflow.
- Motion vysvetľuje skutočnú prácu. Ilustračné kontakty sú bez osobných údajov; vizualizácia procesu nie je živý klientsky dashboard. Nepoužiť vymyslené KPIs alebo priebehy ako dôkaz.
- Nečíslovať ukážkové výsledky ani nepridávať hviezdičky. Autoplay karuselu len s viditeľným pauza ovládaním; citát nesmie odísť počas čítania.
- Porovnávať s konkrétnou zdrojovou kompozíciou, zachovať pôvod a licencie. Kvalita je vizuálna, nielen technický priechod.
- Agent nesmie commitovať, pushovať ani deployovať. Root overí celý výsledok a vykoná publikovanie.
