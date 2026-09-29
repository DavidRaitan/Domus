import { useMemo, useState } from 'react'
import type { Card } from '../content/types'
import { XP } from '../engine/progression'
import type { DueCard, Grade } from '../engine/review'
import { href } from '../router'

type Props = {
  initial: DueCard[]
  /** Called as each card is first answered, so progress survives leaving mid-session. */
  onGrade: (card: Card, grade: Grade) => void
  onFinish: (reviewed: number) => void
}

const KIND_LABEL: Record<Card['kind'], string> = {
  date: 'When?',
  number: 'How many?',
  person: 'Who?',
  place: 'Where?',
  concept: 'Explain',
  compare: 'Compare',
  cause: 'Why?',
}

export function ReviewSession({ initial, onGrade, onFinish }: Props) {
  // Snapshot the session at mount: `initial` is recomputed as cards are graded and stop being due.
  const [queue, setQueue] = useState(initial)
  const [sessionSize] = useState(initial.length)
  const [done, setDone] = useState(0)
  const [missed, setMissed] = useState(0)
  const [graded, setGraded] = useState<Set<string>>(() => new Set())
  const [finished, setFinished] = useState(sessionSize === 0)

  const current = queue[0]

  const answer = (grade: Grade) => {
    const first = !graded.has(current.card.id)
    if (first) {
      onGrade(current.card, grade)
      setGraded(new Set(graded).add(current.card.id))
      setDone(done + 1)
      if (grade === 'again') setMissed(missed + 1)
    }
    // A missed card comes back once more at the end of today's session.
    const rest = queue.slice(1)
    const next = grade === 'again' && first ? [...rest, current] : rest
    setQueue(next)
    if (next.length === 0) {
      setFinished(true)
      onFinish(first ? done + 1 : done)
    }
  }

  if (finished) {
    return (
      <div className="lesson finish">
        <div className="finish-mark">{sessionSize ? '🧠' : '☀️'}</div>
        <h1>{sessionSize ? 'Review complete' : 'Nothing due today'}</h1>
        {sessionSize > 0 ? (
          <>
            <p className="muted">
              {done} cards reviewed · {done - missed} remembered
            </p>
            <div className="rewards">
              <span className="reward">+{done * XP.reviewCard} XP</span>
            </div>
            <p className="muted small">Cards you knew come back later; cards you missed come back tomorrow.</p>
          </>
        ) : (
          <p className="muted">Finish a lesson and its cards will start coming back here tomorrow.</p>
        )}
        <div className="finish-actions">
          <a className="btn" href={href({ page: 'home' })}>
            Back to the map
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="lesson">
      <div className="lesson-top">
        <a className="close" href={href({ page: 'home' })} aria-label="Exit review">
          ✕
        </a>
        <div className="bar">
          <div className="bar-fill" style={{ width: `${(done / (done + queue.length)) * 100}%` }} />
        </div>
      </div>
      <p className="eyebrow">
        Daily review · {current.track.title}
      </p>
      <ReviewCard key={`${current.card.id}-${queue.length}`} card={current.card} onAnswer={answer} />
    </div>
  )
}

function ReviewCard({ card, onAnswer }: { card: Card; onAnswer: (g: Grade) => void }) {
  const [revealed, setRevealed] = useState(false)
  const [picked, setPicked] = useState<string | null>(null)
  const options = useMemo(
    () => (card.choices ? [card.back, ...card.choices].sort(() => Math.random() - 0.5) : null),
    [card],
  )
  const right = picked === card.back

  return (
    <div className="step review-card">
      <span className="pill">{KIND_LABEL[card.kind]}</span>
      <h2 className="step-title review-front">{card.front}</h2>

      {options ? (
        <div className="options">
          {options.map((o) => {
            let cls = 'option'
            if (picked && o === card.back) cls += ' right'
            if (picked === o && !right) cls += ' wrong'
            return (
              <button key={o} className={cls} disabled={picked !== null} onClick={() => setPicked(o)}>
                {o}
              </button>
            )
          })}
        </div>
      ) : revealed ? (
        <div className="review-back">{card.back}</div>
      ) : (
        <p className="muted small">Say or write your answer first — the effort of recalling is what makes it stick.</p>
      )}

      {(revealed || picked) && card.hook && (
        <p className="hook">
          <strong>Memory hook:</strong> {card.hook}
        </p>
      )}

      <div className="step-footer">
        {options ? (
          picked && (
            <button className="btn" onClick={() => onAnswer(right ? 'good' : 'again')} autoFocus>
              Continue
            </button>
          )
        ) : revealed ? (
          <div className="grades">
            <button className="btn btn-grade g-again" onClick={() => onAnswer('again')}>
              Forgot
            </button>
            <button className="btn btn-grade g-hard" onClick={() => onAnswer('hard')}>
              Hard
            </button>
            <button className="btn btn-grade g-good" onClick={() => onAnswer('good')}>
              Good
            </button>
            <button className="btn btn-grade g-easy" onClick={() => onAnswer('easy')}>
              Easy
            </button>
          </div>
        ) : (
          <button className="btn" onClick={() => setRevealed(true)} autoFocus>
            Show answer
          </button>
        )}
      </div>
    </div>
  )
}
