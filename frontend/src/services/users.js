import axios from 'axios'
const baseUrl = '/users'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const enroll = async (id) => {
  const response = await axios.post(`${baseUrl}/${id}`)
  return response.data
}

export default { getAll, getById, enroll }
