# Live site audit — 2026-10-25

Opened https://portfolio-tan-seven-99.vercel.app/ at 1440, 768 and 390px in a real browser and scrolled screen by screen.

## Phone (390px)
- Hero: "DHANUSHKA" and "DILSHAN" run off both edges. The photo sits on top of the name.
- Intro: the Business Lineage still crops down to two nodes in a big empty navy box. The "101" still is cut off at the top.
- Work spokes: every illustration is cut mid-word ("Signed, no", "Tool", "Model", "Six service").
- The same Business Lineage picture shows up three times: intro, hub, detail panel.
- About: the cut-out portrait sits on a darker rectangle that doesn't match the panel.
- Contact: big empty white areas. Footer: links pile up over the photo.

## Tablet (768px)
- The hub picture is cut off on the right by the LINEAGE text column.
- Intro stills are cut off on the left ("ss Lineage", "1(").
- Spoke illustrations are cut the same way as on phone.

## Across the page
- Colour: navy, teal, a light grey-white field and a sepia photo. Four unrelated grounds, so no single mood.
- Type: thin Zodiak serif, Hanken Grotesk and monospace. Twelve sizes.
- Pictures: every illustration was rendered at 1000px wide with text near the edges, then forced into 4:3 and portrait boxes with object-fit: cover. That is what cuts them at every size.
- Motion: reveals only. There are no real transitions between states.

## Root cause
Pictures were made at one size and cropped by CSS, and they were never checked in a real browser at each width. The inspector's "0 FAIL" doesn't check whether a crop is readable.
