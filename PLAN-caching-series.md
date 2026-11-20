# Plan: add "Caching in Practice" to the portfolio

Status: built and live (Nov 20, 2026). Episodes posted so far: 1-5 (Nov 10-20, 2026), 20 planned.

## What the site has today
- Nav link "GraphQL series" -> a full-screen scene where the 8 GraphQL cards deal out (`#graphql-series`).
- "Watch any part": a list of the 8 parts; the sticky stage on the right plays the chosen part.
- "Ask for exactly what you need": a small interactive GraphQL demo.
- Nothing about the caching series anywhere.

## Proposed changes
1. **Nav and footer:** "GraphQL series" becomes "Series", pointing at the series area (both series live there).
2. **New scene after the GraphQL one:** "Caching in Practice", the 5 posted episodes' cards dealing out on the series' own warm-dark ground, with one line: "A 20-part series on caching with Spring. Episode 5 of 20, a new one every few days."
3. **"Watch any part" gets a switch:** GraphQL in Practice | Caching in Practice. The list shows the chosen series' episodes; the stage on the right plays the chosen one (the same player, no new layout).
4. **No demos:** the existing GraphQL "Ask for exactly what you need" demo is removed, and no caching demo is added (user's call: they add nothing).
5. **Media:** a 720 px web loop (about 10-14 s) and a poster image for each episode, cut from the rendered MP4s with ffmpeg, like the GraphQL ones.
6. **Text:** the page description and the Open Graph description mention both series.
7. **Keeping it current:** each time a new episode is posted on LinkedIn, it is added to the site in the same session (one data row + its loop and poster).

## Checks before it goes live
- Screenshots at 1440, 768 and 390 px, screen by screen, and the taste-skill critique, as for v3.
- Nothing about upcoming episodes beyond "Episode N of 20" (no titles of unposted ones).
- Commit and push only after you look at it.
