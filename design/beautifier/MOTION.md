# Motion — Martinov lokálny návrh

Pracovná implementácia podľa lokálne dodaného Yanis Landing Page Beautifier, najmä `references/motion-kernel.md`, `motion.md` a `qa-checklist.md`. Pohyb nemení pôvodné texty a fotografie. Tento dokument nepotvrdzuje vizuálne prijatie, dokončený brand book ani nasadenie.

## Zapojenie a základný stav

V HTML načítať `<script type="module" src="./motion.js"></script>`. Skript až pri povolenom pohybe postupne načíta lokálne `vendor/gsap.min.js` a `vendor/ScrollTrigger.min.js`; cieľová dodaná verzia je GSAP 3.15.0. Žiadny CDN ani nový server. Vendor loader má časový limit osem sekúnd na súbor a pri chybe zostane statická stránka.

Hotový čitateľný stav musí byť v HTML/CSS. Žiadne globálne `opacity:0` pre `[data-reveal]`. Skript nastavuje začiatky až po načítaní GSAP, čaká na fonty najviac 1 800 ms a po fontoch, obrázkoch, `load` aj `pageshow` obnovuje meranie. Každý blok má vlastný GSAP context a cleanup; chyba jedného bloku neblokuje ostatné.

Inline intro gate v head môže pridať `x-intro` (podporované je aj `motion-intro`) a skryť **iba** `[data-intro]` v hero. Musí rešpektovať `prefers-reduced-motion` aj query `motion=reduce|off` a sám odstrániť gate po približne 2,6 sekundy. Modul odstráni gate v rovnakom JS kroku, keď pripraví úvodný stav. Ak gate už zmizol alebo je stránka obnovená nižšie, úvod sa neopakuje. Bez JS je celý obsah čitateľný.

## Markup a pohyb

| `data-fx` | Vnútorné prvky | Správanie |
| --- | --- | --- |
| `hero` | `[data-hero-title]`, `[data-hero-name]`, `[data-intro]`, `[data-hero-photo]`, `.hero-photo-wrap` | Titul sa otvorí maskou, meno sa krátko prisunie a fotografia ustáli mierku. Popis/akcie vstúpia s prekrývajúcimi sa cue bodmi. Pri odchode sa title/name posunú nahor najviac o 8 % svojej výšky, fotografia nadol o 6 % s miernym overscanom v clipping wrapperi. CTA zostáva na mieste. |
| `services` | `article.service-row`, `[data-service-media]`, `[data-service-text]`, `[data-reveal]` | Fotografia sa otvorí vertikálnou maskou a má jemný scroll offset; text sa prisunie zo strany. |
| `process` | `.process-pin`, `.process-number`, `.process-progress`, `.process-step`, `[data-process-toggle]` | Jedna spoločná časová os riadi číslo, zvýraznenie kroku a progress. Text všetkých krokov zostáva celý čas čitateľný. |
| `story` | `[data-story-photo]`, `[data-reveal]` | Bočné otvorenie fotografickej masky a pokojné vstupy obsahu. |
| `reveal` | `[data-reveal]` | Jednorazový krátky vstup, aj pri preskočení kotvou alebo rýchlom scrollovaní. |
| `transition` | `[data-transition-shape]` | Iba dekorácia: striedanie vertikálneho odhalenia a iris masky, bez zakrývania textu. Voliteľné `data-transition="wipe|iris"` určí konkrétny typ. |

Efekty vyhľadávajú iba v svojom bloku. Na rovnaký vnorený obsah nedávať ďalšie `data-fx`, ak by animoval tie isté uzly. Hero `[data-intro]` majú byť jednotlivé obsahové časti, nie spoločný nadradený wrapper celej sekvencie.

Hero exit scrub vzniká až po intro; pri preskočenom úvode je dostupný hneď. Má vlastný cleanup context. Textový posun sa obmedzí zostávajúcim priestorom nad textom v hero. Fotografia sa animuje iba pri existujúcom `.hero-photo-wrap`, ktorý obsahuje `[data-hero-photo]`; wrapper orezáva presah a neobsahuje CTA. Jeho trigger má ID `martin-hero-exit`.

## Podpisová procesná sekcia

Desktopový pin platí pri šírke od 901 CSS px a výške najviac 1 300 CSS px, **iba ak celá `.process-pin` vojde do výšky viewportu mínus horný offset**. Offset sa číta z `--motion-pin-top`, potom `--nav-h`, záloha je 88 px. Pin začína pod touto pevnou navigáciou a jeho ScrollTrigger má ID `martin-process-signature` pre QA. Dĺžka scrubovania sa odvodzuje z výšky scény, viewportu a počtu krokov. Natívne scrollovanie zostáva zachované; nepoužíva sa scroll hijack ani smooth-scroll knižnica.

Na mobile, veľmi vysokom okne alebo pri príliš vysokej scéne sa tá istá časová os opakuje v reálnom čase. IntersectionObserver ju spustí iba pri viditeľnej sekcii. Skrytá karta, odchod mimo sekcie, používateľská pauza alebo zmena na reduced motion ju zastaví. Pause button sa objaví len v tomto režime; mení príkaz Pozastaviť/Spustiť a podporuje voliteľné `data-pause-label` / `data-play-label`. Nepoužíva meniace sa pomenovanie súčasne s `aria-pressed`. Klikací handler sa pripája pred kontrolou pohybu. Číselná dekorácia a progress musia mať `aria-hidden="true"`; kópia krokov sa neoznamuje opakovane čítačke.

Aktívny krok má `.is-current` a `--step-active: 1`, ostatné `0`; sekcia má `--process-p` od 0 do 1. CSS môže meniť ozdobu, farbu alebo linku, **nesmie znepriehľadniť, zakryť ani odsunúť text neaktívnych krokov**. `.is-pinned` a `.is-loop` patria iba aktívnemu enhancementu. Pri zmene veľkosti sa režim opäť posúdi; ResizeObserver zachytí aj zmenu výšky obsahu.

## Tokeny a vlastníctvo transformácií

Root CSS tokeny: `--motion-reveal` (záloha 0.95 s), `--motion-hero` (1.2 s), `--motion-scene` (10 s), `--motion-stagger` (0.08 s), `--ease-reveal` (`power3.out`), `--ease-hero` (`power4.out`). Durácie môžu byť v sekundách alebo milisekundách. Easing prijíma GSAP názov alebo CSS `cubic-bezier(...)`. Záložné hodnoty a malé geometrické rozsahy sú centralizované v tomto module; vizuálnu paletu modul nedefinuje.

GSAP riadi transformácie, opacity a clip-path. Na riadených uzloch vypne CSS transition; hover efekt preto patrí na iný vnorený uzol. Neanimuje rozloženie cez width/height/top/left. Úvod uvoľní dočasné transformácie po skončení. Procesný scrub používa vyhladenie 0.55, dekoratívne prechody a fotografický offset sledujú scroll priamo.

## Režimy a overenie

`?motion=reduce` a `?motion=off` nenačítajú knižnice a zachovajú finálnu statickú stránku. Reálna zmena `prefers-reduced-motion` priebežne zruší enhancement, piny, triggery a slučky. Po návrate možno enhancement obnoviť bez opakovania hero intro.

`window.__motionStatus` obsahuje iba `{ ready, mode, errors }`. Režimy: `starting`, `enhanced`, `reduced`, `off`, `static`; chyby sú stručné názvy bloku/loadera, bez obsahu formulárov alebo osobných údajov.

Implementačne overené: syntax modulu a izolovaný štart pre `off`, `reduce`, systémové reduced motion a úspešne dostupné vendor objekty; odblokovanie intro gate a výsledný status bez chýb. Pred prijatím musí vlastník celého HTML/CSS preveriť v reálnom browseri 1440×900, 1280×720, 375×812 a 1440×1600; reduced motion aj jeho živú zmenu; JS off; 4× CPU throttle; rýchly scroll, kotvy a reload v strede; pohyb iba na obrazovke a pauzu v skrytej karte; čitateľnosť všetkých piatich krokov a absenciu orezania pri pine. Bez týchto testov nejde o potvrdenú vizuálnu ani funkčnú QA celej stránky.
