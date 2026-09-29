import { catalog } from '../content/catalog'
import type { Track } from '../content/types'
import { isLessonOpen, lessonKey, trackStatus, type Progress } from '../engine/progression'
import { href, navigate } from '../router'
import { statusLabel } from './Home'
import { Lenses } from './Lenses'

type Props = { track: Track; progress: Progress; onUnlock: (t: Track) => void }

export function TrackPage({ track, progress, onUnlock }: Props) {
  const status = trackStatus(track, progress, catalog)
  const open = status.kind === 'unlocked' || status.kind === 'completed'

  return (
    <>
      <a className="back" href={href({ page: 'home' })}>
        ← All tracks
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
                onClick={() => {
                  onUnlock(track)
                  navigate({ page: 'track', trackId: track.id })
                }}
              >
                {progress.pro || track.free ? 'Start track' : 'Unlock with 🔑'}
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
              <span className="lesson-num">{done ? '✓' : i + 1}</span>
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
                  🔒
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </>
  )
}
