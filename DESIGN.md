---
name: Luban
description: A boxy newspaper-inspired opportunity sheet for youth-led business education and mentorship.
colors:
  brand-purple: "#7a6ad8"
  accessible-purple: "#6757c3"
  paper-white: "#ffffff"
  ink-black: "#00171f"
  accent-green: "#96f550"
  accent-pink: "#e85d75"
  quiet-purple: "#eeecfb"
  status-green: "#287337"
  error-red: "#a92f40"
typography:
  display:
    fontFamily: "Space Grotesk, Helvetica Neue, sans-serif"
    fontSize: "clamp(3rem, 4vw, 4rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Space Grotesk, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.35rem, 3.4vw, 3.65rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Space Grotesk, Helvetica Neue, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.58
  label:
    fontFamily: "IBM Plex Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "0.74rem"
    fontWeight: 500
    letterSpacing: "0.03em"
rounded:
  micro: "4px"
  shell: "22px"
spacing:
  signal-tight: "4px"
  control-tight: "8px"
  control: "12px"
  content: "28px"
  section: "clamp(30px, 4vw, 56px)"
components:
  action-primary:
    backgroundColor: "{colors.accessible-purple}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.micro}"
    padding: "12px 18px"
    height: "54px"
  action-secondary:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.micro}"
    padding: "12px 18px"
    height: "54px"
  field:
    backgroundColor: "{colors.quiet-purple}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.micro}"
    padding: "13px 14px"
    height: "52px"
---

# Design System: Luban

## Overview

**Creative North Star: "The Playful Opportunity Press"**

Luban's pages should feel like a carefully assembled youth newspaper set on one centered sheet. The layout is easy for students to scan and composed enough to earn trust from educators, mentors, and partners. White paper, a medium-slate-purple canvas, ink-black rules, restrained green and pink accents, and friendly grotesk type give the site energy without making it noisy.

Information shapes the composition. Event names, dates, formats, lesson states, and links sit inside a shared grid, while the original homepage hero illustration carries the one expressive image moment. Dedicated event pages retain a strongly branded opening group—a seven-to-five masthead and supporting brief with an attached five-cell fact band—then shift into a traditional continuous informational brief on white. In that reading body, generous whitespace and thin rules create chapter changes; open, content-fit lists replace a stack of boxed sheets. The homepage remains deliberately boxy, while event details prioritize clear, efficient reading.

**Key Characteristics:**

- White paper on a purple canvas, held together by ink-black rules
- One- and two-pixel structural seams with very small corner radii
- Medium-weight grotesk display typography and monospaced labels
- Purple marker lines with green and pink reserved for small cues
- Branded competition mastheads above traditional, truthful event briefs
- Original ink, white, and sparingly green editorial illustrations

## Colors

The uploaded palette is the source of truth: medium slate blue, white, ink black, lawn green, and bubblegum pink. Purple owns the outer canvas, active states, and major geometry. White and ink carry reading. Green and pink behave as scarce spot inks, never as competing brand colors.

### Primary

- **Brand Purple** (`brand-purple`): the outer canvas, navigation markers, signal fields, and major editorial geometry.
- **Accessible Purple** (`accessible-purple`): purple surfaces that carry normal-size white text or functional labels, including the Economics Competition masthead field.

### Secondary

- **Accent Green** (`accent-green`): tiny illustration fills, focus cues, primary competition actions, the current event submenu item, and the Stock Pitch Competition masthead signal.
- **Accent Pink** (`accent-pink`): the Economics Competition masthead signal and isolated secondary editorial marks.
- **Quiet Purple** (`quiet-purple`): calm editorial fields, image backdrops, inputs, and low-intensity separation.

### Neutral

- **Paper White** (`paper-white`): the main reading surface and light foreground on dark accents.
- **Ink Black** (`ink-black`): body text, rules, icons, and high-contrast fields.

### Named Rules

**The Brand-First Rule.** Purple is the dominant chromatic identity. Green and pink together remain a small minority of the page and appear only where they clarify emphasis or direction.

**The Signal Field Rule.** An accent owns a complete shape, bar, action, or region. It never appears as a glow, atmospheric gradient, or decoration without a job.

## Typography

**Display Font:** Space Grotesk with Helvetica Neue and sans-serif fallbacks
**Body Font:** Space Grotesk with Helvetica Neue and sans-serif fallbacks
**Label Font:** IBM Plex Mono with system monospace fallbacks

**Character:** Compact grotesk headlines give the page a friendly editorial rhythm without relying on extra-bold weights. Monospaced labels add a newspaper-caption texture, while the body face remains plainspoken and readable.

### Hierarchy

- **Display** (`typography.display`): major section statements and large editorial headings.
- **Headline** (`typography.headline`): event titles, lesson panels, FAQ summaries, and secondary statements.
- **Body** (`typography.body`): descriptions, lists, form help, and navigation copy, with a maximum measure of 72 characters.
- **Label** (`typography.label`): indexes, field labels, and compact functional metadata.

### Named Rules

**The Moderate Voice Rule.** Display type remains at regular weight. Scale, line breaks, and compression create hierarchy without extra-bold emphasis.

**The Competition Scale Extension.** The base display and headline tokens remain the defaults for general surfaces. A competition page may use its shipped, page-scoped fluid display sizes: `clamp(3.35rem, 6vw, 5.7rem)` for the event masthead, `clamp(2.45rem, 3.7vw, 4rem)` for the supporting brief, and `clamp(2.35rem, 3.3vw, 3.4rem)` for body-section headings. At 640px, the masthead uses `clamp(2.45rem, 12vw, 3.15rem)` and supporting, section, and closing headings use `clamp(2.25rem, 11vw, 3rem)`. These sizes are intentional extensions of the base ramp, not token drift. Space Grotesk and IBM Plex Mono remain the established brand families. Headline and metadata styles must not use mid-word wrapping: use natural word wrapping, no forced word break, and no automatic hyphenation.

## Layout

Every major surface uses the same centered sheet: a maximum width of 1280px with side gutters that grow from 10px to 42px. The hero and its facts band form one opening group. Mission, events, about, and contact then sit on separate paper sections with a responsive 30px to 56px chapter gap between them.

Wide two-column surfaces use a five-to-seven proportion when one side leads and the other supports. The Events newsroom uses one focused two-column lesson switcher; full competition details live on dedicated event pages rather than repeating on the homepage. On a wide competition page, the branded event masthead uses a seven-to-five lead/brief grid and the attached fact band uses five equal cells. Below it, the white body behaves as one continuous reading surface: section headings, open lists, and useful schedule structure are separated by whitespace and thin rules instead of individual outer boxes. Features, partners, and participation notes use content-fit two-column lists; awards use compact natural-height summaries; the schedule uses a two-to-one date/body area with an intrinsic-height supporting aside.

The competition-page responsive contract is explicit:

- **900px:** masthead, schedule, and closing grids become one column; the fact band becomes two columns with the fifth fact spanning the row.
- **880px:** global navigation becomes the mobile paper menu and participation notes become one column.
- **720px:** feature, award, and partner lists become one column.
- **640px:** page padding and display sizes tighten to the narrow type scale.
- **600px:** timeline date/body rows and the supporting brief format become one column.
- **480px:** masthead actions and the fact band become one column.
- **390px:** section padding reduces to 20px and key panels use matching narrow gutters.

The homepage lesson layout becomes one column between 880px and 640px. All surfaces support a 320px minimum viewport without horizontal scrolling. Competition body patterns must use natural content height; fixed minimum heights and equal-height grids that manufacture empty space are prohibited.

**The Centered Sheet Rule.** Paper surfaces sit on one purple canvas. Ink-black rules define the centered reading surface and keep content inside the shared width.

## Elevation & Depth

The system has no decorative shadows. Homepage sections separate through space and black outlines. On competition pages, the branded opening and closing groups retain the strongest outlines while the continuous white body relies on whitespace and one-pixel internal rules. Keyboard focus uses a functional two-color ring so it remains visible on both light and dark fields.

### Named Rules

**The Ruled Surface Rule.** Structure comes from seams, borders, and color fields; shadows do not create hierarchy.

## Shapes

Containers, controls, and fields use square or four-pixel corners. The homepage shell may use the larger 22px radius. Competition pages reserve a restrained 14px chapter transition for the continuous body's first and last edges; the opening and closing groups keep their own small ruled shells. One- and two-pixel rules define structure; circles and arcs belong mainly to the editorial artwork. All functional controls keep at least a 44px touch target.

## Components

### Buttons

- **Shape:** boxy, caption-like actions with a two-pixel border and a 50px minimum height.
- **Primary:** accessible purple with white text and a directional arrow; hover becomes ink black.
- **Secondary:** white with ink-black text and border; hover uses a quiet-purple field.
- **Focus:** a three-pixel green outline and a six-pixel ink-black outer ring.

### Cards / Containers

- **Corner Style:** square or four-pixel micro radius.
- **Background:** paper white, quiet purple, accessible purple, or ink black.
- **Border:** one- or two-pixel ink-black rules.
- **Shadow Strategy:** none.

### Inputs / Fields

- **Style:** quiet-purple field, two-pixel ink-black border, four-pixel corners, and visible labels.
- **Focus:** the global two-color focus ring.
- **Status:** deep green for success, red for errors, and explicit recovery copy in the live region.

### Navigation

Desktop navigation is a thin ruled row with a two-pixel purple active line that follows the current section. Events carries Teaching Lessons, SPC, and Econ Competition in its dropdown, with hover/focus support on desktop and an explicit disclosure button on touch screens. On a competition page, Events remains the active parent and the current child is an ink-on-lime submenu item backed by `aria-current="page"`. At 880px the navigation becomes a full-width paper menu beneath the header; Menu and Events remain separate disclosures and Escape closes open navigation. Search is intentionally absent.

### Hero Illustration

The first view pairs the mission rail with one original education-and-economics illustration on a seamless illustration-paper panel. Opposite-corner captions identify the learning and planning themes without behaving like controls. The ink, white, and sparingly green line art stays readable at small sizes and never carries essential text.

### Event Newsroom

The homepage Events section is deliberately limited to an overview and one separate teaching-lessons sheet. The accessible entrepreneurship lesson tabs stay attached to their matching recap or preview, with completed and upcoming event state written in text as well as color. Each tab includes a large bordered recap or preview action footer so the event selector reads as an interactive control. SPC and Economics Competition details live on their dedicated pages and remain available from the Events navigation dropdown. Without JavaScript, both lesson summaries remain readable; with JavaScript, the tablist uses roving keyboard focus and one visible panel.

**The Honest State Rule.** Event state is stated in words, dates remain visible, and no registration or outcome is implied beyond supplied content. Interaction is immediate and does not depend on decorative motion.

### Competition Event Briefs

SPC and Economics use one event-detail system. The opening group pairs a dominant event field with a quieter mechanism brief in a seven-to-five grid, then attaches a five-cell facts band. SPC uses an ink lead field with a lime signal; Economics uses an accessible-purple lead field with a pink signal. Lime remains the functional action and current-navigation color on both pages.

After the opening group, later topics flow through one continuous white informational brief. Thin horizontal rules and deliberate vertical spacing identify sections without enclosing every topic in another card. Reusable patterns include open feature lists, ordered timelines with readable date/body relationships, a two-to-one schedule with an intrinsic-height supporting aside, compact natural-height awards, open partner lists, two-column participation notes, and a dark closing group. A page uses only the patterns its verified content supports: SPC carries its published prize structure, while Economics carries its named event partners.

Competition pages with passed dates are archive surfaces. The hero record, schedule copy, and close state the historical status in words. They do not expose a live registration action. Current-event routing may lead back to the homepage Events section, to a verified contact address, or to a clearly described general Luban destination.

## Do's and Don'ts

### Do:

- **Do** keep every major paper surface inside the shared centered sheet.
- **Do** let purple own the page and reserve green and pink for small printed cues.
- **Do** use the original hero illustration for the main editorial moment and let event typography, dates, and rules carry the Events section.
- **Do** preserve 44px controls, the two-color focus ring, and reduced-motion behavior.
- **Do** keep related event content tight and reserve the largest gaps for chapter changes.
- **Do** let standalone event pages read like traditional information pages after the branded opening group, using whitespace and thin rules to establish hierarchy.
- **Do** keep competition dates, archive labels, partner roles, prize uncertainty, and participation requirements explicit in text.

### Don't:

- **Don't** let green or pink compete with purple, or introduce extra decorative hues, gradients, neon glow, glass effects, pill containers, or ornamental shadows.
- **Don't** remove the ink-black outline that defines the centered website against the purple canvas.
- **Don't** add decorative event icons when dates, statuses, and format details can create a more credible composition.
- **Don't** rely on extra-bold display type for hierarchy; use scale, line breaks, and selective highlights.
- **Don't** show a registration CTA after an event has passed or describe a general Linktree route as registration.
- **Don't** force event summaries, awards, sidebars, or requirement lists into fixed-height boxes that leave unexplained dead space.
- **Don't** split competition headlines or metadata labels in the middle of a word.
- **Don't** add motion without a clear system-level purpose.
