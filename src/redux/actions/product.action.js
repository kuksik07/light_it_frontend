import * as API from '../../services/api'

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCT = 'GET_PRODUCT'

export const getProducts = () => ({
  type: GET_PRODUCTS,
  payload: API.products.all()
})

export const getProduct = id => ({
  type: GET_PRODUCT,
  payload: API.products.find(id)
})
