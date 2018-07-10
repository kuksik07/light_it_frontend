import {SIGN_IN, SIGN_UP, LOGOUT} from "../actions/auth.action";

const initialState = {
    user: null,
}

const auth = (state = initialState, {type, payload}) => {
    switch (type) {
        case SIGN_IN: {
            payload.data.token && localStorage.setItem("token", payload.data.token.toString())
            // console.log(localStorage.getItem("token"))
            console.log(payload.data)
            return {
                ...state,
                user: payload.data,
            }
        }
        case SIGN_UP: {
            payload.data.token && localStorage.setItem("token", payload.data.token.toString())
            return {
                ...state,
                user: payload.data,
            }
        }
        case LOGOUT: {
            return {
                ...state,
                user: null,
            }
        }
        default: {
            return state
        }
    }
}

export default auth