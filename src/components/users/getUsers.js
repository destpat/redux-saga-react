import {create} from 'apisauce'

const api = create({
  baseURL: 'https://randomuser.me/api/?results=100'
})

export default api;
