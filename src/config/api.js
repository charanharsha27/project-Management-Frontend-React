import axios from "axios"

export const API_URL = 'https://project-tracker-app.up.railway.app/'
const api = axios.create({
    baseURL: API_URL
});

const jwt = localStorage.getItem('jwt')
api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
api.defaults.headers.post['Content-Type'] = 'application/json'

export default api;