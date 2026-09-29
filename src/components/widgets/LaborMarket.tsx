import { useState } from 'react'

// A deliberately simple model: harvest = land^½ × labour^½, with land fixed.
// Then harvest scales with √workers, and the value of one more worker's labour
// (the wage a competitive employer can pay) scales with 1/√workers.
export function LaborMarket({ onInteract }: { onInteract: () => void }) {
  const [loss, setLoss] = useState(0)
  const workers = 1 - loss / 100
  const bars = [
    { label: 'Workers alive', value: workers * 100, cls: 'bar-workers' },
    { label: 'Total harvest', value: Math.sqrt(workers) * 100, cls: 'bar-harvest' },
    { label: 'Value of each worker’s labour (wage)', value: 100 / Math.sqrt(workers), cls: 'bar-wage' },
  ]
  const max = 160

  return (
    <figure className="widget">
      <div className="widget-head">
        <span className="widget-year">{loss}% died</span>
        <span className="muted small">Before the plague = 100</span>
      </div>
      <div className="hbars">
        {bars.map((b) => (
          <div key={b.label} className="hbar">
            <div className="hbar-label">
              <span>{b.label}</span>
              <strong>{Math.round(b.value)}</strong>
            </div>
            <div className="hbar-track">
              <div className={`hbar-fill ${b.cls}`} style={{ width: `${Math.min(100, (b.value / max) * 100)}%` }} />
              <div className="hbar-baseline" style={{ left: `${(100 / max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <input
        type="range"
        min={0}
        max={60}
        step={5}
        value={loss}
        onChange={(e) => {
          setLoss(Number(e.target.value))
          onInteract()
        }}
        aria-label="Share of workers who died"
      />
      <div className="range-labels">
        <span>0%</span>
        <span>60%</span>
      </div>
      <figcaption className="muted small">
        A simplified model with fixed land. Real wages also depended on laws, bargaining and prices.
      </figcaption>
    </figure>
  )
}
