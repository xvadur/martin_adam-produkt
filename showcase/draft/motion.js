/* Progressive enhancement. The document owns the complete, readable state. */
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const desktop = matchMedia('(min-width: 901px) and (max-height: 1300px)');
const override = new URLSearchParams(location.search).get('motion');
const status = { ready: false, mode: 'starting', errors: [] };
window.__motionStatus = status;
const basics = new Map();
let loading;
let cleanups = [];
let generation = 0;
let refreshTimer;
let motion;

const gateOpen = () => root.classList.remove('x-intro', 'motion-intro');
const disabled = () => override === 'off' || override === 'reduce' || reduced.matches;
const report = (scope) => {
  if (!status.errors.includes(scope)) status.errors.push(scope);
  status.errors = status.errors.slice(-12);
};
const waitFonts = () => Promise.race([
  document.fonts?.ready ?? Promise.resolve(),
  new Promise((resolve) => setTimeout(resolve, 1800)),
]);

function tokenDuration(name, fallback) {
  const value = getComputedStyle(root).getPropertyValue(name).trim();
  const number = parseFloat(value);
  return Number.isFinite(number) && number > 0 ? number / (value.endsWith('ms') ? 1000 : 1) : fallback;
}

function pinOffset() {
  const style = getComputedStyle(root);
  for (const name of ['--motion-pin-top', '--nav-h']) {
    const value = style.getPropertyValue(name).trim();
    const number = parseFloat(value);
    if (Number.isFinite(number) && number >= 0) {
      return value.endsWith('rem') ? number * parseFloat(style.fontSize) : number;
    }
  }
  return 88;
}

function tokenEase(name, fallback, gsap) {
  const value = getComputedStyle(root).getPropertyValue(name).trim();
  const bezier = value.match(/^cubic-bezier\(\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*\)$/);
  if (bezier) {
    const [, x1, y1, x2, y2] = bezier.map(Number);
    const point = (t, a, b) => 3 * (1 - t) ** 2 * t * a + 3 * (1 - t) * t ** 2 * b + t ** 3;
    return (p) => {
      if (p === 0 || p === 1) return p;
      let low = 0, high = 1, t = p;
      for (let i = 0; i < 14; i += 1) {
        t = (low + high) / 2;
        if (point(t, x1, x2) < p) low = t; else high = t;
      }
      return point(t, y1, y2);
    };
  }
  return (value && gsap.parseEase(value)) || gsap.parseEase(fallback);
}

function script(path, globalName) {
  if (window[globalName]) return Promise.resolve(window[globalName]);
  return new Promise((resolve, reject) => {
    const tag = document.createElement('script');
    const timer = setTimeout(() => { tag.remove(); reject(new Error('motion vendor timeout')); }, 8000);
    tag.src = new URL(path, import.meta.url).href;
    tag.async = true;
    tag.onload = () => {
      clearTimeout(timer);
      if (window[globalName]) resolve(window[globalName]); else reject(new Error('motion vendor missing'));
    };
    tag.onerror = () => { clearTimeout(timer); tag.remove(); reject(new Error('motion vendor unavailable')); };
    document.head.append(tag);
  });
}

async function loadMotion() {
  if (disabled()) return null;
  loading ??= (async () => {
    try {
      const gsap = await script('./vendor/gsap.min.js', 'gsap');
      const ScrollTrigger = await script('./vendor/ScrollTrigger.min.js', 'ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      gsap.ticker.lagSmoothing(0);
      ScrollTrigger.config({ ignoreMobileResize: true });
      return { gsap, ScrollTrigger };
    } catch {
      report('vendor-load');
      loading = null;
      return null;
    }
  })();
  return loading;
}

function refresh() {
  clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => {
    if (!motion || disabled()) return;
    motion.ScrollTrigger.sort();
    motion.ScrollTrigger.refresh();
  }, 160);
}

function wireBasics(blocks) {
  blocks.filter((el) => el.dataset.fx === 'process').forEach((el) => {
    if (basics.has(el)) return;
    const button = el.querySelector('[data-process-toggle]');
    const state = { paused: false, button, update: null };
    basics.set(el, state);
    if (!button) return;
    button.hidden = true;
    button.removeAttribute('aria-pressed');
    button.addEventListener('click', () => {
      state.paused = !state.paused;
      state.update?.();
    });
  });
}

const once = (el, start = 'top 90%') => ({
  trigger: el, start, once: true, toggleActions: 'play play play play',
});
const inside = (el, selector) => [...el.querySelectorAll(selector)];
const safeTargets = (gsap, nodes) => { if (nodes.length) gsap.set(nodes, { transition: 'none' }); };

function revealItems(el, m, exclude = []) {
  const items = inside(el, '[data-reveal]').filter((node) => !exclude.includes(node));
  safeTargets(m.gsap, items);
  items.forEach((node) => m.gsap.fromTo(node,
    { y: 22, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: m.tokens.reveal, ease: m.tokens.ease,
      immediateRender: false, scrollTrigger: once(node), clearProps: 'transform,opacity,visibility' },
  ));
}

function hero(el, m) {
  const title = el.querySelector('[data-hero-title]');
  const rawName = el.querySelector('[data-hero-name]');
  const name = title?.contains(rawName) ? null : rawName;
  const photo = el.querySelector('[data-hero-photo]');
  const photoWrap = el.querySelector('.hero-photo-wrap');
  let exitContext;
  function buildExit() {
    if (exitContext || disabled()) return;
    exitContext = m.gsap.context(() => {
      const labels = [title, name].filter(Boolean);
      safeTargets(m.gsap, [...labels, photo].filter(Boolean));
      const trigger = { trigger: el, start: 'top top', end: 'bottom top', scrub: 0.5, invalidateOnRefresh: true };
      // The CTA is not moved. Text travels upwards, away from the actions.
      labels.forEach((node) => m.gsap.fromTo(node, { yPercent: 0 }, {
        yPercent: () => {
          const rect = node.getBoundingClientRect();
          const shift = Number(m.gsap.getProperty(node, 'yPercent')) * rect.height / 100;
          const room = Math.max(0, rect.top - shift - el.getBoundingClientRect().top);
          return -Math.min(8, room / Math.max(1, rect.height) * 100);
        },
        ease: 'none', immediateRender: false, scrollTrigger: { ...trigger },
      }));
      // Overscan stays inside a clipping photo wrapper, leaving the copy untouched.
      if (photo && photoWrap?.contains(photo)) {
        m.gsap.set(photoWrap, { overflow: 'clip' });
        m.gsap.fromTo(photo, { yPercent: 0, scale: 1 }, {
          yPercent: 6, scale: 1.12, ease: 'none', immediateRender: false,
          scrollTrigger: { ...trigger, id: 'martin-hero-exit' },
        });
      }
    }, el);
    refresh();
  }
  const intro = inside(el, '[data-intro]').filter((node) => node !== title && node !== name && !title?.contains(node) && !name?.contains(node));
  const hasGate = root.classList.contains('x-intro') || root.classList.contains('motion-intro');
  // A failsafe or a restored mid-page scroll has already exposed the finished frame.
  if (!hasGate || scrollY > innerHeight / 2) {
    gateOpen(); buildExit();
    return () => exitContext?.revert();
  }
  const nodes = [title, name, photo, ...intro].filter(Boolean);
  safeTargets(m.gsap, nodes);
  const timeline = m.gsap.timeline({ defaults: { ease: m.tokens.heroEase }, onComplete: () => {
    m.gsap.set(nodes, { clearProps: 'transform,opacity,visibility,clipPath,willChange' });
    buildExit();
  } });
  if (photo) timeline.fromTo(photo, { scale: 1.07, clipPath: 'inset(10% 0 0 0)' },
    { scale: 1, clipPath: 'inset(0% 0 0 0)', duration: m.tokens.hero }, 0);
  if (title) timeline.fromTo(title, { yPercent: 28, autoAlpha: 0, clipPath: 'inset(0 0 100% 0)' },
    { yPercent: 0, autoAlpha: 1, clipPath: 'inset(0 0 0% 0)', duration: m.tokens.hero }, 0.08);
  if (name) timeline.fromTo(name, { xPercent: -5, autoAlpha: 0 },
    { xPercent: 0, autoAlpha: 1, duration: m.tokens.reveal }, 0.22);
  if (intro.length) timeline.fromTo(intro, { y: 16, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: m.tokens.reveal, stagger: m.tokens.stagger }, 0.32);
  gateOpen();
  return () => exitContext?.revert();
}

function services(el, m) {
  inside(el, 'article.service-row').forEach((row, index) => {
    const media = row.querySelector('[data-service-media]');
    const text = row.querySelector('[data-service-text]');
    safeTargets(m.gsap, [media, text].filter(Boolean));
    if (media) {
      m.gsap.fromTo(media, { clipPath: 'inset(12% 0 12% 0)', scale: 1.07 },
        { clipPath: 'inset(0% 0 0% 0)', scale: 1, duration: m.tokens.hero, ease: m.tokens.heroEase,
          immediateRender: false, scrollTrigger: once(row, 'top 85%') });
      m.gsap.fromTo(media, { yPercent: 3 }, { yPercent: -3, ease: 'none', immediateRender: false,
        scrollTrigger: { trigger: row, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true } });
    }
    if (text) m.gsap.fromTo(text, { xPercent: index % 2 ? -3 : 3, autoAlpha: 0 },
      { xPercent: 0, autoAlpha: 1, duration: m.tokens.reveal, ease: m.tokens.ease,
        immediateRender: false, scrollTrigger: once(text), clearProps: 'transform,opacity,visibility' });
    revealItems(row, m, [text]);
  });
}

function processScene(el, m) {
  const stage = el.querySelector('.process-pin');
  const number = el.querySelector('.process-number');
  const progress = el.querySelector('.process-progress');
  const steps = inside(el, '.process-step');
  if (!stage || !steps.length) return;
  const control = basics.get(el);
  const originalNumber = number?.textContent;
  let driver, driverMode, resizeTimer, visible = false;
  const updateControl = () => {
    const button = control?.button;
    if (!button) return;
    button.hidden = driverMode !== 'loop';
    button.removeAttribute('aria-pressed');
    button.textContent = control.paused
      ? button.dataset.playLabel || 'Spustiť animáciu'
      : button.dataset.pauseLabel || 'Pozastaviť animáciu';
  };
  function build() {
    const state = { p: 0 };
    let last = -1;
    const paint = () => {
      el.style.setProperty('--process-p', String(state.p));
      if (progress) m.gsap.set(progress, { scaleY: state.p, transformOrigin: '50% 0%' });
      const current = Math.min(steps.length - 1, Math.floor(state.p * steps.length));
      if (current !== last) {
        last = current;
        if (number) number.textContent = String(current + 1).padStart(2, '0');
        steps.forEach((step, index) => {
          step.classList.toggle('is-current', index === current);
          step.style.setProperty('--step-active', index === current ? '1' : '0');
        });
      }
    };
    const timeline = m.gsap.timeline({ paused: true, onUpdate: paint });
    timeline.to(state, { p: 1, duration: m.tokens.scene, ease: 'none' });
    timeline.to({}, { duration: m.tokens.scene * 0.08 });
    paint();
    return timeline;
  }
  function configure() {
    const next = desktop.matches && stage.offsetHeight <= innerHeight - pinOffset() ? 'pin' : 'loop';
    if (next === driverMode) return;
    driver?.revert();
    el.classList.remove('is-pinned', 'is-loop');
    driverMode = next;
    driver = m.gsap.context(() => {
      safeTargets(m.gsap, [progress].filter(Boolean));
      const timeline = build();
      if (next === 'pin') {
        el.classList.add('is-pinned');
        m.ScrollTrigger.create({ id: 'martin-process-signature', trigger: el, start: () => `top top+=${pinOffset()}`,
          end: () => `+=${Math.max(innerHeight * 1.1, stage.offsetHeight + steps.length * innerHeight * 0.14)}`,
          pin: stage, pinSpacing: true, scrub: 0.55, animation: timeline,
          anticipatePin: 1, invalidateOnRefresh: true, refreshPriority: 1 });
        if (control) control.update = updateControl;
      } else {
        el.classList.add('is-loop');
        timeline.repeat(-1).repeatDelay(m.tokens.scene * 0.1);
        const sync = () => {
          if (visible && !document.hidden && !control?.paused && !disabled()) timeline.play();
          else timeline.pause();
          updateControl();
        };
        if (control) control.update = sync;
        const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: 0.08 });
        observer.observe(el);
        document.addEventListener('visibilitychange', sync);
        sync();
        return () => { observer.disconnect(); document.removeEventListener('visibilitychange', sync); timeline.kill(); };
      }
    }, el);
    updateControl();
    refresh();
  }
  const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(configure, 180); };
  const sizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(onResize) : null;
  sizeObserver?.observe(stage);
  window.addEventListener('resize', onResize, { passive: true });
  desktop.addEventListener('change', onResize);
  configure();
  return () => {
    clearTimeout(resizeTimer);
    sizeObserver?.disconnect();
    window.removeEventListener('resize', onResize);
    desktop.removeEventListener('change', onResize);
    driver?.revert();
    driverMode = null;
    el.classList.remove('is-pinned', 'is-loop');
    el.style.removeProperty('--process-p');
    steps.forEach((step) => { step.classList.remove('is-current'); step.style.removeProperty('--step-active'); });
    if (number) number.textContent = originalNumber;
    if (control) { control.update = null; if (control.button) control.button.hidden = true; }
  };
}

function story(el, m) {
  const photo = el.querySelector('[data-story-photo]');
  if (photo) {
    safeTargets(m.gsap, [photo]);
    m.gsap.fromTo(photo, { clipPath: 'inset(0 20% 0 0)', scale: 1.04 },
      { clipPath: 'inset(0 0% 0 0)', scale: 1, duration: m.tokens.hero, ease: m.tokens.heroEase,
        immediateRender: false, scrollTrigger: once(photo, 'top 88%') });
  }
  revealItems(el, m, [photo]);
}

function transition(el, m, index) {
  const shape = el.querySelector('[data-transition-shape]');
  if (!shape) return;
  safeTargets(m.gsap, [shape]);
  const iris = el.dataset.transition === 'iris' || (el.dataset.transition !== 'wipe' && index % 2 === 1);
  const from = iris ? { clipPath: 'circle(0% at 50% 100%)' } : { scaleY: 0, transformOrigin: '50% 100%' };
  const to = iris ? { clipPath: 'circle(150% at 50% 100%)' } : { scaleY: 1 };
  m.gsap.fromTo(shape, from, { ...to, ease: 'none', immediateRender: false,
    scrollTrigger: { trigger: el, start: 'top bottom', end: 'top 18%', scrub: true, invalidateOnRefresh: true } });
}

const FX = { hero, services, process: processScene, story, reveal: (el, m) => revealItems(el, m), transition };

function teardown() {
  clearTimeout(refreshTimer);
  cleanups.splice(0).reverse().forEach((cleanup) => { try { cleanup(); } catch { report('cleanup'); } });
  root.classList.remove('motion-ready');
  motion = null;
  gateOpen();
}

async function init() {
  const current = ++generation;
  teardown();
  status.ready = false;
  const blocks = inside(document, '[data-fx]');
  wireBasics(blocks);
  if (disabled()) {
    status.mode = override === 'off' ? 'off' : 'reduced';
    status.ready = true;
    return;
  }
  // teardown releases stale gates. Restore only an intro gate present at initial boot.
  if (current === 1 && initialGate) root.classList.add(initialGate);
  const [loaded] = await Promise.all([loadMotion(), waitFonts()]);
  if (current !== generation || disabled()) return;
  if (!loaded) { gateOpen(); status.mode = 'static'; status.ready = true; return; }
  motion = loaded;
  const { gsap } = loaded;
  const m = { ...loaded, tokens: {
    reveal: tokenDuration('--motion-reveal', 0.95), hero: tokenDuration('--motion-hero', 1.2),
    scene: tokenDuration('--motion-scene', 10), stagger: tokenDuration('--motion-stagger', 0.08),
    ease: tokenEase('--ease-reveal', 'power3.out', gsap), heroEase: tokenEase('--ease-hero', 'power4.out', gsap),
  } };
  let transitionIndex = 0;
  for (const el of blocks) {
    const effect = FX[el.dataset.fx];
    if (!effect) continue;
    const context = gsap.context(() => {}, el);
    let extraCleanup;
    try {
      context.add(() => { el.classList.add('is-live'); extraCleanup = effect(el, m, el.dataset.fx === 'transition' ? transitionIndex++ : 0); });
      cleanups.push(() => { extraCleanup?.(); context.revert(); el.classList.remove('is-live'); });
    } catch {
      try { extraCleanup?.(); context.revert(); } catch { /* Preserve the static block. */ }
      el.classList.remove('is-live');
      report(`block:${el.dataset.fx}`);
    }
  }
  gateOpen();
  root.classList.add('motion-ready');
  status.mode = 'enhanced';
  status.ready = true;
  refresh();
}

const initialGate = root.classList.contains('x-intro') ? 'x-intro' : root.classList.contains('motion-intro') ? 'motion-intro' : null;
const boot = () => { init().catch(() => { teardown(); report('boot'); status.mode = 'static'; status.ready = true; }); };
reduced.addEventListener('change', boot);
window.addEventListener('load', refresh, { once: true });
window.addEventListener('pageshow', refresh);
document.addEventListener('load', (event) => { if (event.target instanceof HTMLImageElement) refresh(); }, true);
document.fonts?.ready.then(refresh);
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
else boot();
