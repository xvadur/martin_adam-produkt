# Motion

The menu of techniques, ranked by how much each one defines the feel, with working values. Values are written for GSAP + ScrollTrigger, but the ideas translate to any library (see the adapters in `motion-kernel.md`).

- **Primary:** signature techniques. A marketing page needs one or two.
- **Secondary:** supporting polish that makes the primaries feel deliberate.
- **Tertiary:** details nobody consciously notices. They're why the site feels expensive rather than just "animated". Make them your default way of writing code.

**Contents:** Five ideas · Personality tables · Section transitions · Primary · Secondary · Tertiary · Using the catalog

---

## Five ideas underneath everything

1. **The background is a stage; the content performs on it.** Themes can be fixed layers that change *under* normally scrolling content, so scrolling feels like travelling between worlds.
2. **Every boundary gets its own transition.** Repeating one transition is what makes sites feel templated.
3. **State is a 0..1 number on a CSS custom property.** The library tweens `--p`, `--on`, `--done`, `--draw`; CSS turns them into visuals with `calc()` and `color-mix()`. Scrubbing backwards is free.
4. **One timeline, two drivers.** Each scene is written once as a paused timeline. Desktop scrubs it with a pin; phones loop it in real time while it's on screen.
5. **The finished state ships in HTML.** JS only adds hidden "from" states after the library loads. Nothing can get stuck invisible.

## Personality tables

| Token | Calm / editorial | Playful | Technical | Cinematic |
|---|---|---|---|---|
| Reveal | `y 22, 1.6s, power2.out` | `y 30, .7s, back.out(1.6)` | `y 20, .7s, power3.out` | `y 32, .95s, power3.out` |
| Headline | words fade 1.4s, stagger .08 | letters pop `back.out(2)`, stagger .03 | letters `power3.out .8s`, stagger .02 | letters rise from mask `power4.out 1.05s`, stagger .022, rotate 5° |
| Pop | none, use a fade | `back.out(2.4)` + squash/stretch | `back.out(1.4)` | `back.out(1.7)` |
| Scrub smoothing | 1–1.5 | .4 | .5 | .5–.7 (edges that track scroll: `true`) |
| Element stagger | .15–.22 | .05–.07 | .05–.08 | .08–.12 |
| Hover | 0.6s, no overshoot | springy (`cubic-bezier(.34,1.56,.64,1)`) | 0.15–0.25s | lift + shadow or glow, `cubic-bezier(.16,1,.3,1)` 0.45s |
| Ambient loops | slow drift 14–22s | bobs 3–6s | data ticks, flow dashes | starfields, comets, marquees 38–70s |

Keep at most three overshoot strengths per site (e.g. soft 1.3, normal 1.7, big 2.4). Drifting to a dozen different values is noise.

---

## Section transitions

Choose per boundary. Never use the same one twice in a row on a page.

| Transition | How | Feels |
|---|---|---|
| **Diagonal wipe** | A full-screen layer rotated by `atan2(h*0.3, w)` with an inner layer counter-rotated by the same amount, so the content stays still while a diagonal edge sweeps. Scrub `true` (1:1, no lag), `ease: 'none'`, repaint on refresh. Transform-only, so it stays smooth. | Physical, dynamic |
| **Paper edge + scan line** | On each scroll update: `clip-path: inset(${clamp(section.top, 0, innerHeight)}px 0 0 0)` on a fixed layer; a 2px line with a soft halo rides the edge and fades. | A sheet printing or sliding up |
| **Circular iris** | `clip-path: circle(0% at 50% 100%) → circle(150% at 50% 100%)`, `scrub: .5`. | A bloom; soft |
| **Hard colour-block cut** | Full-bleed sections in contrasting colours, with a "breather" band between dense ones. | Editorial, confident |
| **Background colour tween** | During a pinned scene, tween the section background from one palette to the next in the same beat as the content changes. | A brand or mood shift |
| **Curtain lift** | The next section is `position: sticky; top: 0` underneath; the current one scrolls away like a card. | Layered, deck-of-cards |
| **Horizontal hand-off** | A pinned horizontal strip; the last panel's colour becomes the next section's background. | Journey |
| **Horizon split** | A pseudo-element from mid-section downwards paints a second palette (day/night, before/after) behind content. | Narrative contrast |
| **Brand hand-off panel** | The end of the page shows a panel in the *next* page's colours (next case study, next product). | Leaving into somewhere |
| **Reduced motion** | Same palettes, switched discretely at `top 55%` via a toggle instead of animated. | Story kept, motion removed |

Implementation pattern: a fixed `.themes` layer (`position: fixed; inset: 0; z-index: -1`) holding one hidden layer per act; a `has-themes` class on `<html>` turns it on only when JS is running; without it, each section paints its own background.

---

## PRIMARY

**P1. Hero as an opening title sequence.** One timeline with overlapping cue points, not chained delays:
- Panels or images clip open (`clipPath: inset(100% 0 0 0) → inset(0)`, 1.2s `expo.out`, stagger .09).
- Art settles (`yPercent 18, scale 1.08 → 0, 1`, 1.6s). Then `clearProps: 'transform'` so hover transforms are free afterwards.
- Headline letters rise from a mask (`yPercent 110`, 1s `power4.out`, stagger .03) at t≈0.45.
- Body and CTAs fade up (`y 16`, .7s, stagger .04) at t≈0.9.

On scroll (desktop), the hero dismantles in reverse with `scrub: .5`. Use `fromTo` + `immediateRender: false` so an early scroll doesn't capture a half-finished intro.

**P2. The next section peeks in.** The first screen must never look like the whole page:
- A band or marquee starts tilted (−4° to −6°) and lifted so about two-thirds of it sticks up above the fold. It straightens to 0° as you scroll (`scrub: true`, function-valued lift with `invalidateOnRefresh`).
- Or the hero bottom dissolves: `mask-image: linear-gradient(to bottom, #000 58%, transparent 97%)`.
- Or a device overlaps the next section with a negative margin.

**P3. Letter-rise headlines.**
- Split into word wrappers (`inline-block; overflow: hidden; white-space: nowrap`) holding character spans.
- Tween: `yPercent 110–118, rotate 5–7°, opacity 0` → rest; 1.05–1.3s, `power4.out` or `expo.out`, stagger .022–.04; trigger `top 88%`, once.
- Word padding `.06em .02em .12em` with matching negative margins keeps descenders and italics unclipped.
- Variant for a final call to action: random rotation ±15°, `y 40`, stagger .015.

**P4. Reading-paced sentence.** Words start at `opacity .13` and light up in order: `stagger .1–.12, ease: 'none'`, `scrub: .5`, `top 80% → bottom 45%`. A highlight underline or accent bar draws at the end of the same timeline. Calm brands: stagger .5, `scrub: 1.2`, with a slow parallax image behind.

**P5. Pinned product story.**
- `build()` returns a paused timeline.
- Desktop: `ScrollTrigger.create({ trigger, start: 'top top', end: '+=200–260%', pin, scrub: .6, animation: tl, anticipatePin: 1 })`.
- Phones and very tall windows: wrap it in `timeline({ repeat: -1, repeatDelay: 1 }).add(tl.tweenFromTo(0, tl.duration(), { ease: 'none' }))` and play it only while visible.
- Text that can't be tweened (phase labels, counts) is derived from the playhead in `onUpdate`, guarded so it only writes on change.
- Finish with an empty hold tween (`tl.to({}, { duration: .9 })`) so the final state stays on screen.

Story ideas by domain:
- SaaS: problem → product working → result.
- Restaurant: ingredients → dish → table.
- Agency: brief → process → launch.
- Nonprofit: one person's story with numbers rising.
- E-commerce: product exploded into parts, then reassembled.
- Service: before → during → after.

**P6. State as 0..1 custom properties.**
- Tween `--p`, `--on`, `--ok`, `--draw`.
- CSS: `scaleX(var(--p))`, `color-mix(in srgb, var(--c-danger) calc(var(--bad)*100%), var(--c-ok))`, `stroke-dashoffset: calc(100 - var(--p)*100)` on a `pathLength="100"` path, `background-size: calc(var(--m)*100%) 100%` for highlighter sweeps.
- Register the ones you animate with `@property` when you need real interpolation of colours or angles.

**P7. Living recreations instead of screenshots.** Rebuild the product's UI (or the menu, the booking form, the dashboard) in HTML/CSS and let it act:
- **Typing:** tween a counter and slice a string, writing only when the length changes. It's scrub-safe and reversible. Stream AI replies word by word.
- **Fake taps:** add a pressed class for about 220ms plus a soft "finger" dot that scales up and fades.
- **Toasts** that pop with `back.out(1.7)` and auto-dismiss. Kill previous tweens first so they don't stack.
- **Ambient UI events:** counters, clock changes, typing indicators, a notification that buzzes (`x: 5, .06s, repeat: 5, yoyo`).
- **Playback:** play once on scroll-in plus a **Replay** button calling the same idempotent `play()` (reset, kill, rebuild).
- **Honesty:** label it "Recreated with demo data" when it isn't the live product.

**P8. Sub-pages wear their subject's brand.** A scoped token override per product or case study, including the browser chrome: scroll-progress bar, nav tint, `theme-color`, `::selection`. Section labels use that brand's idiom (mono tags, numerals, lowercase voice).

**P9. Pinned horizontal strip.** `x: () => -(track.scrollWidth - track.clientWidth)`, `end: () => '+=' + distance`, `scrub: .6`, `invalidateOnRefresh`. Inside, per-panel triggers use `containerAnimation` (visual slides in `x 140 → 0` between `left 95%` and `left 40%`, text rises). Each panel can re-theme itself via custom properties.

**P10. Morph and before/after.**
- **Word morph:** shared letters glide between two words. Measure `offsetLeft` deltas after fonts load and add an arc (up with `sine.out`, down with `sine.in`). Dropped letters fall with rotation and blur; new letters drop in.
- **Before/after wipe:** `clip-path: inset(0 0 0 100%) → inset(0)` with a glowing handle sliding in sync.

**P11. Interactive panel sets.**
- **Accordion row:** hovered panel `flex-grow: 1.7–2.7`, others shrink, `.8s` ease-out.
- **Chamfered corners** that flip on hover (`clip-path: polygon()` morph).
- **Light edge:** a conic gradient travelling around a 1px ring via a registered `@property --angle`.
- **Media:** desaturated at rest, full colour on hover.
- **Spotlight:** a pointer-following `radial-gradient(circle at var(--mx) var(--my))`.
- **Titles:** text that scrambles and resolves on hover *and* focus.
- **Details:** revealed with `grid-template-rows: 0fr → 1fr`.

**P12. Exploded layers.** The same component rendered as N stacked slices (`translateZ(calc(var(--i) * var(--gap)))` in `perspective: ~1900px`), scrubbed apart via `--rx`, `--rz`, `--gap`. Hovering a layer name highlights its slice.

**P13. One DOM, many styles.** A single mock whose every visual property is a custom property per `[data-style]`. A universal transition (~.65s) morphs radius, shadow, font and blur together as the visitor scrolls or clicks through styles.

---

## SECONDARY

- **Multi-speed parallax:** `data-speed` per element (0.6–2) → `y: -speed*260, rotate: speed*50`, scrubbed. If the intro uses `y`, do parallax on `yPercent` so they never fight.
- **Seeded procedural decoration:** stars, stripes, shapes from a seeded random generator (e.g. `seed = seed * 16807 % 2147483647`), so it's identical on every build. Use one generator per use.
- **Knock-out halo instead of a card:** `background: var(--c-bg); box-shadow: 0 0 0 18px var(--c-bg)` behind text over busy art.
- **Counters:** proxy tween `{ v: 0 } → target`, 1.2–1.9s `power3.out`, formatted with `toLocaleString`, `tabular-nums`, trigger `top 90%`, once. Render the start value in HTML so it never flashes final → 0.
- **Nav that adapts:** sections declare `data-nav-theme="light|dark"`; a trigger at the nav's height flips the nav colours. Glass background after ~24px of scroll. The nav wrapper is `pointer-events: none` with links set to `auto`, so the empty bar never blocks clicks.
- **Magnetic primary button:** quick setters on `x` and `y` at about 0.2–0.3 of the pointer offset, fine pointers only, created after the intro finishes.
- **Tilt + spotlight cards:** `rotationX/Y` ±5–6° with quick setters, a lift of −8px, and a pointer spotlight whose strength is a tweened `--lit`. Perspective on the parent.
- **Deal-in cards:** `y 100, rotationX -34°, rotationZ [-4, 0, 4]`, origin bottom centre, 1.3s `expo.out`, stagger .12, then `clearProps: 'transform'`.
- **Self-drawing lines:** SVG `pathLength="1"`, `stroke-dashoffset 1 → 0`. Connector paths can be built at runtime from measured element centres and redrawn on refresh.
- **Sticky step viewer:** the active step is computed from positions (the last step whose top is above a line at about 55% of the viewport), never from enter/leave events alone. The step number rolls like a slot machine; art enters and exits in the scroll direction.
- **Hover languages** (pick one):
  - lift + hard shadow (`translate(-4px,-4px)` + `6px 6px 0`)
  - soft lift (`translateY(-4px)` + bigger soft shadow)
  - glow
  - chunky 3D press (`0 6px 0 edge` → `0 1px 0` on active)
- **Gated autoplay:** loops run only while visible, optionally only after the first scroll, and stop when the visitor takes control. Videos: poster, `preload="none"`, paused off-screen, with a manual play button if autoplay is refused.
- **Wrapper vs inner:** the library animates the wrapper and the CSS loop animates the inner element, so they never fight over one `transform`.
- **Container-query mock UIs:** size everything in `cqw` (or `--u: calc(100cqw / 1100)`), so a fake UI scales as one object.
- **Marquees:**
  - Duplicate the set and mark the second `aria-hidden`; animate `translateX(-50%)` linearly over 38–70s.
  - Fade the edges with a mask; alternate outline and solid words; pause on hover.
  - Reduced motion makes it a scrollable row instead.
- **Strike-throughs and highlighter sweeps** driven by a 0..1 variable, `power2.inOut`, .45–1.1s.
- **Squash and stretch** for playful brands; **confetti** for real success moments only (budgeted particle count, stops when empty).

## TERTIARY

- **Grain** via an inline SVG `feTurbulence` data-URI at 3–8% effective opacity.
- **A difference-blend wordmark** (`mix-blend-mode: difference`) spanning differently coloured panels. Its parent must not create a stacking context.
- **`clearProps` after intros**, `immediateRender: false` on chained `fromTo` tweens, function-valued positions with `invalidateOnRefresh`.
- **Loader hygiene:**
  - Lag smoothing off, so loops keep real time.
  - Ignore mobile resize for iOS address-bar jumps.
  - A debounced refresh after `load` and `document.fonts.ready`.
  - Wait for fonts (capped at ~1.8s) before measuring text.
- **Intro gate:** an inline head script hides only the hero parts, with a 2.5–3.5s failsafe. JS removes the class in the same tick it sets the from-states, and skips the intro if the failsafe already fired.
- **Negative animation delays** to desync identical loops.
- **Typography:** `tabular-nums`, `text-wrap: balance | pretty`, `::selection`, `theme-color`.
- **Hairline separators** with `box-shadow` (no layout shift).
- **An occasional glint:** a skewed sheen whose keyframes rest for 70% of a ~4s cycle.
- **Rotating circular stamps:** `textPath` with `textLength` matched to the circumference (2πr).
- **A comet on a closed path:** `pathLength="1000"`, `stroke-dasharray: 70 930`, dashoffset to −1000 on a loop, plus a blurred twin for glow.
- **`overflow-x: clip`** (not `hidden`) on wide sections, so sticky and pinned children still work.
- **Pin robustness:**
  - `anticipatePin`, and init in DOM order.
  - Stage sizes computed from viewport height, so scenes always fit.
  - A short-laptop media query (`min-width: 901px and max-height: 860px`) to compact titles.
- **Accessible demos:** `role="img"` + a descriptive label + `aria-hidden` internals, or real controls with real state. `aria-live` on narrated status lines.
- **Recolourable assets:** `background: var(--c-accent); mask: url(icon.svg) center/contain`.
- **Copy buttons** that fall back to selecting the text if the clipboard API fails.
- **Reduced motion still tells the story:** themes switch discretely, marquees scroll, demos show their final frame, and controls jump to the end.

---

## Using the catalog

- Per marketing page:
  - one primary as the signature
  - one transition per act change
  - 3–5 secondaries
  - tertiaries everywhere by default
- Don't put a pinned scene, a marquee, a parallax field and a decode effect in the same viewport. One loud idea, quiet support.
- When the owner names a reference site, describe its moves in this vocabulary so you can say exactly what you're borrowing.
- App UIs take only the secondary micro-interactions (hover, press, state changes at 120–250ms) and none of the scroll scenes.
