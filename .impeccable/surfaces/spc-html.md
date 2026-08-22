---
version: 1
slug: "spc-html"
primary_target: "spc.html"
related_targets:
  ["assets/css/home.css", "assets/css/competition.css", "assets/js/home.js"]
---

# Stock Pitch Competition Surface Brief

## Purpose and direction

- Read surface for students, families, educators, and supporters reviewing the published Stock Pitch Competition format.
- Job: identify the event as a 2026 archive, explain the assignment and judging format, preserve the published schedule and participation details, and route visitors to current Luban opportunities.
- Direction: a branded Luban opening followed by a traditional continuous informational brief. An ink lead field and lime signal form the seven-to-five masthead; a quiet-purple supporting brief and attached five-cell fact band complete the opening group. The body then reads as one white article, using whitespace and thin rules rather than separate boxed chapter sheets.
- This is an extension of the established purple newspaper world, using Space Grotesk, IBM Plex Mono, a strong branded opening, and functional lime cues. Its reading body is deliberately calmer and more conventional so dense event information is communicated efficiently. It adds no raster assets.

## Content truth and archive state

- The April 2, April 5, and April 12, 2026 dates have passed. Keep `2026 event archive`, `Registration closed`, and the schedule's historical wording visible.
- Preserve the supplied assignment: one public company, a buy/sell/hold recommendation, seven minutes to present, and three minutes for judge questions.
- Preserve the published cash-prize structure without inventing amounts or outcomes.
- Teams were built toward five members; individuals and incomplete teams could be matched. The verified contact is `jsun.luban@gmail.com`.
- The live Google registration form was intentionally removed from this archive page. Do not restore it or introduce another registration CTA unless Luban confirms a new live event.

## Components and behavior

- Shared header and footer with Events as the active parent and Stock Pitch Competition as the lime `aria-current="page"` submenu item.
- Seven-to-five event masthead and mechanism brief; archive record chips; two rectangular actions; five-cell facts band. These branded elements retain Luban's ruled, boxy identity.
- Below the opening group, one continuous white brief holds an open two-column practice list, an ordered published timeline, a two-to-one schedule with an intrinsic-height ten-minute-pitch aside, compact natural-height three-place award summaries, open two-column participation notes, and a dark archive close. Thin rules and section spacing provide hierarchy without outer boxes or manufactured empty height.
- At 900px the masthead, schedule, and close stack and the fact band becomes two columns with its fifth item spanning the row. At 880px navigation collapses and participation notes become one column. At 720px features and awards become one column. At 640px section gutters and display sizes tighten. At 600px timeline date/body rows and supporting brief facts stack. At 480px actions and facts become one column. At 390px the body gutter becomes 20px. The page remains overflow-free at 320px.
- Do not restore fixed minimum heights, equal-height prize cells, or boxed requirement rows. Headlines and metadata labels use natural word wrapping with no mid-word breaks or automatic hyphenation.

## Actions, links, and accessibility

- Primary current routing: `index.html#programs`. Secondary in-page routing: `#event-format`. Contact routing: `mailto:jsun.luban@gmail.com`.
- Keep the skip link, one page `h1`, labelled sections, semantic description lists, ordered timeline, machine-readable `time` values, visible focus treatment, and reduced-motion fallback.
- The mobile Menu and Events controls are separate disclosures. Their `aria-expanded` states must follow visibility, and Escape closes open navigation.

## Verification

- Finish-review disposition: **SHIP after fixes**.
- HTML validates; `assets/js/home.js` passes syntax checking; shared CSS is formatted; the page returns HTTP 200; browser errors are empty.
- Desktop and mobile references: `.impeccable/review/spc-desktop.png` at 1440px and `.impeccable/review/spc-mobile.png` at 390px.
- No horizontal overflow at 1440px, 390px, or 320px. The Events parent and lime Stock Pitch Competition submenu state render correctly; mobile Menu, Events, and Escape behavior pass.
- The targeted axe audit of `main` reports 0 WCAG A/AA violations. No new raster assets were added for this page.
