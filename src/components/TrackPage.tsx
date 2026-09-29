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
              </div>
              {lessonOpen ? (
                <a className="btn btn-sm" href={href({ page: 'lesson', trackId: track.id, lessonId: lesson.id })}>
                  {done ? 'Replay' : 'Start'}
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
