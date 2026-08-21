---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["assets/css/home.css","assets/js/home.js"]
---

# Homepage Surface Brief

## Scope and visitor mode

- Primary target: `index.html`; related implementation targets: `assets/css/home.css`, `assets/js/home.js`.
- Persuade surface for Canadian high-school students first, with educators, sponsors, mentors, admissions officers, and industry professionals as secondary visitors.
- Job: explain Luban's purpose, make the four active program pillars concrete, establish credible scale, and route visitors to event details or contact.
- Primary action: explore the four programs. Secondary action: contact Luban.
- Proof/content: the existing mission, program lists, FAQ, vision/about copy, and exact 4 / 18 / 100-by-2028 facts. Keep the 100 figure visibly framed as a goal.
- Constraints: static HTML/CSS/vanilla JS; preserve EmailJS integration; no invented outcomes, testimonials, dates, or partner claims; accessible for likely minor users; responsive from 320px upward.

## Chosen direction

- Direction: Signal Poster Wall, Composition A, refined as a centered purple poster sheet.
- Approved comp: `.impeccable/mocks/signal-wall-a.webp`.
- Thesis: Luban behaves like a civic opportunity noticeboard whose four active programs are the visual language, not decorative cards around a generic nonprofit hero.
- Memorable moment: the first viewport pairs a calm mission rail with a 2x2 interactive wall of indexed program posters; each poster has its own geometric signal and responds as one piece of a shared wall.
- Do not literalize: mockup-invented program summaries or the line "Luban was founded...". Production must use the existing verified copy and lists.

## Comp-derived system

- Component grammar: ruled editorial regions, indexed poster panels, caption-like rectangular actions, native disclosure rows, and field labels aligned to the page grid.
- Page frame: one shared 1440px white paper width with responsive white side gutters; black outlines define each major section.
- Corner language: square geometry throughout; 0-2px only where a browser control needs separation.
- Line weights: 1px structural rules, 2px focus/active rules, 4-8px intentional poster bars.
- Elevation: flat; no card shadows. Sticky navigation is separated by a rule and opaque paper field.
- Type ramp: approachable grotesk in regular/medium weights; wordmark 28-32px, H1 clamp 44-68px, section headings 34-48px, card headings 24-34px, body 16-19px, labels 12-14px. No ultra-bold display treatment.
- Motion: one hero-wall system only—grid-snapped emphasis, motif movement, and an active-poster reveal. No autoplay, scroll-jacking, or ornamental continuous motion; reduced-motion removes transforms.

## Visible ingredient inventory

| Ingredient | Composition commitment | Production medium |
| --- | --- | --- |
| Navigation | Luban wordmark; Home, Programs, About, Contact; mobile menu | Semantic HTML + CSS + vanilla JS |
| Mission rail | Student-facing headline, mission paragraph, and two rectangular actions | Semantic HTML + CSS |
| Program wall | Four readable 2x2 posters with indexes and actual program names/lists | Buttons/articles + CSS Grid + vanilla JS |
| Poster geometry | Plum/indigo/berry arcs, bars, stripes, and ruled seams | CSS borders and inline SVG; no gradients |
| Active poster | Plum 2px inset focus frame and shared-wall response | CSS state + semantic links + vanilla JS |
| Primary action | Solid plum rectangular caption with directional arrow and direct jump to Programs | Anchor + CSS; full-size focus treatment |
| Metrics band | 4, 18, and 100 by 2028 with no plus signs | Semantic list + CSS Grid |
| Program directory | Four detailed programs in a compact 2x2 ruled matrix, then one column on smaller screens | Semantic articles + CSS Grid |
| Purpose/program/FAQ/about/contact sections | Continue the same rules, asymmetry, and medium density without reverting to generic rounded cards | Semantic sections + CSS Grid + native details/form controls |

## Unresolved decisions

- Privacy, safeguarding, guardian-consent, and data-retention policy remain product/legal decisions. Do not imply policies that do not yet exist.
- The application/event pages remain outside this surface change and may keep their current legacy styling.
