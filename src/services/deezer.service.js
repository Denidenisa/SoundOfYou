import api from './api'

const proxyCover = (url) => {
  if (!url) return null
  return `${import.meta.env.VITE_API_URL}/api/deezer/image?url=${encodeURIComponent(url)}`
}

export const deezerService = {
  search: async (query) => {
    const response = await api.get(`/api/deezer/search?q=${query}&limit=10&output=json`)
    return response.data.data.map(track => ({
      ...track,
      album: { ...track.album, cover_small: proxyCover(track.album.cover_small) }
    }))
  },

  searchByArtist: async (artist) => {
    const response = await api.get(`/api/deezer/search?q=${artist}&limit=10`)
    return response.data.data.map(track => ({
      ...track,
      album: { ...track.album, cover_small: proxyCover(track.album.cover_small) }
    }))
  },

  getTrackCover: async (deezerId, size = 'cover_medium') => {
    const response = await api.get(`/api/deezer/track/${deezerId}`)
    return proxyCover(response.data.album[size])
  }
}
