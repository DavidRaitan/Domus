// Cut a small, detailed land outline for one region out of the 1:10m world data, so close-up
// maps (a strait, a mountain pass) stay sharp without downloading the whole 3 MB world file.
// Usage: node scripts/extract-land.mjs <name> <west> <south> <east> <north>
import { readFileSync, writeFileSync } from 'node:fs'
import { feature } from 'topojson-client'

const [name, ...box] = process.argv.slice(2)
const [W, S, E, N] = box.map(Number)
const topo = JSON.parse(readFileSync(new URL('../node_modules/world-atlas/land-10m.json', import.meta.url)))
const land = feature(topo, topo.objects.land)

// Sutherland–Hodgman clip of one ring against the box, one edge at a time.
function clipRing(ring) {
  const edges = [
    [(p) => p[0] >= W, (a, b) => [W, a[1] + ((b[1] - a[1]) * (W - a[0])) / (b[0] - a[0])]],
    [(p) => p[0] <= E, (a, b) => [E, a[1] + ((b[1] - a[1]) * (E - a[0])) / (b[0] - a[0])]],
    [(p) => p[1] >= S, (a, b) => [a[0] + ((b[0] - a[0]) * (S - a[1])) / (b[1] - a[1]), S]],
    [(p) => p[1] <= N, (a, b) => [a[0] + ((b[0] - a[0]) * (N - a[1])) / (b[1] - a[1]), N]],
  ]
  let out = ring
  for (const [inside, cross] of edges) {
    const input = out
    out = []
    for (let i = 0; i < input.length; i++) {
      const cur = input[i]
      const prev = input[(i + input.length - 1) % input.length]
      if (inside(cur)) {
        if (!inside(prev)) out.push(cross(prev, cur))
        out.push(cur)
      } else if (inside(prev)) out.push(cross(prev, cur))
    }
    if (!out.length) return null
  }
  const round = (p) => [Math.round(p[0] * 1e4) / 1e4, Math.round(p[1] * 1e4) / 1e4]
  out = out.map(round)
  out.push(out[0])
  return out.length >= 4 ? out : null
}

const polygons = []
const geoms = land.type === 'FeatureCollection' ? land.features.map((f) => f.geometry) : [land.geometry]
for (const g of geoms) {
  const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates
  for (const poly of polys) {
    const rings = poly.map(clipRing).filter(Boolean)
    if (rings.length && rings[0]) polygons.push(rings)
  }
}
const out = { type: 'Feature', properties: { name, bbox: [W, S, E, N] }, geometry: { type: 'MultiPolygon', coordinates: polygons } }
writeFileSync(new URL(`../src/content/geo/${name}.json`, import.meta.url), JSON.stringify(out))
console.log(`${name}: ${polygons.length} polygons`)
