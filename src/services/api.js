import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-be-the-hero-stack11.herokuapp.com/'
})

export default api;