import type { CSSProperties } from 'react'
import { catalog, TIER_NAMES, tiers } from '../content/catalog'
import { formatSpan } from '../content/anchors'
import type { Track } from '../content/types'
import { lessonKey, localDay, trackStatus, type Progress, type TrackStatus } from '../engine/progression'
import { dueCards, knownCount } from '../engine/review'
import { href, navigate } from '../router'
import { Icon } from './Icon'
import { Lenses } from './Lenses'

type Props = { progress: Progress; onUnlock: (t: Track) => void }

const TIER_BLURB: Record<number, string> = {
  1: 'Pick any one to begin. Each is a complete story on its own.',
  2: 'Continue a story you finished — or prove you’re ready with the placement test.',
  3: 'The deepest cuts, for when the earlier tiers feel easy.',
}

export function Home({ progress, onUnlock }: Props) {
  const due = dueCards(catalog, progress.completedLessons, progress.cards, localDay(), Infinity).length
  const known = knownCount(progress.cards)
  const total = Object.keys(progress.cards).length
  const starters = catalog.filter((t) => t.free)

  return (
    <>
      <section className="hero reveal">
        <p className="kicker">A school for the curious</p>
        <h1 className="display">History is the story. Everything else is woven in.</h1>
        <p className="hero-sub">
          Each track follows one true story — a plague, a war, a revolution — and teaches the medicine, money,
          geography and ideas inside it at the moment they matter. Start with one key. Finish a story to earn the next.
        </p>
      </section>

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

      {starters.length > 0 && (
        <section className="tier">
          <header className="tier-head">
            <div>
              <p className="kicker">Start here · Free</p>
              <h2>Get your bearings</h2>
              <p className="tier-blurb">The whole human story in seven lessons, so every track after it has a place to land.</p>
            </div>
          </header>
          <div className="grid grid-feature">
            {starters.map((t, i) => (
              <TrackCard key={t.id} track={t} progress={progress} onUnlock={onUnlock} index={i} feature />
            ))}
          </div>
        </section>
      )}

      {tiers.map((tier) => {
        const all = catalog.filter((t) => t.tier === tier && !t.free).sort((a, b) => a.era[0] - b.era[0])
        const ready = all.filter((t) => t.lessons.length > 0)
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
                <TrackCard key={t.id} track={t} progress={progress} onUnlock={onUnlock} index={i} />
              ))}
            </div>
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

type CardProps = { track: Track; progress: Progress; onUnlock: (t: Track) => void; index: number; feature?: boolean }

function TrackCard({ track, progress, onUnlock, index, feature }: CardProps) {
  const status = trackStatus(track, progress, catalog)
  const done = track.lessons.filter((l) => progress.completedLessons.includes(lessonKey(track.id, l.id))).length
  const open = status.kind === 'unlocked' || status.kind === 'completed'
  const totalLessons = track.lessons.length + (track.upcoming?.length ?? 0)

  return (
    <article
      className={`card track-card status-${status.kind} reveal ${feature ? 'track-card-feature' : ''}`}
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
            onClick={() => {
              onUnlock(track)
              navigate({ page: 'track', trackId: track.id })
            }}
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
