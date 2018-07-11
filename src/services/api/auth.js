import { error, post } from './index'
import * as Storage from '../storage'

export const signUp = async user => {
  const [err, res] = await post('/register/', user)
  if (err) throw error(err)
  if (!res.data.success) throw res.data.message

  Storage.setUser(res.data.token, user.username)

  return {
    user: user.username,
    token: res.data.token
  }
}

export const signIn = async user => {
  const [err, res] = await post('/login/', user)

  if (err) throw error(err)
  if (!res.data.success) throw res.data.message

  Storage.setUser(res.data.token, user.username)

  return {
    user: user.username,
    token: res.data.token
  }
}

