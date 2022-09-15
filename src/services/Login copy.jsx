import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/api/photos'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = (newObject) => {
  const uploadData = new FormData()
  uploadData.append('filePath', newObject)
  const headers = {
    'Content-Type': 'multipart/form-data',
  }
  const request = axios.post(baseUrl + '/upload/', uploadData, {
    headers: headers,
  })
  console.log('newObject', newObject)
  console.log('headers', headers)
  return request.then((response) => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}

const axios_del = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then((response) => response.data)
}

export { getAll, create, update, axios_del }
