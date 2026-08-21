---
version: 1
slug: "econ-html"
primary_target: "econ.html"
related_targets: ["assets/css/home.css","assets/css/competition.css","assets/js/home.js"]
---

# Economics Competition Surface Brief

## Purpose and direction

- Read surface for students, families, educators, partners, and supporters reviewing the published Economics Competition format.
- Job: identify the event as a June 2026 archive, explain the mock-economy simulation, preserve the named partners, schedule, and requirements, and route visitors to current Luban opportunities.
- Direction: a branded Luban opening followed by a traditional continuous informational brief. An accessible-purple lead field and pink signal form the seven-to-five masthead; a quiet-purple supporting brief and attached five-cell fact band complete the opening group. The body then reads as one white article, using whitespace and thin rules rather than separate boxed chapter sheets.
- This is an extension of the established purple newspaper world, using Space Grotesk, IBM Plex Mono, a strong branded opening, and functional pink and lime cues. Its reading body is deliberately calmer and more conventional so dense event information is communicated efficiently. It adds no raster assets.

## Content truth and archive state

- June 27, 2026 has passed. Keep `2026 event archive`, `Event date passed`, and the schedule's historical wording visible.
- Preserve the supplied format: a free online simulation, teams of two to four, individual matching, about one hour of play, and a 15-30 minute debrief.
- Preserve StudyScope and the Canadian Foundation for Economic Education (CFEE) as the named 2026 event partners. Do not expand their roles beyond supplied copy.
- Published materials stated that cash prizes were part of the event, but did not publish amounts. Do not invent amounts, winners, or outcomes.
- The Linktree URL is generic/current-Luban routing, not a registration link. Do not label or present it as registration.

## Components and behavior

- Shared header and footer with Events as the active parent and Econ Competition as the lime `aria-current="page"` submenu item.
- Seven-to-five event masthead and simulation brief; archive record chips; two rectangular actions; five-cell facts band. These branded elements retain Luban's ruled, boxy identity.
- Below the opening group, one continuous white brief holds an open two-column simulation list, an open content-fit two-part partner list, an ordered published timeline, a two-to-one schedule with an intrinsic-height entry aside, open two-column participation notes, and a dark archive close. Thin rules and section spacing provide hierarchy without outer boxes or manufactured empty height.
- At 900px the masthead, schedule, and close stack and the fact band becomes two columns with its fifth item spanning the row. At 880px navigation collapses and participation notes become one column. At 720px features and partners become one column. At 640px section gutters and display sizes tighten. At 600px timeline date/body rows and supporting brief facts stack. At 480px actions and facts become one column. At 390px the body gutter becomes 20px. The page remains overflow-free at 320px.
- Do not restore fixed minimum heights, stretched side panels, or boxed requirement rows. Headlines and metadata labels use natural word wrapping with no mid-word breaks or automatic hyphenation.

## Actions, links, and accessibility

- Primary general routing: `https://linktr.ee/luban_canada`; it opens in a new tab and includes a visible-to-assistive-technology new-tab notice. Current-events routing: `index.html#programs`. In-page routing: `#simulation-format`.
- Keep the skip link, one page `h1`, labelled sections, semantic description lists, ordered timeline, machine-readable `time` values, visible focus treatment, and reduced-motion fallback.
- The accessible-purple hero field must retain sufficient contrast for white text. The mobile Menu and Events controls are separate disclosures; their `aria-expanded` states must follow visibility, and Escape closes open navigation.

## Verification

- Finish-review disposition: **SHIP after fixes**.
- HTML validates; `assets/js/home.js` passes syntax checking; shared CSS is formatted; the page returns HTTP 200; browser errors are empty.
- Desktop and mobile references: `.impeccable/review/econ-desktop.png` at 1440px and `.impeccable/review/econ-mobile.png` at 390px.
- No horizontal overflow at 1440px, 390px, or 320px. The Events parent and lime Econ submenu state render correctly; mobile Menu, Events, and Escape behavior pass.
- The targeted axe audit of `main` reports 0 WCAG A/AA violations. No new raster assets were added for this page.
