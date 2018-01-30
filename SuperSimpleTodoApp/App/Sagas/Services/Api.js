import { create } from 'apisauce'

const createApi = (baseURL = 'https://my-json-server.typicode.com/eduardojunio/react-native-training') => {
  const api = create({
    baseURL,
    timeout: 3000 // 30secs
  })

  const getTodos = () => api.get('/todos')
  return {
    getTodos
  }
}

export default createApi
