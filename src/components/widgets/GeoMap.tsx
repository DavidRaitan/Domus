import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { geoMercator, geoPath, type GeoProjection } from 'd3-geo'
import { feature } from 'topojson-client'
import type { Feature, FeatureCollection } from 'geojson'
import type { GeometryCollection, Topology } from 'topojson-specification'

// Land outlines load lazily (~0.5 MB) so pages without maps stay light.
let landCache: Promise<Feature | FeatureCollection> | null = null
function loadLand() {
  landCache ??= import('world-atlas/land-50m.json').then((m) => {
    const topo = (m.default ?? m) as unknown as Topology<{ land: GeometryCollection }>
    return feature(topo, topo.objects.land)
  })
  return landCache
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
  const [land, setLand] = useState<Feature | FeatureCollection | null>(null)
  useEffect(() => {
    let alive = true
    loadLand().then((l) => alive && setLand(l))
    return () => {
      alive = false
    }
  }, [])

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
