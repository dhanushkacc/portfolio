# v3 redesign: critique

Direction: The split stage (seed 1541280670). Two slots redrawn, both for stated reasons:
- **Type.** Boska became Switzer. The brief asks for a modern, technical look, and Boska is a ceremony serif.
- **Palette.** "Stone and blueprint" became "Night". The user asked for a dark theme. The accent is the teal from the GraphQL in Practice films.

Idea: on this page, **your own films** become **the stage**. The right half of the screen plays the film for whatever you're reading. Business Lineage plays the finale. Each project plays its own animated clip, made in the series' style.

Live thing: pick any of the eight parts and it plays on the stage, or in the sticky player on a phone. The GraphQL field picker is still there too.

Checked on the production build at 1440, 768 and 390px. Lint, inspect and scenes all came back 0 FAIL, 0 WARN, and every screenshot was opened.

```
ROUND 1
Seen in one second: the name, and the portrait on the right.
Idea: your own films become the stage that follows what you read.
Live thing: pick a film part; it plays on the stage.
Layout words: hero=split+photo / intro=split+film / work=index+held stage / films=card deal-out (full width) /
  list=split+picker / demo=split / about=letter+photo / contact=one field, centred / footer=film half + menu half
Scores: design 7.0 · usability 7.5 · creativity 7.5 · content 8.0 → overall 7.35
Top three:
1. The scene opened on cut-off fragments of the film grid, and the title sat on top of the posters at the end. Rebuilt as eight cards that start as one pile and deal out into the grid, with the title below them.
2. Phone: the contact heading ran to three lines and there was no button in the first screen. Shortened the prompt and made the hero photo 46svh.
3. The stage films opened almost empty. Lineage now uses the full-map clip, and project clips start once their cards are on screen.

ROUND 2
Seen in one second: the name and the portrait. On a phone, the photo and then the name.
Scores: design 7.5 · usability 8.0 · creativity 7.5 · content 8.0 → overall 7.7
Caps checked, none applied: 0 FAIL; 4+ real pictures (the photo plus your own footage); motion includes a scene,
  stage wipes, entrances and moving pictures; button in the first screen at every width; no blank stretches.
Still short of 8:
- The films keep their content in the top 60% of the square, so the stage has a calm lower third on desktop.
- The "Selected work" index leaves a quiet gap before the first project on desktop.
```

## To confirm before launch
- Project years (2025 to 2026 and so on), carried over from the v1 copy.
- The four project clips (Governance, Access, Streaming, Agents) are animated illustrations made in the series' style. They are not real XAPI screens.
- Short loops from parts 3 to 8 are visible on the site before their LinkedIn release dates (Oct 26 to Nov 5).
