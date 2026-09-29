import { describe, expect, it } from 'vitest'
import type { Card, Track } from '../content/types'
import { completeLesson, completeReview, initialProgress, XP } from './progression'
import { addDays, dueCards, interleave, introduce, MIN_EASE, schedule } from './review'

const card = (id: string): Card => ({ id, kind: 'date', front: id, back: id })
const track = (id: string, cards: Card[]): Track => ({
  id,
  series: id,
  tier: 1,
  title: id,
  tagline: '',
  lenses: [],
  era: [0, 0],
  lessons: [{ id: 'l1', title: '', summary: '', steps: [], cards }],
})

const a = track('a', [card('a1'), card('a2'), card('a3')])
const b = track('b', [card('b1')])
const catalog = [a, b]
const day = '2026-09-29'

describe('scheduling', () => {
  const noFuzz = () => 0.5
  it('expands the gap on each good recall', () => {
    let s = introduce(day)
    const gaps: number[] = []
    for (let i = 0; i < 5; i++) {
      s = schedule(s, 'good', day, noFuzz)
      gaps.push(s.interval)
    }
    expect(gaps).toEqual([3, 8, 20, 50, 125])
  })

  it('brings a forgotten card back tomorrow, then resumes from 20% of its old gap', () => {
    let s = schedule({ interval: 50, ease: 2.5, due: day, lapses: 0 }, 'again', day)
    expect(s).toEqual({ interval: 10, ease: 2.3, due: addDays(day, 1), lapses: 1 })
    s = schedule(s, 'good', addDays(day, 1), noFuzz)
    expect(s.interval).toBe(23)
  })

  it('makes hard cards grow slowly and easy cards fast', () => {
    const base = { interval: 10, ease: 2.5, due: day, lapses: 0 }
    expect(schedule(base, 'hard', day, noFuzz).interval).toBe(12)
    expect(schedule(base, 'easy', day, noFuzz).interval).toBe(34)
  })

  it('never lets ease drop below the floor', () => {
    let s = introduce(day)
    for (let i = 0; i < 10; i++) s = schedule(s, 'again', day)
    expect(s.ease).toBe(MIN_EASE)
  })

  it('fuzzes long gaps by at most 5%', () => {
    const base = { interval: 40, ease: 2.5, due: day, lapses: 0 }
    expect(schedule(base, 'good', day, () => 0).interval).toBe(95)
    expect(schedule(base, 'good', day, () => 1).interval).toBe(105)
  })
})

describe('daily review', () => {
  it('introduces a lesson’s cards the day after it is completed', () => {
    const p = completeLesson(initialProgress(), a, 'l1', 0, day).progress
    expect(Object.keys(p.cards)).toEqual(['a1', 'a2', 'a3'])
    expect(dueCards(catalog, p.completedLessons, p.cards, day)).toHaveLength(0)
    expect(dueCards(catalog, p.completedLessons, p.cards, addDays(day, 1))).toHaveLength(3)
  })

  it('keeps existing card state when a lesson is replayed', () => {
    let p = completeLesson(initialProgress(), a, 'l1', 0, day).progress
    p = { ...p, cards: { ...p.cards, a1: { interval: 20, ease: 2.5, due: '2026-12-01', lapses: 0 } } }
    p = completeLesson(p, a, 'l1', 0, addDays(day, 2)).progress
    expect(p.cards.a1.interval).toBe(20)
  })

  it('interleaves tracks', () => {
    const items = [
      { track: { id: 'a' }, n: 1 },
      { track: { id: 'a' }, n: 2 },
      { track: { id: 'b' }, n: 3 },
    ]
    expect(interleave(items).map((x) => x.track.id)).toEqual(['a', 'b', 'a'])
  })

  it('pays XP per card and extends the streak', () => {
    const p = completeReview(initialProgress(), {}, 5, day)
    expect(p.xp).toBe(5 * XP.reviewCard)
    expect(p.streak.count).toBe(1)
  })
})
