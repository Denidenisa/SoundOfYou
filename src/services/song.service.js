import api from './api'
import { getDefaultStore } from 'jotai'
import { tokenAtom } from '../atoms/auth.atom'

const songService = {
  getAll: async () => {
    const token = getDefaultStore().get(tokenAtom)
    const response = await api.get('/api/songs', {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  },
  getById: async (id) => {
    const token = getDefaultStore().get(tokenAtom)
    const response = await api.get(`/api/songs/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  },
  getByEmotion: async (emotionId) => {
    const token = getDefaultStore().get(tokenAtom)
    const response = await api.get(`/api/songs?emotion=${emotionId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  },
  create: async (songData) => {
    const token = getDefaultStore().get(tokenAtom)
    const response = await api.post('/api/songs', songData, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  },
  delete: async (id) => {
    const token = getDefaultStore().get(tokenAtom)
    const response = await api.delete(`/api/songs/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  },
  getSupports: async (songId) => {
    const token = getDefaultStore().get(tokenAtom)
    const response = await api.get(`/api/songs/${songId}/supports`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  },
  createSupport: async (songId, supportData) => {
    const token = getDefaultStore().get(tokenAtom)
    const response = await api.post(`/api/songs/${songId}/supports`, supportData, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  }
}

export default songService