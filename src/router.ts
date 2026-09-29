export type Route =
  | { page: 'home' }
  | { page: 'track'; trackId: string }
  | { page: 'lesson'; trackId: string; lessonId: string }
  | { page: 'test'; tier: number }
  | { page: 'settings' }
  | { page: 'review' }

export const href = (r: Route): string => {
  switch (r.page) {
    case 'home':
      return '#/'
    case 'track':
      return `#/track/${r.trackId}`
    case 'lesson':
      return `#/lesson/${r.trackId}/${r.lessonId}`
    case 'test':
      return `#/test/${r.tier}`
    case 'settings':
      return '#/settings'
    case 'review':
      return '#/review'
  }
}

export function parseRoute(hash: string): Route {
  const [, page, a, b] = hash.replace(/^#/, '').split('/')
  if (page === 'track' && a) return { page: 'track', trackId: a }
  if (page === 'lesson' && a && b) return { page: 'lesson', trackId: a, lessonId: b }
  if (page === 'test' && a) return { page: 'test', tier: Number(a) }
  if (page === 'settings') return { page: 'settings' }
  if (page === 'review') return { page: 'review' }
  return { page: 'home' }
}

export const navigate = (r: Route) => {
  window.location.hash = href(r)
}
