import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'
import songService from '../services/song.service'
import { Particles } from '../components/Particles'
import {deezerService} from '../services/deezer.service'



export const SongPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [song, setSong] = useState(null)
  const [supports, setSupports] = useState([])
  const [cover, setCover] = useState(null)



useEffect(() => {
  if (song?.deezerId) {
    deezerService.getTrackCover(song.deezerId, 'cover_big')
      .then(setCover)
      .catch(() => setCover(null))
  }
}, [song])

  useEffect(() => {
    if (song?.deezerId) {
      axios.get(`/deezer/track/${song.deezerId}`)
        .then(res => setCover(res.data.album.cover_big))
        .catch(() => setCover(null))
    }
  }, [song])

  const handleSupportSubmit = async (formData) => {
    const data = Object.fromEntries(formData.entries())
    await songService.createSupport(id, { message: data.message })
    songService.getSupports(id).then(setSupports)
  }

  if (!song) return null

  return (
    <div
      className="min-h-screen px-12 py-10 relative overflow-hidden bg-dark"
      style={{ backgroundColor: song.emotionId?.color }}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={60}
        staticity={50}
        ease={60}
        size={0.4}
        color="#ffffff"
      />

      {/* Bouton retour */}
      <button
        onClick={() => navigate(-1)}
        className="relative z-10 text-sm text-white opacity-50 hover:opacity-100 transition mb-8"
      >
        ← Retour
      </button>

      {/* Chanson */}
      <section className="relative z-10 flex gap-8 items-start mb-12">
        {cover ? (
          <img src={cover} alt={song.title} className="w-40 h-40 rounded-2xl object-cover shadow-lg" />
        ) : (
          <div className="w-40 h-40 rounded-2xl bg-subtle flex items-center justify-center">
            <span className="text-5xl">🎵</span>
          </div>
        )}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl text-white font-playfair">{song.title}</h1>
          <p className="text-muted">{song.artist}</p>
          <p className="text-white opacity-70 italic font-playfair text-sm max-w-lg">
            "{song.story}"
          </p>
          <p className="text-xs text-muted">
            Partagé par {song.userId?.email}
          </p>
        </div>
      </section>

      {/* Supports */}
      <section className="relative z-10 mb-8">
        <h2 className="text-white font-playfair text-xl mb-4">
          {supports.length} personne{supports.length > 1 ? 's' : ''} soutient cette chanson
        </h2>
        <div className="flex flex-col gap-3">
          {supports.map((support) => (
            <div
              key={support._id}
              className="bg-dark-card border border-dark-border rounded-xl p-4 flex flex-col gap-1"
            >
              <p className="text-white text-sm italic font-playfair">"{support.message}"</p>
              <p className="text-muted text-xs">{support.userId?.email}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulaire support */}
      <section className="relative z-10">
        <form
          action={handleSupportSubmit}
          className="bg-dark-card border border-dark-border rounded-2xl p-6 flex flex-col gap-4 max-w-lg"
        >
          <h3 className="text-white font-playfair text-lg">Cette chanson t'a aidé ? 💙</h3>
          <textarea
            name="message"
            rows={3}
            placeholder="Dis pourquoi cette chanson te touche..."
            className="border border-dark-border rounded-lg px-4 py-2.5 bg-dark text-white placeholder:text-subtle focus:outline-none focus:border-muted resize-none"
          />
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-muted text-white font-medium tracking-wide hover:bg-subtle transition duration-200"
          >
            Soutenir 💙
          </button>
        </form>
      </section>

    </div>
  )
}