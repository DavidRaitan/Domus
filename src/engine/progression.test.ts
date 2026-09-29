import { describe, expect, it } from 'vitest'
import type { Track } from '../content/types'
import {
  completeLesson,
  initialProgress,
  liveStreak,
  nextStreak,
  recordPlacement,
  trackStatus,
  unlockTrack,
  XP,
} from './progression'

const lesson = (id: string) => ({ id, title: id, summary: '', steps: [] })
const track = (id: string, series: string, tier: number, lessons = [lesson('a'), lesson('b')]): Track => ({
  id,
  series,
  tier,
  title: id,
  tagline: '',
  lenses: [],
  era: [0, 0],
  lessons,
})

const plague1 = track('plague-1', 'plague', 1)
const athens1 = track('athens-1', 'athens', 1)
const plague2 = track('plague-2', 'plague', 2)
const athens2 = track('athens-2', 'athens', 2)
const soon = track('soon', 'soon', 1, [])
const catalog = [plague1, athens1, plague2, athens2, soon]

const finish = (p = initialProgress(), t = plague1) =>
  t.lessons.reduce((acc, l) => completeLesson(acc, t, l.id, 0, '2026-09-29').progress, p)

describe('unlocking', () => {
  it('starts with one key that opens exactly one tier-1 track', () => {
    let p = initialProgress()
    expect(trackStatus(plague1, p, catalog).kind).toBe('available')
    p = unlockTrack(p, plague1, catalog)
    expect(p.keys).toBe(0)
    expect(trackStatus(plague1, p, catalog).kind).toBe('unlocked')
    expect(trackStatus(athens1, p, catalog).kind).toBe('no-keys')
  })

  it('keeps higher tiers locked at the start', () => {
    const s = trackStatus(plague2, initialProgress(), catalog)
    expect(s).toEqual({ kind: 'locked', needs: plague1 })
  })

  it('does nothing when unlocking an unavailable track', () => {
    const p = initialProgress()
    expect(unlockTrack(p, plague2, catalog)).toBe(p)
  })

  it('shows unwritten tracks as coming soon without spending a key', () => {
    const p = initialProgress()
    expect(trackStatus(soon, p, catalog).kind).toBe('coming-soon')
    expect(unlockTrack(p, soon, catalog)).toBe(p)
  })
})

describe('finishing a track', () => {
  it('awards a key and XP, and opens the continuation but not other tier-2 tracks', () => {
    const p = finish(unlockTrack(initialProgress(), plague1, catalog))
    expect(p.completedTracks).toContain('plague-1')
    expect(p.keys).toBe(1)
    expect(p.xp).toBe(2 * XP.lesson + XP.track)
    expect(trackStatus(plague2, p, catalog).kind).toBe('available')
    expect(trackStatus(athens1, p, catalog).kind).toBe('available')
    expect(trackStatus(athens2, p, catalog).kind).toBe('locked')
  })

  it('pays XP only once per lesson', () => {
    let p = finish(unlockTrack(initialProgress(), plague1, catalog))
    const r = completeLesson(p, plague1, 'a', 5, '2026-09-29')
    expect(r.xpEarned).toBe(0)
    expect(r.trackCompleted).toBe(false)
    p = r.progress
    expect(p.keys).toBe(1)
  })

  it('counts first-try answers', () => {
    const r = completeLesson(initialProgress(), plague1, 'a', 3, '2026-09-29')
    expect(r.xpEarned).toBe(XP.lesson + 3 * XP.firstTryAnswer)
  })
})

describe('placement tests', () => {
  it('opens a whole tier when passed', () => {
    const p = recordPlacement(initialProgress(), 2, 8, 10)
    expect(p.certifiedTier).toBe(2)
    expect(trackStatus(athens2, p, catalog).kind).toBe('available')
  })

  it('does nothing when failed', () => {
    const p = initialProgress()
    expect(recordPlacement(p, 2, 7, 10)).toBe(p)
  })
})

describe('pro', () => {
  it('opens everything without keys', () => {
    let p = { ...initialProgress(), pro: true, keys: 0 }
    expect(trackStatus(athens2, p, catalog).kind).toBe('available')
    p = unlockTrack(p, athens2, catalog)
    expect(p.keys).toBe(0)
    expect(p.unlockedTracks).toContain('athens-2')
  })
})

describe('streaks', () => {
  it('grows on consecutive days and resets after a gap', () => {
    let s = nextStreak({ count: 0, lastDay: null }, '2026-09-28')
    s = nextStreak(s, '2026-09-28')
    expect(s.count).toBe(1)
    s = nextStreak(s, '2026-09-29')
    expect(s.count).toBe(2)
    expect(nextStreak(s, '2026-10-02').count).toBe(1)
  })

  it('crosses month boundaries', () => {
    expect(nextStreak({ count: 4, lastDay: '2026-09-30' }, '2026-10-01').count).toBe(5)
  })

  it('shows zero once a day is missed', () => {
    expect(liveStreak({ count: 5, lastDay: '2026-09-27' }, '2026-09-29')).toBe(0)
    expect(liveStreak({ count: 5, lastDay: '2026-09-28' }, '2026-09-29')).toBe(5)
  })
})

describe('free tracks and explicit continuations', () => {
  const start = { ...track('start', 'start', 1), free: true }
  const founding = track('founding', 'revolutions', 1)
  const civilWar = { ...track('civil-war', 'america', 2), after: 'founding' }
  const cat = [start, founding, civilWar]

  it('opens a free track without spending a key, even with none left', () => {
    let p = { ...initialProgress(), keys: 0 }
    expect(trackStatus(start, p, cat).kind).toBe('available')
    p = unlockTrack(p, start, cat)
    expect(p.keys).toBe(0)
    expect(p.unlockedTracks).toContain('start')
  })

  it('unlocks a track that names another as its predecessor', () => {
    expect(trackStatus(civilWar, initialProgress(), cat)).toEqual({ kind: 'locked', needs: founding })
    const p = finish(unlockTrack(initialProgress(), founding, cat), founding)
    expect(trackStatus(civilWar, p, cat).kind).toBe('available')
  })
})

describe('partly written tracks', () => {
  it('counts a track as finished once every written lesson is done, even with more planned', () => {
    const partial = { ...track('partial', 'partial', 1, [lesson('a')]), upcoming: [{ title: 'b', summary: '' }] }
    const r = completeLesson(unlockTrack(initialProgress(), partial, [partial]), partial, 'a', 0, '2026-09-29')
    expect(r.trackCompleted).toBe(true)
    expect(r.progress.keys).toBe(1)
  })
})
