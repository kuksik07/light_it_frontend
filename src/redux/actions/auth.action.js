import axios from 'axios'

export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'
export const LOGOUT = 'LOGOUT'

const deleteUser = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
}

export const signIn = data => async dispatch => {
    localStorage.setItem('username', data.username.toString())
    await dispatch({
        type: SIGN_IN,
        payload: await axios.post('http://smktesting.herokuapp.com/api/login/', data)
    })
}

export const signUp = data => async dispatch => {
    await dispatch({
        type: SIGN_UP,
        payload: await axios.post('http://smktesting.herokuapp.com/api/register/', data)
    })
}

export const logout = () => async dispatch => {
    await dispatch({
        type: LOGOUT,
        payload: deleteUser
    })
}