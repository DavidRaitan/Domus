import type { Dispatch, SetStateAction } from 'react'
import { initialProgress, type Progress } from '../engine/progression'
import { href } from '../router'

type Props = { progress: Progress; setProgress: Dispatch<SetStateAction<Progress>> }

export function Settings({ progress, setProgress }: Props) {
  return (
    <div className="lesson">
      <a className="back" href={href({ page: 'home' })}>
        ← Back
      </a>
      <h1>Settings</h1>

      <section className="card settings-card">
        <h2>Domus Pro</h2>
        <p className="muted">
          Pro opens every track in every tier, with no keys or placement tests. Payments aren’t built yet, so this is
          a free switch for trying it out.
        </p>
        <label className="toggle">
          <input
            type="checkbox"
            checked={progress.pro}
            onChange={(e) => setProgress({ ...progress, pro: e.target.checked })}
          />
          <span>Pro (demo)</span>
        </label>
      </section>

      <section className="card settings-card">
        <h2>Progress</h2>
        <p className="muted">
          Progress is saved in this browser only. Resetting clears XP, keys, streak and every completed lesson.
        </p>
        <button
          className="btn btn-danger"
          onClick={() => {
            if (confirm('Reset all progress? This can’t be undone.')) setProgress(initialProgress())
          }}
        >
          Reset progress
        </button>
      </section>
    </div>
  )
}
