import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { deezerService } from '../services/deezer.service'

export const SongCard = ({ song }) => {
  const [cover, setCover] = useState(null)

  useEffect(() => {
    if (song.deezerId) {
      deezerService.getTrackCover(song.deezerId, 'cover_medium')
        .then(setCover)
        .catch(() => setCover(null))
    }
  }, [song.deezerId])

  return (
    <Link
      to={`/song/${song._id}`}
      className="bg-dark-card border border-dark-border rounded-2xl p-4 flex gap-4 items-center hover:-translate-y-1 transition duration-300"
    >
      {cover ? (
        <img src={cover} alt={song.title} className="w-16 h-16 rounded-xl object-cover" />
      ) : (
        <div className="w-16 h-16 rounded-xl bg-subtle flex items-center justify-center">
          <span className="text-2xl">🎵</span>
        </div>
      )}
      <div className="flex flex-col gap-1">
        <h3 className="text-white font-medium">{song.title}</h3>
        <p className="text-muted text-sm">{song.artist}</p>
        <p className="text-subtle text-xs italic font-playfair line-clamp-2">{song.story}</p>
      </div>
    </Link>
  )
}