import { LENS_LABELS, type Lens } from '../content/types'

export function Lenses({ lenses }: { lenses?: Lens[] }) {
  if (!lenses?.length) return null
  return (
    <div className="lenses">
      {lenses.map((l) => (
        <span key={l} className={`lens lens-${l}`}>
          {LENS_LABELS[l]}
        </span>
      ))}
    </div>
  )
}
