import { ANCHORS, formatSpan, formatYear, worldPos } from '../../content/anchors'

type Pin = { year: number; label: string; strong?: boolean }

type Props = {
  highlight?: { from: number; to: number; label: string }
  pins?: Pin[]
}

const W = 1000
const AXIS = 78
// A spaced-out subset of anchors that stays legible at phone width.
const SHOWN = new Set([-3200, -2560, -44, 476, 1215, 1492, 1776, 1969])

/** All of recorded history on one bar, with landmark anchors, a highlighted span and optional pins. */
export function WorldTimeline({ highlight, pins = [] }: Props) {
  const x = (y: number) => 10 + worldPos(y) * (W - 20)
  const rows = 196
  const shown = ANCHORS.filter((a) => SHOWN.has(a.year))
  // Keep the highlight's label inside the frame near either end.
  const labelX = highlight ? Math.min(W - 180, Math.max(180, x((highlight.from + highlight.to) / 2))) : 0

  return (
    <svg viewBox={`0 0 ${W} ${rows}`} className="timeline" role="img" aria-label="Timeline of world history">
      <line x1={10} x2={W - 10} y1={AXIS} y2={AXIS} className="tl-axis" />
      {shown.map((a, i) => {
        const anchor = i === 0 ? 'start' : i === shown.length - 1 ? 'end' : 'middle'
        const low = i % 2 === 1
        return (
          <g key={a.year}>
            <line x1={x(a.year)} x2={x(a.year)} y1={AXIS - 6} y2={AXIS + 6} className="tl-tick" />
            <text x={x(a.year)} y={AXIS + (low ? 82 : 32)} className="tl-anchor" textAnchor={anchor}>
              {a.label}
            </text>
            <text x={x(a.year)} y={AXIS + (low ? 104 : 54)} className="tl-anchor-year" textAnchor={anchor}>
              {formatYear(a.year)}
            </text>
          </g>
        )
      })}
      {highlight && (
        <g>
          <rect
            x={x(highlight.from) - 5}
            y={AXIS - 12}
            width={Math.max(10, x(highlight.to) - x(highlight.from) + 10)}
            height={24}
            rx={6}
            className="tl-highlight"
          />
          <text x={labelX} y={AXIS - 44} textAnchor="middle" className="tl-hl-label">
            {highlight.label}
          </text>
          <text x={labelX} y={AXIS - 22} textAnchor="middle" className="tl-hl-year">
            {formatSpan(highlight.from, highlight.to)}
          </text>
        </g>
      )}
      {pins.map((p) => (
        <circle key={`${p.year}-${p.label}`} cx={x(p.year)} cy={AXIS} r={p.strong ? 7 : 5} className="tl-pin">
          <title>
            {formatYear(p.year)} · {p.label}
          </title>
        </circle>
      ))}
    </svg>
  )
}
