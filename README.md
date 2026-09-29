# Domus

A self-study platform for becoming a well-rounded person, with broad and connected knowledge.

- **Structure from Hack The Box.** Content comes in tiers. You start with one key and pick one Tier 1 track. Finishing a track earns a key. You can spend it on another track in the same tier, or on the next level of the story you just finished. You can skip ahead by passing a tier's placement test, or with Pro, which unlocks everything.
- **Learning by doing, like Brilliant.** Lessons use interactive widgets, ordering, sorting and estimation, not just reading.
- **Clear explanations, like Khan Academy.** Every answer comes with the reasoning behind it.
- **Habits, like Duolingo.** XP, daily streaks and short lessons.
- **Memory, like Anki.** Each lesson adds memory cards. A daily review brings them back on a spaced schedule, mixed across tracks.
- **Taught through stories.** History is the backbone. Each track follows one story and teaches several subjects through it, such as medicine, economics, geography, philosophy, politics and religion. Each step is tagged with the lenses it teaches.

## Run it

```bash
npm install
npm run dev
```

```bash
npm test
```

## Where things live

| Path | What |
|---|---|
| `src/engine/progression.ts` | Rules for tiers, keys, unlocks, XP, streaks and placement tests (pure functions, tested) |
| `src/content/catalog.ts` | All tracks and placement tests. Tracks with no lessons show as "coming soon" |
| `src/content/tracks/` | Track content, one file per track |
| `src/content/types.ts` | Step types: `orient`, `story`, `explain`, `predict`, `choice`, `order`, `match`, `estimate`, `timeline`, `compare`, `recap`, `interactive`, plus memory `Card`s |
| `src/engine/review.ts` | Spaced-repetition scheduler for daily review (SM-2 style) |
| `src/components/widgets/` | Maps (real coastlines), the world timeline and interactive widgets |

## Adding a track

Read [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) first. It covers the lesson template and the writing rules.


1. Create `src/content/tracks/<name>.ts` that exports a `Track`.
2. Replace its `planned(...)` entry in `catalog.ts`, or add a new one. A track with the same `series` and `tier + 1` counts as its continuation.

Progress is saved in the browser (`localStorage`). There are no accounts or payments yet. Pro is a demo switch in Settings.
