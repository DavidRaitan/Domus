import { useState, type CSSProperties } from 'react'
import { catalog, TIER_NAMES, tiers } from '../content/catalog'
import { formatSpan } from '../content/anchors'
import type { Track } from '../content/types'
import { continueTarget, lessonKey, localDay, trackStatus, type Progress, type TrackStatus } from '../engine/progression'
import { dueCards, knownCount } from '../engine/review'
import { href, navigate } from '../router'
import { CommitSheet } from './CommitSheet'
import { Icon } from './Icon'
import { Lenses } from './Lenses'

type Props = { progress: Progress; onUnlock: (t: Track) => void }

const TIER_BLURB: Record<number, string> = {
  1: 'Choose one story to begin. You commit to it — the others open once you finish.',
  2: 'Continue a story you finished — or prove you’re ready with the placement test.',
  3: 'The deepest cuts, for when the earlier tiers feel easy.',
}

export function Home({ progress, onUnlock }: Props) {
  const due = dueCards(catalog, progress.completedLessons, progress.cards, localDay(), Infinity).length
  const known = knownCount(progress.cards)
  const total = Object.keys(progress.cards).length
  const starter = catalog.find((t) => t.free)
  const [pending, setPending] = useState<Track | null>(null)

  // Spending a key is a commitment, so ask first. Free tracks and Pro skip the question.
  const choose = (t: Track) => {
    if (progress.pro || t.free) {
      onUnlock(t)
      navigate({ page: 'track', trackId: t.id })
    } else setPending(t)
  }

  return (
    <>
      {pending && (
        <CommitSheet
          track={pending}
          keys={progress.keys}
          onCancel={() => setPending(null)}
          onConfirm={() => {
            onUnlock(pending)
            setPending(null)
            navigate({ page: 'track', trackId: pending.id })
          }}
        />
      )}
      <ContinueCard progress={progress} />

      {total > 0 && (
        <section className="review-banner reveal">
          <div className="review-banner-icon">
            <Icon name="cards" size={22} />
          </div>
          <div className="review-banner-text">
            <strong>{due > 0 ? `${due} card${due === 1 ? '' : 's'} to review today` : 'Today’s review is done'}</strong>
            <span className="muted">
              {known} of {total} facts known well — remembered after a week or more
            </span>
          </div>
          {due > 0 && (
            <a className="btn" href={href({ page: 'review' })}>
              Review now
            </a>
          )}
        </section>
      )}

      {tiers.map((tier) => {
        const all = catalog.filter((t) => t.tier === tier && !t.free).sort((a, b) => a.era[0] - b.era[0])
        // What you're working on comes first, then what you can open, then the rest.
        const rank = (t: Track) =>
          ({ unlocked: 0, available: 1, 'no-keys': 2, completed: 3, locked: 4, 'coming-soon': 5 })[trackStatus(t, progress, catalog).kind]
        const ready = all.filter((t) => t.lessons.length > 0).sort((a, b) => rank(a) - rank(b))
        const planned = all.filter((t) => t.lessons.length === 0)
        const certified = progress.pro || tier <= progress.certifiedTier
        return (
          <section key={tier} className="tier">
            <header className="tier-head">
              <div>
                <p className="kicker">Tier {tier}</p>
                <h2>{TIER_NAMES[tier] ?? ''}</h2>
                <p className="tier-blurb">{TIER_BLURB[tier]}</p>
              </div>
              {tier > 1 &&
                (certified ? (
                  <span className="tag tag-green">{progress.pro ? 'Open with Pro' : 'Placement passed'}</span>
                ) : (
                  <a className="btn btn-ghost btn-sm" href={href({ page: 'test', tier })}>
                    Take the Tier {tier} test
                  </a>
                ))}
            </header>
            <div className="grid">
              {ready.map((t, i) => (
                <TrackCard key={t.id} track={t} progress={progress} onChoose={choose} index={i} />
              ))}
            </div>
            {tier === 1 && starter && <StarterRow track={starter} progress={progress} onChoose={choose} />}
            {planned.length > 0 && (
              <details className="planned">
                <summary>
                  <span>In the works</span>
                  <span className="muted">{planned.length} more stories being written</span>
                </summary>
                <ul>
                  {planned.map((t) => (
                    <li key={t.id}>
                      <span className="mono era">{formatSpan(t.era[0], t.era[1])}</span>
                      <span className="planned-title">{t.title}</span>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </section>
        )
      })}
    </>
  )
}

export function statusLabel(s: TrackStatus): string {
  switch (s.kind) {
    case 'completed':
      return 'Completed'
    case 'unlocked':
      return 'In progress'
    case 'available':
      return 'Available'
    case 'no-keys':
      return 'Needs a key'
    case 'coming-soon':
      return 'Coming soon'
    case 'locked':
      return 'Locked'
  }
}

type CardProps = { track: Track; progress: Progress; onChoose: (t: Track) => void; index: number }

function TrackCard({ track, progress, onChoose, index }: CardProps) {
  const status = trackStatus(track, progress, catalog)
  const done = track.lessons.filter((l) => progress.completedLessons.includes(lessonKey(track.id, l.id))).length
  const open = status.kind === 'unlocked' || status.kind === 'completed'
  const totalLessons = track.lessons.length + (track.upcoming?.length ?? 0)

  return (
    <article
      className={`card track-card status-${status.kind} reveal`}
      style={{ '--i': index } as CSSProperties}
    >
      <div className="card-top">
        <span className="mono era">{formatSpan(track.era[0], track.era[1])}</span>
        <span className={`tag tag-${status.kind}`}>
          {status.kind === 'locked' && <Icon name="lock" size={12} />}
          {status.kind === 'completed' && <Icon name="check" size={12} />}
          {statusLabel(status)}
        </span>
      </div>
      <h3>{track.title}</h3>
      <p className="tagline">{track.tagline}</p>
      <Lenses lenses={track.lenses} />
      <div className="card-foot">
        <span className="muted small">
          {open ? `${done} of ${totalLessons} lessons` : `${totalLessons} lessons`}
          {track.upcoming?.length ? ` · ${track.lessons.length} ready` : ''}
        </span>
        {open && track.lessons.length > 0 && (
          <div className="bar">
            <div className="bar-fill" style={{ width: `${(done / totalLessons) * 100}%` }} />
          </div>
        )}
      </div>
      <div className="card-actions">
        {open && (
          <a className="btn" href={href({ page: 'track', trackId: track.id })}>
            {status.kind === 'completed' ? 'Revisit' : 'Continue'}
            <Icon name="forward" size={16} />
          </a>
        )}
        {status.kind === 'available' && (
          <button
            className="btn"
            onClick={() => onChoose(track)}
          >
            {progress.pro || track.free ? (
              'Start'
            ) : (
              <>
                <Icon name="key" size={16} /> Unlock
              </>
            )}
          </button>
        )}
        {status.kind === 'no-keys' && <span className="muted small">Finish your current story to earn a key.</span>}
        {status.kind === 'locked' && (
          <span className="muted small">
            {status.needs ? `Finish “${status.needs.title}” or pass the Tier ${track.tier} test.` : `Pass the Tier ${track.tier} test.`}
          </span>
        )}
        {status.kind === 'coming-soon' && <span className="muted small">Being written.</span>}
      </div>
    </article>
  )
}

/** The free orientation track, offered as an optional warm-up rather than a fifth choice. */
function StarterRow({ track, progress, onChoose }: { track: Track; progress: Progress; onChoose: (t: Track) => void }) {
  const status = trackStatus(track, progress, catalog)
  const open = status.kind === 'unlocked' || status.kind === 'completed'
  return (
    <div className="starter-row">
      <Icon name="compass" size={22} />
      <div className="starter-text">
        <strong>New to history? Warm up with {track.title.replace('Starting Point: ', '')}</strong>
        <span className="muted">Free, and doesn’t use your key — the whole human story in seven short lessons.</span>
      </div>
      {open ? (
        <a className="btn btn-ghost btn-sm" href={href({ page: 'track', trackId: track.id })}>
          {status.kind === 'completed' ? 'Revisit' : 'Continue'}
        </a>
      ) : (
        <button className="btn btn-ghost btn-sm" onClick={() => onChoose(track)}>
          Start warm-up
        </button>
      )}
    </div>
  )
}

/** The single most useful button on the page: pick up exactly where you stopped. */
function ContinueCard({ progress }: { progress: Progress }) {
  const target = continueTarget(progress, catalog)
  if (!target) return null
  const { track, lessonIndex } = target
  const lesson = track.lessons[lessonIndex]
  const place = progress.resume[lessonKey(track.id, lesson.id)]
  const steps = lesson.steps.length + (lesson.cards?.length ?? 0)
  const doneLessons = track.lessons.filter((l) => progress.completedLessons.includes(lessonKey(track.id, l.id))).length
  const totalLessons = track.lessons.length + (track.upcoming?.length ?? 0)

  return (
    <a className="continue-card reveal" href={href({ page: 'lesson', trackId: track.id, lessonId: lesson.id })}>
      <div className="continue-text">
        <p className="kicker">{place ? 'Continue where you left off' : 'Up next'}</p>
        <h2>{lesson.title}</h2>
        <p className="muted">
          {track.title} · Lesson {lessonIndex + 1} of {totalLessons}
          {place ? ` · step ${place.index + 1} of ${steps}` : ''}
        </p>
        <div className="continue-bars">
          <div className="bar" title="Lessons finished in this story">
            <div className="bar-fill" style={{ width: `${(doneLessons / totalLessons) * 100}%` }} />
          </div>
        </div>
      </div>
      <span className="btn">
        {place ? 'Resume' : 'Start lesson'} <Icon name="forward" size={16} />
      </span>
    </a>
  )
}
