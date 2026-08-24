# Eternal Heritage — Design Directions

## Three stylistic approaches

### 1. Night Archive
**Very Brief Intro:** A hushed, cinematic digital archive where temple photography emerges from a deep indigo field, paced by gilded typographic markers and archival captions. The experience is reverent, editorial, and calm rather than ornamental.

**Probability:** 0.07

### 2. Monsoon Courtyard
**Very Brief Intro:** A mineral, rain-darkened interpretation of temple travel notes, pairing weathered stone, wet-slate tones, and pale brass highlights. It would feel tactile and geographic, with a contemporary museum sensibility.

**Probability:** 0.04

### 3. Saffron Reliquary
**Very Brief Intro:** A warmer, more intimate world inspired by illuminated manuscripts and devotional objects, with dense burnished umber fields, saffron accents, and close-cropped material studies.

**Probability:** 0.08

---

# Chosen approach — Night Archive

## Design Movement

**Contemporary museum editorialism informed by archival photography and South Indian temple architecture.** The visual language avoids pastiche: Indian cultural references appear through proportion, rhythm, light, and material depth rather than decorative overload.

## Core Principles

1. **Photographs lead; interface recedes.** Authentic temple photographs carry the emotional weight while interface elements remain fine-lined, quiet, and purposeful.
2. **Gold denotes orientation, not decoration.** The signature gold appears in headings, rules, navigation states, and small wayfinding marks only.
3. **Editorial asymmetry creates procession.** Broad image planes, narrow annotation columns, and staggered sections encourage a deliberate downward journey.
4. **Depth is atmospheric, not glossy.** Low-contrast textures, ink-dark layers, vignette fades, and modest borders replace glassmorphism and oversized rounded cards.

## Color Philosophy

The site is grounded in **midnight indigo** and charcoal—colors that allow saturated historic temple photography to retain authority. **Antique gold** acts as a restrained index color, echoing lamp light and aged metal without turning the interface into a luxury cliché. **Parchment** and faded sand resolve body copy at a comfortable, scholarly contrast.

## Layout Paradigm

The homepage is conceived as an **archive corridor** rather than a centered landing page: a high, full-bleed threshold leads into a long editorial axis. The gallery then breaks into uneven card heights and a dedicated narrow “field notes” rail. On the Meenakshi route, a reading-room composition alternates wide visual evidence and concentrated text blocks rather than repeating stacked marketing modules.

## Signature Elements

1. A faint, large-scale **concentric mandala field** that appears only at section transitions.
2. **Hairline gold index rules** with small caps labels that anchor each editorial block.
3. A custom **threshold mark**—four turning stone steps nested around a central point—that recurs in the masthead, section dividers, and favicon.

## Interaction Philosophy

Interactions should reward attention without interrupting reading. Temple cards gain a slight lift, photo focus, and gold rule on hover; filters select real gallery subsets. Navigation remains explicit and provides a clear return route from every detail page. Future-facing links state that they are “In the archive soon” rather than behaving as inert controls.

## Animation

Use only soft opacity and transform transitions. Section content rises 14px on initial reveal over 500–650ms with a 60ms stagger. Card images scale no more than 1.035 over 500ms. The mandala field rotates almost imperceptibly over 90 seconds and is disabled under `prefers-reduced-motion`. No bouncing, marquee motion, or intrusive scroll effects.

## Typography System

**Playfair Display** is used for temple names and major editorial headings at medium-to-bold weights with slightly tightened tracking. **Montserrat** supports labels, navigation, captions, and body copy, using generous leading and measured uppercase letter spacing for metadata. Typography must use a clear hierarchy: display title, editorial title, section label, then readable body text.

## Brand Essence

**Eternal Heritage is a quiet, visual archive for students and curious visitors who want to encounter India’s temple traditions through evidence, atmosphere, and thoughtful context.**

**Personality:** Reverent, precise, atmospheric.

## Brand Voice

Headlines sound like archive titles; CTAs sound like invitations to observe rather than marketing prompts. Microcopy remains concise, factual, and transparent when a feature is not yet available.

> “Enter the living geometry of Madurai.”

> “Follow the stones into the archive.”

## Wordmark & Logo

The wordmark uses a letter-spaced small-caps treatment of **Eternal Heritage**, paired with a bespoke threshold mark: four rectilinear steps forming a square aperture. The mark is a bold, text-free gold symbol on transparency, equally legible in the header and at favicon scale.

## Signature Brand Color

**Archive Gold — #D6B25E.**

## Style Decisions

The Meenakshi route will preserve the supplied screenshot’s vertical narrative: cinematic temple threshold, divine presence, three architecture studies, ritual and ornamentation, and a restrained footer. All temple imagery will be authentic photography with attribution data retained in the project; generated imagery will be limited to the abstract brand mark and non-representational atmospheric textures, never temple photographs or deity depictions.
