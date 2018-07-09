import {SIGN_IN, SIGN_UP} from "../actions/auth.action";

const initialState = {
    user: null,
}

const auth = (state = initialState, {type, payload}) => {
    switch (type) {
        case SIGN_IN: {
            payload.data.token && localStorage.setItem('token', payload.data.token.toString())
            return {
                ...state,
                user: payload.data,
            }
        }
        case SIGN_UP: {
            payload.data.token && localStorage.setItem('token', payload.data.token.toString())
            return {
                ...state,
                user: payload.data,
            }
        }
        default: {
            return state
        }
    }
}

export default auth