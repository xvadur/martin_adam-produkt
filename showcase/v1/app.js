(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Otvoriť menu');
  };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Zatvoriť menu' : 'Otvoriť menu');
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach(element => {
      element.classList.add('reveal-ready');
      revealObserver.observe(element);
    });
    const stepObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-current');
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('[data-step]').forEach(step => stepObserver.observe(step));
  }
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const body = [
      'Meno: ' + values.get('name'),
      'Názov spoločnosti: ' + (values.get('company') || '—'),
      'Email: ' + values.get('email'),
      'Telefón: ' + (values.get('phone') || '—'),
      '',
      String(values.get('message')),
      '',
      'Súhlasím so spracovaním osobných údajov.'
    ].join('\n');
    const mail = 'mailto:info@onlineasistent.sk?subject=' + encodeURIComponent(values.get('subject')) + '&body=' + encodeURIComponent(body);
    window.location.href = mail;
    status.textContent = 'Správa je pripravená pre vašu e-mailovú aplikáciu. Ak sa neotvorila, napíšte na info@onlineasistent.sk.';
  });
})();
