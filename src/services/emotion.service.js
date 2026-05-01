import api from './api'

const emotionService = {
  getAll: async () => {
    const response = await api.get('/api/emotions')
    return response.data
  },
  getById: async (id) => {
    const response = await api.get(`/api/emotions/${id}`)
    return response.data
  }
}

export default emotionService