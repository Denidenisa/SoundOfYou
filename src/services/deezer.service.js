import axios from 'axios'

const proxyCover = (url) => url?.replace('https://cdn-images.deezer.com', '/deezer-img')

export const deezerService = {
  search: async (query) => {
    const response = await axios.get(`/deezer/search?q=${query}&limit=10&output=json`)
    return response.data.data.map(track => ({
      ...track,
      album: { ...track.album, cover_small: proxyCover(track.album.cover_small) }
    }))
  },

  searchByArtist: async (artist) => {
    const response = await axios.get(`/deezer/search/artist?q=${artist}&limit=10`)
    return response.data.data.map(track => ({
      ...track,
      album: { ...track.album, cover_small: proxyCover(track.album.cover_small) }
    }))
  },

  getTrackCover: async (deezerId, size = 'cover_medium') => {
    const response = await axios.get(`/deezer/track/${deezerId}`)
    return proxyCover(response.data.album[size])
  }
}
