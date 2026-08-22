---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["assets/css/home.css", "assets/js/home.js"]
---

# Homepage Surface Brief

## Scope and visitor mode

- Primary target: `index.html`; related implementation targets: `assets/css/home.css`, `assets/js/home.js`.
- Persuade surface for Canadian high-school students first, with educators, sponsors, mentors, admissions officers, and industry professionals as secondary visitors.
- Job: explain Luban's purpose, make current teaching and competitions concrete, establish credible scale, and route visitors to event details or contact.
- Primary action: explore events. Secondary action: contact Luban.
- Proof/content: the existing mission and FAQ; the supplied entrepreneurship lesson summaries and states; exact 5-events-in-four-months / 25-members / 100-by-2028 organization facts. Keep the 100 figure visibly framed as a goal.
- Constraints: static HTML/CSS/vanilla JS; preserve EmailJS integration; no invented outcomes, testimonials, dates, or partner claims; accessible for likely minor users; responsive from 320px upward.

## Chosen direction

- Direction: Event Newsroom, retaining the approved centered purple poster-sheet system.
- Visual reference: `.impeccable/mocks/signal-wall-a.webp` remains evidence for the ruled sheet, palette, and editorial density rather than for the removed program wall.
- Thesis: Luban behaves like a civic opportunity noticeboard whose real events, dates, and lesson states are the visual language, not decorative cards around a generic nonprofit hero.
- Memorable moment: a two-state entrepreneurship lesson switcher turns dates, status, recap, and preview into the editorial centerpiece.
- Do not literalize: mockup-invented outcomes, attendees, prize amounts, or registration status. Production must use supplied or verified facts.

## Comp-derived system

- Component grammar: ruled editorial regions, indexed poster panels, caption-like rectangular actions, native disclosure rows, and field labels aligned to the page grid.
- Page frame: one shared 1440px white paper width with responsive white side gutters; black outlines define each major section.
- Corner language: square geometry throughout; 0-2px only where a browser control needs separation.
- Line weights: 1px structural rules, 2px focus/active rules, 4-8px intentional poster bars.
- Elevation: flat; no card shadows. Sticky navigation is separated by a rule and opaque paper field.
- Type ramp: approachable grotesk in regular/medium weights; wordmark 28-32px, H1 clamp 44-68px, section headings 34-48px, card headings 24-34px, body 16-19px, labels 12-14px. No ultra-bold display treatment.
- Motion: immediate, functional state changes only. No autoplay, scroll-jacking, or ornamental continuous motion.

## Visible ingredient inventory

| Ingredient                        | Composition commitment                                                                                                                                                | Production medium                                               |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Navigation                        | Luban wordmark; Home, Events with Teaching Lessons/Stock Pitch Competition/Econ dropdown, About, Contact Us; mobile disclosure menu; no search                        | Semantic HTML + CSS + vanilla JS                                |
| Mission rail                      | Student-facing headline, mission paragraph, and two rectangular actions                                                                                               | Semantic HTML + CSS                                             |
| Teaching lessons                  | Discovering Entrepreneurship recap and Am I an Entrepreneur? preview in an accessible two-tab switcher with explicit event-state labels and full-width action footers | Semantic buttons/articles + vanilla JS; complete no-JS fallback |
| Primary action                    | Solid purple rectangular action with directional arrow and direct jump to Events                                                                                      | Anchor + CSS; full-size focus treatment                         |
| Metrics band                      | 5 events completed in four months, 25 core members, and 100 by 2028 with no plus signs                                                                                | Semantic list + CSS Grid                                        |
| Events/FAQ/about/contact sections | Continue the same rules, asymmetry, and medium density without reverting to generic rounded cards                                                                     | Semantic sections + CSS Grid + native details/form controls     |

## Unresolved decisions

- Privacy, safeguarding, guardian-consent, and data-retention policy remain product/legal decisions. Do not imply policies that do not yet exist.
- The year for the August teaching lessons remains unspecified; display month/day/time and the user-supplied completed/upcoming state without machine-calculated status.
- Dedicated SPC and Economics pages use the shared competition-dossier system documented in `DESIGN.md` and their own surface briefs. The homepage routes to them through Events and does not duplicate their full timelines, partners, prizes, or requirements.
