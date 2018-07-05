import axios from 'axios'

export const SIGN_IN = 'SIGN_IN'

export const signIn = (form) => async dispatch => {
    await dispatch({
        type: SIGN_IN,
        payload: await axios.post('http://smktesting.herokuapp.com/api/login/', form)

    })
}