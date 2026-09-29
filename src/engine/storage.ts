import { initialProgress, type Progress } from './progression'

const KEY = 'domus.progress.v2'

// Storage can be unavailable (private mode, blocked site data) — never let that break the app.
export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { ...initialProgress(), ...JSON.parse(raw) }
  } catch {
    // fall through to a fresh start
  }
  return initialProgress()
}

export function saveProgress(p: Progress): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(p))
  } catch {
    // progress just won't persist this session
  }
}
