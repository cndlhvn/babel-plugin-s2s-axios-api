import axios from 'axios'

const API_ROOT = process.env.API_ROOT || 'http://localhost:3000'

axios.defaults.timeout = 5000
axios.defaults.baseURL = API_ROOT
axios.defaults.headers.post['Content-Type'] = 'application/json'
