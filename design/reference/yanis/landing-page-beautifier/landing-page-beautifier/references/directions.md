# Design directions

Nine complete directions. Each one decides type, scale, palette, shape, depth, texture, imagery and motion together, so the result is coherent rather than a collage. Pick one, or blend two and say which parts come from which (e.g. "Editorial type and palette, Cinematic motion").

All fonts listed are free for commercial use: Google Fonts (G) or Fontshare (F). Check licences again before shipping anything else. Values are starting points; tune them to the brand.

**Contents:** 1 Cinematic Dark · 2 Editorial · 3 Swiss / Technical · 4 Soft & Friendly · 5 Playful · 6 Brutalist · 7 Luxury Minimal · 8 Warm Crafted · 9 Tactile Product

---

## 1. Cinematic Dark
**Good for:** personal brands, agencies, launches, portfolios, AI and dev products that want drama.
- **Type:** heavy neo-grotesk display (800–900) with tight tracking, plus a serif italic accent for single words. Pairings: Inter Tight (G) + Instrument Serif (G) · Geist (G) + Instrument Serif · Satoshi (F) + Erode (F) · Bricolage Grotesque (G) solo. Mono for labels: JetBrains Mono (G), Geist Mono (G).
- **Scale:** body 17px, ratio 1.25 for text steps, a separate display step up to `clamp(56px, min(10vw, 17svh), 180px)`. Display tracking −0.05 to −0.065em, line-height 0.86–0.95.
- **Palette:** near-black base (#050505–#0d0d0d) tinted toward the accent hue, off-white ink (#f0f0f0), one electric accent (cyan, lime, orange, violet), muted greys for secondary text. Light "acts" (paper, blueprint) can interrupt the dark for contrast.
- **Shape and depth:** small radii (6–12px) or chamfered corners via `clip-path`; glow instead of shadow (`0 0 40px` accent at 20–40%); glass for floating chrome.
- **Texture:** starfields, grain, faint grids, light streaks.
- **Imagery:** product on dark, duotone or desaturated photos that turn colour on hover, recreated UI.
- **Motion:** cinematic. `expo.out` / `power4.out` entrances at 1–1.6s, letter-rise headlines, a hero that assembles like film titles and dismantles on scroll, pinned product scenes, act transitions (diagonal wipe, iris). Pops `back.out(1.7)`.
- **Avoid:** neon everywhere; low-contrast grey body text; more than one glowing element per viewport.

## 2. Editorial
**Good for:** wellness, premium services, publications, consultancies, nonprofits, books, architecture.
- **Type:** high-contrast serif display with a quiet sans or serif for text. Pairings: Fraunces (G) + Inter (G) · Newsreader (G) + Source Sans 3 (G) · Instrument Serif (G) + Geist (G) · Playfair Display (G) + Lato (G) · Erode (F) + Switzer (F). Small caps or tracked uppercase for kickers.
- **Scale:** body 18–19px (reading comfort), ratio 1.333, display up to 96–128px, line-height 1.0–1.1 for display, 1.6–1.7 for body. Measure 62–70ch.
- **Palette:** warm off-white paper (#f6f3ee, #f2efe8), soft ink (#1d1b18), one muted accent (oxblood, forest, ochre, ink blue). Optional dark "night" section.
- **Shape and depth:** square or barely rounded (0–4px); hairline rules instead of boxes; almost no shadows.
- **Texture:** paper grain, generous whitespace, drop caps, pull quotes, numbered sections (§, I, II).
- **Imagery:** large art-directed photography, full-bleed or offset; captions in small caps.
- **Motion:** calm. `power2.out` at 1.4–2.2s, reading-paced word reveals (`scrub: 1–1.2`), slow parallax on images, hairline rules that draw in. Little or no overshoot.
- **Avoid:** bouncy pops; more than two type families; centring long paragraphs.

## 3. Swiss / Technical
**Good for:** dev tools, B2B SaaS, data, infrastructure, fintech, research.
- **Type:** neutral grotesk with a mono companion. Pairings: Inter (G) + JetBrains Mono (G) · Geist (G) + Geist Mono (G) · IBM Plex Sans (G) + IBM Plex Mono (G) · Switzer (F) + DM Mono (G).
- **Scale:** body 16px, ratio 1.2 (text) and 1.25 (marketing heads), display 56–88px, tracking −0.02 to −0.035em. Labels in mono uppercase at 11–12px, +0.08 to +0.12em.
- **Palette:** white or near-black base, ink, 2–3 greys, one functional accent (blue, green, orange) plus semantic states. Colour means something.
- **Shape and depth:** 4–8px radii, 1px hairlines at 8–12% ink, flat or very soft shadows. Strict 12-column grid with visible alignment.
- **Texture:** dot grids, coordinates, diagrams, code blocks with real syntax colours.
- **Imagery:** real UI (recreated in HTML where possible), diagrams, terminal sessions.
- **Motion:** precise. `power3.out` at 0.6–0.9s, small travel (y 16–24), typing and terminal effects, counters, flow lines drawing between nodes, scrubbed diagrams. Pops `back.out(1.4)` at most.
- **Avoid:** decorative illustration with no information in it; rounded-bubbly UI; slow easing.

## 4. Soft & Friendly
**Good for:** consumer apps, health, education, community, family products, onboarding-heavy SaaS.
- **Type:** rounded or humanist sans. Pairings: Nunito (G) + Nunito Sans (G) · Plus Jakarta Sans (G) solo · Figtree (G) solo · General Sans (F) + Satoshi (F) · Quicksand (G) for display with Inter for text.
- **Scale:** body 17px, ratio 1.25, display 48–80px, tracking −0.01 to −0.025em, line-height 1.1 for heads.
- **Palette:** light base with soft tints (pastel surfaces), one saturated friendly accent, plenty of white. Coloured sections as full-bleed blocks.
- **Shape and depth:** large radii (16–28px), pill buttons, soft layered shadows (`0 1px 2px` + `0 12px 32px` at 6–10%).
- **Texture:** blobs that morph slowly, gentle gradients, emoji or doodle accents used sparingly.
- **Imagery:** friendly photography, phone mockups, soft 3D or flat illustration.
- **Motion:** bouncy but kind. 0.5–0.9s, `back.out(1.6–2)` pops, floating chips with desynced bobs, phone demos that tap and scroll themselves.
- **Avoid:** childishness for adult products; too many pastels with no anchor colour.

## 5. Playful
**Good for:** kids, games, creator tools, events, food and drink brands with personality.
- **Type:** chunky rounded display with a clean text face. Pairings: Fredoka (G) + Inter (G) · Bricolage Grotesque (G) heavy + Figtree (G) · Clash Display (F) + Satoshi (F) · Gluten (G) for tiny accents only.
- **Scale:** body 17–18px, ratio 1.333–1.5 for display jumps, line-height 1.0–1.05 for display; letters can be individually coloured.
- **Palette:** 4–6 bright brand colours scattered across elements (not stacked as adjacent stripes, which reads as a flag), a solid ink colour and a light base.
- **Shape and depth:** chunky 3D buttons (`box-shadow: 0 6px 0 <edge>`, pressing down on click), stickers with tilts, thick outlines.
- **Texture:** doodles via CSS masks so they recolour, confetti on success moments.
- **Imagery:** characters, mascots, illustrated scenes.
- **Motion:** squash and stretch (`scaleX .6→1.1, scaleY 1.25→.9`, then settle with `elastic.out(1, .5)`), `back.out(2–3)` pops, sticker slaps with ±14° rotation, wiggles on hover.
- **Avoid:** motion on every element at once; illegible display fonts for body text.

## 6. Brutalist / Raw
**Good for:** creative studios, culture, music, fashion-adjacent brands, zines, manifestos.
- **Type:** grotesk at extreme sizes, or mono everything. Pairings: Space Grotesk (G) + Space Mono (G) · Archivo (G) wide and condensed widths · Familjen Grotesk (G) + JetBrains Mono (G) · Cabinet Grotesk (F).
- **Scale:** dramatic contrast. Body 16px against display up to 20–25vw. Ratio 1.5–1.618 at the top steps. All caps allowed for display.
- **Palette:** black, white and one loud colour (acid green, safety orange, pure red), or the raw system colours.
- **Shape and depth:** 0 radius, thick borders (2–3px), hard offset shadows (`6px 6px 0`), visible grid lines, overlapping elements.
- **Texture:** halftone, photocopy noise, marquees, stamps.
- **Imagery:** high-contrast black-and-white, cut-outs, scans.
- **Motion:** abrupt and confident. Hard cuts, `steps()` glitches, lift + hard-shadow hovers, marquees, text that scrambles and decodes.
- **Avoid:** accidental ugliness (broken alignment that isn't deliberate); unreadable contrast.

## 7. Luxury Minimal
**Good for:** hospitality, fashion, jewellery, real estate, high-end services, architecture.
- **Type:** refined serif or light wide sans, lots of tracking on small caps. Pairings: Cormorant Garamond (G) + Jost (G) · Libre Caslon Display (G) + Inter (G) light · Italiana (G) + Montserrat (G) light · Sentient (F) + Switzer (F).
- **Scale:** body 16–17px at weight 300–400, ratio 1.333–1.414, display 64–120px at light weights. Kickers in uppercase at +0.2 to +0.3em.
- **Palette:** ivory, stone, charcoal, black; one metallic or deep accent (champagne, bronze, bottle green) used rarely.
- **Shape and depth:** square corners, hairlines, almost no shadow; generous margins (section padding 160–240px on desktop).
- **Texture:** large photography carries the page; subtle grain at most.
- **Imagery:** full-bleed, slow, art-directed; portrait ratios (4:5) on mobile.
- **Motion:** slow and silky. Image reveals with `clip-path` over 1.4–2s, slow scale (1.08→1 over 2–3s), gentle parallax, cursor-following image previews on lists. No bounce.
- **Avoid:** busy layouts, many colours, playful easing, discount-style badges.

## 8. Warm Crafted
**Good for:** restaurants, cafés, bakeries, local businesses, makers, outdoor and travel brands.
- **Type:** characterful serif or slab with a warm sans; a hand-script accent only for one or two words. Pairings: Recoleta-style feel via Fraunces (G, soft + wonky axes) + Work Sans (G) · Zilla Slab (G) + Karla (G) · DM Serif Display (G) + DM Sans (G) · Caveat (G) for handwritten notes.
- **Scale:** body 17–18px, ratio 1.25–1.333, display 56–96px.
- **Palette:** earthy, food-adjacent (terracotta, olive, mustard, cream, deep brown), sampled from the business's real photos.
- **Shape and depth:** medium radii (8–14px), paper and card textures, tape and sticker details, slight rotations.
- **Texture:** paper grain, illustrated borders, stamps, menus that look printed.
- **Imagery:** real photos of the food, place and people, warm grade. Never stock.
- **Motion:** friendly and grounded. 0.7–1.1s `power3.out`, items that "place down" with a small rotation, a menu or map as the signature scene, hours and "open now" indicators that pulse gently.
- **Avoid:** tech-startup gradients; hiding the address, hours or booking under animation.

## 9. Tactile Product
**Good for:** productivity tools, finance apps, hardware, premium utilities, anything that wants to feel like a physical object.
- **Type:** precise sans with a warm serif for numerals or quotes. Pairings: DM Sans (G) + Fraunces (G) numerals · Hanken Grotesk (G) + Newsreader (G) · Manrope (G) + JetBrains Mono (G).
- **Scale:** body 16–17px, ratio 1.25, display 56–96px, tabular numerals everywhere numbers change.
- **Palette:** stone or paper neutrals with one brass, amber or indigo accent; an optional night mode section.
- **Shape and depth:** keycaps and wells. Layered shadows with an inset top highlight, an inset bottom hairline and outer shadows (`--raise`, `--key`, `--well` tokens). 10–16px radii, pressed states that move down 1–2px.
- **Texture:** fine grain, embossed or debossed text, engraved rules.
- **Imagery:** recreated product UI with real interactions, device frames.
- **Motion:** physical. Presses, toggles that click into place, rings and gauges that fill, counters, orbit or carousel motion with depth (scale, blur and opacity by distance).
- **Avoid:** mixing glass, neumorphism and flat in one page; skeuomorphism heavy enough to hurt legibility.

---

## Blending rules
- Take **type and palette** from one direction and **motion** from another, never type from two.
- Keep **one depth language** per site (flat, soft, hard offset, glass or tactile).
- If sub-pages (case studies, products) each wear their own brand, the shell (nav, footer, the main pages) stays in the main direction, so the site still feels like one place.
