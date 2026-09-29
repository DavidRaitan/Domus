import { useState } from 'react'
import { GeoMap } from './GeoMap'

// Approximate arrival dates (year + fraction of year) from standard histories of the Black Death.
type City = {
  name: string
  lon: number
  lat: number
  t: number
  from?: string
  label?: 'left' | 'right' | 'below' | 'above'
}

const CITIES: City[] = [
  { name: 'Issyk-Kul', lon: 76.5, lat: 42.5, t: 1338.5, label: 'left' },
  { name: 'Caffa', lon: 35.4, lat: 45.0, t: 1346.6, from: 'Issyk-Kul', label: 'above' },
  { name: 'Constantinople', lon: 29.0, lat: 41.0, t: 1347.4, from: 'Caffa', label: 'below' },
  { name: 'Alexandria', lon: 29.9, lat: 31.2, t: 1347.7, from: 'Constantinople', label: 'left' },
  { name: 'Messina', lon: 15.6, lat: 38.2, t: 1347.8, from: 'Constantinople', label: 'below' },
  { name: 'Marseille', lon: 5.4, lat: 43.3, t: 1347.9, from: 'Messina', label: 'left' },
  { name: 'Venice', lon: 12.3, lat: 45.4, t: 1348.0, from: 'Messina', label: 'above' },
  { name: 'Cairo', lon: 31.2, lat: 30.0, t: 1348.1, from: 'Alexandria' },
  { name: 'Tunis', lon: 10.2, lat: 36.8, t: 1348.2, from: 'Messina', label: 'below' },
  { name: 'Florence', lon: 11.2, lat: 43.8, t: 1348.3, from: 'Venice' },
  { name: 'Bordeaux', lon: -0.6, lat: 44.8, t: 1348.4, from: 'Marseille', label: 'left' },
  { name: 'Damascus', lon: 36.3, lat: 33.5, t: 1348.4, from: 'Cairo' },
  { name: 'Weymouth', lon: -2.5, lat: 50.6, t: 1348.45, from: 'Bordeaux', label: 'left' },
  { name: 'Paris', lon: 2.35, lat: 48.9, t: 1348.5, from: 'Bordeaux' },
  { name: 'London', lon: -0.1, lat: 51.5, t: 1348.8, from: 'Weymouth', label: 'above' },
  { name: 'Bergen', lon: 5.3, lat: 60.4, t: 1349.5, from: 'London' },
  { name: 'Stockholm', lon: 18.1, lat: 59.3, t: 1350.0, from: 'Bergen' },
  { name: 'Novgorod', lon: 31.3, lat: 58.5, t: 1352.5, from: 'Stockholm' },
  { name: 'Moscow', lon: 37.6, lat: 55.75, t: 1353.3, from: 'Novgorod', label: 'below' },
]

const SEAS = [
  { name: 'Mediterranean Sea', lon: 18, lat: 34.2 },
  { name: 'Black Sea', lon: 34, lat: 43.3 },
  { name: 'North Sea', lon: 3, lat: 56 },
  { name: 'Caspian', lon: 50.5, lat: 42 },
  { name: 'CENTRAL ASIA', lon: 66, lat: 47 },
]

const START = 1338
const END = 1354
const BOUNDS = { west: -11, south: 27.5, east: 80, north: 62.5 }

const byName = Object.fromEntries(CITIES.map((c) => [c.name, c]))
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function formatTime(t: number) {
  const year = Math.floor(t)
  return `${MONTHS[Math.min(11, Math.floor((t - year) * 12))]} ${year}`
}

export function PlagueMap({ onInteract }: { onInteract: () => void }) {
  const [t, setT] = useState(1346)
  const reached = CITIES.filter((c) => c.t <= t)

  return (
    <figure className="widget">
      <div className="widget-head">
        <span className="widget-year">{formatTime(t)}</span>
        <span className="muted small">{reached.length} of {CITIES.length} places reached</span>
      </div>
      <GeoMap bounds={BOUNDS} label="Map of the spread of the Black Death, 1338–1353">
        {(project) => (
          <>
            {SEAS.map((s) => {
              const [sx, sy] = project(s.lon, s.lat)
              return (
                <text key={s.name} x={sx} y={sy} className="map-sea">
                  {s.name}
                </text>
              )
            })}
            {CITIES.filter((c) => c.from && c.t <= t).map((c) => {
              const f = byName[c.from!]
              const [x1, y1] = project(f.lon, f.lat)
              const [x2, y2] = project(c.lon, c.lat)
              return <line key={c.name} x1={x1} y1={y1} x2={x2} y2={y2} className="map-route" />
            })}
            {CITIES.map((c) => {
              const [cx, cy] = project(c.lon, c.lat)
              const hit = c.t <= t
              const fresh = hit && t - c.t < 0.4
              const side = c.label ?? 'right'
              const dx = side === 'left' ? -9 : side === 'right' ? 9 : 0
              const dy = side === 'below' ? 20 : side === 'above' ? -11 : 5
              const anchor = side === 'left' ? 'end' : side === 'right' ? 'start' : 'middle'
              return (
                <g key={c.name} className={hit ? 'city hit' : 'city'}>
                  {fresh && <circle cx={cx} cy={cy} r={16} className="map-pulse" />}
                  <circle cx={cx} cy={cy} r={hit ? 6 : 4} className="map-dot" />
                  <text x={cx + dx} y={cy + dy} textAnchor={anchor} className="map-label">
                    {c.name}
                    {hit ? ` · ${Math.floor(c.t)}` : ''}
                  </text>
                </g>
              )
            })}
          </>
        )}
      </GeoMap>
      <input
        type="range"
        min={START}
        max={END}
        step={0.05}
        value={t}
        onChange={(e) => {
          setT(Number(e.target.value))
          onInteract()
        }}
        aria-label="Year"
      />
      <div className="range-labels">
        <span>{START}</span>
        <span>{END}</span>
      </div>
    </figure>
  )
}
