import Axios from 'axios'

export const api = Axios.create({
  baseURL: 'https://ecodepalavrasapi.squareweb.app/',
})
