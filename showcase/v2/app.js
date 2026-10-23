/* Martin Barczi / interactive study. Original implementation; no external runtime. */
(() => {
  const root = document.documentElement;
  document.body.classList.add('js-ready');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const menu = document.querySelector('.menu-button');
  const nav = document.querySelector('#navigation');
  function closeMenu() { nav.dataset.open = 'false'; menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Otvoriť navigáciu'); }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    nav.dataset.open = String(open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Zavrieť navigáciu' : 'Otvoriť navigáciu');
  });
  nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenu(); } });

  let paused = reduced.matches;
  const pause = document.querySelector('.motion-control');
  function setPause(value) {
    paused = value;
    document.body.classList.toggle('motion-paused', value);
    pause.setAttribute('aria-pressed', String(value));
    pause.querySelector('span').textContent = value ? 'Spustiť pohyb' : 'Pozastaviť pohyb';
    window.dispatchEvent(new CustomEvent('martin-motion', { detail: { paused: value } }));
  }
  pause.addEventListener('click', () => setPause(!paused));
  reduced.addEventListener('change', e => setPause(e.matches));
  setPause(paused);

  const diagrams = [
    `<g class="float"><rect x="11" y="28" width="88" height="119" rx="9" class="plate"/><path d="M25 52h38m-38 16h55m-55 16h47m-47 16h55m-55 16h32" class="outline"/><circle cx="82" cy="39" r="3" class="bright"/></g><path d="M101 87h53m72 0h51" class="signal"/><path d="M159 54h61l-22 30v29l-17 8V84l-22-30Z" class="plate"/><g class="float delay"><rect x="281" y="37" width="120" height="104" rx="9" class="paper"/><path d="M294 69h93m-93 21h93m-93 21h93m-93-58h28m26 0h27M330 78v45" class="ink"/><path d="m292 131 6 6 11-12" class="ink"/></g><text x="55" y="180" text-anchor="middle">Verejné zdroje</text><text x="190" y="159" text-anchor="middle">Výber</text><text x="341" y="173" text-anchor="middle">Databáza kontaktov</text>`,
    `<g class="float"><rect x="20" y="48" width="98" height="100" rx="10" class="plate"/><circle cx="69" cy="78" r="13" class="outline"/><path d="M46 126v-13a23 23 0 0 1 46 0v13M46 136h46" class="outline"/></g><path d="M124 99h48m70 0h48" class="signal"/><circle cx="207" cy="99" r="34" class="plate"/><path d="m197 77 11 4-1 11-7 4a35 35 0 0 0 12 12l4-7 11-1 4 11c-3 12-12 11-23 2-14-11-23-26-11-36Z" class="outline"/><g class="float delay"><rect x="297" y="55" width="90" height="87" rx="11" class="paper"/><path d="M310 78h18m-18 14h55m-55 14h38m-38 14h47" class="ink"/></g><text x="69" y="175" text-anchor="middle">Kontakt</text><text x="207" y="158" text-anchor="middle">Rozhovor</text><text x="342" y="172" text-anchor="middle">Záujem klienta</text>`,
    `<g class="float"><rect x="18" y="53" width="96" height="88" rx="10" class="plate"/><path d="M35 75h62m-62 16h45m-45 16h58m-58 16h30" class="outline"/></g><path d="M120 96h46m85 0h41" class="signal"/><circle cx="207" cy="96" r="37" class="plate"/><path d="M183 105V92a24 24 0 0 1 48 0v13m-48-12h-6v21h12V93Zm48 0h6v21h-12V93Zm0 22c-1 10-13 15-25 15" class="outline"/><g class="float delay"><rect x="297" y="52" width="93" height="91" rx="11" class="paper"/><path d="m320 93 15 15 28-31" class="ink"/></g><text x="66" y="173" text-anchor="middle">Otázka klienta</text><text x="207" y="166" text-anchor="middle">Starostlivosť</text><text x="344" y="173" text-anchor="middle">Riešenie</text>`,
    `<g class="float"><rect x="41" y="19" width="238" height="72" rx="14" class="plate"/><path d="m78 91-18 18V90" class="outline"/><text x="63" y="49" style="font-size:12px">Dobrý deň.</text><path d="M63 65h104" class="outline"/></g><g class="float delay"><rect x="132" y="108" width="237" height="72" rx="14" class="paper"/><path d="m332 180 18 16v-16" class="outline"/><text x="153" y="141" style="font-size:12px;fill:#2b4b34">S čím vám pomôžem?</text><path d="M153 157h104" class="ink"/></g><circle cx="89" cy="139" r="3" class="bright pulse"/><circle cx="101" cy="139" r="3" class="bright pulse pulse2"/><circle cx="113" cy="139" r="3" class="bright pulse"/>`,
    `<g class="float"><rect x="26" y="29" width="145" height="151" rx="12" class="plate"/><rect x="40" y="44" width="117" height="82" rx="7" class="outline"/><path d="m76 65 22-12 23 12v35l-23 12-22-12V65Zm0 0 22 12 23-12M98 77v35M43 143h93m-93 15h66" class="outline"/></g><path d="M178 103h57" class="signal"/><g class="float delay"><rect x="242" y="36" width="146" height="138" rx="12" class="paper"/><text x="258" y="66" style="fill:#2b4b34">Názov produktu</text><path d="M257 81h114m-114 16h89m-89 16h114" class="ink"/><rect x="257" y="131" width="78" height="24" rx="5" class="ink"/><path d="m348 143 6 6 12-14" class="ink"/></g>`,
    `<g class="float"><rect x="20" y="21" width="246" height="159" rx="10" class="plate"/><path d="M20 47h246" class="outline"/><circle cx="34" cy="34" r="2" class="bright"/><circle cx="44" cy="34" r="2" class="bright"/><circle cx="54" cy="34" r="2" class="bright"/><rect x="36" y="63" width="64" height="99" rx="4" class="outline"/><path d="M117 77h127m-127 18h95m-95 18h127m-127 18h65" class="outline"/></g><g class="float delay"><rect x="244" y="70" width="144" height="113" rx="11" class="paper"/><path d="m258 92 5 5 8-9m-13 29 5 5 8-9m-13 30 5 5 8-9M282 94h89m-89 24h67m-67 25h86" class="ink"/></g><text x="140" y="204" text-anchor="middle">Aplikácia</text><text x="317" y="205" text-anchor="middle">Zistenia a návrhy</text>`
  ];
  const titles = ['Databázy kontaktov','Oslovenie klientov','Zákaznícka podpora','Online chat','Produkty na e-shop','Testovanie aplikácií'];
  const captions = ['Verejné zdroje → výber → prehľadná databáza','Príprava → rozhovor → záujem klienta','Otázka → starostlivosť → riešenie','Správa návštevníka → osobná odpoveď','Podklady → produktové údaje → e-shop','Funkčnosť → používateľská skúsenosť → správa'];
  const photos = ['OnlineAsistentWeb.jpg','OnlineAsistentWeb2.jpg','OnlineAsistentWeb6.jpg','OnlineAsistenWeb4.jpg','OnlineAsistentWeb5.jpg','Testovanie-softveru-a-aplikacii.jpg'];
  const colors = ['#29382f','#3b3029','#293b3a','#313744','#3d3930','#2f3741'];
  const services = [...document.querySelectorAll('.service-item')];
  const scene = document.querySelector('#service-art');
  const stage = document.querySelector('.service-visual');
  let active = 0;
  function setService(index) {
    active = index;
    services.forEach((s, i) => { if (s.open !== (i === index)) s.open = i === index; });
    document.querySelector('#visual-title').textContent = titles[index];
    document.querySelector('#stage-caption').textContent = captions[index];
    stage.dataset.active = String(index);
    stage.style.backgroundColor = colors[index];
    scene.innerHTML = `<svg class="scene" viewBox="0 0 416 225" xmlns="http://www.w3.org/2000/svg" fill="none">${diagrams[index]}</svg>`;
    const photo = document.querySelector('#service-photo');
    photo.src = '../shared/assets/real/' + photos[index];
    photo.alt = services[index].querySelector('.service-name').textContent;
    document.querySelector('#service-photo-label').textContent = titles[index];
  }
  services.forEach((item, i) => {
    const summary = item.querySelector('summary');
    summary.addEventListener('click', e => { e.preventDefault(); setService(i); });
    summary.addEventListener('keydown', e => {
      const dir = ['ArrowDown','ArrowRight'].includes(e.key) ? 1 : ['ArrowUp','ArrowLeft'].includes(e.key) ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      const index = (i + dir + services.length) % services.length;
      setService(index);
      services[index].querySelector('summary').focus();
    });
  });
  setService(0);

  const steps = [...document.querySelectorAll('.step-choice')];
  steps.forEach((button, index) => {
    function activate() {
      steps.forEach((s, i) => s.setAttribute('aria-pressed', String(index === i)));
      document.querySelector('.process-line>span').style.transform = `translateX(${index * 100}%)`;
    }
    button.addEventListener('click', activate);
    button.addEventListener('keydown', e => {
      const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      const next = steps[(index + dir + steps.length) % steps.length];
      next.click(); next.focus();
    });
  });

  const quotes = [...document.querySelectorAll('.quote')];
  let quoteIndex = 0;
  function selectQuote(index) {
    quoteIndex = (index + quotes.length) % quotes.length;
    quotes.forEach((q, i) => { q.hidden = i !== quoteIndex; });
    document.querySelector('#quote-count').textContent = `${quoteIndex + 1} / ${quotes.length}`;
  }
  document.querySelector('.quote-controls').hidden = false;
  document.querySelector('#quote-prev').addEventListener('click', () => selectQuote(quoteIndex - 1));
  document.querySelector('#quote-next').addEventListener('click', () => selectQuote(quoteIndex + 1));
  selectQuote(0);

  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = `Meno: ${data.get('name')}\nSpoločnosť: ${data.get('company') || '—'}\nE-mail: ${data.get('email')}\nTelefón: ${data.get('phone') || '—'}\n\n${data.get('message')}\n\nSúhlas so spracovaním osobných údajov: áno`;
    window.location.href = `mailto:info@onlineasistent.sk?subject=${encodeURIComponent(data.get('subject'))}&body=${encodeURIComponent(body)}`;
    document.querySelector('#form-status').textContent = 'E-mail je pripravený na otvorenie vo vašom e-mailovom klientovi. Skontrolujte ho a odošlite. Ak sa klient neotvoril, napíšte na info@onlineasistent.sk.';
  });
})();
