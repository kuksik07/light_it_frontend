import { get, error } from './index'

export const all = async () => {
  const [err, res] = await get('/products/')
  if (err) throw error(err)
  return res.data
}

export const find = async (id) => {
  const [err, res] = await get(`/products/`)
  if (err) throw error(err)

  return res.data.find(product => product.id === parseInt(id, 10))
}

