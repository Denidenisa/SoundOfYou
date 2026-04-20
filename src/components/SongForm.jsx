import { useId, useState } from 'react'
import {deezerService} from '../services/deezer.service'
import songService from '../services/song.service'

export const SongForm = ({ emotionId, onSongAdded }) => {
  const id = useId()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [selectedSong, setSelectedSong] = useState(null)

  const handleSearch = async (e) => {
    const value = e.target.value
    setQuery(value)
    if (value.length < 2) return setResults([])
    const data = await deezerService.search(value)
    setResults(data)
  }

  const handleSelect = (track) => {
    setSelectedSong(track)
    setQuery(track.title + ' - ' + track.artist.name)
    setResults([])
  }

  const handleSubmit = async (formData) => {
    if (!selectedSong) return
    const data = Object.fromEntries(formData.entries())
    await songService.create({
      title: selectedSong.title,
      artist: selectedSong.artist.name,
      deezerId: String(selectedSong.id),
      story: data.story,
      emotionId,
    })
    setSelectedSong(null)
    setQuery('')
    onSongAdded()
  }

  return (
    <div className="bg-dark-card border border-dark-border rounded-2xl p-6 flex flex-col gap-4">
      <h2 className="text-white font-playfair text-xl">Partager une chanson 🎵</h2>

      <div className="flex flex-col gap-1.5 relative">
        <label htmlFor={id + 'search'} className="text-xs font-medium tracking-widest uppercase text-muted">
          Rechercher une chanson
        </label>
        <input
          id={id + 'search'}
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Ex: Frank Ocean,Humbe,Brent Faiyaz..."
          className="border border-dark-border rounded-lg px-4 py-2.5 bg-dark text-white placeholder:text-subtle focus:outline-none focus:border-muted"
        />
        {results.length > 0 && (
          <div className="absolute top-full mt-1 w-full bg-dark-card border border-dark-border rounded-xl z-20 max-h-60 overflow-y-auto">
            {results.map((track) => (
              <div
                key={track.id}
                onClick={() => handleSelect(track)}
                className="flex items-center gap-3 px-4 py-2 hover:bg-subtle cursor-pointer transition duration-150"
              >
                <img src={track.album.cover_small} alt={track.title} className="w-10 h-10 rounded-lg" />
                <div>
                  <p className="text-white text-sm">{track.title}</p>
                  <p className="text-muted text-xs">{track.artist.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedSong && (
        <div className="flex items-center gap-3 bg-subtle rounded-xl p-3">
          <img src={selectedSong.album.cover_small} alt={selectedSong.title} className="w-12 h-12 rounded-lg" />
          <div>
            <p className="text-white text-sm font-medium">{selectedSong.title}</p>
            <p className="text-muted text-xs">{selectedSong.artist.name}</p>
          </div>
        </div>
      )}

      <form action={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={id + 'story'} className="text-xs font-medium tracking-widest uppercase text-muted">
            Pourquoi cette chanson ?
          </label>
          <textarea
            id={id + 'story'}
            name="story"
            rows={3}
            placeholder="Cette chanson m'a aidé quand..."
            className="border border-dark-border rounded-lg px-4 py-2.5 bg-dark text-white placeholder:text-subtle focus:outline-none focus:border-muted resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2.5 rounded-lg bg-muted text-white font-medium tracking-wide hover:bg-subtle transition duration-200"
        >
          Partager
        </button>
      </form>
    </div>
  )
}