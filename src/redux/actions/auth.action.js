import axios from 'axios'

export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'
export const LOGOUT = 'LOGOUT'

const deleteUser = () => {
    // localStorage.clear()
    localStorage.removeItem('token');
    localStorage.removeItem('username');
}

export const signIn = data => async dispatch => {
    console.log(data)
    localStorage.setItem("username", data.username)
    await dispatch({
        type: SIGN_IN,
        payload: await axios.post('http://smktesting.herokuapp.com/api/login/', data)
    })
}

export const signUp = data => async dispatch => {
    localStorage.setItem("username", data.username)
    await dispatch({
        type: SIGN_UP,
        payload: await axios.post('http://smktesting.herokuapp.com/api/register/', data)
    })
}

export const logout = () => async dispatch => {
    await dispatch({
        type: LOGOUT,
        payload: await deleteUser()
    })
}