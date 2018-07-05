import {SIGN_IN} from "../actions/auth.action";

const initialState = {
    user: null,
}

const auth = (state = initialState, {type, payload}) => {
    switch (type) {
        case SIGN_IN: {
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