# QA checklist

Run it in a real browser before calling anything done. Share screenshots as proof; never ask the owner to check for you.

## Viewports and modes

| Pass | Setup | Looking for |
|---|---|---|
| Desktop | 1440×900 | Pins feel right, transitions land, nothing overlaps the nav |
| Short laptop | 1280×720 | Pinned stages fit the viewport, titles don't overflow |
| Phone | 375×812 | Loops instead of pins, no horizontal scroll, tap targets ≥ 44px, hover-only info visible |
| Tall window | 1440×1600 | Loop mode kicks in, no half-height pins, nothing left hidden |
| Reduced motion | emulate `prefers-reduced-motion: reduce` | Finished frames visible, themes still change (discretely), **every control still works** |
| No JS | disable JavaScript | Full page readable, intro gate removed by the failsafe or never hidden |
| Slow device | 4× CPU throttle | No scrub lag on edges that should track 1:1, loops don't stall |

## Every page

- [ ] Console clean (no errors, no GSAP "target not found" warnings).
- [ ] Nothing stays invisible: scroll fast top→bottom, jump to anchors, reload mid-page, then look for elements stuck at `opacity: 0`.
- [ ] No flash: hero content doesn't appear, vanish, then animate in (needs the intro gate). Counters don't show the final number then reset to 0.
- [ ] `ScrollTrigger.refresh` runs after fonts and images (resize the window mid-page; pins and wipes must re-measure).
- [ ] Each marketing page has at least one pinned/scrubbed scene on desktop with a phone loop equivalent (app, docs and checkout pages excepted).
- [ ] Each act boundary uses its planned transition; no two consecutive boundaries share a grammar.
- [ ] The first screen shows the next section peeking in.
- [ ] Infinite loops pause off-screen and in hidden tabs.
- [ ] Animations use transform/opacity/clip-path; any layout-property tween is on a small stage and justified.
- [ ] No CSS `transition: transform` on elements GSAP drives each frame; hover transforms aren't overridden by GSAP inline styles.
- [ ] `will-change` only where needed, released after one-off intros.
- [ ] Copy is unchanged versus before (diff the text content if you touched templates).

## Design system

- [ ] No raw colours, font stacks, beziers, z-indexes or breakpoints outside the token files (rerun the audit inventory greps).
- [ ] Brand skins also recolour the scroll-progress bar, nav, `theme-color` and `::selection`.
- [ ] Brand values in data files match the page (accent, fonts, light/dark).
- [ ] Every font weight used is actually loaded; one font host, preconnected.
- [ ] Repeated component families consolidated (chips, pills, phone frames, pulse dots, replay buttons) or logged.
- [ ] `DESIGN.md` and `MOTION.md` updated with anything new.

## Accessibility

- [ ] Global `:focus-visible` ring; every hover effect has a focus equivalent.
- [ ] Split headings have `aria-label` with the full text; split spans `aria-hidden`.
- [ ] Animated demos: `role="img"` with a descriptive label, or real controls with real state (`aria-pressed`, `aria-selected`, `aria-checked`).
- [ ] Auto-advancing content (carousels, rotators) has a pause or stops on interaction (WCAG 2.2.2).
- [ ] `aria-live` regions exist (not `hidden`) before they announce.
- [ ] `scroll-margin-top` on anchor targets so the nav doesn't cover them; skip link present.

## Common failure modes (check for each one)

1. **Hero flash:** `gsap.from` after a dynamic import shows content, hides it, then animates. Fix: intro gate class + failsafe.
2. **Dead buttons under reduced motion:** Replay / Generate / toggle handlers attached *after* `if (reduce) return`. Fix: wire controls first, make them jump to the final state.
3. **`load` listener after an awaited import** never fires because `load` already happened. Fix: check `document.readyState`, plus `document.fonts.ready`.
4. **Every page reinventing the basics:** several motion-library bootstraps, several counter implementations, several reveal attributes, a dozen overshoot values, half a dozen chip components. Fix: one kernel, one token set, shared components.
5. **Hard-coded literals beside tokens:** the same accent hex pasted 25 times and the signature bezier 16 times, even though tokens for both exist.
6. **Font weight 900 used, 400–800 loaded:** display type rendered synthetic.
7. **Accent skin not reaching chrome:** progress bar outside the themed scope; data-file accent different from the page's.
8. **Mushy tilt:** CSS `transition: transform .5s` on an element GSAP updates every frame.
9. **Frame-based effects:** a 16-frame text decode ran twice as fast on 120Hz screens.
10. **Ambient effects ignoring reduced motion:** particle canvas and cursor glow ran forever, animating `left/top`, even in hidden tabs.
11. **Tall-screen policy that disabled all motion** for real users on portrait monitors (meant for screenshots). Fix: loop mode, not no-motion.
12. **Dead legacy code** (unused components, about 55% of a global stylesheet) shipped and confused later edits. Log it; delete with approval.
13. **Legal pages with two footers** because a layout rendered its own and didn't hide the global one.
