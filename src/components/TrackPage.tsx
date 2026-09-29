import { useState } from 'react'
import { catalog } from '../content/catalog'
import type { Track } from '../content/types'
import { isLessonOpen, lessonKey, trackStatus, type Progress } from '../engine/progression'
import { href, navigate } from '../router'
import { statusLabel } from './Home'
import { Lenses } from './Lenses'
import { Icon } from './Icon'
import { CommitSheet } from './CommitSheet'

type Props = { track: Track; progress: Progress; onUnlock: (t: Track) => void }

export function TrackPage({ track, progress, onUnlock }: Props) {
  const status = trackStatus(track, progress, catalog)
  const open = status.kind === 'unlocked' || status.kind === 'completed'
  const [asking, setAsking] = useState(false)
  const nextIndex = track.lessons.findIndex((l) => !progress.completedLessons.includes(lessonKey(track.id, l.id)))
  const nextLesson = nextIndex >= 0 ? track.lessons[nextIndex] : null
  const start = () => {
    onUnlock(track)
    setAsking(false)
    navigate({ page: 'track', trackId: track.id })
  }

  return (
    <>
      {asking && <CommitSheet track={track} keys={progress.keys} onCancel={() => setAsking(false)} onConfirm={start} />}
      <a className="back" href={href({ page: 'home' })}>
        <Icon name="back" size={16} /> All stories
      </a>
      <section className="track-hero">
        <span className="tier-num">Tier {track.tier}</span>
        <h1>{track.title}</h1>
        <p className="lede">{track.tagline}</p>
        <Lenses lenses={track.lenses} />
        {!open && (
          <div className="notice">
            <strong>{statusLabel(status)}.</strong>{' '}
            {status.kind === 'available' ? (
              <button
                className="btn btn-sm"
                onClick={() => (progress.pro || track.free ? start() : setAsking(true))}
              >
                {progress.pro || track.free ? 'Start track' : 'Unlock with a key'}
              </button>
            ) : (
              <span>Go back to the map to see what you can open.</span>
            )}
          </div>
        )}
        {open && nextLesson && (
          <a className="btn btn-lg" href={href({ page: 'lesson', trackId: track.id, lessonId: nextLesson.id })}>
            {progress.resume[lessonKey(track.id, nextLesson.id)] ? 'Resume' : 'Start'} lesson {nextIndex + 1}: {nextLesson.title}
            <Icon name="forward" size={16} />
          </a>
        )}
      </section>

      <ol className="lesson-list">
        {track.lessons.map((lesson, i) => {
          const done = progress.completedLessons.includes(lessonKey(track.id, lesson.id))
          const lessonOpen = open && isLessonOpen(track, i, progress)
          return (
            <li key={lesson.id} className={`lesson-row ${done ? 'done' : ''} ${lessonOpen ? '' : 'closed'}`}>
              <span className="lesson-num">{done ? <Icon name="check" size={16} /> : i + 1}</span>
              <div className="lesson-text">
                <h3>{lesson.title}</h3>
                <p className="muted">{lesson.summary}</p>
                {!done && progress.resume[lessonKey(track.id, lesson.id)] && (
                  <p className="in-progress">
                    In progress · step {progress.resume[lessonKey(track.id, lesson.id)].index + 1} of{' '}
                    {lesson.steps.length + (lesson.cards?.length ?? 0)}
                  </p>
                )}
              </div>
              {lessonOpen ? (
                <a className="btn btn-sm" href={href({ page: 'lesson', trackId: track.id, lessonId: lesson.id })}>
                  {done ? 'Replay' : progress.resume[lessonKey(track.id, lesson.id)] ? 'Resume' : 'Start'}
                </a>
              ) : (
                <span className="lock" aria-label="Locked">
                  <Icon name="lock" size={16} />
                </span>
              )}
            </li>
          )
        })}
        {track.upcoming?.map((u, i) => (
          <li key={u.title} className="lesson-row closed upcoming">
            <span className="lesson-num">{track.lessons.length + i + 1}</span>
            <div className="lesson-text">
              <h3>{u.title}</h3>
              <p className="muted">{u.summary}</p>
            </div>
            <span className="tag">Coming soon</span>
          </li>
        ))}
      </ol>
    </>
  )
}
