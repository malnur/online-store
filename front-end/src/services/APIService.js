import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

export class APIService {
  constructor() {}

  getBaseUrl() {
    return API_URL
  }

  getAllCategory() {
    const url = `${API_URL}/category`
    let data = axios.get(url).then((response) => response.data)
    return data
  }
}
