# Interview

Goal: learn what the owner wants the site to feel like in as few questions as possible, then get out of their way. At most 3 rounds of at most 4 questions. Every question offers "You decide". Ground every question in what you saw during the look-first phase; abstract questions get vague answers.

## Round 1: Purpose and feel (always ask)

1. **Who lands here, and what should they do?** Offer options shaped by what you saw: book a call, buy, sign up, download, visit in person, donate, read and subscribe, be impressed and hire. Plus "You decide".
2. **What should it feel like?** Offer the closest 3–4 directions from `directions.md` by name, each with a one-line description (e.g. "Editorial: calm, serif-led, generous space"), plus "Mix" and "You decide".
3. **Any site you'd like it to feel like?** Free text: URLs or screenshots. If they give one, open it and name the specific moves you'd borrow, in plain words, then confirm.
4. **What must stay?** Logo, colours, a section they love, a transition they like. The copy stays by default unless they say otherwise.

## Round 2: Look and structure (only what you couldn't infer)

- **Colour:** keep, evolve (same hues with more depth and contrast), or new? Light, dark, or shifting between sections?
- **Type:** keep, or pick a direction (offer 2–3 pairings from the chosen direction by name, e.g. "a heavy modern sans with a serif accent").
- **Structure:** are the current sections right? Reorder or merge only with approval; never cut copy without it.
- **Sub-brands:** should product or case-study pages look like their own brand, or share the main look?
- **Imagery:** real photos, product screenshots, recreated live UI, illustration, or abstract shapes?

## Round 3: Constraints (only if relevant)

- Stack constraints: CMS, framework, hosting, "no new dependencies".
- Performance budget, or visitors on slow phones.
- Accessibility requirements beyond the defaults.
- Deadline, or which page to start with.
- Who maintains it afterwards. This decides how simple the kernel and docs must be.

## Don't ask

- Anything you can see for yourself.
- Exact animation values, sizes or hex codes: that's your job.
- "Do you want animations?": they asked for this skill.
- Whether you may rewrite copy. List copy issues as flags instead.

## Picking a direction when there's no vision

1. Read the product, the audience and any existing brand assets (logo colours, fonts in use, photography).
2. Map the brand to a direction in `directions.md`. Use the "Good for" lines there; when two fit, prefer the one that contrasts with the competitors you saw.
3. Write a two-sentence direction, e.g.: *"Editorial: warm off-white paper, a high-contrast serif for headlines with a quiet sans for text, generous space. Motion is slow and reading-paced, with one scroll-scrubbed story of the product."*
4. Show the page table and proceed after a yes. Don't run another round of questions.

## REVAMP-BRIEF.md template

```markdown
# Revamp brief: <site>
Date: <YYYY-MM-DD> · Owner: <name>

## Purpose
- Visitors: <who>
- Main action: <what>
- Feel: <direction> (<one line on why>)

## Keep
- <logo / colours / sections / transitions / all copy>

## References
- <url>: borrowing <specific moves>

## Direction
<two sentences>

## Look
- Palette: <keep | evolve | new: roles>
- Type: <families and roles>
- Imagery: <photos | screenshots | live UI | illustration | shapes>
- Sub-brands: <own brand | shared>

## Constraints
- Stack: <…>
- Performance / accessibility: <…>
- Maintainer: <…>

## Out of scope
- Copy changes (flag only) unless listed here: <…>
```
