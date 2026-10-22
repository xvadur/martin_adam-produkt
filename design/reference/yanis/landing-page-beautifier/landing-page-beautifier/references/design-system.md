# Design system

The site has to be coherent underneath the motion: one set of tokens, a small motion vocabulary, shared components, and two short docs that explain them. This file has the token template, the commands that find drift, and the doc templates.

## Token template

Replace the values with the chosen direction's; keep the role names. Tailwind v4 projects can declare these in `@theme`; CSS-in-JS projects can export the same names from a theme object. Either way, one source of truth.

```css
:root {
  /* Colour roles: no raw colours outside this file (see color.md) */
  --c-bg: oklch(0.99 0.004 85);   --c-surface: oklch(0.97 0.006 85);  --c-surface-2: oklch(0.94 0.008 85);
  --c-ink: oklch(0.2 0.01 85);    --c-ink-2: oklch(0.42 0.01 85);     --c-ink-3: oklch(0.58 0.01 85);
  --c-line: oklch(0.2 0.01 85 / .12);  --c-line-2: oklch(0.2 0.01 85 / .22);
  --c-accent: oklch(0.6 0.18 255);     --c-accent-ink: oklch(0.99 0 0);
  --c-accent-soft: color-mix(in oklch, var(--c-accent) 14%, transparent);
  --c-ok: oklch(0.68 0.16 150);  --c-warn: oklch(0.78 0.15 80);  --c-danger: oklch(0.6 0.2 25);
  --c-focus: var(--c-accent);

  /* Type (see typography.md) */
  --font-display: 'Fraunces', ui-serif, Georgia, serif;
  --font-text: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  --fs-display: clamp(3.5rem, min(10vw, 17svh), 11rem);
  --fs-h1: clamp(2.5rem, 1.9rem + 2.6vw, 5.5rem);
  --fs-h2: clamp(2rem, 1.6rem + 1.8vw, 4rem);
  --fs-h3: clamp(1.375rem, 1.25rem + .5vw, 1.875rem);
  --fs-lead: clamp(1.125rem, 1.05rem + .35vw, 1.375rem);
  --fs-body: clamp(1rem, .958rem + .185vw, 1.125rem);
  --fs-small: .875rem;  --fs-label: .75rem;
  --lh-display: .92; --lh-head: 1.1; --lh-body: 1.6;
  --track-display: -0.045em;  --track-head: -0.02em;  --track-label: 0.12em;
  --measure: 65ch;

  /* Space and layout (see layout-and-scale.md) */
  --sp-1: 4px; --sp-2: 8px; --sp-3: 12px; --sp-4: 16px; --sp-5: 24px; --sp-6: 32px;
  --sp-7: 48px; --sp-8: 64px; --sp-9: 96px; --sp-10: 128px;
  --section-y: clamp(72px, 10vw, 160px);
  --gutter: clamp(16px, 4vw, 48px);
  --wrap: 1200px; --wrap-wide: 1440px; --wrap-text: 680px;

  /* Shape and depth: one depth language */
  --r-1: 4px; --r-2: 8px; --r-3: 16px; --r-pill: 999px;
  --shadow-1: 0 1px 2px rgb(0 0 0 / .06), 0 8px 24px rgb(0 0 0 / .08);
  --shadow-2: 0 2px 4px rgb(0 0 0 / .06), 0 20px 48px rgb(0 0 0 / .12);

  /* Layers */
  --z-bg: -1; --z-base: 0; --z-raised: 10; --z-sticky: 50; --z-nav: 100; --z-overlay: 200; --z-toast: 300;

  /* Motion (CSS side; mirror in motion/tokens.ts) */
  --ease-out: cubic-bezier(.16, 1, .3, 1);
  --ease-in-out: cubic-bezier(.65, 0, .35, 1);
  --ease-spring: cubic-bezier(.34, 1.56, .64, 1);
  --dur-1: .15s; --dur-2: .3s; --dur-3: .5s; --dur-4: .8s;
}

/* Breakpoints are tokens too (documented here, used in media queries and in PIN_MEDIA):
   --bp-sm 640 · --bp-md 768 · --bp-pin 900 · --bp-lg 1024 · --bp-xl 1280 */

@media (prefers-reduced-motion: reduce) {
  :root { --dur-1: 0s; --dur-2: 0s; --dur-3: 0s; --dur-4: 0s; }
}
```

Mirror the motion tokens in JS so CSS and the animation library speak the same language:

```ts
// motion/tokens.ts: values per personality in motion.md
export const T = {
  reveal: { y: 32, duration: 0.95, ease: 'power3.out' },
  heading: { yPercent: 115, rotate: 5, duration: 1.05, ease: 'power4.out', stagger: 0.022 },
  pop: { soft: 'back.out(1.3)', normal: 'back.out(1.7)', big: 'back.out(2.4)' },
  scrub: { edge: true, scene: 0.6, soft: 1 },
  start: { reveal: 'top 88%', scene: 'top 75%' },
};
```

## Sub-brand skins

A product or case-study page overrides roles inside a scope, never with literals in components:

```css
.skin-acme { --c-bg: #0c2748; --c-ink: #f4f7ff; --c-accent: #6fa8ff; --font-display: 'Bricolage Grotesque', sans-serif; }
body:has(.skin-acme) { --c-accent: #6fa8ff; } /* so the nav, progress bar and ::selection outside the scope follow */
```

Elements outside the scoped element can't see its custom properties, which is why chrome (scroll-progress bar, nav) needs the `body:has()` lift. Also set the page's `<meta name="theme-color">`.

## Audit inventory

Run during the look-first phase (adjust paths and extensions to the stack). Any count above zero outside the token file is drift worth logging.

```bash
EXT='--include=*.css --include=*.scss --include=*.astro --include=*.tsx --include=*.jsx --include=*.vue --include=*.svelte --include=*.html --include=*.liquid --include=*.php'
# raw colours outside tokens, and the most repeated ones (token candidates)
grep -rnoE '#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|hsla?\([^)]*\)' src $EXT | grep -v tokens | wc -l
grep -rhoE '#[0-9a-fA-F]{6}\b' src $EXT | sort | uniq -c | sort -rn | head -20
# motion vocabulary size
grep -rhoE 'cubic-bezier\([^)]*\)' src $EXT | sort | uniq -c | sort -rn
grep -rhoE "(back|elastic)\.out\([^)]*\)" src | sort | uniq -c
grep -rhoE '@keyframes [A-Za-z0-9_-]+' src $EXT | sort        # same job, different names?
# type, radius, layers, breakpoints sprawl
grep -rhoE 'font-family:[^;]+' src $EXT | sort | uniq -c | sort -rn | head
grep -rhoE 'font-weight:\s*[0-9]+' src $EXT | sort | uniq -c    # compare with weights actually loaded
grep -rhoE 'font-size:\s*[0-9.]+(px|rem)' src $EXT | sort | uniq -c | sort -rn | head -20
grep -rhoE 'border-radius:\s*[0-9]+px' src $EXT | sort | uniq -c | sort -rn
grep -rhoE 'z-index:\s*-?[0-9]+' src $EXT | sort | uniq -c | sort -rn
grep -rhoE '\((max|min)-width:\s*[0-9]+px\)' src $EXT | sort | uniq -c | sort -rn
# risky motion
grep -rnE 'transition:\s*all' src $EXT
grep -rn "import('gsap')\|registerPlugin\|from 'gsap'" src | wc -l   # bootstraps (should be one)
# accessibility basics present at all?
grep -rnE ':focus-visible|::selection|prefers-reduced-motion|skip' src $EXT | wc -l
```

Then read for what grep can't find:
- Brand values that disagree between a data/config file and the page.
- Repeated component families (several chip, pill, phone-frame, pulse-dot or replay-button implementations).
- Components that nothing imports.
- Pages loading their own copies of fonts or the motion library.
- Duplicate layout chrome (two footers).
- Dead ternaries and leftovers.

Log each finding with file:line.

## `DESIGN.md` template

```markdown
# Design system: <site>

## Direction
<preset or blend, two sentences>

## Principles
- <3–5 lines, e.g. "Type does the work; colour means something; one depth language.">

## Tokens
Source of truth: `<path>/tokens.css`. Components use roles only.
| Role | Token | Value | Use for |
|---|---|---|---|

## Type
| Role | Family / weight | Size token | Line-height / tracking | Use for |

## Layout
Containers, gutters, grid, section rhythm, breakpoints.

## Acts (marketing pages)
| Act | Palette roles | Texture | Type voice |

## Components
For each: purpose, anatomy, states (rest / hover / focus / active / disabled / loading), motion tokens, do / don't.

## Sub-brand skins
How a page overrides roles; which chrome follows.

## Do / don't
```

## `MOTION.md` template

```markdown
# Motion: <site>

## Personality
<one line> → tokens in `motion/tokens.ts` and `tokens.css`.

## Vocabulary
| Job | Values | How to use |
|---|---|---|
| Reveal | … | `data-reveal` |
| Headline | … | `data-fx="heading"` |
| Pop | soft / normal / big | |
| Scrub | edge / scene / soft | |

## Kernel
`motion/core.ts` API and the `data-fx` registry (list every registered effect and what it does).

## Page plans
### <page>
| Section | World | Enters via | Signature motion | Phone fallback |

## Adding a scene
1. Markup ships the finished state; add `data-fx="<name>"`.
2. `build()` → paused timeline using tokens and 0..1 custom properties.
3. Desktop: pin + scrub. Phones and tall windows: loop while visible.
4. Controls work under reduced motion (jump to the end).
5. Run the QA checklist.

## Reduced motion
What changes and what stays.
```
