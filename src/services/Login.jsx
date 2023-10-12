import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/api/photos'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = async (newObject) => {
  const uploadData = new FormData()
  if (newObject.plan[0] !== undefined) {
    uploadData.append('PlanPath', newObject.plan[0])
    console.log('pppppp')
  }
  if (newObject.cont[0] !== undefined) {
    uploadData.append('ContPath', newObject.cont[0])
    console.log('cccccccccc')
  }
  if (newObject.taba[0] !== undefined) {
    uploadData.append('TabPath', newObject.taba[0])
    console.log('aaaaaaaa')
  }

  if (newObject.hasOwnProperty('titreName')) {
    uploadData.append('namePath', newObject.titreName)
  }
  const headers = {
    'Content-Type': 'multipart/form-data',
  }

  let responseArray = []
  console.log('FUCKYOUNIGGA', newObject)

  try {
    const planreq = await axios.post(baseUrl + '/uploadplan/', uploadData, {
      headers: headers,
    })
    responseArray.push(planreq.data)
  } catch (error) {
    console.error(error)
  }

  try {
    const contreq = await axios.post(baseUrl + '/uploadcont/', uploadData, {
      headers: headers,
    })
    responseArray.push(contreq.data)
  } catch (error) {
    console.error(error)
  }

  try {
    const tabreq = await axios.post(baseUrl + '/uploadtaba/', uploadData, {
      headers: headers,
    })
    responseArray.push(tabreq.data)
  } catch (error) {
    console.error(error)
  }

  return responseArray
}

const createcop = async (newObject) => {
  const uploadData = new FormData()
  if (newObject.copro[0] !== undefined) {
    console.log('newObject.copro[0]', newObject.copro)
    for (let i = 0; i < newObject.copro.length; i++) {
      uploadData.append(`CopPath${i}`, newObject.copro[i])
    }
    //uploadData.append('CopPath', newObject.plan[0])
    console.log('pppppp')
  }
  if (newObject.hasOwnProperty('titreName')) {
    uploadData.append('namePath', newObject.titreName)
  }
  if (newObject.hasOwnProperty('titreDu')) {
    uploadData.append('nameDuPath', newObject.titreDu)
  }
  if (newObject.hasOwnProperty('titreAu')) {
    uploadData.append('nameAuPath', newObject.titreAu)
  }
  const headers = {
    'Content-Type': 'multipart/form-data',
  }

  let responseArray = []
  console.log('FUCKYOUNIGGA', newObject)

  try {
    const copreq = await axios.post(baseUrl + '/uploadcop/', uploadData, {
      headers: headers,
    })
    responseArray.push(copreq.data)
  } catch (error) {
    console.error(error)
  }

  return responseArray
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}

const axios_del = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then((response) => response.data)
}

export { getAll, create, update, axios_del, createcop }
