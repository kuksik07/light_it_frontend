import * as API from '../../services/api'
import { getUser } from '../../services/storage'

export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'
export const LOGOUT = 'LOGOUT'

export const signIn = data => !data ?
  ({
    type: SIGN_IN + '_FULFILLED',
    payload: getUser(),
  }) : ({
    type: SIGN_IN,
    payload: API.auth.signIn(data),
  })

export const signUp = data => ({
  type: SIGN_UP,
  payload: API.auth.signUp(data)
})

export const logout = () => async dispatch => {
  localStorage.clear()
  await dispatch({
    type: LOGOUT,
  })
}
