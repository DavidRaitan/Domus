import { useEffect, useState } from 'react'
import { catalog, findTrack } from './content/catalog'
import {
  completeLesson,
  completeReview,
  localDay,
  recordPlacement,
  unlockTrack,
  type Progress,
} from './engine/progression'
import type { Track } from './content/types'
import { parseRoute, type Route } from './router'
import { loadProgress, saveProgress } from './engine/storage'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { TrackPage } from './components/TrackPage'
import { LessonPlayer } from './components/LessonPlayer'
import { PlacementTest } from './components/PlacementTest'
import { Settings } from './components/Settings'
import { ReviewSession } from './components/ReviewSession'
import { dueCards, schedule } from './engine/review'

export default function App() {
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.hash))
  const [progress, setProgress] = useState<Progress>(loadProgress)

  useEffect(() => {
    const onHash = () => {
      setRoute(parseRoute(window.location.hash))
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => saveProgress(progress), [progress])

  const unlock = (t: Track) => setProgress((p) => unlockTrack(p, t, catalog))

  let body
  switch (route.page) {
    case 'track': {
      const track = findTrack(route.trackId)
      body = track ? <TrackPage track={track} progress={progress} onUnlock={unlock} /> : <Home progress={progress} onUnlock={unlock} />
      break
    }
    case 'lesson': {
      const track = findTrack(route.trackId)
      const lesson = track?.lessons.find((l) => l.id === route.lessonId)
      if (track && lesson && progress.unlockedTracks.concat(progress.completedTracks).includes(track.id)) {
        body = (
          <LessonPlayer
            key={`${track.id}/${lesson.id}`}
            track={track}
            lesson={lesson}
            onFinish={(firstTryCorrect) => {
              const result = completeLesson(progress, track, lesson.id, firstTryCorrect, localDay())
              setProgress(result.progress)
              return result
            }}
          />
        )
      } else {
        body = <Home progress={progress} onUnlock={unlock} />
      }
      break
    }
    case 'test':
      body = (
        <PlacementTest
          key={route.tier}
          tier={route.tier}
          progress={progress}
          onSubmit={(correct, total) => setProgress((p) => recordPlacement(p, route.tier, correct, total))}
        />
      )
      break
    case 'review': {
      const today = localDay()
      body = (
        <ReviewSession
          initial={dueCards(catalog, progress.completedLessons, progress.cards, today)}
          onGrade={(card, grade) =>
            setProgress((p) => ({ ...p, cards: { ...p.cards, [card.id]: schedule(p.cards[card.id], grade, today) } }))
          }
          onFinish={(reviewed) => setProgress((p) => completeReview(p, p.cards, reviewed, today))}
        />
      )
      break
    }
    case 'settings':
      body = <Settings progress={progress} setProgress={setProgress} />
      break
    default:
      body = <Home progress={progress} onUnlock={unlock} />
  }

  return (
    <>
      <Header progress={progress} />
      <main className="container">{body}</main>
    </>
  )
}
