import axios from 'axios'

export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'

export const signIn = data => async dispatch => {
    await dispatch ({
        type: SIGN_IN,
        payload: await axios.post('http://smktesting.herokuapp.com/api/login/', data)
    })
}

export const signUp = data => async dispatch => {
    await dispatch ({
        type: SIGN_UP,
        payload: await axios.post('http://smktesting.herokuapp.com/api/register/', data)
    })
}