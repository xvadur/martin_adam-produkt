# Colour

Colour should mean something. A small set of roles, used consistently, looks more expensive than a big palette used freely.

## Roles, not hexes

Components only ever use roles:

| Role | Purpose |
|---|---|
| `--c-bg` | Page background |
| `--c-surface`, `--c-surface-2` | Raised areas (cards, panels, menus) |
| `--c-ink`, `--c-ink-2`, `--c-ink-3` | Text: primary, secondary, muted |
| `--c-line`, `--c-line-2` | Borders and dividers |
| `--c-accent` | Primary action and brand highlight |
| `--c-accent-ink` | Text on top of the accent |
| `--c-accent-soft` | Tinted backgrounds for the accent (`color-mix` 10–16%) |
| `--c-ok`, `--c-warn`, `--c-danger`, `--c-info` | States |
| `--c-focus` | Focus ring (often the accent) |

Light "acts" or sub-brands override these roles inside a scope. They never add new literals.

## Building ramps

Build each hue as an 11-step ramp (50–950) in **OKLCH**, which keeps lightness steps perceptually even:
- Lightness from about 0.98 (50) to 0.18 (950).
- Chroma peaks around steps 400–600 and drops towards both ends, so the extremes don't look neon or muddy.
- Keep the hue constant, or shift it slightly (warmer in the darks for warm brands).

```css
--brand-500: oklch(0.62 0.19 255);
--brand-100: oklch(0.94 0.04 255);
--brand-900: oklch(0.26 0.08 255);
```

**Tinted neutrals:** give the greys a hint of the brand hue (chroma 0.005–0.02). Pure grey next to a coloured brand looks unfinished.

## Contrast

- WCAG AA: 4.5:1 for body text, 3:1 for large text (≥24px, or ≥18.66px bold) and for UI parts (input borders, icons, focus rings).
- Aim higher for body (7:1 is comfortable). Secondary text is where sites usually fail; check `--c-ink-2` and `--c-ink-3` on every surface they appear on.
- Never rely on colour alone for state; pair it with an icon, text or shape.

## Accent budget

- Roughly 60% base, 30% supporting neutrals or surfaces, 10% accent.
- One accent for actions. A second accent only with a clear job (e.g. highlights in content vs buttons).
- Multi-colour brands: scatter the colours across elements. Stacking them as adjacent parallel bands reads as a flag. Do it only when that's the point.

## Dark mode and dark designs

- Don't invert. Build a separate set of roles.
- Surfaces get *lighter* as they rise (elevation = lightness), instead of relying on shadows.
- Lower the accent's chroma slightly on dark backgrounds, or it vibrates.
- Off-black and off-white (`#0a0a0a` / `#f0f0f0`) are easier on the eyes for large areas; pure black is fine for cinematic, OLED-first designs.
- Set `color-scheme: dark` so form controls and scrollbars match.
- Respect `prefers-color-scheme` if the site offers both; let a stored choice override it.

## Gradients, glows and texture

- Interpolate in OKLCH to avoid muddy middles: `linear-gradient(in oklch, var(--a), var(--b))`.
- Prefer radial "light sources" behind content to big diagonal rainbow gradients.
- Glows: `color-mix(in srgb, var(--c-accent) 30–40%, transparent)` as `box-shadow` or `text-shadow` on one element per viewport.
- Grain: an inline SVG `feTurbulence` tile as a data-URI at 3–8% effective opacity. Check it's actually visible, or it's wasted bytes.

## Brand skins (sub-pages with their own identity)

```css
.skin-acme { --c-bg: #0c2748; --c-ink: #f4f7ff; --c-accent: #6fa8ff; --font-display: 'Bricolage Grotesque', sans-serif; }
body:has(.skin-acme) { --c-accent: #6fa8ff; } /* so the nav, progress bar and selection outside the scope follow */
```

Also set `<meta name="theme-color">` for the page, and check that the scroll-progress bar, nav tint, `::selection` and focus ring all read the role tokens.

## Audit

```bash
grep -rhoE '#[0-9a-fA-F]{6}\b' src | sort | uniq -c | sort -rn | head -25   # repeated literals → token candidates
grep -rhoE 'rgba?\([^)]*\)' src | sort | uniq -c | sort -rn | head -25
grep -rn 'color-mix\|oklch' src | wc -l
```

Look for near-duplicates (`#F5F1E8` vs `#F2F0EB`, `#FFB000` vs `#FFB648`) with no reason to differ, and for brand values that disagree between a data file and the page that uses them.
