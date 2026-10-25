# Portfolio website — plan

Owner: Dhanushka Dilshan · Status: plan for review (nothing built yet) · Built with the taste skill (design-taste-frontend) and checked with playwright-cli.

## 1. Brief

- **What it is:** a personal portfolio for a backend software engineer (Java, Spring Boot, GraphQL, microservices) who works on XAPI, an API, data and AI governance platform.
- **Who it is for:** recruiters and hiring managers first, then engineers who find the GraphQL series.
- **The one thing a visitor should do:** get in touch (email / LinkedIn), with "download CV" as the second action.
- **Content source:** the CV, CAREER_ANALYSIS.md, the GraphQL in Practice series and the LinkedIn profile. Facts only, same rules as the CV: no internal numbers, no database or service names in the narrative, no real XAPI screenshots, "XAPI" in capitals.

## 2. Inventory (things that belong to Dhanushka and to no other engineer)

1. The name, and the handle `dhanushkacc` used on GitHub and LinkedIn.
2. Colombo and Avissawella, Sri Lanka; works remote.
3. XAPI: "Unified governance for Data, APIs and AI"; data governance and PDPA compliance.
4. **Business Lineage**, which he designed and built: a data map of Source → Data Model → Dataset → System, with Classification, Policy and Compliance nodes.
5. **GraphQL in Practice**, his 8-part video series: query cards, the 101 → 2 query counter, the lineage finale.
6. API-first: every API written as an OpenAPI contract before the code.
7. Traceability: every change recorded as an audit trail.
8. ER-style data models: sources, datasets, fields and relationships.
9. XCLP: secure video streaming with CloudFront signed cookies.
10. The AI workflow: Claude Code, subagents and MCP servers that read production logs.
11. Intern to engineer: Nov 2024 intern, May 2025 full-time.
12. UCSC, University of Colombo School of Computing.

## 3. The argument (one section per claim, in this order)

| Section | Claim | Proof on the page |
| --- | --- | --- |
| Hero | I'm Dhanushka, a backend engineer who builds the APIs behind data governance. | Name, role, location, one sentence, "Get in touch" button. |
| Intro | I make complex data easy to follow. | The live thing (below). |
| Work | I design and build real platform features end to end. | 4-5 case studies: Business Lineage, data governance core, RBAC and authorization performance, XCLP secure streaming, AI-assisted engineering workflow. Each: problem, what I built, stack. |
| Writing | I can explain what I build. | The 8 GraphQL in Practice videos, with stills and links to each LinkedIn post. |
| About | How I work and what I use. | API-first, tests (JUnit, Mockito, 80% target), Agile/Scrum, the stack grouped as on the CV, education. |
| Contact | Let's talk. | Email, LinkedIn, GitHub, CV download. |
| Footer | The name returns at full width. | Credits for any found pictures. |

No testimonials, no client logos, no invented statistics.

## 4. The idea and the live thing

- **Idea:** On this page, **the Business Lineage data map** becomes **the page's own structure**: each section is a node, and the line between them is drawn as you scroll, from "Source: who I am" to "Contact".
  Competitor test: another backend engineer cannot use this sentence. It belongs to the feature Dhanushka built.
- **Live thing:** a small GraphQL query over Dhanushka himself. The visitor ticks fields (`name`, `role`, `stack`, `projects`, `writing`) and the response on the right changes shape to match, the point of Part 1 of the series. It works with taps on a phone, needs no server, and shows a fixed example response if scripts are off.

## 5. Design direction: choose one

The skill dealt three of its twenty researched directions:

| Direction | How it would look for you |
| --- | --- |
| **The dark room** (recommended) | One deep navy ground from top to bottom. Each piece of work is shown like a lit exhibit: the lineage map, the video stills, the code. It continues the navy and teal look of the GraphQL series, so the LinkedIn videos and the site feel like one brand. |
| The page is the object | The whole page built as an artefact from your world, for example an API contract or a schema document. Very original, but it can feel like a gimmick and is harder to read on a phone. |
| Type and nothing else | The first screen is only very large type, with pictures arriving later. Strong and clean, but the weakest at showing your work, and the closest to the generic portfolio look. |

After you choose, the skill deals the full sheet for that direction: type system, palette, hero and each section's layout.

## 6. Imagery (the skill requires at least four real pictures)

- **Ours:** stills and short muted loops from the 8 GraphQL in Practice videos (already rendered); the example lineage graph from the finale.
- **A photo of you:** optional, recommended for the hero or About (your LinkedIn photo or a better one).
- **Found, credited pictures:** Colombo and Sri Lanka from open archives (old maps, the coastline, the city), used for the About and Contact sections, credited in the footer.
- **Not used:** real XAPI or XCLP screenshots, logos of clients, stock photos of laptops.

## 7. Stack and hosting

- **Astro** (static site, fast, component-based), plain CSS with design tokens, a little vanilla JavaScript for the live thing and the motion. No heavy framework.
- **Repo:** a new GitHub repo, e.g. `dhanushkacc/portfolio` (you log in to GitHub yourself).
- **Hosting:** Vercel, connected to the repo, with a preview link for every change. A custom domain (e.g. `dhanushkadilshan.dev`) can be added later.
- **Contact:** a `mailto:` link to start with; a real contact form via a Vercel function later if you want one.

## 8. Steps

1. Choose the direction (and say whether you have a photo).
2. Deal the full direction sheet; write the full copy deck for every section. **You review the copy.**
3. Build the page, still (no motion): tokens, hero, each section, pictures, the live thing.
4. Gate: `lint.mjs` and `inspect.mjs` at 1440, 768 and 390 px until there are 0 FAILs.
5. Look: critique the screenshots, fix the top three problems, up to three rounds. **You review the screenshots.**
6. Motion: section entrances, hover and focus feedback, one moving picture.
7. Final check with playwright-cli (every link, the live thing, the phone layout).
8. Push to GitHub, connect Vercel, share the preview link. **You approve before it goes public.**
9. Add the site link to the CV header and the LinkedIn profile.

## 9. Open questions for you

1. Which direction? (Recommended: the dark room.)
2. Do you have a photo of yourself to use? (Optional.)
3. OK to link each GraphQL video to its LinkedIn post once they are all live (after Nov 5)?
4. Custom domain now, or later?
