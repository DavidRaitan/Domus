import { useState, type ReactNode } from 'react'

type Props = {
  canCheck: boolean
  /** Returns whether the answer is right. Called once — the first attempt is what counts. */
  check: () => boolean
  explain: string
  onContinue: (correct: boolean) => void
  children: (checked: boolean) => ReactNode
}

// Shared footer for every question: Check → feedback + explanation → Continue.
export function QuestionShell({ canCheck, check, explain, onContinue, children }: Props) {
  const [result, setResult] = useState<boolean | null>(null)
  const checked = result !== null

  return (
    <>
      {children(checked)}
      {checked ? (
        <div className={`feedback ${result ? 'feedback-ok' : 'feedback-bad'}`}>
          <strong>{result ? 'Correct!' : 'Not quite.'}</strong>
          <p>{explain}</p>
          <button className="btn" onClick={() => onContinue(result)} autoFocus>
            Continue
          </button>
        </div>
      ) : (
        <div className="step-footer">
          <button className="btn" disabled={!canCheck} onClick={() => setResult(check())}>
            Check
          </button>
        </div>
      )}
    </>
  )
}
