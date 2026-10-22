# Components: the craft details

For each common component: what "default" looks like, and the details that make it feel finished. Pick the ones that fit the direction. Every value comes from tokens.

## Navigation
- Same gutter as the page; logo left, 3–6 plain-language links, one primary action.
- Transparent over the hero, then a glass or solid bar after ~24px of scroll, with a 0.3s transition of background, border and blur.
- Colour adapts to the section underneath (`data-nav-theme` on sections, flipped by a scroll trigger at the nav's height).
- Wrapper `pointer-events: none`, children `auto`, so the empty bar never blocks clicks.
- Optional thin scroll-progress bar in the accent colour (animate `transform: scaleX()`, not `width`).
- Mobile: a full-screen or sheet menu with staggered links; `aria-expanded` on the toggle; body scroll locked while open; Escape closes it.
- `scroll-margin-top` on anchor targets equal to the nav height.

## Hero
- One promise (headline), one line of support, one primary and at most one secondary action, and one visual proof (product, place, person, result).
- An opening sequence (see `motion.md` P1) and a visible hint of the next section.
- Display type capped by viewport height so short laptops don't overflow.
- Two CTAs with different personalities: a filled primary and a quieter secondary (ghost, text link, or an object-like card such as tabs peeking out of a folder).

## Buttons
- At least four states: rest, hover, focus-visible, active, plus disabled or loading where relevant.
- Hover does more than change colour: lift, shadow change, an arrow that nudges (`translate(3px,-3px)`), a fill that sweeps.
- Active presses down (`translateY(1px)` or a smaller shadow).
- Focus ring: `outline: 2px solid var(--c-focus); outline-offset: 3px`, the same everywhere.
- Loading keeps the width (swap the label for a spinner in the same box).
- Icon buttons have an accessible name.

## Cards and features (alternatives to the bordered grid)
- **Poster tiles:** big type, a colour or image fill, and real hover behaviour (lift + shadow, chamfer morph, image zoom with colour returning).
- **Accordion row:** panels share a row; the hovered one grows.
- **Knock-out text** directly on the art, with no container at all.
- **Numbered editorial list:** large numerals, hairline rules, generous space.
- **Living demo per feature:** each feature shows itself working (a typing input, a counter, a toggle) instead of an icon.
- **Deal-in entrance** (rotationX from below, staggered) with `clearProps` afterwards.
- If you do use bordered cards, vary their sizes (bento layout) and give them a hover state with depth.

## Social proof
- Logos: a single-colour (ink at 50–70%) row or slow marquee with edge masks; full colour on hover is optional.
- Testimonials: a real photo, name, role and company; one big quote rather than six small ones; highlight a key phrase with a sweep.
- Numbers: big tabular numerals that count up once, with a unit and a one-line source.
- Case snippets: before → after, with the number that changed.

## Pricing
- 2–4 plans; recommend one visually (scale, border, badge), not with a neon glow.
- Prices in tabular numerals; a monthly/yearly toggle with a sliding thumb and an animated price change (counter or flip).
- Feature lists aligned row by row across plans; ticks and crosses with accessible text.
- The FAQ answers the objections you see in the pricing copy (flag any conflicts in the log).

## Forms
- Labels always visible (no placeholder-only fields); 44px+ inputs; 16px+ text.
- Inline validation on blur with a clear message and an icon, not just a red border.
- Success state as a moment: a check that draws itself, a message, the next step.
- Submit buttons show progress and prevent double submission.

## FAQ / accordions
- `<details>`/`<summary>`, or buttons with `aria-expanded`.
- Animate height with `grid-template-rows: 0fr → 1fr` (no JS height measuring).
- A rotating plus/chevron; one open at a time only if the content is long.

## Media
- Product shots in device frames that match the product (phone, browser, desktop app). One frame component, parameterised.
- Video: poster image, `muted playsinline loop`, `preload="none"` below the fold, paused off-screen, never autoplaying with sound.
- Galleries: consistent ratios, a horizontal snap rail on phones (`scroll-snap-type: x mandatory` + `scroll-padding`), offset items for rhythm on desktop.

## Calls to action and endings
- The last screen is a moment, not a dead stop: a big final headline (a different reveal energy, e.g. random letter rotation), the primary action, and a hand-off (next case study in its own colours, a booking strip, a newsletter).
- Repeat the primary CTA every 2–3 sections on long pages, styled consistently.

## Footer
- Same gutter and grid as the page; grouped links; contact details in plain text (addresses and hours for local businesses, never hidden behind animation).
- Legal links, copyright with the current year generated, not hard-coded.
- Optional: a huge wordmark or a closing marquee as the last visual beat.

## Empty, loading and error states (apps and forms)
- Skeletons that match the real layout; a subtle shimmer (1.4–1.6s linear sweep) that stops under reduced motion.
- Empty states with an illustration or icon, one sentence and one action.
- Errors in plain language, with what to do next.

## Accessibility baseline for every component
- A visible focus state equivalent to every hover state.
- Keyboard operable: Tab order follows the visual order; Escape closes overlays.
- Real elements first (`button`, `a`, `details`, `dialog`), ARIA only to fill gaps.
- Motion respects `prefers-reduced-motion`; auto-advancing content has a pause or stops on interaction.
