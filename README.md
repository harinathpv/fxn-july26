# FxN Website — Next.js

Hand-ported from the approved static HTML design (no generative tool involved — every class name, color value, and piece of copy was transcribed directly from the original files).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Routes

- `/` — Homepage
- `/member-directory` — Member Directory (32 members, verified tier sorts to top)
- `/events-social` — Events & Social (podcast, Luma events, partner updates)
- `/leadership-as-a-service` — Leadership as a Service (pricing, FAQ, diagrams)

## Editing content

All editable content lives in `lib/data/`:
- `partners.ts` — 14 Featured Partners (homepage)
- `directory.ts` — 32 Member Directory entries
- `events.ts` — upcoming events (Luma-linked)
- `episodes.ts` — podcast episodes (currently empty — add more here)
- `partnerUpdates.ts` — manually curated social feed (currently empty)

## Deploying

Push this to a GitHub repo and import it in Vercel (vercel.com/new), or run `vercel` from this directory with the Vercel CLI. No environment variables or build config needed — it's a standard Next.js App Router project.
