# Motion kernel

A small, portable layer that every animated block goes through: one loader for all pages, reduced-motion handling, refresh after fonts, text splitters, reveal helpers, pin media queries and a block registry. It has been used in production; adapt the file layout to the project.

Default stack: GSAP 3 + ScrollTrigger (free for all uses, including commercial). If the project already uses something else, keep these contracts on top of it; see "Stack adapters" at the end.

## Contracts

1. **Markup:** each animated block has `data-fx="<name>"` on its root. Effects only query inside their root.
2. **Finished state by default:** CSS renders the final, readable frame. JS adds `.is-live` (animated layout) and `.is-pinned` (pinned layout) only when it takes over.
3. **Registry:** `FX[name] = (el, m) => void | (() => void)`. Blocks run in DOM order (pins measure correctly), each inside try/catch (one broken effect never takes the page down).
4. **Reduced motion:** `loadMotion()` resolves `null`. The page stays in its finished state. **Interactive controls (Replay, toggles, tabs) must still work**: wire them before the motion check and make them jump to the final state.
5. **One timeline, two drivers:** scenes are a `build()` returning a paused timeline; desktop pins and scrubs it, phones loop it while visible.
6. **State lives in 0..1 custom properties** that CSS turns into visuals.

## `motion/core.ts`

```ts
// Shared motion kernel. Everything is visible without JS; hidden "from" states are only set after GSAP loads.
import type { gsap as GSAP } from 'gsap';
import type { ScrollTrigger as ST } from 'gsap/ScrollTrigger';

export type Gsap = typeof GSAP;
export type Motion = { gsap: Gsap; ScrollTrigger: typeof ST; refresh: () => void };

let loading: Promise<Motion | null> | null = null;
let timer: number | undefined;

export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = () => matchMedia('(pointer: fine)').matches;

/** Desktop pins and scrubs; phones and very tall windows get self-playing loops. Keep in sync with --bp-* tokens. */
export const PIN_MEDIA = {
  desk: '(min-width: 901px) and (max-height: 1300px)',
  loop: '(max-width: 900px), (min-height: 1301px)',
};

export function loadMotion(): Promise<Motion | null> {
  if (reducedMotion()) return Promise.resolve(null);
  loading ??= (async () => {
    try {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      gsap.ticker.lagSmoothing(0); // loops stay on real time after a long frame
      ScrollTrigger.config({ ignoreMobileResize: true }); // iOS address bar
      const refresh = () => {
        clearTimeout(timer);
        timer = window.setTimeout(() => { ScrollTrigger.sort(); ScrollTrigger.refresh(); }, 200);
      };
      // The dynamic import may resolve after `load` fired, so check readyState instead of only listening.
      if (document.readyState === 'complete') refresh(); else addEventListener('load', refresh);
      document.fonts?.ready.then(refresh);
      if (import.meta.env?.DEV) Object.assign(window, { __gsap: gsap, __st: ScrollTrigger });
      return { gsap, ScrollTrigger, refresh };
    } catch {
      return null;
    }
  })();
  return loading;
}

/** Wait for fonts (capped) before measuring text positions. */
export const fontsReady = (cap = 1800) =>
  Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise((r) => setTimeout(r, cap))]);

/** Split into clipped words of characters for rise-in titles. Keeps nested inline elements and an accessible name. */
export function splitChars(el: HTMLElement): HTMLElement[] {
  if (el.dataset.split) return [...el.querySelectorAll<HTMLElement>('.fx-ch')];
  el.dataset.split = 'chars';
  el.setAttribute('aria-label', (el.textContent ?? '').replace(/\s+/g, ' ').trim());
  const chars: HTMLElement[] = [];
  const walk = (node: HTMLElement) => {
    [...node.childNodes].forEach((n) => {
      if (n instanceof HTMLElement) return walk(n);
      if (n.nodeType !== Node.TEXT_NODE) return;
      const frag = document.createDocumentFragment();
      (n.textContent ?? '').split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) return frag.appendChild(document.createTextNode(' '));
        const word = document.createElement('span');
        word.className = 'fx-w';
        word.setAttribute('aria-hidden', 'true');
        [...part].forEach((c) => {
          const ch = document.createElement('span');
          ch.className = 'fx-ch';
          ch.textContent = c;
          word.appendChild(ch);
          chars.push(ch);
        });
        frag.appendChild(word);
      });
      node.replaceChild(frag, n);
    });
  };
  walk(el);
  return chars;
}

/** Wrap words in spans; code, links, strong and mark stay atomic. */
export function splitWords(el: HTMLElement): HTMLElement[] {
  if (el.dataset.split) return [...el.querySelectorAll<HTMLElement>('.fx-wd')];
  el.dataset.split = 'words';
  const out: HTMLElement[] = [];
  const walk = (node: Node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        (n.textContent ?? '').split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) return frag.appendChild(document.createTextNode(part));
          const s = document.createElement('span');
          s.className = 'fx-wd';
          s.textContent = part;
          frag.appendChild(s);
          out.push(s);
        });
        node.replaceChild(frag, n);
      } else if (n instanceof HTMLElement) {
        if (n.matches('code, a, strong, mark')) { n.classList.add('fx-wd'); out.push(n); }
        else walk(n);
      }
    });
  };
  walk(el);
  return out;
}

/** Setter that types an element's text from 0 (empty) to 1 (full). Scrub-safe; writes only on change. */
export function typer(el: HTMLElement) {
  const full = el.dataset.text ?? el.textContent ?? '';
  el.dataset.text = full;
  let last = -1;
  return (p: number) => {
    const n = Math.round(full.length * Math.min(1, Math.max(0, p)));
    if (n !== last) { last = n; el.textContent = full.slice(0, n); }
  };
}

/** One-off reveal trigger that still plays if a jump skips past it. */
export const once = (trigger: Element | string | null, start = 'top 85%') => ({
  trigger: trigger ?? undefined, start, once: true, toggleActions: 'play play play play',
});

/** Play a timeline only while its element is on screen. */
export function playInView(m: Motion, el: Element, tl: { play(): unknown; pause(): unknown }, start = 'top 85%') {
  m.ScrollTrigger.create({ trigger: el, start, end: 'bottom 10%', onToggle: (s) => (s.isActive ? tl.play() : tl.pause()) });
}

/** Hand CSS centring (translate -50% -50%) and rotate over to GSAP before it bakes them into pixels. */
export function adopt(m: Motion, els: HTMLElement[], vars: Record<string, unknown> = {}) {
  els.forEach((el) => { el.style.translate = 'none'; el.style.rotate = 'none'; });
  m.gsap.set(els, { xPercent: -50, yPercent: -50, ...vars });
}

/** Pointer-driven 3D tilt, fine pointers only. Target must not have a CSS transform transition. */
export function tilt(m: Motion, area: HTMLElement, target: HTMLElement, max = 6) {
  if (!finePointer()) return;
  const rx = m.gsap.quickTo(target, 'rotationX', { duration: 0.7, ease: 'power3' });
  const ry = m.gsap.quickTo(target, 'rotationY', { duration: 0.7, ease: 'power3' });
  area.addEventListener('pointermove', (e) => {
    const r = area.getBoundingClientRect();
    ry(((e.clientX - r.left) / r.width - 0.5) * max * 2);
    rx(-((e.clientY - r.top) / r.height - 0.5) * max * 1.5);
  });
  area.addEventListener('pointerleave', () => { rx(0); ry(0); });
}

/** Release will-change after a one-off intro so hundreds of split chars don't keep compositor layers. */
export const settle = (els: Element[]) => () => els.forEach((e) => ((e as HTMLElement).style.willChange = 'auto'));
```

## `motion/index.ts`: registry

```ts
import { loadMotion, type Motion } from './core';
import { hero } from './hero';
import { reveal, heading, words } from './sections';
// import set pieces…

type Fx = (el: HTMLElement, m: Motion) => void;
const FX: Record<string, Fx> = { hero, reveal, heading, words /*, 'product-demo': productDemo … */ };
// Effects that must work without motion (tabs, toggles, replay buttons that jump to the end).
const BASIC: Record<string, (el: HTMLElement) => void> = {};

export async function initMotion() {
  const blocks = [...document.querySelectorAll<HTMLElement>('[data-fx]')];
  blocks.forEach((el) => BASIC[el.dataset.fx ?? '']?.(el));
  const m = await loadMotion();
  if (!m) { document.documentElement.classList.remove('x-intro'); return; }
  for (const el of blocks) {
    try { FX[el.dataset.fx ?? '']?.(el, m); }
    catch (err) { if (import.meta.env?.DEV) console.error(`[fx] ${el.dataset.fx}`, err); }
  }
  m.refresh();
}
```

Call `initMotion()` once from the shared layout, so every page uses the same loader.

## Intro gate (inline in `<head>`)

```html
<script is:inline>
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const h = document.documentElement;
    h.classList.add('x-intro');
    setTimeout(() => h.classList.remove('x-intro'), 2600); // failsafe if JS never arrives
  }
</script>
<style>.x-intro [data-intro] { opacity: 0; }</style>
```

The hero effect removes `x-intro` **in the same tick** it sets its from-states. If the class is already gone (the failsafe fired), skip the intro rather than flash and replay.

## Dual-driver scene template

```ts
import { PIN_MEDIA, playInView, type Motion } from './core';

export function productDemo(el: HTMLElement, m: Motion) {
  const { gsap, ScrollTrigger } = m;
  const q = <T extends Element = HTMLElement>(s: string) => el.querySelector<T>(s)!;
  el.classList.add('is-live');

  function build() {
    const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
    // Beats: tween 0..1 custom properties and transforms only.
    tl.fromTo(el, { '--p': 0 }, { '--p': 1, duration: 3, ease: 'none' }, 0);
    // …
    tl.to({}, { duration: 0.9 }); // hold the final state for the last stretch of scroll
    // Text/classes that can't be tweened: derive from the playhead, guarded.
    let last = -1;
    tl.eventCallback('onUpdate', () => {
      const k = Math.min(2, Math.floor(tl.time() / 3.6));
      if (k !== last) { last = k; q('.phase').textContent = `Phase ${k + 1}/3`; }
    });
    return tl;
  }

  gsap.matchMedia().add(PIN_MEDIA, (ctx) => {
    if (ctx.conditions?.desk) {
      el.classList.add('is-pinned');
      ScrollTrigger.create({
        trigger: el, start: 'top top', end: '+=240%', pin: q('.pin'),
        scrub: 0.6, animation: build(), anticipatePin: 1, refreshPriority: 1,
      });
      return () => el.classList.remove('is-pinned');
    }
    const tl = build();
    const loop = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1 });
    loop.add(tl.tweenFromTo(0, tl.duration(), { ease: 'none' }));
    playInView(m, el, loop, 'top 80%');
  });
}
```

## Standard section effects (`sections.ts`)

Values come from the motion tokens (`MOTION.md`); these are the defaults for a cinematic personality.

```ts
import { once, settle, splitChars, splitWords, type Motion } from './core';
type Fx = (el: HTMLElement, m: Motion) => void;

export const heading: Fx = (el, { gsap }) => {
  const chars = splitChars(el);
  gsap.from(chars, { yPercent: 115, rotate: 5, opacity: 0, duration: 1.05, ease: 'power4.out',
    stagger: 0.022, scrollTrigger: once(el, 'top 88%'), onComplete: settle(chars) });
};

export const reveal: Fx = (el, { ScrollTrigger, gsap }) => {
  const items = [...el.querySelectorAll('[data-reveal]')];
  ScrollTrigger.batch(items, { start: 'top 90%', once: true,
    onEnter: (b) => gsap.from(b, { y: 32, opacity: 0, duration: 0.95, ease: 'power3.out', stagger: 0.1, overwrite: true }) });
};

export const words: Fx = (el, { gsap }) => {
  const w = splitWords(el);
  gsap.set(w, { opacity: 0.13 });
  gsap.to(w, { opacity: 1, duration: 0.3, stagger: 0.1, ease: 'none',
    scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: 0.5 } });
};
```

## Act transitions

- **Diagonal wipe:** see `motion.md` § Section transitions. Paint function bound to the ScrollTrigger `onUpdate` and `onRefresh`, `scrub: true`.
- **Paper edge:** `clip-path: inset(${clamp(rect.top)}px 0 0 0)` on `onUpdate/onRefresh/onLeave/onLeaveBack`.
- **Iris:** `fromTo(layer, { clipPath: 'circle(0% at 50% 100%)' }, { clipPath: 'circle(150% at 50% 100%)', ease: 'none', scrollTrigger: { start: 'top bottom', end: 'top 12%', scrub: 0.5 } })`.
- **Reduced motion:** don't skip the theme change; switch it discretely with a ScrollTrigger `onToggle` at `top 55%`.

## Rules learned the hard way

- Never put a CSS `transition: transform` on an element GSAP drives every frame (mushy tilt), and remember GSAP's inline transform overrides CSS `:hover { transform }`. Put hover transforms on an inner element.
- Prefer `transform` / `opacity` / `clip-path`. Avoid tweening `left/top/width/height/letter-spacing`; if a story needs it, keep it to small stages.
- Use `yPercent` for parallax when the intro uses `y`, so they don't fight.
- Pin lengths derived from content (`() => '+=' + dist()`) feel consistent across screens; fixed `+=3000` doesn't.
- Time-based, not frame-based: rAF effects must use elapsed time (a 16-frame decode is 2× faster on 120Hz).
- Pause every infinite loop off-screen (ScrollTrigger `onToggle` or IntersectionObserver) and in hidden tabs.
- If the site later adds client-side navigation (view transitions), every effect must return a cleanup and the registry must revert a `gsap.context()` per page.

## Stack adapters

The contracts stay the same everywhere: finished state in HTML, one loader, a registry of blocks, dual-driver scenes, 0..1 custom properties, controls that work under reduced motion.

| Stack | Where the kernel lives | Notes |
|---|---|---|
| Plain HTML / static | `/js/motion/*.js` as ES modules, one `<script type="module">` in the layout | Same code without types. Load GSAP from npm via a bundler, or a pinned CDN version. |
| Astro | `src/motion/`, called from a `<script>` in the base layout | Astro bundles and dedupes the script. With `<ClientRouter />`, re-run `initMotion()` on `astro:page-load` and revert a `gsap.context()` on `astro:before-swap`. |
| Next.js / React | `lib/motion/`; blocks become components using `useGSAP()` from `@gsap/react` (scoped, auto-cleanup) | Mark animated components `'use client'`. Render the finished state on the server. For page transitions, revert contexts on unmount. Framer Motion / Motion is fine for micro-interactions; use ScrollTrigger for pins and scrubs. |
| Vue / Nuxt | `composables/useMotion.ts`; set up in `onMounted`, `ctx.revert()` in `onUnmounted` | Client-only plugin for the loader in Nuxt (`.client.ts`). |
| Svelte / SvelteKit | An action (`use:fx={'reveal'}`) that returns `destroy` | Gate on `browser`; keep the SSR output in its finished state. |
| WordPress / Shopify themes | Theme JS bundle enqueued once; `data-fx` attributes in templates or blocks | Respect the theme editor: re-init on section load events (`shopify:section:load`). No heavy scenes on product grids or checkout. |
| Webflow / no-code | Custom code embed in the site footer; `data-fx` as custom attributes | Keep Webflow's own interactions off for the same elements to avoid double animation. |
| CSS only (no JS budget) | `animation-timeline: view()` / `scroll()` for reveals and progress bars, `@starting-style` for entrances, View Transitions API for page changes | Wrap in `@supports (animation-timeline: view())` so unsupported browsers keep the finished state. Pins and complex scenes still need JS. |

Smooth scrolling (e.g. Lenis) is optional. If you add it, drive ScrollTrigger from it (`lenis.on('scroll', ScrollTrigger.update)`), respect reduced motion by not enabling it, and never hijack scroll on app or docs pages.
