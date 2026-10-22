const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
const small=matchMedia('(max-width:900px)');
function closeMenu(){nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Otvoriť menu');document.body.classList.remove('menu-open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Zavrieť menu':'Otvoriť menu');nav.classList.toggle('is-open',open);document.body.classList.toggle('menu-open',open);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Tab'&&nav.classList.contains('is-open')){const stops=[menu,...nav.querySelectorAll('a')];const first=stops[0],last=stops.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
small.addEventListener('change',()=>closeMenu());
document.documentElement.classList.add('has-js');
const sections=[...document.querySelectorAll('[data-nav-theme]')];
let queued=false;
function updateHeader(){queued=false;header.classList.toggle('is-scrolled',scrollY>24);const y=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'))||88;const active=sections.find(s=>{const r=s.getBoundingClientRect();return r.top<=y/2&&r.bottom>y/2;});header.classList.toggle('theme-light',active?.dataset.navTheme==='light');}
addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(updateHeader);}},{passive:true});
addEventListener('resize',updateHeader,{passive:true});updateHeader();
const form=document.querySelector('#contact-form');
const status=document.querySelector('#contact-status');
function validate(field){const host=field.closest('.field')||field.parentElement;let error=host.querySelector('.field-error');if(field.validity.valid){field.removeAttribute('aria-invalid');field.removeAttribute('aria-describedby');error?.remove();return true;}field.setAttribute('aria-invalid','true');if(!error){error=document.createElement('span');error.className='field-error';error.id=`${field.id||field.name}-error`;host.append(error);}error.textContent=field.validity.typeMismatch?'Zadajte platnú e-mailovú adresu.':field.type==='checkbox'?'Potvrďte súhlas so spracovaním osobných údajov.':'Vyplňte toto pole.';field.setAttribute('aria-describedby',error.id);return false;}
form.addEventListener('focusout',e=>{if(e.target.matches('input,textarea'))validate(e.target);});
form.addEventListener('input',e=>{if(e.target.getAttribute('aria-invalid')==='true')validate(e.target);});
form.noValidate=true;
form.addEventListener('submit',e=>{e.preventDefault();const fields=[...form.querySelectorAll('input,textarea')];const valid=fields.map(validate);if(valid.includes(false)){fields[valid.indexOf(false)].focus();return;}const d=new FormData(form);const body=[`Meno: ${d.get('name')}`,`Spoločnosť: ${d.get('company')||'—'}`,`Email: ${d.get('email')}`,`Telefón: ${d.get('phone')||'—'}`,'',d.get('message')].join('\n');const mail=document.createElement('a');mail.href=`mailto:info@onlineasistent.sk?subject=${encodeURIComponent(d.get('subject'))}&body=${encodeURIComponent(body)}`;mail.textContent='Otvoriť pripravený e-mail';status.replaceChildren(document.createTextNode('Údaje sú vyplnené. Správa zatiaľ nebola odoslaná. '),mail);status.focus();});
const reduce=matchMedia('(prefers-reduced-motion:reduce)');const override=new URLSearchParams(location.search).get('motion');function motionMode(){document.documentElement.dataset.motion=override==='off'?'off':reduce.matches||override==='reduce'?'reduced':'enhanced';}reduce.addEventListener('change',motionMode);motionMode();
