/**
 * Landmark dates most people already half-know. New dates are always shown next to
 * these, so each one attaches to an existing mental timeline instead of floating alone.
 */
export const ANCHORS: { year: number; label: string }[] = [
  { year: -3200, label: 'Writing invented' },
  { year: -2560, label: 'Great Pyramid' },
  { year: -490, label: 'Marathon' },
  { year: -44, label: 'Caesar killed' },
  { year: 476, label: 'Fall of Rome' },
  { year: 622, label: 'Islam begins' },
  { year: 1215, label: 'Magna Carta' },
  { year: 1492, label: 'Columbus' },
  { year: 1776, label: 'US independence' },
  { year: 1914, label: 'World War I' },
  { year: 1969, label: 'Moon landing' },
]

export function formatYear(y: number): string {
  const r = Math.round(y)
  if (r < 0) return `${(-r).toLocaleString('en-US')} BCE`
  if (r < 1000) return `${r} CE`
  return String(r)
}

export function formatSpan(from: number, to: number): string {
  if (from === to) return formatYear(from)
  const [a, b] = [Math.round(from), Math.round(to)]
  if (b < 0) return `${(-a).toLocaleString('en-US')}–${(-b).toLocaleString('en-US')} BCE`
  if (a < 0) return `${formatYear(a)}–${formatYear(b)}`
  return b < 1000 ? `${a}–${b} CE` : `${a}–${b}`
}

// The world timeline is piecewise-linear: recent centuries get more room, because
// far more of what we study happened in them. Breakpoints: [year, position 0..1].
const BREAKS: [number, number][] = [
  [-3500, 0],
  [0, 0.3],
  [1000, 0.52],
  [1500, 0.67],
  [2030, 1],
]

export function worldPos(year: number): number {
  const y = Math.max(BREAKS[0][0], Math.min(BREAKS[BREAKS.length - 1][0], year))
  for (let i = 1; i < BREAKS.length; i++) {
    const [y0, p0] = BREAKS[i - 1]
    const [y1, p1] = BREAKS[i]
    if (y <= y1) return p0 + ((y - y0) / (y1 - y0)) * (p1 - p0)
  }
  return 1
}
