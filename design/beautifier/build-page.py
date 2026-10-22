"""Rebuild the static preview from the verified, verbatim source content."""
from pathlib import Path
import json
from html import escape as e

P = Path(__file__).resolve().parent
d = json.loads((P/'source/home-content.json').read_text())
def paras(items): return ''.join(f'<p data-source-copy>{e(p)}</p>' for p in items)
def icon(name='arrow-right'): return f'<img class="icon" src="assets/icons/{name}.svg" alt="" aria-hidden="true" width="24" height="24">'
def link(cta, cls='text-link', target=None): return f'<a class="{cls}" href="{e(target or cta["url"])}"><span>{e(cta["label"])}</span>{icon()}</a>'
def heading(data,extra=''):
 return f'<div class="section-heading {extra}"><p class="eyebrow" data-reveal>{e(data["eyebrow"])}</p><h2 data-reveal>{e(data["title"])}</h2></div>'

nav=''
for i,n in enumerate(d['navigation']):
 targets=['#domov','#pribeh','#sluzby',n['url'],n['url'],'#kontakt']
 nav+=f'<a href="{e(targets[i])}" class="{"nav-contact" if i==5 else ""}">{e(n["label"])}</a>'
hero=d['hero']; services=d['services'];process=d['process'];benefits=d['benefits'];about=d['about'];proof=d['testimonials'];contact=d['contact'];footer=d['footer']
rows=''
for i,s in enumerate(services['items']):
 rows+=f'''<article class="service-row service-row-{i+1}" id="sluzba-{i+1}">
 <div class="service-media"><img data-service-media src="{e(s['image']['localPath'])}" alt="{e(s['image']['alt']) if s['image']['alt']!='blank' else ''}" width="570" height="380" loading="lazy" decoding="async"><span class="service-index" aria-hidden="true">{e(s['number'])}</span></div>
 <div data-service-text class="service-copy"><h3>{e(s['title'])}</h3>{paras(s['paragraphs'])}{link(s['cta'])}</div></article>'''
steps=''.join(f'<li class="process-step"><span class="step-label">{e(s["label"])}</span><div><h3>{e(s["title"])}</h3>{paras(s["paragraphs"])}</div></li>' for s in process['steps'])
benefit_items=''.join(f'<article class="benefit" data-reveal><span class="benefit-marker" aria-hidden="true">{str(i+1).zfill(2)}</span><h3>{e(b["title"])}</h3>{paras(b["paragraphs"])}</article>' for i,b in enumerate(benefits['items']))
quotes=''.join(f'<figure class="quote quote-{i+1}" data-reveal><span class="quote-mark" aria-hidden="true">“</span><blockquote><p data-source-copy>{e(q["quote"])}</p></blockquote><figcaption><strong>{e(q["name"])}</strong><span>{e(q["role"])}</span></figcaption></figure>' for i,q in enumerate(proof['items']))
fields=''
field_names=['name','company','email','phone','subject','message','consent']
for i,f in enumerate(contact['form']['fields']):
 name=field_names[i];label=e(f['label']);required=' required' if f['required'] else ''
 if f['type']=='checkbox':
  fields+=f'<div class="field field-wide consent"><span class="field-label">{label}</span><label class="checkbox-label"><input type="checkbox" name="{name}"{required}><span>{e(f["choices"][0])}</span></label></div>'
 else:
  klass=' field-wide' if i>=4 else ''
  control=f'<textarea id="field-{name}" name="{name}" rows="4"{required}></textarea>' if f['type']=='textarea' else f'<input id="field-{name}" name="{name}" type="{"tel" if name=="phone" else f["type"]}" autocomplete="{ {"name":"name","company":"organization","email":"email","phone":"tel"}.get(name,"off") }"{required}>'
  fields+=f'<div class="field{klass}"><label for="field-{name}">{label}</label>{control}</div>'
footer_services=''.join(f'<li><a href="{e(x["url"])}">{e(x["label"])}</a></li>' for x in footer['serviceLinks'] if '/skolenie-na-backoffice/' not in x['url'])
contact_links=''.join(f'<a href="{e(x["url"])}">{e(x["label"])}</a>' for x in footer['contactLinks'])

html=f'''<!doctype html>
<html lang="sk"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="theme-color" content="#0a252b"><title>Martin Barczi — Online asistent | Náhľad</title>
<meta name="description" content="{e(hero['title'])}">
<link rel="preload" as="font" href="assets/fonts/manrope-latin.woff2" type="font/woff2" crossorigin><link rel="preload" as="image" href="assets/real/Martin-foto-optimized-1-scaled.webp">
<link rel="stylesheet" href="tokens.css?v=9"><link rel="stylesheet" href="styles.css?v=9">
<script>if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&!['off','reduce'].includes(new URLSearchParams(location.search).get('motion'))){{document.documentElement.classList.add('x-intro');setTimeout(()=>document.documentElement.classList.remove('x-intro'),2600)}}</script>
<style>.x-intro [data-intro]{{visibility:hidden}}@media(prefers-reduced-motion:reduce){{.x-intro [data-intro]{{visibility:visible}}}}</style>
<script type="module" src="basics.js?v=9"></script><script type="module" src="motion.js?v=9"></script></head>
<body><a class="skip-link" href="#obsah">Preskočiť na obsah</a>
<header class="site-header"><div class="nav-inner"><a class="brand" href="#domov" aria-label="Martin Barczi — Domov"><span class="brand-initials" aria-hidden="true">mb<span>↗</span></span><span class="brand-name">Martin Barczi<span>Online asistent</span></span></a>
<button class="menu-toggle" aria-controls="navigation" aria-expanded="false" aria-label="Otvoriť menu">{icon('menu-2')}</button><nav id="navigation" aria-label="Hlavná navigácia">{nav}</nav></div></header>
<main id="obsah">
<section class="hero dark" id="domov" data-fx="hero" data-nav-theme="dark"><div class="hero-orbit" aria-hidden="true"></div><div class="hero-grid wrap">
<div class="hero-copy"><p class="eyebrow hero-kicker" data-intro><span class="status-dot" aria-hidden="true"></span>{e(hero['eyebrow'])}</p>
<p class="hero-prefix" data-intro><span>{e(hero['animatedHeading']['prefixes'][0])}</span><span class="sr-only"> / {e(hero['animatedHeading']['prefixes'][1])}</span></p>
<h1 data-hero-title data-intro><span data-hero-name>{e(hero['animatedHeading']['stableSuffix']).replace('Martin Barczi','Martin<br>Barczi<span class="name-period">.</span>')}</span></h1>
<p class="hero-promise" data-intro data-source-copy>{e(hero['title'])}</p>
<div class="hero-description" data-intro>{paras(hero['paragraphs'])}</div>
<div class="hero-actions" data-intro>{link(hero['ctas'][0],'button button-primary','#kontakt')}{link(hero['ctas'][1],'text-link text-link-light','#pribeh')}</div></div>
<div class="hero-photo-wrap"><div class="photo-rail" aria-hidden="true"><span>Martin Barczi</span><span>Online asistent</span></div><figure class="hero-photo"><img data-hero-photo src="assets/real/Martin-foto-optimized-1-scaled.webp" width="1699" height="2560" alt="Martin Barczi pri práci na notebooku" fetchpriority="high"><figcaption><span>Martin Barczi</span><span>Online asistent {icon()}</span></figcaption></figure></div>
</div><div class="hero-bottom wrap"><ul class="trust-list">{''.join(f'<li>{e(t)}</li>' for t in hero['trust'])}</ul><a href="#sluzby" class="scroll-cue" aria-label="Prejsť na služby">{icon()}<span>Moje služby</span></a></div></section>
<section class="services light sheet" id="sluzby" data-fx="services" data-nav-theme="light"><div class="wrap"><div class="services-head">{heading(services)}<div class="section-intro" data-reveal>{paras(services['intro'])}</div></div><div class="service-list">{rows}</div></div></section>
<div class="act-transition" data-fx="transition" data-transition="iris" aria-hidden="true"><div data-transition-shape></div></div>
<section class="process dark" id="spolupraca" data-fx="process" data-nav-theme="dark"><div class="process-pin wrap"><div class="process-layout"><div class="process-visual">{heading(process)}<div class="process-counter" aria-hidden="true"><span class="process-number">01</span><span class="process-total">/ 05</span></div><div class="process-track" aria-hidden="true"><span class="process-progress"></span></div><button data-process-toggle class="motion-toggle" hidden>Pozastaviť animáciu</button></div><ol class="process-steps">{steps}</ol></div></div></section>
<section class="benefits light" data-fx="reveal" data-nav-theme="light"><div class="wrap">{heading(benefits)}<div class="benefit-grid">{benefit_items}</div></div></section>
<section class="story light" id="pribeh" data-fx="story" data-nav-theme="light"><div class="wrap story-grid"><figure class="story-photo"><img data-story-photo src="assets/real/Martin-foto-optimized-1-scaled.webp" width="1699" height="2560" loading="lazy" alt="Martin Barczi vo svojom pracovnom prostredí"><figcaption>Martin Barczi / Online asistent</figcaption></figure><div class="story-copy">{heading(about)}<div data-reveal>{paras(about['paragraphs'])}</div><div data-reveal>{link(about['cta'])}</div></div></div></section>
<section class="proof dark" id="referencie" data-fx="reveal" data-nav-theme="dark"><div class="wrap">{heading(proof)}<div class="quote-grid">{quotes}</div></div></section>
<section class="contact light" id="kontakt" data-nav-theme="light"><div class="wrap contact-grid"><div class="contact-copy">{heading(contact)}<div class="contact-links">{contact_links}</div><span class="contact-symbol" aria-hidden="true">↗</span></div><form id="contact-form" action="mailto:info@onlineasistent.sk" method="get"><div class="form-grid">{fields}</div><button type="submit" class="button button-dark">{e(contact['form']['submitLabel'])}{icon()}</button><p class="form-note">Lokálny náhľad: formulár overí údaje a pripraví e-mail. Správu odošlete vo svojej e-mailovej aplikácii.</p><p id="contact-status" role="status" tabindex="-1"></p><noscript><style>#contact-form>button{{display:none}}</style><p>Správu môžete poslať na <a href="mailto:info@onlineasistent.sk">info@onlineasistent.sk</a>.</p></noscript></form></div></section>
</main><footer class="site-footer dark" data-nav-theme="dark"><div class="wrap footer-top"><a href="#domov" class="brand"><span class="brand-initials" aria-hidden="true">mb<span>↗</span></span><span class="brand-name">Martin Barczi<span>Online asistent</span></span></a><div><h2>{e(footer['contactHeading'])}</h2><div class="footer-contacts">{contact_links}</div></div><div class="footer-service-list"><h2>{e(footer['servicesHeading'])}</h2><ul>{footer_services}</ul></div></div><div class="wrap footer-end"><span>{e(footer['copyright'])}</span><a href="#domov">Späť hore ↑</a></div><div class="footer-wordmark" aria-hidden="true">Martin Barczi<span>↗</span></div></footer>
</body></html>'''
(P/'index.html').write_text(html)
print('Generated index.html from original content:',len(html),'characters')
