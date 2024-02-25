import axios from 'axios'
const baseUrl = '/enroll'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const enroll = async (user, data) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}/${user.id}`, data, config)
  return response.data
}

const getOwnEnrollments = async (id) => {
  // const config = {
  //   headers: { Authorization: token },
  // }
  
  // const response = await axios.get(`${baseUrl}/${id}`, config)
  
  // return response.data
}

export default { setToken, enroll, getOwnEnrollments }
