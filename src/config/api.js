import axios from "axios"

export const API_URL = 'http://localhost:5173/'
const api = axios.create({API_URL})

const jwt = localStorage.getItem('jwt')
api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
api.defaults.headers.post['Content-Type'] = 'application/json'

export default api;