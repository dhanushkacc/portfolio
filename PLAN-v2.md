# Portfolio v2 — the real fix

Root cause of v1: I treated "the inspector shows 0 FAIL" as "done," and skipped the skill's own
critique step (`references/critique.md`) entirely. The gate only catches banned patterns — it can't
tell you the page has no idea, or that a diagram looks like a placeholder. Full critique in
`CRITIQUE-v1.md`. Fix order below follows the skill's own priority: idea → hierarchy → composition →
imagery → everything else.

## 1. The idea, actually built this time

Business Lineage's node/edge graph (Source → Data Model → Dataset → System, Classification/Policy/
Compliance) becomes the **Work section's own layout**, not just the Intro's decoration:

- The five projects (Lineage, Governance, Access, Streaming, Agents) render as **nodes in one
  connected graph**, in the same visual language as the finale video (navy card, teal border, thin
  connecting lines) — not five identical two-pane blocks.
- Clicking/tapping a node expands it in place to the full write-up (title, stack, the real detail).
  One graph, one screen, five expandable nodes — this is also a second live thing on the page.
- The edges carry labels from real relationships between the projects ("secures" from Access to
  Lineage, "ships the UI for" from Streaming, etc.) — small, true, specific.

## 2. Imagery — stop hand-drawing wireframes, reuse the HyperFrames pipeline

The four SVG diagrams (ER boxes, cache flow, player, MCP hub) read as placeholder wireframes, not
designed artwork — the single biggest weakness in the critique. Replacing them:

- Build 4 new HyperFrames stills (same tool, same `navy #0B1D3A / teal #2DD4BF / Inter + JetBrains
  Mono` system already proven across all 8 series videos) — one polished frame per project, styled
  like the series' own code/data cards, not a UML diagram.
- Export each as a still PNG at render time (`hyperframes snapshot`), the same way the video stills
  were pulled for Lineage. This makes all 5 projects' imagery consistently "from the same hand."

## 3. Composition — break the repetition

- Lineage keeps real video stills (unchanged — this already works).
- The other four become nodes in the graph (point 1), not stacked identical sections — so the
  five-times-repeated layout is gone structurally, not just restyled.

## 4. Copy — specific over generic

Rewrite the hero sentence and each node's one-liner to lead with the concrete fact (the 101→2 query
count, the real node types, the real series dates) instead of the job-title-level summary. Keep the
longer write-up text from v1 (it was fine) as the expanded-node content.

## 5. Redo the gate and the critique properly this time

1. Build the graph section + new stills.
2. `lint.mjs` + `inspect.mjs` at all three widths — fix every FAIL.
3. **Actually run the critique pass** (`CRITIQUE-v1.md` format) on the new screenshots — up to 3
   rounds, stop early only if a round finds nothing a stranger would notice.
4. Report the real score, not just "0 FAIL."

## Scope check

This touches the Work section's structure (new component), 4 new rendered stills, and copy edits. The
Hero, Intro, Writing (with its live demo), About, Contact and Footer sections tested fine in the
critique and stay as they are.

Estimated: one more full build-and-check session. I'd confirm the graph-node design with you via a
storyboard-style screenshot before wiring the real interaction, the same way I do with the videos.
