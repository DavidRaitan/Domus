import { useMemo, useState } from 'react'
import { formatYear } from '../../content/anchors'
import type {
  CardStep,
  CompareStep,
  ExplainStep,
  OrientStep,
  PredictStep,
  RecapStep,
  TimelineStep,
} from '../../content/types'
import { Lenses } from '../Lenses'
import { GeoMap } from '../widgets/GeoMap'
import { WorldTimeline } from '../widgets/WorldTimeline'
import { QuestionShell } from './QuestionShell'
import type { OnContinue } from './Steps'
import { shuffle } from '../../shuffle'

function ContinueFooter({ onContinue, label = 'Continue' }: { onContinue: OnContinue; label?: string }) {
  return (
    <div className="step-footer">
      <button className="btn" onClick={() => onContinue()}>
        {label}
      </button>
    </div>
  )
}

export function Orient({ step, onContinue }: { step: OrientStep; onContinue: OnContinue }) {
  const [main] = step.places
  const bounds = step.mapBounds ?? { west: main.lon - 30, east: main.lon + 30, south: main.lat - 16, north: main.lat + 16 }
  return (
    <>
      <p className="orient-kicker">Where are we?</p>
      <h2 className="step-title">{step.title}</h2>
      <Lenses lenses={step.lenses} />

      <section className="orient-block">
        <h3 className="orient-label">When</h3>
        <WorldTimeline highlight={{ from: step.from, to: step.to, label: step.title }} />
      </section>

      <section className="orient-block">
        <h3 className="orient-label">Where</h3>
        <GeoMap bounds={bounds} height={440} label={`Map showing ${step.places.map((p) => p.name).join(', ')}`}>
          {(project) =>
            step.places.map((p, i) => {
              const [x, y] = project(p.lon, p.lat)
              const left = p.label === 'left'
              return (
                <g key={p.name}>
                  {i === 0 && <circle cx={x} cy={y} r={22} className="map-pulse" />}
                  <circle cx={x} cy={y} r={i === 0 ? 8 : 6} className="map-dot map-dot-main" />
                  <text
                    x={x + (left ? -12 : 12)}
                    y={y + 6}
                    textAnchor={left ? 'end' : 'start'}
                    className={`map-label ${i === 0 ? 'map-label-main' : 'map-label-key'}`}
                  >
                    {p.name}
                  </text>
                </g>
              )
            })
          }
        </GeoMap>
        {step.placesNote && <p className="muted small">{step.placesNote}</p>}
      </section>

      <section className="orient-block">
        <h3 className="orient-label">Why it matters</h3>
        <p className="orient-why">{step.why}</p>
      </section>

      <section className="orient-block">
        <h3 className="orient-label">The world around {formatYear(step.from)}</h3>
        <ul className="context-list">
          {step.context.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>
      <ContinueFooter onContinue={onContinue} />
    </>
  )
}

export function Explain({ step, onContinue }: { step: ExplainStep; onContinue: OnContinue }) {
  return (
    <>
      <Lenses lenses={step.lenses} />
      <div className="explain-card">
        <p className="explain-kicker">New idea</p>
        <h2 className="explain-term">{step.term}</h2>
        <div className="explain-row">
          <span className="explain-label">In plain words</span>
          <p>{step.plain}</p>
        </div>
        <div className="explain-row">
          <span className="explain-label">Think of it like</span>
          <p>{step.analogy}</p>
        </div>
        {step.why && (
          <div className="explain-row">
            <span className="explain-label">Why it matters here</span>
            <p>{step.why}</p>
          </div>
        )}
      </div>
      <ContinueFooter onContinue={onContinue} label="Got it" />
    </>
  )
}

export function Predict({ step, onContinue }: { step: PredictStep; onContinue: OnContinue }) {
  const [picked, setPicked] = useState<number | null>(null)
  return (
    <>
      <p className="orient-kicker">Make a guess</p>
      <Lenses lenses={step.lenses} />
      <h2 className="step-title">{step.prompt}</h2>
      <p className="muted small">No wrong answers here — guessing first makes the answer stick.</p>
      <div className="options">
        {step.options.map((o, i) => {
          let cls = 'option'
          if (picked === i) cls += ' selected'
          if (picked !== null && i === step.answer) cls += ' right'
          return (
            <button key={i} className={cls} disabled={picked !== null} onClick={() => setPicked(i)}>
              {o}
            </button>
          )
        })}
      </div>
      {picked !== null && (
        <div className="feedback feedback-info">
          <strong>{picked === step.answer ? 'Good instinct.' : 'Here’s what happened.'}</strong>
          <p>{step.reveal}</p>
          <button className="btn" onClick={() => onContinue()} autoFocus>
            Continue
          </button>
        </div>
      )}
    </>
  )
}

export function Timeline({ step, onContinue }: { step: TimelineStep; onContinue: OnContinue }) {
  const [value, setValue] = useState(Math.round((step.min + step.max) / 2))
  const [touched, setTouched] = useState(false)
  const pct = (y: number) => ((y - step.min) / (step.max - step.min)) * 100

  return (
    <>
      <p className="orient-kicker">Place it on the timeline</p>
      <Lenses lenses={step.lenses} />
      <h2 className="step-title">{step.prompt}</h2>
      <QuestionShell
        canCheck={touched}
        check={() => Math.abs(value - step.year) <= step.tolerance}
        explain={step.explain}
        onContinue={onContinue}
      >
        {(checked) => (
          <div className="tl-place">
            <div className="tl-event">
              {step.event}: <strong>{formatYear(value)}</strong>
            </div>
            <div className="tl-track">
              {step.anchors.map((a) => (
                <div key={a.year} className="tl-track-anchor" style={{ left: `${pct(a.year)}%` }}>
                  <span className="tl-track-tick" />
                  <span className="tl-track-label">
                    {a.label}
                    <br />
                    {formatYear(a.year)}
                  </span>
                </div>
              ))}
              <div className="tl-track-guess" style={{ left: `${pct(value)}%` }} />
              {checked && <div className="tl-track-answer" style={{ left: `${pct(step.year)}%` }} />}
            </div>
            <input
              type="range"
              min={step.min}
              max={step.max}
              step={1}
              value={value}
              disabled={checked}
              onChange={(e) => {
                setValue(Number(e.target.value))
                setTouched(true)
              }}
              aria-label={`Year of ${step.event}`}
            />
            <div className="range-labels">
              <span>{formatYear(step.min)}</span>
              <span>{formatYear(step.max)}</span>
            </div>
            {checked && (
              <p className="muted">
                Answer: <strong>{formatYear(step.year)}</strong> (within {step.tolerance} years counts).
              </p>
            )}
          </div>
        )}
      </QuestionShell>
    </>
  )
}

export function Compare({ step, onContinue }: { step: CompareStep; onContinue: OnContinue }) {
  const key = (r: number, c: number) => `${r}:${c}`
  const isBlank = (r: number, c: number) => step.blanks.some(([br, bc]) => br === r && bc === c)
  // Each blank has its own options (true cell + its own wrong answers), shuffled once per visit,
  // so filling one blank never narrows the choices for another.
  const options = useMemo(() => {
    const out: Record<string, string[]> = {}
    for (const [r, c, wrong] of step.blanks)
      out[key(r, c)] = shuffle([step.rows[r].cells[c], ...wrong])
    return out
  }, [step])
  const [filled, setFilled] = useState<Record<string, string>>({})

  return (
    <>
      <p className="orient-kicker">Compare</p>
      <Lenses lenses={step.lenses} />
      <h2 className="step-title">{step.prompt}</h2>
      <QuestionShell
        canCheck={step.blanks.every(([r, c]) => filled[key(r, c)])}
        check={() => step.blanks.every(([r, c]) => filled[key(r, c)] === step.rows[r].cells[c])}
        explain={step.explain}
        onContinue={onContinue}
      >
        {(checked) => (
          <div className="compare-wrap">
            <table className="compare">
              <thead>
                <tr>
                  <th />
                  {step.columns.map((c) => (
                    <th key={c}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {step.rows.map((row, r) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {row.cells.map((cell, c) => {
                      if (!isBlank(r, c)) return <td key={c}>{cell}</td>
                      const v = filled[key(r, c)] ?? ''
                      const cls = checked ? (v === cell ? 'right' : 'wrong') : ''
                      return (
                        <td key={c} className={`blank ${cls}`}>
                          {checked ? (
                            <>
                              {v}
                              {v !== cell && <span className="slot-fix">{cell}</span>}
                            </>
                          ) : (
                            <select
                              value={v}
                              onChange={(e) => setFilled({ ...filled, [key(r, c)]: e.target.value })}
                              aria-label={`${row.label} — ${step.columns[c]}`}
                            >
                              <option value="">Choose…</option>
                              {options[key(r, c)].map((p) => (
                                <option key={p} value={p}>
                                  {p}
                                </option>
                              ))}
                            </select>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </QuestionShell>
    </>
  )
}

export function Recap({ step, onContinue }: { step: RecapStep; onContinue: OnContinue }) {
  const [text, setText] = useState('')
  const [shown, setShown] = useState(false)
  const [ticked, setTicked] = useState<boolean[]>(() => step.keyPoints.map(() => false))

  return (
    <>
      <p className="orient-kicker">Explain it back</p>
      <h2 className="step-title">{step.prompt}</h2>
      <p className="muted small">
        Write 2–3 sentences as if explaining to a friend. Putting it in your own words is one of the strongest ways to
        remember it.
      </p>
      <textarea
        className="recap-input"
        rows={5}
        value={text}
        disabled={shown}
        onChange={(e) => setText(e.target.value)}
        placeholder="In my own words…"
      />
      {shown ? (
        <div className="feedback feedback-info">
          <strong>Did you mention…</strong>
          <ul className="checklist">
            {step.keyPoints.map((k, i) => (
              <li key={i}>
                <label>
                  <input
                    type="checkbox"
                    checked={ticked[i]}
                    onChange={() => setTicked(ticked.map((t, j) => (j === i ? !t : t)))}
                  />
                  <span>{k}</span>
                </label>
              </li>
            ))}
          </ul>
          <p className="model">
            <strong>One way to say it:</strong> {step.model}
          </p>
          <button className="btn" onClick={() => onContinue()}>
            Continue
          </button>
        </div>
      ) : (
        <div className="step-footer">
          <button className="btn btn-ghost" onClick={() => setShown(true)}>
            {text.trim().length > 20 ? 'Compare with key points' : 'Skip to key points'}
          </button>
        </div>
      )}
    </>
  )
}

/** End-of-lesson recall of a memory card: pick from options, or recall and self-check. */
export function CardQuiz({ step, onContinue }: { step: CardStep; onContinue: OnContinue }) {
  const { card } = step
  const options = useMemo(
    () => (card.choices ? shuffle([card.back, ...card.choices]) : null),
    [card],
  )
  const [picked, setPicked] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)

  return (
    <>
      <p className="orient-kicker">Lock it in</p>
      <h2 className="step-title">{card.front}</h2>
      {options ? (
        <>
          <div className="options">
            {options.map((o) => {
              let cls = 'option'
              if (picked && o === card.back) cls += ' right'
              if (picked === o && o !== card.back) cls += ' wrong'
              return (
                <button key={o} className={cls} disabled={picked !== null} onClick={() => setPicked(o)}>
                  {o}
                </button>
              )
            })}
          </div>
          {picked && (
            <div className={`feedback ${picked === card.back ? 'feedback-ok' : 'feedback-bad'}`}>
              <strong>{picked === card.back ? 'Correct!' : `Answer: ${card.back}`}</strong>
              {card.hook && <p className="hook">{card.hook}</p>}
              <button className="btn" onClick={() => onContinue(picked === card.back)} autoFocus>
                Continue
              </button>
            </div>
          )}
        </>
      ) : revealed ? (
        <div className="feedback feedback-info">
          <p className="review-back">{card.back}</p>
          {card.hook && <p className="hook">{card.hook}</p>}
          <div className="grades">
            <button className="btn btn-grade g-again" onClick={() => onContinue(false)}>
              I didn’t know it
            </button>
            <button className="btn btn-grade g-good" onClick={() => onContinue(true)}>
              I knew it
            </button>
          </div>
        </div>
      ) : (
        <div className="step-footer">
          <span className="muted small">Answer in your head first.</span>
          <button className="btn" onClick={() => setRevealed(true)} autoFocus>
            Show answer
          </button>
        </div>
      )}
    </>
  )
}
