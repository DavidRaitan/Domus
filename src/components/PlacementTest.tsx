import { useMemo, useState } from 'react'
import { placementTests } from '../content/catalog'
import { passedPlacement, PLACEMENT_PASS_RATIO, type Progress } from '../engine/progression'
import { href } from '../router'
import { Icon } from './Icon'
import { displayOrder } from './steps/Steps'

type Props = { tier: number; progress: Progress; onSubmit: (correct: number, total: number) => void }

export function PlacementTest({ tier, progress, onSubmit }: Props) {
  const questions = placementTests[tier] ?? []
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null))
  const [score, setScore] = useState<number | null>(null)
  const orders = useMemo(() => questions.map((q) => displayOrder(q.options)), [questions])
  const alreadyCertified = tier <= progress.certifiedTier

  if (questions.length === 0) {
    return (
      <div className="lesson">
        <p>There’s no placement test for this tier.</p>
        <a className="btn" href={href({ page: 'home' })}>
          Back
        </a>
      </div>
    )
  }

  if (score !== null) {
    const passed = passedPlacement(score, questions.length)
    return (
      <div className="lesson finish">
        <div className="finish-mark">
          <Icon name={passed ? 'cap' : 'book'} size={30} />
        </div>
        <h1>{passed ? `Tier ${tier} unlocked` : 'Not yet'}</h1>
        <p>
          You got {score} of {questions.length}.{' '}
          {passed
            ? `You can now open any Tier ${tier} track with a key.`
            : `You need ${Math.ceil(PLACEMENT_PASS_RATIO * questions.length)} to pass. Work through the earlier tiers, or try again later.`}
        </p>
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
      <a className="back" href={href({ page: 'home' })}>
        <Icon name="back" size={16} /> Back
      </a>
      <h1>Tier {tier} placement test</h1>
      <p className="muted">
        {questions.length} questions. Score {Math.round(PLACEMENT_PASS_RATIO * 100)}% or more to skip straight to Tier{' '}
        {tier}. No hints, and answers are revealed only as a score.
        {alreadyCertified && ' You’ve already passed this tier.'}
      </p>
      <ol className="test-list">
        {questions.map((q, qi) => (
          <li key={qi} className="test-q">
            <p className="test-prompt">{q.prompt}</p>
            <div className="options">
              {orders[qi].map((oi) => (
                <button
                  key={oi}
                  className={`option ${answers[qi] === oi ? 'selected' : ''}`}
                  onClick={() => setAnswers((prev) => prev.map((a, i) => (i === qi ? oi : a)))}
                >
                  {q.options[oi]}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ol>
      <div className="step-footer">
        <button
          className="btn"
          disabled={answers.some((a) => a === null)}
          onClick={() => {
            const correct = questions.filter((q, i) => answers[i] === q.answer).length
            setScore(correct)
            onSubmit(correct, questions.length)
            window.scrollTo(0, 0)
          }}
        >
          Submit
        </button>
      </div>
    </div>
  )
}
