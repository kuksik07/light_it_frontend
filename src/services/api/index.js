import axios from 'axios'
import to from '../to'
import * as auth from './auth'
import * as products from './products'
import * as reviews from './reviews'

export const ASSETS_URL = 'http://smktesting.herokuapp.com/static/'
export const API_URL = 'http://smktesting.herokuapp.com/api'

export const get = async (url) => await to(axios.get(API_URL + url))
export const post = async (url, data, config = null) => await to(axios.post(API_URL + url, data, config))

export const error = err => {
  if (err.response.status === 500) return 'INTERNAL SERVER ERROR'
  if (err.response.status === 404) return 'RESOURCE NOT FOUND'
  if (err.response.status === 401) return 'TOKEN IS INVALID'
  return err.response.data
}

export {
  auth,
  products,
  reviews
}
