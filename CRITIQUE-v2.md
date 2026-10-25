ROUND 1
Seen in one second: a name, a portrait, then — once you reach Work — a labelled graph with
"LINEAGE" at the centre and four named nodes hanging off it.
Idea (one sentence): "the Business Lineage data map becomes the page's own structure" — this time
  it is actually built: Work is a hub-and-spoke graph, LINEAGE is the hub, and each spoke carries a
  real, specific relationship back to it ("feeds the map", "secures every node", "same platform",
  "traces it live"). Pass 3 (swap the name/competitor in): a generic backend-engineer page cannot
  reuse this structure without a feature shaped like Business Lineage to hang it on — passes.
Live thing: two now — the GraphQL field-picker demo, and the graph itself (click a node, the detail
  panel below updates with that node's picture and write-up).
Layout words by section: hero=split-photo / intro=statement+photos / work=hub-and-spoke graph +
  detail panel / writing=demo+table / about=panel / contact=statement, vertically centred /
  footer=full-bleed, slow drift.
Scores: design 7.5 · usability 8.0 · creativity 8.0 · content 8.0 → overall 7.75
Caps checked and NOT triggered this round:
  - inspect.mjs: 0 FAIL (was 0 FAIL, 7 WARN before this round's fixes; now 0 FAIL, 3 WARN)
  - still-page: fixed — each graph node now reveals on its own (staggered), and the footer photo
    has a slow 24s drift. No longer flagged.
  - blank stretch > half a screen: fixed — contact section was anchored by a fixed 14vh margin
    regardless of viewport, which produced a dead gap the inspector measured at 612px tall (over
    half the 768px tablet screen). Changed .contact to centre its content with flex instead of a
    fixed margin. No longer flagged.
  - fewer than 4 real pictures: not triggered (9 real photographs/stills across hero, intro, about,
    footer, plus the 4 new HyperFrames-rendered node stills).
Caps still applying:
  - None that cap below 7.5, but three pre-existing WARNs remain and keep this from scoring higher:
    3 typefaces in use (Hanken Grotesk, Zodiak, real-code monospace), 12 font sizes, and
    mix-blend-mode on the hero name. These were already present and accepted in the v1 critique as
    part of the dealt direction sheet; they are outside this round's scope (the Work section,
    imagery and copy), so I did not touch them, but they are the reason design/creativity aren't
    scored higher than they are.
Top three problems (most visible first), each with the fix already applied or still open:
1. [FIXED THIS ROUND] The four illustrations read like a fake dashboard of grey bars (v1's problem).
   Fix applied: replaced with HyperFrames-rendered stills in the same navy/teal/JetBrains-Mono
   language as the video series — real GraphQL type, real cache-check code, a real signed-cookie
   snippet, a real kubectl trace.
2. [FIXED THIS ROUND] Work repeated the same split-pane composition five times with no real idea
   behind it. Fix applied: rebuilt as one connected lineage graph (hub + 4 spokes, labelled edges,
   click-to-expand), which is structurally the idea instead of a decoration of it.
3. [FIXED THIS ROUND] The LINEAGE hub, once built, briefly re-introduced the exact "half the section
   empty" problem the house rules call out (image centred in a fixed-width column, nothing on the
   other side) — and the contact section's existing blank gap, never actually re-measured against
   the critique's own caps in v1, failed the "blank stretch over half a screen" cap outright. Fix
   applied: gave the hub a second column (its own short intro line) and switched contact to flex
   centring. Both confirmed gone in a re-run of inspect.mjs.
Remaining, open, not fixed this round (pre-existing, out of this round's scope per PLAN-v2):
  - 3 typefaces / 12 sizes — the dealt type system already uses Zodiak for display, Hanken Grotesk
    for UI text, and real monospace only inside <pre><code> for actual GraphQL/code; tightening this
    further means revisiting the whole type scale, not just Work.
  - mix-blend-mode on the hero name — kept deliberately so the name reads over both the flat navy
    background and the overlapping portrait without a scrim; only two tones in that background, so
    the "random hues" risk the rule warns about doesn't apply here, but it is still a WARN on paper.
