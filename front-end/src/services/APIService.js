import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

export class APIService {
  constructor() {}

  getBaseUrl() {
    return API_URL
  }

  getCategories() {
    const url = `${API_URL}/category`
    let data = axios.get(url).then((response) => response.data)
    return data
  }

  getFruitsOfCategory(categoryId) {
    const url = `${API_URL}/fruit/category/` + categoryId
    let data = axios.get(url).then((response) => response.data)
    return data
  }

  getFruit(fruitId) {
    const url = `${API_URL}/fruit/` + fruitId
    let data = axios.get(url).then((response) => response.data)
    return data
  }
}
