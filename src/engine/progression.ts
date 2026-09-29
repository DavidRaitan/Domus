import type { Track } from '../content/types'
import { introduceCards, type CardState } from './review'

export type Progress = {
  xp: number
  /** Unlock keys. You start with one and earn one per finished track. */
  keys: number
  unlockedTracks: string[]
  completedTracks: string[]
  completedLessons: string[]
  /** Highest tier proven by a placement test. Tier 1 is open to everyone. */
  certifiedTier: number
  /** Paid plan: every track open, no keys needed. */
  pro: boolean
  streak: { count: number; lastDay: string | null }
  /** Spaced-repetition state per memory card id. */
  cards: Record<string, CardState>
  /** Where you stopped inside unfinished lessons, keyed by lessonKey. */
  resume: Record<string, { index: number; correct: number }>
  /** The lesson you touched most recently — the home screen's "continue" target. */
  last: { trackId: string; lessonId: string } | null
}

export const initialProgress = (): Progress => ({
  xp: 0,
  keys: 1,
  unlockedTracks: [],
  completedTracks: [],
  completedLessons: [],
  certifiedTier: 1,
  pro: false,
  streak: { count: 0, lastDay: null },
  cards: {},
  resume: {},
  last: null,
})

export const XP = {
  lesson: 20,
  firstTryAnswer: 5,
  track: 100,
  placement: 50,
  reviewCard: 2,
}

export const PLACEMENT_PASS_RATIO = 0.8

export type TrackStatus =
  | { kind: 'completed' }
  | { kind: 'unlocked' }
  | { kind: 'available' }
  | { kind: 'no-keys' }
  | { kind: 'locked'; needs: Track | null }
  | { kind: 'coming-soon' }

import { lessonKey } from './keys'
export { lessonKey }

/** The track this one continues: an explicit `after`, else the previous tier of the same series. */
export function prerequisite(track: Track, catalog: Track[]): Track | null {
  if (track.after) return catalog.find((t) => t.id === track.after) ?? null
  return catalog.find((t) => t.series === track.series && t.tier === track.tier - 1) ?? null
}

/**
 * A track is eligible if it is at a tier you've reached (tier 1, or proven by
 * a placement test), if it continues a topic you finished, or if you're on Pro.
 */
export function isEligible(track: Track, p: Progress, catalog: Track[]): boolean {
  if (p.pro || track.tier <= p.certifiedTier) return true
  const pre = prerequisite(track, catalog)
  return pre !== null && p.completedTracks.includes(pre.id)
}

export function trackStatus(track: Track, p: Progress, catalog: Track[]): TrackStatus {
  if (p.completedTracks.includes(track.id)) return { kind: 'completed' }
  if (p.unlockedTracks.includes(track.id)) return { kind: 'unlocked' }
  if (!isEligible(track, p, catalog)) return { kind: 'locked', needs: prerequisite(track, catalog) }
  if (track.lessons.length === 0) return { kind: 'coming-soon' }
  if (!p.pro && !track.free && p.keys < 1) return { kind: 'no-keys' }
  return { kind: 'available' }
}

export function unlockTrack(p: Progress, track: Track, catalog: Track[]): Progress {
  if (trackStatus(track, p, catalog).kind !== 'available') return p
  return {
    ...p,
    keys: p.pro || track.free ? p.keys : p.keys - 1,
    unlockedTracks: [...p.unlockedTracks, track.id],
  }
}

/** A lesson is open once every earlier lesson in its track is done. */
export function isLessonOpen(track: Track, lessonIndex: number, p: Progress): boolean {
  return track.lessons
    .slice(0, lessonIndex)
    .every((l) => p.completedLessons.includes(lessonKey(track.id, l.id)))
}

export type LessonResult = { progress: Progress; xpEarned: number; trackCompleted: boolean }

export function completeLesson(
  p: Progress,
  track: Track,
  lessonId: string,
  firstTryCorrect: number,
  today: string,
): LessonResult {
  const key = lessonKey(track.id, lessonId)
  const repeat = p.completedLessons.includes(key)
  // Replays still count for the streak but don't pay XP again.
  let xpEarned = repeat ? 0 : XP.lesson + firstTryCorrect * XP.firstTryAnswer
  const completedLessons = repeat ? p.completedLessons : [...p.completedLessons, key]

  const trackCompleted =
    !p.completedTracks.includes(track.id) &&
    track.lessons.every((l) => completedLessons.includes(lessonKey(track.id, l.id)))
  if (trackCompleted) xpEarned += XP.track

  return {
    xpEarned,
    trackCompleted,
    progress: {
      ...p,
      xp: p.xp + xpEarned,
      completedLessons,
      completedTracks: trackCompleted ? [...p.completedTracks, track.id] : p.completedTracks,
      keys: trackCompleted ? p.keys + 1 : p.keys,
      streak: nextStreak(p.streak, today),
      cards: introduceCards(p.cards, track.lessons.find((l) => l.id === lessonId)?.cards ?? [], today),
      resume: withoutKey(p.resume, key),
      last: { trackId: track.id, lessonId },
    },
  }
}

/** Record a finished daily review: card states were updated as they were answered. */
export function completeReview(
  p: Progress,
  cards: Record<string, CardState>,
  reviewed: number,
  today: string,
): Progress {
  return {
    ...p,
    cards,
    xp: p.xp + reviewed * XP.reviewCard,
    streak: reviewed > 0 ? nextStreak(p.streak, today) : p.streak,
  }
}

/** Remember where the learner is inside a lesson so they can pick up there. */
export function saveLessonPlace(p: Progress, trackId: string, lessonId: string, index: number, correct: number): Progress {
  return {
    ...p,
    resume: { ...p.resume, [lessonKey(trackId, lessonId)]: { index, correct } },
    last: { trackId, lessonId },
  }
}

function withoutKey<T>(obj: Record<string, T>, key: string): Record<string, T> {
  const { [key]: _drop, ...rest } = obj
  return rest
}

/**
 * Where "continue" should take you: the lesson you were last in if it's unfinished,
 * otherwise the next unfinished lesson of that track, otherwise of any track you've opened.
 */
export function continueTarget(p: Progress, catalog: Track[]): { track: Track; lessonIndex: number } | null {
  const nextOpen = (track: Track) => track.lessons.findIndex((l) => !p.completedLessons.includes(lessonKey(track.id, l.id)))
  if (p.last) {
    const track = catalog.find((t) => t.id === p.last!.trackId)
    if (track) {
      const i = track.lessons.findIndex((l) => l.id === p.last!.lessonId)
      if (i >= 0 && !p.completedLessons.includes(lessonKey(track.id, track.lessons[i].id))) return { track, lessonIndex: i }
      const n = nextOpen(track)
      if (n >= 0) return { track, lessonIndex: n }
    }
  }
  for (const id of p.unlockedTracks) {
    const track = catalog.find((t) => t.id === id)
    if (!track || p.completedTracks.includes(id)) continue
    const n = nextOpen(track)
    if (n >= 0) return { track, lessonIndex: n }
  }
  return null
}

export function passedPlacement(correct: number, total: number): boolean {
  return total > 0 && correct / total >= PLACEMENT_PASS_RATIO
}

export function recordPlacement(p: Progress, tier: number, correct: number, total: number): Progress {
  if (!passedPlacement(correct, total) || tier <= p.certifiedTier) return p
  return { ...p, certifiedTier: tier, xp: p.xp + XP.placement }
}

export function nextStreak(streak: Progress['streak'], today: string): Progress['streak'] {
  if (streak.lastDay === today) return streak
  const yesterday = shiftDay(today, -1)
  return { count: streak.lastDay === yesterday ? streak.count + 1 : 1, lastDay: today }
}

/** Streak still alive = practiced today or yesterday. */
export function liveStreak(streak: Progress['streak'], today: string): number {
  if (streak.lastDay === today || streak.lastDay === shiftDay(today, -1)) return streak.count
  return 0
}

export function localDay(d = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function shiftDay(day: string, delta: number): string {
  const [y, m, d] = day.split('-').map(Number)
  return localDay(new Date(y, m - 1, d + delta))
}
