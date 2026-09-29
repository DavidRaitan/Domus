import { useMemo, useState } from 'react'
import { catalog } from '../content/catalog'
import { isQuestion, type Lesson, type Step, type Track } from '../content/types'
import { type LessonResult } from '../engine/progression'
import { href } from '../router'
import { StepView } from './steps/Steps'
import { Icon } from './Icon'

type Props = {
  track: Track
  lesson: Lesson
  onFinish: (firstTryCorrect: number) => LessonResult
}

export function LessonPlayer({ track, lesson, onFinish }: Props) {
  // The lesson's memory cards are quizzed at the end — the first, same-day retrieval.
  const steps: Step[] = useMemo(
    () => [...lesson.steps, ...(lesson.cards ?? []).map((card) => ({ type: 'card' as const, card }))],
    [lesson],
  )
  const [started, setStarted] = useState(!lesson.question)
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [result, setResult] = useState<LessonResult | null>(null)

  const lessonIndex = track.lessons.findIndex((l) => l.id === lesson.id)
  const exit = href({ page: 'track', trackId: track.id })

  const advance = (wasCorrect?: boolean) => {
    const total = correct + (wasCorrect ? 1 : 0)
    setCorrect(total)
    if (index + 1 < steps.length) {
      setIndex(index + 1)
      window.scrollTo(0, 0)
    } else {
      // Finish from the click handler (not an effect) so progress is recorded exactly once.
      setResult(onFinish(total))
      window.scrollTo(0, 0)
    }
  }

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
          About {Math.max(5, Math.round(steps.length * 0.7))} minutes · {steps.filter(isQuestion).length} questions
        </p>
        <div className="step-footer">
          <button className="btn" onClick={() => setStarted(true)} autoFocus>
            Begin
          </button>
        </div>
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
        <a className="close" href={exit} aria-label="Exit lesson">
          <Icon name="close" size={20} />
        </a>
        <div className="bar">
          <div className="bar-fill" style={{ width: `${(index / steps.length) * 100}%` }} />
        </div>
      </div>
      <p className="eyebrow">{lesson.title}</p>
      <div className="step" key={index}>
        <StepView step={step} onContinue={advance} />
      </div>
    </div>
  )
}
