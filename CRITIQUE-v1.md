# Critique — v1 (honest, after the fact)

I ran the skill's tools (`draw`, `lint`, `inspect`) but never actually ran this critique pass before
shipping. That's the real mistake — passing the inspector only means nothing banned was measured, not
that the page is good. Doing it properly now.

```
ROUND 1
Seen in one second: a name and a portrait photo. Fine on the hero alone.
Idea (one sentence): "the Business Lineage data map becomes the page's own structure" — this was
  written in PLAN.md and never actually built. Nothing on the live page shows it. The Work section
  is a plain list of five project write-ups; swap "Dhanushka" for any other backend engineer's name
  and the page still reads the same. Pass 3 (the competitor test) fails outright.
Live thing: the GraphQL field-picker demo. This part is real and works — the one genuine strength.
Layout words by section: hero=split-photo / intro=statement+photos / work=split-panes x5 (identical,
  repeated five times) / writing=demo+table / about=panel / contact=statement / footer=full-bleed.
Scores: design 6.0 · usability 7.5 · creativity 5.0 (capped) · content 6.0 → overall 6.15
Caps applied:
  - Pass 3 fails → creativity capped at 6 (actual estimate was already ~5, cap doesn't bind further
    but confirms the floor).
  - Two or more desktop screens mostly empty ground (Governance/Access/Streaming/Agents: a small
    boxed diagram floating alone in a full-height black field) → design capped at 6.5.
Top three problems (most visible first):
1. The four drawn illustrations (Governance, Access, Streaming, Agents) are plain outlined boxes with
   labels and connecting lines — in `desktop-page-02.jpg` they read exactly like the "fake dashboard of
   grey bars" the house rules ban, not like designed artwork. They're the weakest thing on the page.
   Fix: stop hand-rolling SVG wireframes; render these as real HyperFrames stills in the same navy/teal,
   JetBrains Mono visual language already proven in the 8-part video series, so they look like they
   belong to the same brand instead of a programmer's diagram.
2. The Work section repeats the exact same composition five times in a row (`desktop-page-01/02.jpg`) —
   this is the "template showing" the sameness pass warns about, and it's also why the page has no real
   idea: it never becomes anything other than a list.
   Fix: rebuild Work around the actual idea — the five projects as connected nodes in one lineage-style
   graph (reusing the exact node/edge visual from the finale video), not five identical split-panes.
3. The copy is competent but generic ("Backend engineer... platform for data, API and AI governance").
   It describes the category, not this specific person's work.
   Fix: lead each section with the concrete, unrepeatable detail (the 101→2 query count, the exact node
   types, the real series dates) instead of the job-title-level summary.
```

## What I'm doing about it

This is not a polish pass — it's a rebuild of the Work section's structure and a real imagery pass,
per the skill's own fix order (idea → hierarchy → composition → imagery, before type/colour/motion).
See `PLAN-v2.md`.
