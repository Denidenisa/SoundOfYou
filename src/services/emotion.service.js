import axios from 'axios'

const emotionService = {
  getAll: async () => {
    const response = await axios.get('http://localhost:3000/api/emotions')
    return response.data
  },

  getById: async (id) => {
    const response = await axios.get(`http://localhost:3000/api/emotions/${id}`)
    return response.data
  }
}

export default emotionService