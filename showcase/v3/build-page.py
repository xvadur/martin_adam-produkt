"""Build the static Sillage / Onda adaptation from Martin's unchanged source copy."""
from pathlib import Path
from html import escape
import json
import math

HERE = Path(__file__).parent
DATA = json.loads((HERE.parents[1] / 'design/beautifier/source/home-content.json').read_text())

def e(value):
    return escape(str(value), quote=True)

def paragraphs(values, cls=''):
    return ''.join(f'<p class="{cls}">{e(p)}</p>' for p in values)

def wordmark():
    return '<span class="m-mark" aria-hidden="true" style="--len:13">' + ''.join(
        f'<span class="m-mark__glyph" style="--hero-i:{i}"><span class="m-mark__ink">{e(c) if c != " " else "&nbsp;"}</span></span>'
        for i, c in enumerate('MARTIN BARCZI')) + '</span>'

arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.5"/></svg>'
hero = DATA['hero']
services = DATA['services']
process = DATA['process']
benefits = DATA['benefits']
about = DATA['about']
quotes = DATA['testimonials']
contact = DATA['contact']
footer = DATA['footer']
portrait = '../shared/assets/real/Martin-foto-optimized-1-scaled.webp'

service_labels = [
    ['Verejné zdroje', 'Kontakty', 'Databáza'],
    ['Kontakt', 'Rozhovor', 'Záujem'],
    ['Požiadavka', 'Starostlivosť', 'Odpoveď'],
    ['Správa', 'Rozhovor', 'Odpoveď'],
    ['Podklady', 'Produkt', 'E-shop'],
    ['Softvér', 'Testovanie', 'Správa so zisteniami'],
]
service_graphics = ''
for i, labels in enumerate(service_labels):
    service_graphics += f'<div class="work-path {"is-active" if i == 0 else ""}" data-visual="{i}" aria-hidden="true">' + ''.join(
        f'<span class="work-node">{e(label)}</span>{arrow if j < 2 else ""}' for j, label in enumerate(labels)
    ) + '</div>'

service_rows = ''.join(
    f'<article class="expertise__row" data-service="{i}"><div class="service-heading"><span class="service-number">{i+1:02d}</span><h3>{e(item["title"])}</h3></div>'
    f'<div class="service-copy">{paragraphs(item["paragraphs"])}<a class="text-link" href="{e(item["cta"]["url"])}">{e(item["cta"]["label"])}{arrow}</a></div></article>'
    for i, item in enumerate(services['items'])
)

stations = ''.join(
    f'<span class="method__station" style="--x:{math.sin(i*2*math.pi/5):.6f};--y:{-math.cos(i*2*math.pi/5):.6f}" aria-hidden="true"><span>{i+1:02d}</span></span>'
    for i in range(5)
)
steps = ''.join(
    f'<li class="step" data-step="{i}"><span class="step__label">{e(item["label"])}</span><h3>{e(item["title"])}</h3>{paragraphs(item["paragraphs"], "step__text")}</li>'
    for i, item in enumerate(process['steps'])
)
benefit_rows = ''.join(
    f'<article class="benefit"><h3>{e(item["title"])}</h3>{paragraphs(item["paragraphs"])}</article>' for item in benefits['items']
)
quote_cards = ''.join(
    f'<figure class="quote-card quote-card--{i+1}" style="--card:{i}"><div class="quote-mark" aria-hidden="true">“</div><blockquote>{e(item["quote"])}</blockquote><figcaption><strong>{e(item["name"])}</strong><span>{e(item["role"])}</span></figcaption></figure>'
    for i, item in enumerate(quotes['items'])
)
fields = ''
for i, field in enumerate(contact['form']['fields']):
    label = e(field['label'])
    required = ' required' if field['required'] else ''
    name = f'field-{i}'
    if field['type'] == 'checkbox':
        fields += f'<label class="consent"><input type="checkbox" name="{name}"{required}><span>{e(field["choices"][0])}</span></label>'
    elif field['type'] == 'textarea':
        fields += f'<label class="field field--full" for="{name}">{label}<textarea id="{name}" name="{name}" rows="4"{required}></textarea></label>'
    else:
        auto = ['name','organization','email','tel','off'][i]
        kind = 'tel' if i == 3 else field['type']
        fields += f'<label class="field {"field--full" if i == 4 else ""}" for="{name}">{label}<input id="{name}" name="{name}" type="{kind}" autocomplete="{auto}"{required}></label>'

footer_services = ''.join(
    f'<a href="{e(l["url"])}">{e(l["label"])}</a>'
    for l in footer['serviceLinks']
    if '/skolenie-na-backoffice/' not in l['url']
)
footer_contacts = ''.join(f'<a href="{e(l["url"])}">{e(l["label"])}</a>' for l in footer['contactLinks'])

html = f'''<!doctype html>
<!-- Martin Barczi: adaptation of Sillage + Onda by 8B. MIT notices in source/. -->
<html lang="sk">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="{e(hero['title'])}"><meta name="robots" content="noindex, nofollow">
<title>Martin Barczi — Online asistent</title>
<link rel="preload" href="fonts/mozilla-headline-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="../shared/assets/fonts/manrope-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="source-system.css"><link rel="stylesheet" href="source-onda.css"><link rel="stylesheet" href="styles.css">
<script defer src="../shared/vendor/gsap.min.js"></script><script defer src="../shared/vendor/ScrollTrigger.min.js"></script><script defer src="motion.js"></script>
</head>
<body>
<a class="skip-link" href="#main">Preskočiť na obsah</a>
<header id="navigation"><nav class="nav__bar" aria-label="Hlavná navigácia">
<a class="nav-name" href="#hero">MB<span>Online asistent</span></a>
<div class="nav__list"><a href="#expertise">Služby</a><a href="#method">Spolupráca</a><a href="#testimonials">Referencie</a><a href="#contact">Kontakt</a></div>
<a class="all-designs" href="../">Všetky návrhy</a>
<button class="nav__toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Otvoriť menu"><span></span><span></span></button>
</nav><div class="mobile-menu" id="mobile-menu" hidden><a href="#expertise">Služby</a><a href="#method">Spolupráca</a><a href="#about">Môj príbeh</a><a href="#testimonials">Referencie</a><a href="#contact">Kontakt</a></div></header>
<main id="main">
<section id="hero" aria-labelledby="hero-heading">
<h1 class="hero__title" id="hero-heading"><span class="u-hidden">Martin Barczi</span>{wordmark()}</h1>
<div class="hero__info"><p>{e(hero['eyebrow'])}</p><p class="hero__tagline">{e(hero['trust'][1])} / {e(hero['trust'][2])}</p><a class="hero__go text-link" href="#contact">{e(hero['ctas'][0]['label'])}{arrow}</a></div>
<div class="hero__media"><div class="hero__media-in"><div class="hero__push"><img class="hero-portrait" src="{portrait}" alt="Martin Barczi pri práci na notebooku" width="1699" height="2560" fetchpriority="high"></div></div><div class="hero-caption"><p>{e(hero['trust'][0])}</p><a href="{e(hero['ctas'][1]['url'])}">{e(hero['ctas'][1]['label'])}{arrow}</a></div></div>
<div class="hero-intro"><h2>{e(hero['title'])}</h2><div>{paragraphs(hero['paragraphs'])}</div></div>
</section>
<section id="expertise" data-section="services" aria-labelledby="services-heading">
<div class="expertise__head"><h2 class="section-title" id="services-heading">{e(services['title'])}</h2><div class="section-intro">{paragraphs(services['intro'])}</div></div>
<div class="expertise__body"><aside class="expertise__portrait"><div class="expertise__portrait-in"><img src="{portrait}" alt="Martin Barczi" width="1699" height="2560" loading="lazy"></div><div class="service-visual">{service_graphics}</div></aside><div class="expertise__rows">{service_rows}</div></div>
</section>
<section id="method" data-section="process" aria-labelledby="process-heading">
<div class="method__head"><h2 class="section-title" id="process-heading">{e(process['title'])}</h2></div>
<div class="method__body"><div class="method__ring" aria-hidden="true"><svg class="method__svg" viewBox="0 0 400 400"><circle class="method__track" cx="200" cy="200" r="170"/><circle class="method__arc" cx="200" cy="200" r="170" pathLength="1" stroke-dasharray="1 1" stroke-dashoffset="0"/></svg>{stations}<div class="method__arm"><span class="method__runner"></span></div><div class="method__center"><span class="method-current">01</span><span>Kontakt</span></div></div><ol class="method__steps">{steps}</ol></div>
</section>
<section id="benefits" data-section="benefits" aria-labelledby="benefits-heading"><h2 class="section-title" id="benefits-heading">{e(benefits['title'])}</h2><div class="benefits-list">{benefit_rows}</div></section>
<section id="about" data-section="about" aria-labelledby="about-heading"><div class="about-title"><h2 id="about-heading">{e(about['title'])}</h2><a class="text-link" href="{e(about['cta']['url'])}">{e(about['cta']['label'])}{arrow}</a></div><div class="about-body"><div class="about-image"><img src="{portrait}" alt="Martin Barczi pri svojom pracovnom stole" width="1699" height="2560" loading="lazy"></div><div class="about-copy">{paragraphs(about['paragraphs'])}</div></div></section>
<section id="testimonials" data-section="testimonials" aria-labelledby="testimonials-heading"><h2 class="section-title" id="testimonials-heading">{e(quotes['title'])}</h2><div class="quote-stack">{quote_cards}</div></section>
<section id="contact" data-section="contact" aria-labelledby="contact-heading"><h2 class="section-title" id="contact-heading">{e(contact['title'])}</h2><div class="contact__mailbox"><a class="contact__mail" href="mailto:info@onlineasistent.sk">info@onlineasistent.sk{arrow}</a></div><div class="contact-grid"><div class="contact-side"><h3>{e(footer['contactHeading'])}</h3>{footer_contacts}<p class="form-explainer">Formulár otvorí pripravený e-mail vo vašej e-mailovej aplikácii.</p></div><form id="contact-form" class="contact-form">{fields}<button class="send-button" type="submit">Pripraviť e-mail{arrow}</button><p id="form-status" role="status" aria-live="polite"></p><noscript><p>Napíšte mi priamo na <a href="mailto:info@onlineasistent.sk">info@onlineasistent.sk</a>.</p></noscript></form></div></section>
</main>
<footer id="footer" data-section="footer"><div class="footer-top"><div><h2>{e(footer['contactHeading'])}</h2>{footer_contacts}</div><div class="footer-services"><h2>{e(footer['servicesHeading'])}</h2>{footer_services}</div><nav class="footer-nav" aria-label="Ďalšie stránky"><a href="https://www.onlineasistent.sk/moj-pribeh/">Môj príbeh</a><a href="https://www.onlineasistent.sk/certifikaty/">Certifikáty</a><a href="https://www.onlineasistent.sk/blog/">Blog</a><a href="#hero">Na začiatok{arrow}</a></nav></div><div class="footer__mark" aria-label="Martin Barczi">{wordmark()}</div><div class="footer__row"><p>{e(footer['copyright'])}</p><a href="../">Všetky návrhy</a></div></footer>
</body></html>'''
(HERE/'index.html').write_text(html)
print('V3 generated with complete original content.')
