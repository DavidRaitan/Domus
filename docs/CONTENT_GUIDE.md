# Writing a Domus track

Every track is one true story. Other subjects (medicine, economics, geography, philosophy, science, religion, politics) come in at the moment the story needs them. For example, a conquest across a strait is when you teach tides; a plague is when you teach bacteria. The exemplar is `src/content/tracks/black-death.ts`.

## Rules for writing lessons

These rules are based on learning research: Willingham, Heath & Heath, Ausubel, Dunlosky et al. 2013, Roediger & Karpicke, and Gentner.

1. **Orient before you narrate.** Each track starts with an `orient` step, which has three parts:
   - a timeline bar placing the story in all of history,
   - a map with the key places,
   - one sentence on why it matters, plus "the world at that moment."

   Each later lesson opens with a `question` and a one-line `previously`.
2. **Ask a question, not a topic.** Each lesson answers one central question and closes with a Feynman `recap` of that question.
3. **Use Willingham's 4 Cs:**
   - causality: "because" and "so,"
   - conflict,
   - complications and twists,
   - named characters.

   Cut facts that don't join the causal chain.
4. **Keep screens short.** A story screen is 40–90 words in 2–3 short paragraphs, with at most one new concept per screen.
5. **Explain jargon before using it.** An `explain` card has a plain definition, an everyday analogy, and why it matters here. The test: could a smart 14-year-old retell it?
6. **Guess before revealing.** Use at least one `predict` per lesson. It's never graded, and it opens a curiosity gap.
7. **Make numbers concrete and comparative.** "A class of 30 with 10–15 empty desks" beats "25 million died." Always give the number, a unit a person can picture, and a comparison.
8. **Anchor dates.** Place each new date with a `timeline` step next to 2–3 dates the learner already knows (`src/content/anchors.ts` or earlier lessons).
9. **Compare and contrast.** Every track needs at least one `compare` grid. Use the same columns across cases so the differences stand out.
10. **Use memory cards.** Each lesson gets 5–7 `cards`:
    - Mix the kinds: date, number, person, place, concept, cause, compare.
    - Most cards have 2–3 plausible wrong `choices`. Some concept cards have no choices and are flipped and self-graded instead.
    - Add a `hook` where one helps.
    - Card ids are permanent. Never rename one.
11. **End on a cliffhanger.** Every lesson except the last ends with a `teaser`.
12. **Accuracy.**
    - Use mainstream scholarly figures, give ranges where historians disagree, and cite sources in a comment at the top of the file.
    - Never put a paraphrase inside quotation marks.
    - Mark myths as myths.

## Lesson template (about 10–15 steps plus cards)

1. Opening screen, generated from `question` and `previously`.
2. A hook scene (`story`).
3. `predict`.
4. Story beats (`story`), with an `explain` before each new term.
5. A graded check (`choice` / `order` / `match` / `estimate`).
6. A complication or twist, and the reveal.
7. A lens moment: a cross-subject `explain` or `story`.
8. `timeline` placement.
9. Optionally a `compare`, and an `interactive` widget.
10. `recap`.
11. Cards, quizzed automatically as "Lock it in," then reviewed on a spaced schedule.
12. `teaser`.

## Daily review

Cards from completed lessons come back on an SM-2-style schedule (`src/engine/review.ts`):
- Review gaps are roughly 1 → 3 → 8 → 20 → 50 days.
- A forgotten card returns the next day, then resumes from 20% of its old gap.
- Sessions are capped at 20 cards, and cards from different tracks are mixed together.

## Close-up maps

Continent-scale maps use the world's 1:50m coastline. A close-up (a strait, a pass, a harbour) needs a detailed regional outline, or small islands and channels disappear. To add a new region:

```bash
node scripts/extract-land.mjs <name> <west> <south> <east> <north>
```

Then register it in `REGIONS` in `src/components/widgets/GeoMap.tsx`. Any `mapBounds` narrower than 12° that fits inside that region's box will use it automatically. The Aegean (`aegean`) is already included, and covers Salamis, Thermopylae and Athens.
