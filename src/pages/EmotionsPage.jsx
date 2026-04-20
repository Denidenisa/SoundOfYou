import { useEffect, useState } from "react"
import { useParams } from "react-router"
import emotionService from "../services/emotion.service"
import songService from "../services/song.service"
import { Particles } from '../components/Particles'
import { SongCard } from '../components/SongCard'
import { SongForm } from '../components/SongForm'

export const EmotionsPage = () => {
  const { slug } = useParams()
  const [emotion, setEmotion] = useState(null)
  const [songs, setSongs] = useState([])

  useEffect(() => {
    emotionService.getById(slug).then(setEmotion)
    songService.getByEmotion(slug).then(setSongs)
  }, [slug])

  if (!emotion) return null

  return (
    <div
      className="min-h-screen px-12 py-10 relative overflow-hidden"
      style={{ backgroundColor: emotion.color }}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        staticity={50}
        ease={60}
        size={0.4}
        color="#ffffff"
      />

      <section className="relative z-10 mb-10">
        <h1 className="text-4xl text-white font-playfair mb-2">
          {emotion.name}
        </h1>
        <p className="text-sm italic font-playfair" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {songs.length} chanson{songs.length > 1 ? 's' : ''} partagée{songs.length > 1 ? 's' : ''}
        </p>
      </section>

      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {songs.length === 0 ? (
          <p className="text-white opacity-50 italic font-playfair">
            Aucune chanson partagée pour cette émotion pour l'instant...
          </p>
        ) : (
          songs.map((song) => (
            <SongCard key={song._id} song={song} />
          ))
        )}
      </section>

      <section className="relative z-10 mt-8">
        <SongForm
          emotionId={slug}
          onSongAdded={() => songService.getByEmotion(slug).then(setSongs)}
        />
      </section>

    </div>
  )
}