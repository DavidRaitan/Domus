import { catalog, TIER_NAMES, tiers } from '../content/catalog'
import { formatSpan } from '../content/anchors'
import type { Track } from '../content/types'
import { lessonKey, localDay, trackStatus, type Progress, type TrackStatus } from '../engine/progression'
import { dueCards, knownCount } from '../engine/review'
import { href, navigate } from '../router'
import { Lenses } from './Lenses'

type Props = { progress: Progress; onUnlock: (t: Track) => void }

export function Home({ progress, onUnlock }: Props) {
  const started = progress.unlockedTracks.length + progress.completedTracks.length > 0
  const due = dueCards(catalog, progress.completedLessons, progress.cards, localDay(), Infinity).length
  const known = knownCount(progress.cards)
  const total = Object.keys(progress.cards).length
  const starters = catalog.filter((t) => t.free)
  return (
    <>
      {total > 0 && (
        <section className="review-banner">
          <div>
            <p>
              <strong>{due > 0 ? `Daily review: ${due} card${due === 1 ? '' : 's'} due` : 'Review done for today'}</strong>
            </p>
            <p className="muted small">
              {known} of {total} facts known well (remembered after a week or more)
            </p>
          </div>
          {due > 0 && (
            <a className="btn" href={href({ page: 'review' })}>
              Start review
            </a>
          )}
        </section>
      )}
      <section className="hero">
        <h1>{started ? 'Your path' : 'Choose where to begin'}</h1>
        <p>
          Every track is one true story that teaches several subjects at once — medicine, money, geography, ideas —
          at the moment they matter. You start with one key: pick a Tier 1 track. Finish it to earn another key, then
          open a new Tier 1 story or continue the same story one tier up.
        </p>
        <p className="muted">Want to skip ahead? Pass a tier’s placement test to prove you’re ready.</p>
      </section>

      {starters.length > 0 && (
        <section className="tier">
          <div className="tier-head">
            <div>
              <span className="tier-num">Start here · free</span>
              <h2>Get your bearings</h2>
            </div>
          </div>
          <div className="grid">
            {starters.map((t) => (
              <TrackCard key={t.id} track={t} progress={progress} onUnlock={onUnlock} />
            ))}
          </div>
        </section>
      )}

      {tiers.map((tier) => {
        const tracks = catalog.filter((t) => t.tier === tier && !t.free).sort((a, b) => a.era[0] - b.era[0])
        const certified = progress.pro || tier <= progress.certifiedTier
        return (
          <section key={tier} className="tier">
            <div className="tier-head">
              <div>
                <span className="tier-num">Tier {tier}</span>
                <h2>{TIER_NAMES[tier] ?? ''}</h2>
              </div>
              {tier > 1 &&
                (certified ? (
                  <span className="badge badge-ok">{progress.pro ? 'Pro — open' : 'Placement passed'}</span>
                ) : (
                  <a className="btn btn-ghost btn-sm" href={href({ page: 'test', tier })}>
                    Take placement test
                  </a>
                ))}
            </div>
            <div className="grid">
              {tracks.map((t) => (
                <TrackCard key={t.id} track={t} progress={progress} onUnlock={onUnlock} />
              ))}
            </div>
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

function TrackCard({ track, progress, onUnlock }: { track: Track; progress: Progress; onUnlock: (t: Track) => void }) {
  const status = trackStatus(track, progress, catalog)
  const done = track.lessons.filter((l) => progress.completedLessons.includes(lessonKey(track.id, l.id))).length
  const open = status.kind === 'unlocked' || status.kind === 'completed'

  return (
    <article className={`card track-card status-${status.kind}`}>
      <div className="card-top">
        <span className={`pill pill-${status.kind}`}>{statusLabel(status)}</span>
        {track.lessons.length > 0 && (
          <span className="muted small">
            {open ? `${done}/${track.lessons.length} lessons` : `${track.lessons.length} lessons`}
          </span>
        )}
      </div>
      <p className="era">{formatSpan(track.era[0], track.era[1])}</p>
      <h3>{track.title}</h3>
      <p className="tagline">{track.tagline}</p>
      <Lenses lenses={track.lenses} />
      {open && track.lessons.length > 0 && (
        <div className="bar">
          <div className="bar-fill" style={{ width: `${(done / track.lessons.length) * 100}%` }} />
        </div>
      )}
      <div className="card-actions">
        {open && (
          <a className="btn" href={href({ page: 'track', trackId: track.id })}>
            {status.kind === 'completed' ? 'Review' : 'Continue'}
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
            {progress.pro || track.free ? 'Start' : 'Unlock with 🔑'}
          </button>
        )}
        {status.kind === 'no-keys' && <span className="muted small">Finish your current track to earn a key.</span>}
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
