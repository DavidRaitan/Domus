import { liveStreak, localDay, type Progress } from '../engine/progression'
import { href } from '../router'

export function Header({ progress }: { progress: Progress }) {
  const streak = liveStreak(progress.streak, localDay())
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="brand" href={href({ page: 'home' })}>
          Domus
        </a>
        <div className="stats">
          <span className="stat" title="Day streak">
            <span aria-hidden>🔥</span> {streak}
          </span>
          <span className="stat" title="Experience points">
            <span aria-hidden>⭐</span> {progress.xp} XP
          </span>
          <span className="stat" title="Unlock keys — spend one to open a track">
            <span aria-hidden>🔑</span> {progress.pro ? '∞' : progress.keys}
          </span>
          <a className="stat stat-link" href={href({ page: 'settings' })} aria-label="Settings">
            ⚙
          </a>
        </div>
      </div>
    </header>
  )
}
