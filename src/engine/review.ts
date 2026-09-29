import type { Card, Track } from '../content/types'
import { lessonKey } from './keys'

/**
 * Per-card memory state, SM-2 style (the algorithm behind Anki).
 * `interval` is the current gap in days (0 = never reviewed); `ease` multiplies it on each success.
 */
export type CardState = { interval: number; ease: number; due: string; lapses: number }

export type Grade = 'again' | 'hard' | 'good' | 'easy'

export const START_EASE = 2.5
export const MIN_EASE = 1.3
export const MAX_SESSION = 20

export function addDays(day: string, n: number): string {
  const [y, m, d] = day.split('-').map(Number)
  const t = new Date(y, m - 1, d + n)
  const pad = (x: number) => String(x).padStart(2, '0')
  return `${t.getFullYear()}-${pad(t.getMonth() + 1)}-${pad(t.getDate())}`
}

/** A new card's first review is the day after its lesson (the lesson's own quiz is the same-day review). */
export function introduce(today: string): CardState {
  return { interval: 0, ease: START_EASE, due: addDays(today, 1), lapses: 0 }
}

/**
 * Next state after a review. Gaps grow roughly 1 → 3 → 7 → 18 → 45 days for steady "good" answers.
 * A forgotten card comes back tomorrow, then resumes from 20% of its old gap rather than from zero.
 * `rand` adds ±5% fuzz to longer gaps so cards learned together don't stay clumped together.
 */
export function schedule(s: CardState, grade: Grade, today: string, rand: () => number = Math.random): CardState {
  if (grade === 'again') {
    return {
      interval: Math.max(1, Math.round(s.interval * 0.2)),
      ease: Math.max(MIN_EASE, s.ease - 0.2),
      due: addDays(today, 1),
      lapses: s.lapses + 1,
    }
  }

  let ease = s.ease
  let interval: number
  if (s.interval === 0) {
    interval = { hard: 1, good: 3, easy: 5 }[grade]
  } else if (grade === 'hard') {
    ease = Math.max(MIN_EASE, ease - 0.15)
    interval = Math.max(s.interval + 1, Math.round(s.interval * 1.2))
  } else if (grade === 'good') {
    interval = Math.round(s.interval * ease)
  } else {
    ease += 0.15
    interval = Math.round(s.interval * ease * 1.3)
  }

  if (interval >= 7) interval = Math.round(interval * (0.95 + rand() * 0.1))
  return { interval, ease, due: addDays(today, interval), lapses: s.lapses }
}

export type DueCard = { card: Card; track: Track; state: CardState }

/** All cards belonging to completed lessons. */
export function allCards(catalog: Track[], completedLessons: string[]): { card: Card; track: Track }[] {
  const out: { card: Card; track: Track }[] = []
  for (const track of catalog)
    for (const lesson of track.lessons)
      if (completedLessons.includes(lessonKey(track.id, lesson.id)))
        for (const card of lesson.cards ?? []) out.push({ card, track })
  return out
}

/**
 * Cards due today, most overdue first, capped per session so review stays a few minutes.
 * Cards from different tracks are interleaved rather than grouped, which improves retention
 * and helps tell similar events apart.
 */
export function dueCards(
  catalog: Track[],
  completedLessons: string[],
  states: Record<string, CardState>,
  today: string,
  limit = MAX_SESSION,
): DueCard[] {
  const due = allCards(catalog, completedLessons)
    .map(({ card, track }) => ({ card, track, state: states[card.id] }))
    .filter((x): x is DueCard => x.state !== undefined && x.state.due <= today)
    .sort((a, b) => a.state.due.localeCompare(b.state.due))
    .slice(0, limit)
  return interleave(due)
}

/** Reorder so consecutive items come from different tracks where possible. */
export function interleave<T extends { track: { id: string } }>(items: T[]): T[] {
  const groups = new Map<string, T[]>()
  for (const it of items) groups.set(it.track.id, [...(groups.get(it.track.id) ?? []), it])
  const queues = [...groups.values()]
  const out: T[] = []
  while (queues.some((q) => q.length)) for (const q of queues) if (q.length) out.push(q.shift()!)
  return out
}

/** Introduce the cards of a newly completed lesson. Existing cards keep their state. */
export function introduceCards(
  states: Record<string, CardState>,
  cards: Card[],
  today: string,
): Record<string, CardState> {
  const next = { ...states }
  for (const c of cards) if (!next[c.id]) next[c.id] = introduce(today)
  return next
}

/** Cards "known" = reviewed successfully at least once with a gap of a week or more. */
export function knownCount(states: Record<string, CardState>): number {
  return Object.values(states).filter((s) => s.interval >= 7).length
}
