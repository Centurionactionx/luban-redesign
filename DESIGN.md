---
name: Luban
description: A centered civic poster-sheet system for youth-led business education and mentorship.
colors:
  white-canvas: "#ffffff"
  paper-white: "#ffffff"
  near-black: "#171717"
  identity-plum: "#694178"
  civic-indigo: "#3f5688"
  grounded-berry: "#7b3d5d"
  quiet-lavender: "#d5cadc"
  muted-paper: "#e9e3ec"
  status-blue: "#355a7a"
  error-burgundy: "#8a3348"
typography:
  display:
    fontFamily: "Barlow Condensed, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.8rem, 4.2vw, 4.7rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.1rem, 3vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Barlow, Helvetica Neue, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.58
  label:
    fontFamily: "Barlow, Helvetica Neue, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  square: "0"
spacing:
  signal-tight: "4px"
  control-tight: "8px"
  control: "12px"
  content: "28px"
  section: "clamp(40px, 6vw, 88px)"
components:
  action-primary:
    backgroundColor: "{colors.identity-plum}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.square}"
    padding: "12px 18px"
    height: "54px"
  action-secondary:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.near-black}"
    rounded: "{rounded.square}"
    padding: "12px 18px"
    height: "54px"
  field:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.near-black}"
    rounded: "{rounded.square}"
    padding: "13px 14px"
    height: "52px"
---

# Design System: Luban

## Overview

**Creative North Star: "The Civic Poster Sheet"**

Luban's pages should feel like a carefully assembled public noticeboard set on one centered sheet. The layout is easy for students to scan and composed enough to earn trust from educators, mentors, and partners. White paper, white margins, black rules, and condensed type give the site a clear voice without making it loud.

Information shapes the composition. Program names, lists, facts, and links sit inside a shared grid, while geometric marks help visitors recognize each area. The system stays flat and square. Space between the paper sections creates chapter breaks, and space inside a section keeps related ideas close.

**Key Characteristics:**

- White paper and white margins held together by black rules
- Thin, continuous structural rules
- Regular-weight condensed display typography
- Plum, indigo, berry, and lavender signal colors
- Geometric marks that carry information rather than fill space

## Colors

The palette stays close to purple, moving through plum, indigo, berry, and lavender while the paper and ink keep long passages easy to read.

### Primary

- **Identity Plum** (`identity-plum`): primary actions, active navigation, and the first program signal.

### Secondary

- **Civic Indigo** (`civic-indigo`): secondary program signals, large dark fields, and hover states.
- **Grounded Berry** (`grounded-berry`): the career program, long-term goal facts, and quieter emphasis.
- **Quiet Lavender** (`quiet-lavender`): large pale fields, selections, search highlights, and low-intensity geometry.

### Neutral

- **White Canvas** (`white-canvas`): the outer page field and the visible space between major sections.
- **Paper White** (`paper-white`): the main reading surface and light foreground on dark accents.
- **Near Black** (`near-black`): body text, rules, icons, and high-contrast fields.
- **Muted Paper** (`muted-paper`): quiet surface variation when the main paper needs separation.

### Named Rules

**The Adjacent Hue Rule.** Accent colors stay in the plum, indigo, berry, and lavender family; yellow and green do not enter the visual system.

**The Signal Field Rule.** An accent owns a complete shape, bar, action, or region. It never appears as a glow, atmospheric gradient, or decoration without a job.

## Typography

**Display Font:** Barlow Condensed with Helvetica Neue and sans-serif fallbacks
**Body Font:** Barlow with Helvetica Neue and sans-serif fallbacks

**Character:** Condensed headlines give the page a poster-like rhythm without relying on heavy weights. The body face is plainspoken and readable, which keeps long explanations from feeling promotional.

### Hierarchy

- **Display** (`typography.display`): major section statements and large editorial headings.
- **Headline** (`typography.headline`): program titles, FAQ summaries, and secondary statements.
- **Body** (`typography.body`): descriptions, lists, form help, and navigation copy, with a maximum measure of 72 characters.
- **Label** (`typography.label`): indexes, field labels, and compact functional metadata.

### Named Rules

**The Moderate Voice Rule.** Display type remains at regular weight. Scale, line breaks, and compression create hierarchy without extra-bold emphasis.

## Layout

Every major surface uses the same centered sheet: a maximum width of 1440px with side gutters that grow from 12px to 64px. The hero and its facts band form one opening group. Mission, programs, about, and contact then sit on separate paper sections with a responsive 40px to 88px chapter gap between them.

Wide two-column surfaces use a five-to-seven proportion when one side leads and the other supports. The detailed program directory uses a shared two-by-two ruled matrix, then becomes one column at 1023px. Navigation collapses at 880px, poster panels stack at 640px, and paired actions stack at 480px. The layout supports a 320px minimum viewport without horizontal scrolling.

**The Centered Sheet Rule.** The white canvas and paper share one field. Black rules define the centered reading surface and keep content inside the shared width.

## Elevation & Depth

The system has no decorative shadows. White sections separate through space and black outlines, while one-pixel rules and active two-pixel insets create structure. Keyboard focus uses a functional two-color ring so it remains visible on both light and dark fields.

### Named Rules

**The Ruled Surface Rule.** Structure comes from seams, borders, and color fields; shadows do not create hierarchy.

## Shapes

Containers, controls, and fields use square corners. One-pixel rules define the sheet and its internal grid. Circles and arcs belong to the geometric artwork, not to container radius. Active poster panels use a two-pixel inset outline, and all functional controls keep at least a 44px touch target.

## Components

### Buttons

- **Shape:** square, caption-like actions with a one-pixel border and a 54px minimum height.
- **Primary:** identity plum with white text and a directional SVG arrow.
- **Secondary:** white with near-black text and border; hover may become civic indigo with light text.
- **Focus:** a three-pixel paper outline and a six-pixel near-black outer ring.

### Cards / Containers

- **Corner Style:** square.
- **Background:** white, pale lavender, or a single dark accent field.
- **Border:** one-pixel near-black rules shared across adjacent regions.
- **Shadow Strategy:** none.

### Inputs / Fields

- **Style:** transparent white field, one-pixel near-black border, square corners, and visible labels.
- **Focus:** the global two-color focus ring.
- **Status:** blue-slate for success, burgundy for errors, and explicit recovery copy in the live region.

### Navigation

Desktop navigation is a thin ruled row with an understated plum active line. At 880px it becomes a full-width paper menu beneath the header. Search opens in the same centered sheet and keeps its label, controls, and live result count together.

### Program Poster Wall

Each poster combines an index, program name, short explanation, link, and geometric signal. Pointer and keyboard focus move one signal with a 260ms ease-out transform. The grid never reshuffles, and reduced-motion settings remove the transform.

### Program Directory

The four detailed programs share one ruled matrix. Each cell keeps its vertical index, title, list, optional links, and narrow signal strip in fixed areas. The matrix becomes a compact one-column directory below 1024px.

**The One Motion System Rule.** Motion belongs to poster-signal emphasis only: 260ms ease-out transforms, with transforms removed for reduced motion.

## Do's and Don'ts

### Do:

- **Do** keep every major paper surface inside the shared centered sheet.
- **Do** use plum, indigo, berry, and lavender for distinct roles rather than interchangeable decoration.
- **Do** use inline SVG for crisp geometric artwork and directional icons.
- **Do** preserve 44px controls, the two-color focus ring, and reduced-motion behavior.
- **Do** keep related program content tight and reserve the largest gaps for chapter changes.

### Don't:

- **Don't** introduce yellow, green, gradients, neon glow, glass effects, pill containers, or ornamental shadows.
- **Don't** remove the black outline that defines the centered website against the white margins.
- **Don't** substitute generic stock photography or template cards for program-specific geometry.
- **Don't** add a kicker above a heading or rely on extra-bold display type for hierarchy.
- **Don't** add motion outside the poster wall without a clear system-level purpose.
