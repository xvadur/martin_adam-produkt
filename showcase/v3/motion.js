/* Sillage / Onda scene adaptations (8B, MIT): source/ licenses and original HTML. */
(() => {
  'use strict';
  const navToggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('#mobile-menu');
  function closeMenu() {
    menu.hidden = true;
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Otvoriť menu');
  }
  navToggle.addEventListener('click', () => {
    const opening = menu.hidden;
    menu.hidden = !opening;
    navToggle.setAttribute('aria-expanded', String(opening));
    navToggle.setAttribute('aria-label', opening ? 'Zatvoriť menu' : 'Otvoriť menu');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) {
      closeMenu();
      navToggle.focus();
    }
  });
  const desktopNavigation = matchMedia('(min-width: 861px)');
  desktopNavigation.addEventListener('change', event => { if (event.matches) closeMenu(); });

  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const subject = values.get('field-4');
    const body = `Meno: ${values.get('field-0')}\nSpoločnosť: ${values.get('field-1') || '—'}\nEmail: ${values.get('field-2')}\nTelefón: ${values.get('field-3') || '—'}\n\n${values.get('field-5')}`;
    const url = `mailto:info@onlineasistent.sk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.querySelector('#form-status').textContent = 'E-mail je pripravený. Odošlite ho vo svojej e-mailovej aplikácii.';
    window.location.href = url;
  });

  const services = [...document.querySelectorAll('[data-service]')];
  const visuals = [...document.querySelectorAll('[data-visual]')];
  function selectService(index) {
    visuals.forEach((visual, i) => visual.classList.toggle('is-active', i === index));
    services.forEach((row, i) => row.classList.toggle('is-active', i === index));
  }
  if ('IntersectionObserver' in window) {
    const serviceObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) selectService(Number(visible[0].target.dataset.service));
    }, { rootMargin: '-20% 0px -40% 0px', threshold: [0, .2, .5, .8] });
    services.forEach(row => serviceObserver.observe(row));
  }

  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  media.add({ motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 861px)' }, context => {
    if (!context.conditions.motion) return;
    // Sillage's hero-exit composition, bounded so the real portrait remains legible.
    if (context.conditions.desktop) {
      gsap.timeline({ scrollTrigger: { trigger: '#hero .hero__media', start: 'top top+=100', end: 'bottom top', scrub: true } })
        .to('.hero__push', { scale: 1.1, yPercent: 5, ease: 'none' }, 0);
      services.forEach((row, index) => {
        // Original Sillage row luminance choreography; retained text stays at readable contrast.
        gsap.timeline({ scrollTrigger: { trigger: row, start: 'top 85%', end: 'top 45%', scrub: true } })
          .fromTo(row.querySelector('h3'), { color: '#a6a8b5' }, { color: '#ffffff', duration: 1, ease: 'none' }, 0);
      });
      const portrait = document.querySelector('.expertise__portrait-in');
      gsap.timeline({ scrollTrigger: { trigger: '.expertise__body', start: 'top 60%', end: 'bottom 75%', scrub: true } })
        .fromTo(portrait.querySelector('img'), { scale: 1 }, { scale: 1.13, transformOrigin: '62% 38%', ease: 'none' });
    }

    // Onda: one coordinated five-station scene, driven entirely by normal scrolling.
    const steps = [...document.querySelectorAll('.step')];
    const stations = [...document.querySelectorAll('.method__station')];
    const titles = steps.map(step => step.querySelector('h3').textContent);
    const centerNumber = document.querySelector('.method-current');
    const centerTitle = document.querySelector('.method__center > span + span');
    let lastStep = -1;
    const scene = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: '.method__steps', start: 'top 62%', end: 'bottom 62%', scrub: true,
        onUpdate: self => {
          const index = Math.min(4, Math.floor(self.progress * 5));
          if (index === lastStep) return;
          lastStep = index;
          centerNumber.textContent = String(index + 1).padStart(2, '0');
          centerTitle.textContent = titles[index];
          stations.forEach((station, i) => station.classList.toggle('is-active', i === index));
        }
      }
    });
    scene.fromTo('.method__arc', { attr: { 'stroke-dashoffset': 1 } }, { attr: { 'stroke-dashoffset': .2 }, duration: 1 }, 0)
      .fromTo('.method__arm', { rotation: 0 }, { rotation: 288, duration: 1 }, 0);
    stations.forEach((station, index) => scene.fromTo(station, { scale: .9 }, { scale: 1.12, duration: .06, ease: 'power2.out' }, index / 5).to(station, { scale: 1, duration: .1 }, index / 5 + .06));

    if (context.conditions.desktop) {
      // Text cards remain full-length and have no autoplay; scrolling builds the stack.
      document.querySelectorAll('.quote-card').forEach((card, index, cards) => {
        const next = cards[index + 1];
        if (next) gsap.to(card, { scale: .96, ease: 'none', scrollTrigger: { trigger: next, start: 'top 85%', end: 'top 140px', scrub: true } });
      });
      // Sillage's closing wordmark assembles as the footer enters the viewport.
      const glyphs = [...document.querySelectorAll('#footer .m-mark__glyph')];
      const middle = (glyphs.length - 1) / 2;
      const ending = gsap.timeline({ scrollTrigger: { trigger: '#footer .footer__mark', start: 'top bottom', end: 'bottom bottom', scrub: true, invalidateOnRefresh: true } });
      glyphs.forEach((glyph, index) => {
        const side = (index - middle) / middle;
        ending.fromTo(glyph, { x: () => side * innerWidth * .12 }, { x: 0, ease: 'power2.out' }, 0);
      });
    }
  });
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
})();
