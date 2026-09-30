import { liveStreak, localDay, type Progress } from '../engine/progression'
import { href } from '../router'
import { Icon } from './Icon'

export function Header({ progress }: { progress: Progress }) {
  const streak = liveStreak(progress.streak, localDay())
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="brand" href={href({ page: 'home' })}>
          Domus
        </a>
        <nav className="stats" aria-label="Your progress">
          <span className={`stat ${streak > 0 ? 'stat-live' : ''}`} title="Day streak">
            <Icon name="flame" size={18} />
            <span className="stat-num">{streak}</span>
            <span className="stat-label">day streak</span>
          </span>
          <span className="stat" title="Experience points">
            <Icon name="star" size={18} />
            <span className="stat-num">{progress.xp}</span>
            <span className="stat-label">XP</span>
          </span>
          <span className="stat" title="Unlock keys — spend one to open a track">
            <Icon name="key" size={18} />
            <span className="stat-num">{progress.pro ? '∞' : progress.keys}</span>
            <span className="stat-label">{progress.keys === 1 && !progress.pro ? 'key' : 'keys'}</span>
          </span>
          <a className="icon-btn" href={href({ page: 'settings' })} aria-label="Settings">
            <Icon name="gear" size={21} />
          </a>
        </nav>
      </div>
    </header>
  )
}
