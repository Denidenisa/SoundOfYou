import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { deezerService } from '../services/deezer.service'
import { ShareCardModal } from './ShareCardModal'

export const SongCard = ({ song, emotionName, emotionColor }) => {
  const [cover, setCover] = useState(null)
  const [showShare, setShowShare] = useState(false)

  useEffect(() => {
    if (song.deezerId) {
      deezerService.getTrackCover(song.deezerId, 'cover_medium')
        .then(setCover)
        .catch(() => setCover(null))
    }
  }, [song.deezerId])

  return (
    <>
      <div className="bg-dark-card border border-dark-border rounded-2xl p-4 flex gap-4 items-center hover:-translate-y-1 transition duration-300 relative group">

        <Link to={`/song/${song._id}`} className="flex gap-4 items-center flex-1 min-w-0">
          {cover ? (
            <img src={cover} alt={song.title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
          ) : (
            <div className="w-16 h-16 rounded-xl bg-subtle flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🎵</span>
            </div>
          )}
          <div className="flex flex-col gap-1 min-w-0">
            <h3 className="text-white font-medium truncate">{song.title}</h3>
            <p className="text-muted text-sm">{song.artist}</p>
            <p className="text-muted text-xs italic font-playfair line-clamp-2">{song.story}</p>
          </div>
        </Link>

        <button
          onClick={() => setShowShare(true)}
          className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 p-2 rounded-xl border border-dark-border text-white/50 hover:text-white"
          title="Partager"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <ShareCardModal
        visible={showShare}
        onClose={() => setShowShare(false)}
        emotionName={emotionName}
        emotionColor={emotionColor}
        songTitle={song.title}
        artist={song.artist}
        story={song.story}
      />
    </>
  )
}