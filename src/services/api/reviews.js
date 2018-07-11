import { get, error, post } from './index'
import { getToken } from '../storage'

const config = () => ({
  headers: {
    'Authorization': getToken()
  }
})

export const load = async (id) => {
  const [err, res] = await get(`/reviews/${id}`)
  if (err) throw error(err)

  return res.data
}

export const add = async (id, data) => {
  const [err,] = await post(`/reviews/${id}`, data, config())
  if (err) throw error(err)
}

