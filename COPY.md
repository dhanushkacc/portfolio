# Portfolio — copy deck (for review)

Every word on the page, in order, before any design. Direction: **The dark room** (taste skill, seed 1036920161).

**Decisions taken from the direction sheet**
- **Palette:** the sheet dealt "black and crimson". You already have your own colours from the GraphQL series, so I kept the dealt proportions and used yours instead: a blue-black ground, off-white text, and teal only on the one button and the part of the page that is "live".
- **About section** redrawn from "portraits pass" (built for up to six people) to "inset panel, shaped portrait" (one person, one photo).
- **Type:** Zodiak (thin serif capitals for the big titles) and Hanken Grotesk (for all reading text).
- **Primary action everywhere:** "Get in touch" (opens an email). "Download CV" is always a plain text link.

Facts come from the CV and the career analysis. Items marked **[confirm]** are guesses or choices for you to check.

---

## Navigation (top of the page)

- Wordmark: **Dhanushka Dilshan**
- Links: **Work** · **Writing**

## 1. Hero (first screen)

Your portrait, lit against the dark ground. The name runs from the top-left corner to the bottom-right corner.

- Headline (h1, two lines): **DHANUSHKA** / **DILSHAN**
- Supporting sentence: **Backend engineer in Colombo, Sri Lanka. I build the APIs behind XAPI, a platform for data, API and AI governance.**
- Button: **Get in touch**

## 2. Intro (one statement, set as a staircase)

Statement, five lines, each starting further right:

> I build APIs that
> show where data
> comes from, where
> it goes and which
> rules apply.

Right side: two stills from the GraphQL in Practice videos (Part 4's database log and the finale's data map).
Small note, bottom-left: **Stills from GraphQL in Practice, the video series I publish on LinkedIn.**

## 3. Work (each project fills the screen; its title splits at the centre as you scroll)

Section heading: **Selected work**

### LINEAGE
- Line under the title: **GraphQL API and data map, 2026**
- Text: **Business Lineage is an interactive map of how data flows between sources, data models, datasets and systems, and which classifications, policies and compliance rules apply. I designed and built it, with a Spring for GraphQL API that loads neighbouring nodes in batches, pages through large graphs with cursors and caps the size of a single request.**
- Pictures: the example data map (drawn in code) / the GraphQL query that feeds it.
- Link: **Watch the finale** (the LinkedIn post, once it is live on Nov 5) **[confirm]**

### GOVERNANCE
- Line: **Data governance APIs, 2025–2026** **[confirm years]**
- Text: **The core of XAPI's data governance: REST APIs that let an organization catalog its data sources and model them as ER-style data models, with datasets, fields and relationships. Every API started as an OpenAPI contract, so the frontend could build against it in parallel.**
- Pictures: an ER-style data model (drawn) / the OpenAPI contract for one endpoint (drawn).

### ACCESS
- Line: **Security and performance, 2025–2026** **[confirm years]**
- Text: **I hardened role-based access control across six or more microservices and fixed a flaw that could leak one user's session data into another request. Then I made authorization faster: permissions load in batches, sit in an in-memory Caffeine cache, and stay in sync across service instances through RabbitMQ.**
- Pictures: a permission matrix (drawn) / the cache flow across instances (drawn).

### STREAMING
- Line: **Full-stack, XCLP, 2025** **[confirm year]**
- Text: **For XCLP, the company's compliance learning platform, I built secure video streaming with AWS CloudFront signed cookies, so only enrolled learners can watch a course. I also built course, enrollment and authentication features in Spring Boot and Angular.**
- Pictures: a course video player (drawn, sample course) / the signed-cookie flow (drawn).

### AGENTS
- Line: **AI-assisted engineering, 2026** **[confirm year]**
- Text: **I set up an engineering workflow on Claude Code, with custom skills, subagents and Kubernetes MCP servers that let AI agents read production logs and trace a bug to the service responsible, with guardrails on production access. I also extended XAPI's MCP server so AI assistants can use platform features as tools.**
- Pictures: an agent session tracing a bug (drawn, sample) / a list of MCP tools (drawn).

## 4. Writing (the GraphQL series, as one table at one type size)

Section heading: **GraphQL in Practice**

Live demo above the table. Heading: **Ask for exactly what you need**
- Line: **Tick the fields you want. The response changes shape to match, the way GraphQL does.**
- Fields to tick: **name · role · stack · projects · writing**
- The query and the response show beside it, built from the facts on this page.

Table (title · format · topic · date). Group headings: **October 2026**, **November 2026**.

| Title | Format | Topic | Date |
| --- | --- | --- | --- |
| Why GraphQL | Video, 0:30 | One screen, two ways | Oct 22 |
| The Schema | Video, 0:39 | The contract | Oct 24 |
| Resolvers | Video, 0:44 | Field by field | Oct 26 |
| The N+1 problem | Video, 0:42 | Watch the database log | Oct 28 |
| DataLoader | Video, 0:38 | 101 queries become 2 | Oct 30 |
| Securing GraphQL | Video, 0:44 | Depth and complexity limits | Nov 1 |
| Pagination | Video, 0:46 | One page at a time | Nov 3 |
| Business Lineage | Video, 0:51 | Where it all came together | Nov 5 |

Each row links to its LinkedIn post once all are live **[confirm]**.

## 5. About (one dark panel, your portrait in a shaped frame)

- Statement (heading, two lines): **Contract first,** / **then the code**
- Portrait: your photo, masked to a chamfered block (the shape of a node in the lineage map).

**How I work**
I write each API as an OpenAPI contract before the code, so other teams can build in parallel. Every feature ships with JUnit and Mockito tests, a SonarQube check and an 80% coverage target, in Agile sprints. Day to day I use Java, Spring Boot, Spring for GraphQL, Spring Security, RabbitMQ, Kubernetes and AWS.

**How I got here**
I studied Computer Science at the University of Colombo School of Computing and joined X-Venture as an intern in November 2024. Six months later I joined full time, building XAPI.

- Button: **Get in touch**
- Text link: **Download CV**

## 6. Contact (the colours flip: off-white ground, dark type)

- Sentence, top-left: **Hiring for a backend or GraphQL role? Write to me.**
- The email, as one huge line (breaks after the @): **dhanushkadilshancc@** / **gmail.com**
- Bottom-left: **Colombo, Sri Lanka** (your phone number left off a public page) **[confirm]**
- Bottom-right: **LinkedIn** · **GitHub** · **Download CV**

## 7. Footer (your name across the last photograph)

- Photograph: an old picture of Colombo or the Sri Lankan coast from an open archive, credited **[I'll search and show you options]**
- Top-left links: **Work · Writing · About · Contact**
- Top-right: **dhanushkadilshancc@gmail.com** · **linkedin.com/in/dhanushkacc** · **github.com/dhanushkacc**
- Wordmark across the bottom: **DHANUSHKA DILSHAN**
- Small line: **© 2026 Dhanushka Dilshan.** plus the photograph's credit

## Page details

- Browser tab title: **Dhanushka Dilshan, backend engineer**
- Search and share description: **Backend engineer in Colombo building XAPI's data governance APIs and Business Lineage with Java, Spring Boot and GraphQL.**

## To confirm before launch

1. The years on each project (GOVERNANCE, ACCESS, STREAMING, AGENTS).
2. Linking the finale and the series rows to their LinkedIn posts after Nov 5.
3. Leaving your phone number off the public site (it stays on the CV).
4. The drawn pictures for each project are illustrations with sample data, not real XAPI screens.
