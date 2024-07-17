import axios from 'axios'
import { log } from 'console'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use((config) => {
  config.url = config.url + `&units=metric` + `&appid=` + process.env.NEXT_PUBLIC_API_KEY
  return config
})

export default api
