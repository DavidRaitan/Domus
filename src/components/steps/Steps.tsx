import { useMemo, useState } from 'react'
import type {
  ChoiceStep,
  EstimateStep,
  InteractiveStep,
  MatchStep,
  OrderStep,
  Step,
  StoryStep,
} from '../../content/types'
import { Lenses } from '../Lenses'
import { LaborMarket } from '../widgets/LaborMarket'
import { PlagueMap } from '../widgets/PlagueMap'
import { QuestionShell } from './QuestionShell'
import { CardQuiz, Compare, Explain, Orient, Predict, Recap, Timeline } from './RichSteps'

/** `correct` is set for questions, undefined for story and interactive steps. */
export type OnContinue = (correct?: boolean) => void

export function StepView({ step, onContinue }: { step: Step; onContinue: OnContinue }) {
  switch (step.type) {
    case 'story':
      return <Story step={step} onContinue={onContinue} />
    case 'choice':
      return <Choice step={step} onContinue={onContinue} />
    case 'order':
      return <Order step={step} onContinue={onContinue} />
    case 'match':
      return <Match step={step} onContinue={onContinue} />
    case 'estimate':
      return <Estimate step={step} onContinue={onContinue} />
    case 'interactive':
      return <Interactive step={step} onContinue={onContinue} />
    case 'orient':
      return <Orient step={step} onContinue={onContinue} />
    case 'explain':
      return <Explain step={step} onContinue={onContinue} />
    case 'predict':
      return <Predict step={step} onContinue={onContinue} />
    case 'timeline':
      return <Timeline step={step} onContinue={onContinue} />
    case 'compare':
      return <Compare step={step} onContinue={onContinue} />
    case 'recap':
      return <Recap step={step} onContinue={onContinue} />
    case 'card':
      return <CardQuiz step={step} onContinue={onContinue} />
  }
}

function Story({ step, onContinue }: { step: StoryStep; onContinue: OnContinue }) {
  return (
    <>
      <Lenses lenses={step.lenses} />
      {step.title && <h2 className="step-title">{step.title}</h2>}
      <div className="prose">
        {step.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="step-footer">
        <button className="btn" onClick={() => onContinue()}>
          Continue
        </button>
      </div>
    </>
  )
}

function Choice({ step, onContinue }: { step: ChoiceStep; onContinue: OnContinue }) {
  const [picked, setPicked] = useState<number | null>(null)
  return (
    <>
      <Lenses lenses={step.lenses} />
      <h2 className="step-title">{step.prompt}</h2>
      <QuestionShell
        canCheck={picked !== null}
        check={() => picked === step.answer}
        explain={step.explain}
        onContinue={onContinue}
      >
        {(checked) => (
          <div className="options">
            {step.options.map((opt, i) => {
              let cls = 'option'
              if (picked === i) cls += ' selected'
              if (checked && i === step.answer) cls += ' right'
              if (checked && picked === i && i !== step.answer) cls += ' wrong'
              return (
                <button key={i} className={cls} disabled={checked} onClick={() => setPicked(i)}>
                  {opt}
                </button>
              )
            })}
          </div>
        )}
      </QuestionShell>
    </>
  )
}

function shuffled<T>(items: T[]): T[] {
  if (items.length < 2) return items
  let out: T[]
  do {
    out = [...items].sort(() => Math.random() - 0.5)
  } while (out.every((x, i) => x === items[i]))
  return out
}

// Items carry their date in trailing brackets, e.g. "Galleys arrive at Messina (1347)".
// Hide it until the answer is checked, or the dates would give the order away.
const withoutDate = (item: string) => item.replace(/\s*\([^)]*\d[^)]*\)$/, '')

function Order({ step, onContinue }: { step: OrderStep; onContinue: OnContinue }) {
  const pool = useMemo(() => shuffled(step.items), [step])
  const [chosen, setChosen] = useState<string[]>([])
  const remaining = pool.filter((x) => !chosen.includes(x))

  return (
    <>
      <Lenses lenses={step.lenses} />
      <h2 className="step-title">{step.prompt}</h2>
      <p className="muted small">Tap the events from earliest to latest. Tap a placed event to remove it.</p>
      <QuestionShell
        canCheck={remaining.length === 0}
        check={() => chosen.every((x, i) => x === step.items[i])}
        explain={step.explain}
        onContinue={onContinue}
      >
        {(checked) => (
          <>
            <ol className="order-slots">
              {step.items.map((correct, i) => {
                const item = chosen[i]
                let cls = 'slot'
                if (item) cls += ' filled'
                if (checked) cls += item === correct ? ' right' : ' wrong'
                return (
                  <li key={i} className={cls}>
                    <span className="slot-num">{i + 1}</span>
                    {item ? (
                      <button
                        className="slot-item"
                        disabled={checked}
                        onClick={() => setChosen(chosen.filter((x) => x !== item))}
                      >
                        {checked ? item : withoutDate(item)}
                      </button>
                    ) : (
                      <span className="muted">—</span>
                    )}
                    {checked && item !== correct && <span className="slot-fix">{correct}</span>}
                  </li>
                )
              })}
            </ol>
            {!checked && remaining.length > 0 && (
              <div className="options">
                {remaining.map((x) => (
                  <button key={x} className="option" onClick={() => setChosen([...chosen, x])}>
                    {withoutDate(x)}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </QuestionShell>
    </>
  )
}

function Match({ step, onContinue }: { step: MatchStep; onContinue: OnContinue }) {
  const items = useMemo(() => shuffled(step.items), [step])
  const [answers, setAnswers] = useState<Record<string, string>>({})

  return (
    <>
      <Lenses lenses={step.lenses} />
      <h2 className="step-title">{step.prompt}</h2>
      <QuestionShell
        canCheck={items.every((it) => answers[it.text])}
        check={() => items.every((it) => answers[it.text] === it.category)}
        explain={step.explain}
        onContinue={onContinue}
      >
        {(checked) => (
          <div className="match-list">
            {items.map((it) => (
              <div
                key={it.text}
                className={`match-row ${checked ? (answers[it.text] === it.category ? 'right' : 'wrong') : ''}`}
              >
                <p>{it.text}</p>
                <div className="segmented">
                  {step.categories.map((c) => (
                    <button
                      key={c}
                      disabled={checked}
                      className={`${answers[it.text] === c ? 'on' : ''} ${checked && c === it.category ? 'answer' : ''}`}
                      onClick={() => setAnswers({ ...answers, [it.text]: c })}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </QuestionShell>
    </>
  )
}

function Estimate({ step, onContinue }: { step: EstimateStep; onContinue: OnContinue }) {
  const [value, setValue] = useState(Math.round((step.min + step.max) / 2 / step.step) * step.step)
  const [touched, setTouched] = useState(false)

  return (
    <>
      <Lenses lenses={step.lenses} />
      <h2 className="step-title">{step.prompt}</h2>
      <QuestionShell
        canCheck={touched}
        check={() => Math.abs(value - step.answer) <= step.tolerance}
        explain={step.explain}
        onContinue={onContinue}
      >
        {(checked) => (
          <div className="estimate">
            <div className="estimate-value">
              {value}
              {step.unit}
            </div>
            <input
              type="range"
              min={step.min}
              max={step.max}
              step={step.step}
              value={value}
              disabled={checked}
              onChange={(e) => {
                setValue(Number(e.target.value))
                setTouched(true)
              }}
              aria-label="Your estimate"
            />
            {checked && (
              <p className="muted">
                Best estimate: about {step.answer}
                {step.unit} (anything within ±{step.tolerance}
                {step.unit} counts).
              </p>
            )}
          </div>
        )}
      </QuestionShell>
    </>
  )
}

function Interactive({ step, onContinue }: { step: InteractiveStep; onContinue: OnContinue }) {
  const [explored, setExplored] = useState(false)
  const onInteract = () => setExplored(true)
  return (
    <>
      <Lenses lenses={step.lenses} />
      <h2 className="step-title">{step.title}</h2>
      <p className="prose">{step.prompt}</p>
      {step.widget === 'plague-map' && <PlagueMap onInteract={onInteract} />}
      {step.widget === 'labor-market' && <LaborMarket onInteract={onInteract} />}
      {explored ? (
        <div className="feedback feedback-info">
          <strong>What to notice</strong>
          <p>{step.takeaway}</p>
          <button className="btn" onClick={() => onContinue()}>
            Continue
          </button>
        </div>
      ) : (
        <div className="step-footer">
          <span className="muted small">Try the slider to continue.</span>
        </div>
      )}
    </>
  )
}
