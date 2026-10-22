# Typography

Type does most of the work of looking expensive. Good type with no animation beats great animation on bad type, every time.

**Contents:** Choosing families · Pairing · Scale ratios · Fluid sizes · Size targets · Line-height · Tracking · Measure · Weights · Details that read as craft · Hierarchy recipe · Loading · Type in motion · Audit

---

## Choosing families

Give each family a job:
- **Display:** headlines and big numbers. It carries personality.
- **Text:** paragraphs and UI. It carries legibility.
- **Mono (optional):** labels, code, data, technical eyebrows.
- **Accent (optional):** a serif italic or script for one or two words per heading. It is never used for whole sentences.

Most sites need two families plus an optional mono. Editorial sites can use three. If one family has the widths, weights and optical sizes you need, use it alone.

Match the classification to the voice:

| Voice | Classification | Free examples |
|---|---|---|
| Neutral, modern, precise | Neo-grotesk | Inter, Inter Tight, Geist, Switzer (F), IBM Plex Sans |
| Modern with character | Grotesque with quirks | Space Grotesk, Bricolage Grotesque, Familjen Grotesk, Schibsted Grotesk, Cabinet Grotesk (F) |
| Confident, geometric | Geometric sans | Satoshi (F), General Sans (F), Outfit, Plus Jakarta Sans, Manrope |
| Warm, human | Humanist sans | Source Sans 3, Work Sans, Karla, Figtree, Hanken Grotesk |
| Friendly, soft | Rounded | Nunito, Quicksand, Fredoka |
| Literary, premium | Transitional / modern serif | Fraunces, Newsreader, Source Serif 4, Libre Caslon, Erode (F), Sentient (F) |
| Fashion, luxury | Didone / display serif | Playfair Display, DM Serif Display, Cormorant Garamond, Italiana |
| Expressive accent | Serif italic | Instrument Serif, Fraunces Italic, Newsreader Italic |
| Sturdy, grounded | Slab | Zilla Slab, Roboto Slab, Arvo |
| Technical | Mono | JetBrains Mono, Geist Mono, IBM Plex Mono, DM Mono, Space Mono |

(G = Google Fonts unless marked F = Fontshare.)

Prefer **variable fonts**: one file, every weight, and an optical-size axis on families like Fraunces, Newsreader and Inter 4.

## Pairing

- **Contrast in structure, harmony in proportion.** Pair a serif with a sans, or a wide face with a narrow one, but choose faces with similar x-heights so they sit together on a line.
- **One face talks, the other listens.** The display face can be loud; the text face should disappear.
- **Never pair two similar sans faces** (e.g. Inter + Roboto). It reads as a mistake.
- **Accent words:** a serif italic inside a sans headline, sized up `1.05–1.15em` to match the sans x-height, sometimes in the accent colour. Use it once or twice per heading at most.
- **System stacks** are a valid choice for speed and native feel: `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`; `ui-serif, Georgia, serif`; `ui-monospace, SFMono-Regular, Menlo, monospace`. Use `ui-serif` first when the product is an Apple app; it gives you New York.

## Scale ratios

Pick a ratio for the text steps by surface, and treat display sizes as separate, deliberate jumps:

| Ratio | Name | Use for |
|---|---|---|
| 1.125 | Major second | Dense app UI, dashboards |
| 1.2 | Minor third | Product UI, docs |
| 1.25 | Major third | General marketing, most sites |
| 1.333 | Perfect fourth | Editorial, marketing with impact |
| 1.414–1.5 | Augmented fourth / fifth | Poster-like display steps |
| 1.618 | Golden | Top display steps only |

Typical steps from a 17px base at 1.25: 13.6 (small) · 17 (body) · 21 (h4) · 26.6 (h3) · 33 (h2) · 41.5 (h1). Then a display step at 2–4× h1, set by eye.

## Fluid sizes

Use `clamp()` with `rem` + `vw`, so sizes scale with the viewport *and* still respond to browser zoom:

```
slope     = (maxPx - minPx) / (maxVw - minVw)
intercept = minPx - slope * minVw
font-size: clamp(minPx/16 rem, intercept/16 rem + slope*100 vw, maxPx/16 rem)
```

Example (body 16→18px between 360 and 1440px): slope = 2/1080 = 0.00185; intercept = 16 − 0.00185 × 360 = 15.33px → `clamp(1rem, 0.958rem + 0.185vw, 1.125rem)`.

For hero display type, cap by height too, so short laptops don't overflow: `clamp(3.5rem, min(10vw, 17svh), 11.5rem)`.

## Size targets

| Role | Phone | Desktop |
|---|---|---|
| Body (marketing) | 16–17px | 17–19px |
| Body (app UI) | 15–16px | 14–16px |
| Small / meta | 13–14px | 13–14px |
| Uppercase labels / eyebrows | 11–12px | 11–13px |
| H3 | 20–22px | 24–30px |
| H2 | 28–34px | 40–64px |
| H1 | 36–44px | 56–96px |
| Hero display | 44–64px | 88–184px |
| Big numbers / stats | 40–56px | 64–120px |

Never go below 12px for anything meant to be read, or below 16px for form inputs on iOS (smaller inputs make Safari zoom in).

## Line-height

| Size | Line-height |
|---|---|
| Display (>64px) | 0.86–1.0 |
| H1–H2 | 1.0–1.15 |
| H3–H4 | 1.2–1.3 |
| Body | 1.5–1.7 (longer lines need more) |
| UI text | 1.4–1.5 |
| Uppercase labels | 1.1–1.3 |

Use unitless values. Display type below 1.0 needs `padding-bottom: .08em` on clipped reveal wrappers so descenders survive.

## Tracking (letter-spacing)

The bigger and heavier the type, the tighter it should be. The smaller and the more capitals, the looser:

| Case | Tracking |
|---|---|
| Display 800–900 weight | −0.045 to −0.065em |
| Display 400–700 | −0.02 to −0.04em |
| H2–H3 | −0.01 to −0.03em |
| Body | 0 (fonts are spaced for it) |
| Small text (<14px) | +0.005 to +0.01em |
| Uppercase labels | +0.06 to +0.16em (luxury up to +0.3em) |
| Mono labels | +0.04 to +0.12em |

Keep a short list of tracking tokens (e.g. `--track-display`, `--track-head`, `--track-label`). Twelve slightly different values is drift.

## Measure (line length)

- Body: 60–75 characters (`max-width: 65ch`). Hard limits: 45–90ch.
- Lead paragraphs: 50–60ch at a larger size.
- Headlines: 12–20 characters per line reads as designed; use `text-wrap: balance`.
- Captions and side notes: 30–45ch.

## Weights

- Load only the weights you use (check that every `font-weight` in the CSS exists in what you load; missing weights get synthesised and look smeared).
- 3–4 weights per family is plenty: e.g. 400 text, 500 UI, 600–700 headings, 800–900 display.
- Hierarchy needs a visible weight gap: at least 200 units between body and headings, or a family change.
- Light weights (300) only at large sizes or on luxury directions, never for small grey text.

## Details that read as craft

- `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs (no orphans).
- `font-variant-numeric: tabular-nums` on counters, prices in tables, timers and stats, so digits don't jitter. Old-style numerals (`oldstyle-nums`) in editorial body text.
- `font-optical-sizing: auto` for variable fonts with an `opsz` axis.
- `font-feature-settings`: turn on the font's nicer alternates where they exist (`ss01`, `cv11` for Inter's single-storey a, `case` for punctuation that sits right next to capitals).
- `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale` on light-on-dark text.
- `hanging-punctuation: first` (Safari) for pull quotes; or a negative text-indent on opening quotes.
- Links: `text-underline-offset: .2em; text-decoration-thickness: 1px` (or `from-font`), and a colour shift on hover.
- `hyphens: auto` with a correct `lang` attribute for narrow columns in long-word languages.
- Curly quotes, real apostrophes, en and em dashes: flag straight quotes in the log. Typographic fixes inside copy are still the owner's call.
- Uppercase only for short labels; never for paragraphs.
- `::selection` in the brand accent with readable ink.

## Hierarchy recipe

Each level should differ from its neighbours by at least **two** of: size, weight, colour, case, family. A typical marketing stack:

1. **Eyebrow:** 11–12px, uppercase, +0.12em, mono or sans, accent or muted colour.
2. **Headline:** display family, 2–4× body size, tight tracking, ink colour, balanced wrap.
3. **Lead:** 1.15–1.3× body, secondary ink, 50–60ch.
4. **Body:** text family, primary or secondary ink.
5. **Meta:** small, muted, often tabular.

## Loading

- One font source. Self-host (best) or a single CDN; preconnect if using a CDN.
- `preload` the one or two files used above the fold (`<link rel="preload" as="font" type="font/woff2" crossorigin>`).
- `font-display: swap` for display and body (or `optional` for body when layout stability matters most).
- Prevent layout shift with **fallback metric overrides**: an `@font-face` for a local fallback with `size-adjust`, `ascent-override`, `descent-override` and `line-gap-override` tuned to the web font. Tools: Capsize, Fontaine; `next/font` and Astro's font tooling do it automatically.
- Subset to the languages you need. Aim for ≤4 font files on first paint.
- Re-measure scroll animations after fonts load (`document.fonts.ready`); text width changes move trigger positions.

## Type in motion

- Split into letters only at display sizes, and only for one or two headings per page. Split body text into words at most, and only for reading-paced reveals.
- Keep words unbreakable when splitting (`inline-block; white-space: nowrap` word wrappers).
- Keep the accessible name: `aria-label` on the parent with the full text, `aria-hidden` on the spans.
- Release `will-change` after one-off reveals; hundreds of promoted letters cost memory.
- Animating `letter-spacing` or `font-size` causes layout work. Use it only on a small, contained element, as a deliberate moment.

## Audit

```bash
grep -rhoE "font-family:[^;]+" src | sort | uniq -c | sort -rn | head      # stacks repeated instead of tokenised
grep -rhoE 'font-weight:\s*[0-9]+' src | sort | uniq -c                      # compare with weights you load
grep -rhoE 'font-size:\s*[0-9.]+(px|rem)' src | sort | uniq -c | sort -rn    # size sprawl (more than ~10 distinct = no scale)
grep -rhoE 'letter-spacing:\s*-?[0-9.]+em' src | sort | uniq -c | sort -rn   # tracking sprawl
grep -rhoE 'line-height:\s*[0-9.]+' src | sort | uniq -c | sort -rn
```
