import { useEffect, useRef } from 'react'
import { formatSpan } from '../content/anchors'
import type { Track } from '../content/types'
import { Icon } from './Icon'
import { Lenses } from './Lenses'

type Props = { track: Track; keys: number; onConfirm: () => void; onCancel: () => void }

/**
 * Choosing a story is a commitment: it spends your key, and the other stories stay locked
 * until you finish it. This sheet says what the story is and asks for that commitment.
 */
export function CommitSheet({ track, keys, onConfirm, onCancel }: Props) {
  const confirmRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    confirmRef.current?.focus({ preventScroll: true })
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onCancel()
    window.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [onCancel])

  const lessons = [...track.lessons.map((l) => ({ title: l.title, ready: true })), ...(track.upcoming ?? []).map((u) => ({ title: u.title, ready: false }))]

  return (
    <div className="sheet-scrim" onClick={onCancel}>
      <div
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="commit-title"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="kicker">Before you commit</p>
        <p className="mono era">
          Tier {track.tier} · {formatSpan(track.era[0], track.era[1])}
        </p>
        <h2 id="commit-title">{track.title}</h2>
        <p className="sheet-tagline">{track.tagline}</p>
        <Lenses lenses={track.lenses} />

        <ol className="sheet-lessons">
          {lessons.map((l, i) => (
            <li key={l.title} className={l.ready ? '' : 'upcoming'}>
              <span className="mono">{String(i + 1).padStart(2, '0')}</span>
              <span>{l.title}</span>
              {!l.ready && <span className="tag">Coming soon</span>}
            </li>
          ))}
        </ol>

        <div className="sheet-rule">
          <Icon name="lock" size={18} />
          <p>
            <strong>This is a commitment.</strong> Choosing it uses {keys === 1 ? 'your only key' : 'one of your keys'}.
            The other stories stay locked until you finish this one — then you earn a key to open another beginner
            story or continue this one a tier up.
          </p>
        </div>

        <div className="sheet-actions">
          <button className="btn btn-ghost" onClick={onCancel}>
            Keep looking
          </button>
          <button className="btn" ref={confirmRef} onClick={onConfirm}>
            <Icon name="key" size={16} /> Commit to this story
          </button>
        </div>
      </div>
    </div>
  )
}
