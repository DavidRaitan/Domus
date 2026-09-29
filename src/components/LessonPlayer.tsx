import { useEffect, useMemo, useState } from 'react'
import { catalog } from '../content/catalog'
import { isQuestion, type Lesson, type Step, type Track } from '../content/types'
import { type LessonResult } from '../engine/progression'
import { href } from '../router'
import { StepView } from './steps/Steps'
import { Icon } from './Icon'

type Props = {
  track: Track
  lesson: Lesson
  /** Where the learner stopped last time, if they left mid-lesson. */
  resume?: { index: number; correct: number }
  /** Called as the learner moves on, so leaving never loses their place. */
  onPlace: (index: number, correct: number) => void
  onFinish: (firstTryCorrect: number) => LessonResult
}

// Rough seconds per step, used for the "minutes left" estimate.
const SECONDS: Record<Step['type'], number> = {
  orient: 60, story: 30, explain: 35, predict: 25, choice: 30, order: 45, match: 50, estimate: 30,
  timeline: 30, compare: 70, recap: 90, interactive: 60, card: 12,
}

const minutesFor = (steps: Step[]) => Math.max(1, Math.round(steps.reduce((t, s) => t + SECONDS[s.type], 0) / 60))

export function LessonPlayer({ track, lesson, resume, onPlace, onFinish }: Props) {
  // The lesson's memory cards are quizzed at the end — the first, same-day retrieval.
  const steps: Step[] = useMemo(
    () => [...lesson.steps, ...(lesson.cards ?? []).map((card) => ({ type: 'card' as const, card }))],
    [lesson],
  )
  const canResume = !!resume && resume.index > 0 && resume.index < steps.length
  const [started, setStarted] = useState(!lesson.question && !canResume)
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const quizStart = lesson.steps.length
  const [result, setResult] = useState<LessonResult | null>(null)

  const lessonIndex = track.lessons.findIndex((l) => l.id === lesson.id)
  const exit = href({ page: 'track', trackId: track.id })

  const advance = (wasCorrect?: boolean) => {
    const total = correct + (wasCorrect ? 1 : 0)
    setCorrect(total)
    if (index + 1 < steps.length) {
      setIndex(index + 1)
      onPlace(index + 1, total)
      window.scrollTo(0, 0)
    } else {
      // Finish from the click handler (not an effect) so progress is recorded exactly once.
      setResult(onFinish(total))
      window.scrollTo(0, 0)
    }
  }

  // Keyboard: Enter/Space presses the step's main button; 1–9 pick an option.
  useEffect(() => {
    if (!started || result) return
    const onKey = (e: KeyboardEvent) => {
      const t = e.target instanceof HTMLElement ? e.target : null
      if (t?.closest('textarea, select, input') || e.metaKey || e.ctrlKey || e.altKey) return
      const stepEl = document.querySelector('.step')
      if (!stepEl) return
      if (/^[1-9]$/.test(e.key)) {
        const opts = stepEl.querySelectorAll<HTMLButtonElement>('.options .option:not(:disabled)')
        opts[Number(e.key) - 1]?.click()
      } else if (e.key === 'Enter' && !(t instanceof HTMLButtonElement)) {
        const buttons = [...stepEl.querySelectorAll<HTMLButtonElement>('.btn:not(:disabled):not(.btn-ghost)')]
        buttons.at(-1)?.click()
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [started, result])

  if (!started) {
    return (
      <div className="lesson lesson-intro">
        <a className="back" href={exit}>
          <Icon name="back" size={16} /> {track.title}
        </a>
        <p className="eyebrow">
          Lesson {lessonIndex + 1} of {track.lessons.length + (track.upcoming?.length ?? 0)}
        </p>
        <h1>{lesson.title}</h1>
        {lesson.previously && (
          <p className="previously">
            <strong>Previously:</strong> {lesson.previously}
          </p>
        )}
        <div className="question-card">
          <span className="explain-label">Today’s question</span>
          <p>{lesson.question}</p>
        </div>
        <p className="muted small">
          About {minutesFor(steps)} minutes · {steps.length} steps · {steps.filter(isQuestion).length} questions
        </p>
        {canResume ? (
          <div className="resume-card">
            <div>
              <strong>You’re part-way through</strong>
              <span className="muted">
                Step {resume!.index + 1} of {steps.length} · about {minutesFor(steps.slice(resume!.index))} min left
              </span>
              <div className="bar">
                <div className="bar-fill" style={{ width: `${(resume!.index / steps.length) * 100}%` }} />
              </div>
            </div>
            <div className="resume-actions">
              <button
                className="btn btn-ghost"
                onClick={() => {
                  onPlace(0, 0)
                  setStarted(true)
                }}
              >
                Start over
              </button>
              <button
                className="btn"
                autoFocus
                onClick={() => {
                  setIndex(resume!.index)
                  setCorrect(resume!.correct)
                  setStarted(true)
                }}
              >
                Resume <Icon name="forward" size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="step-footer">
            <button className="btn" onClick={() => setStarted(true)} autoFocus>
              Begin
            </button>
          </div>
        )}
      </div>
    )
  }

  if (result) {
    const next = track.lessons[lessonIndex + 1]
    const questions = steps.filter(isQuestion).length
    const continuation = catalog.find((t) => t.series === track.series && t.tier === track.tier + 1)
    return (
      <div className="lesson finish">
        <div className="finish-mark">
          <Icon name={result.trackCompleted ? 'columns' : 'check'} size={30} />
        </div>
        <h1>{result.trackCompleted ? `You finished ${track.title}!` : 'Lesson complete'}</h1>
        <p className="muted">
          {correct} of {questions} right on the first try.
        </p>
        <div className="rewards">
          <span className="reward">
            <Icon name="star" size={16} /> +{result.xpEarned} XP
          </span>
          {result.trackCompleted && <span className="reward">
              <Icon name="key" size={16} /> +1 key
            </span>}
        </div>
        {result.xpEarned === 0 && <p className="muted small">Replays keep your streak alive but don’t earn XP.</p>}
        {(lesson.cards?.length ?? 0) > 0 && (
          <p className="muted small">
            {lesson.cards!.length} memory cards added — they’ll come back in your daily review tomorrow.
          </p>
        )}
        {lesson.teaser && (next || track.upcoming?.length) && (
          <div className="teaser">
            <span className="explain-label">Next time</span>
            <p>{lesson.teaser}</p>
          </div>
        )}
        {result.trackCompleted && (
          <p>
            Spend your new key on another Tier {track.tier} track
            {continuation ? `, or continue the story in Tier ${continuation.tier}: ${continuation.title}` : ''}.
          </p>
        )}
        <div className="finish-actions">
          {result.trackCompleted ? (
            <a className="btn" href={href({ page: 'home' })}>
              Choose your next track
            </a>
          ) : !next && track.upcoming?.length ? (
            <span className="muted small">The next lesson, “{track.upcoming[0].title}”, is being written.</span>
          ) : next ? (
            <a className="btn" href={href({ page: 'lesson', trackId: track.id, lessonId: next.id })}>
              Next: {next.title}
            </a>
          ) : null}
          <a className="btn btn-ghost" href={exit}>
            Back to track
          </a>
        </div>
      </div>
    )
  }

  const step = steps[index]
  return (
    <div className="lesson">
      <div className="lesson-top">
        <a className="close" href={exit} aria-label="Exit lesson — your place is saved" title="Exit — your place is saved">
          <Icon name="close" size={20} />
        </a>
        <div className="lesson-progress">
          <div className="bar bar-lesson" aria-hidden>
            <div className="bar-fill" style={{ width: `${(index / steps.length) * 100}%` }} />
            {quizStart < steps.length && <span className="bar-mark" style={{ left: `${(quizStart / steps.length) * 100}%` }} />}
          </div>
          <div className="lesson-meta">
            <span>
              {index < quizStart ? 'The story' : 'Lock it in'} · Step {index + 1} of {steps.length}
            </span>
            <span>About {minutesFor(steps.slice(index))} min left</span>
          </div>
        </div>
      </div>
      <p className="eyebrow">{lesson.title}</p>
      <div className="step" key={index}>
        <StepView step={step} onContinue={advance} />
      </div>
    </div>
  )
}
