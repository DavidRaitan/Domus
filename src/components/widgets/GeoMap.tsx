import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { geoMercator, geoPath, type GeoProjection } from 'd3-geo'
import { feature } from 'topojson-client'
import type { Feature, FeatureCollection } from 'geojson'
import type { GeometryCollection, Topology } from 'topojson-specification'

// Land outlines load lazily so pages without maps stay light. Continent-scale maps use the
// world's 1:50m outlines (~0.5 MB). Close-ups use a small 1:10m regional cut-out made by
// scripts/extract-land.mjs, so a strait or a pass stays sharp without the 3 MB world file.
type Land = Feature | FeatureCollection
type Box = [west: number, south: number, east: number, north: number]

const REGIONS: { name: string; box: Box; load: () => Promise<unknown> }[] = [
  { name: 'aegean', box: [19, 34, 31, 42.5], load: () => import('../../content/geo/aegean.json') },
]

const cache: Record<string, Promise<Land>> = {}
function loadLand(region: string | null): Promise<Land> {
  const key = region ?? 'world-50m'
  cache[key] ??= region
    ? REGIONS.find((r) => r.name === region)!
        .load()
        .then((m) => ((m as { default?: Land }).default ?? m) as Land)
    : import('world-atlas/land-50m.json').then((m) => {
        const topo = (m.default ?? m) as unknown as Topology<{ land: GeometryCollection }>
        return feature(topo, topo.objects.land)
      })
  return cache[key]
}

/** A detailed regional outline if the map is a close-up that fits inside one. */
function regionFor(b: Bounds): string | null {
  if (b.east - b.west > 12) return null
  const r = REGIONS.find(({ box: [w, s, e, n] }) => b.west >= w && b.south >= s && b.east <= e && b.north <= n)
  return r?.name ?? null
}

export type Bounds = { west: number; south: number; east: number; north: number }

type Props = {
  bounds: Bounds
  width?: number
  height?: number
  label: string
  children?: (project: (lon: number, lat: number) => [number, number]) => ReactNode
}

/** A land/sea base map fitted to `bounds`, with an overlay drawn by `children` in pixel space. */
export function GeoMap({ bounds, width = 1000, height = 560, label, children }: Props) {
  const [land, setLand] = useState<Land | null>(null)
  const region = regionFor(bounds)
  useEffect(() => {
    let alive = true
    loadLand(region).then((l) => alive && setLand(l))
    return () => {
      alive = false
    }
  }, [region])

  const projection: GeoProjection = useMemo(() => {
    const { west, south, east, north } = bounds
    const box: Feature = {
      type: 'Feature',
      properties: {},
      geometry: { type: 'MultiPoint', coordinates: [[west, south], [east, north], [west, north], [east, south]] },
    }
    return geoMercator().fitExtent([[8, 8], [width - 8, height - 8]], box)
  }, [bounds, width, height])

  const path = useMemo(() => geoPath(projection), [projection])
  const project = (lon: number, lat: number) => projection([lon, lat]) as [number, number]

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="map" role="img" aria-label={label}>
      <rect width={width} height={height} className="map-sea-bg" />
      {land && <path d={path(land) ?? ''} className="map-land" />}
      {children?.(project)}
    </svg>
  )
}
