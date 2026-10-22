# Layout and scale

Consistent sizing is invisible when it's right and nags when it's wrong. Use a small number of sizes, and make the relationships between them deliberate.

## Spacing scale

Base 4px, mostly 8px steps:

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`

- **Proximity:** space inside a group < space between groups < space between sections. Aim for roughly 1 : 2 : 4 (e.g. 12px between a label and its title, 24px between title and body, 48–64px between blocks, 96–160px between sections).
- **Section padding** is fluid: `--section-y: clamp(72px, 10vw, 160px)`. Luxury and editorial go larger (up to 240px); dense SaaS goes smaller (64–112px).
- **Vary the rhythm.** Alternate dense and airy sections; give a full-bleed "breather" every 2–3 sections. Identical padding everywhere is a sign of a template.

## Containers and gutters

| Container | Width | Use for |
|---|---|---|
| Text | 60–75ch (≈ 640–720px) | Articles, long body copy |
| Content | 1080–1280px | Most sections |
| Wide | 1360–1440px | Hero, galleries, product shots |
| Full bleed | 100vw | Colour blocks, images, marquees |

Gutters: `--gutter: clamp(16px, 4vw, 48px)`, i.e. 16–20px on phones, 24–32px on tablets, 32–64px on desktop. Use the same gutter for the nav, sections and footer, so edges line up all the way down the page.

## Grid

- 12 columns on desktop, 8 on tablet, 4 on phone; column gap 16–32px.
- Prefer **asymmetric splits** (5/7, 4/8, 7/5) over 6/6 for text + media; they feel composed.
- Break the grid on purpose once or twice per page (an image bleeding off the edge, a huge number hanging into the margin). Breaking it everywhere is chaos; never breaking it is a template.
- Use container queries (`container-type: inline-size`, `cqw` units) for components that appear at several widths; media queries for page layout.

## The first screen

- Show what this is, why it matters, and one primary action, plus a visible hint that there's more (the next section peeking in, a tilted band, an overlapping device, a masked fade at the bottom).
- Use `svh` / `dvh` for full-height sections on mobile (`100vh` jumps with the address bar).
- Don't put the whole page's message above the fold. It's the trailer, not the film.

## Radius

Radius is personality. Choose one scale and stick to it:

| Personality | Radii |
|---|---|
| Swiss, brutalist, luxury, editorial | 0–4px |
| Neutral product | 6–10px |
| Friendly, soft | 14–24px |
| Chips, tags, primary buttons (optional) | 999px |

Nested corners: **inner radius = outer radius − padding**, or rounded cards inside rounded cards look wrong.

## Elevation (pick one depth language)

| Language | Recipe | Fits |
|---|---|---|
| Flat + hairlines | `1px` borders at 8–12% ink, no shadows | Swiss, editorial, luxury |
| Soft | layered shadow: `0 1px 2px rgb(0 0 0/.06), 0 8px 24px rgb(0 0 0/.08)` | Friendly, product |
| Hard offset | `6px 6px 0 var(--ink)`, element lifts `translate(-4px,-4px)` on hover | Brutalist, playful |
| Glow | `0 0 40px color-mix(in srgb, var(--accent) 30%, transparent)` | Cinematic dark |
| Glass | `backdrop-filter: blur(12–20px) saturate(160–190%)`, inner 1px ring, translucent fill | Floating chrome only (nav, toasts, pills) |
| Tactile | inset top highlight + inset bottom hairline + outer shadows | Tactile product |

Mixing languages (glass cards beside neumorphic buttons beside flat panels) is the fastest way to look incoherent. Tokenise the offsets and blur values.

## Touch and interaction sizes

- Tap targets ≥ 44×44px (WCAG 2.5.8 minimum is 24px; Apple says 44, Material 48). Expand hit areas with padding or `::after`, not bigger visuals.
- Buttons: height 40–48px desktop, 44–52px mobile; horizontal padding ≈ 1.25–1.75× the height's half.
- Inputs: ≥ 44px tall, 16px+ text on iOS.
- Icons: size to the text they sit with (1–1.25em). One icon set, one stroke width (1.5–2px at 24px).

## Imagery

- Pick 2–3 aspect ratios and reuse them: 16:9 (wide), 4:3 or 3:2 (content), 1:1 (avatars, grids), 4:5 (portrait, great on phones).
- Always set `aspect-ratio` or width/height to prevent layout shift; `object-fit: cover` with a deliberate `object-position`.
- Art-direct with `<picture>`: a different crop for phones, not just a smaller file.
- Hero images: `fetchpriority="high"` and preloaded; everything else `loading="lazy"`.
- Treat photos consistently (same grade, same duotone, same rounding).

## Breakpoints

Content decides, but keep them as tokens and use only those: typically `640 / 768 / 1024 / 1280`, plus one "pin" breakpoint for motion (desktop pins above ~900px wide *and* below ~1300px tall; phones and very tall windows get loops). The JS pin media query and the CSS pinned layout must use the same numbers.

## Density by surface

| Surface | Body | Spacing feel |
|---|---|---|
| Marketing | 17–19px | Airy, large section gaps |
| App / dashboard | 14–16px | Compact (4/8/12 inside components), consistent rows |
| Docs | 16–18px | Text container, generous line-height |
| E-commerce grid | 14–16px | Tight grid, generous product page |

## Z-index scale

`--z-bg: -1 · --z-base: 0 · --z-raised: 10 · --z-sticky: 50 · --z-nav: 100 · --z-overlay: 200 · --z-toast: 300`. Local stacking inside a component can use 1–3. Nothing else.
