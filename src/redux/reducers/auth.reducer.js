import { SIGN_IN, SIGN_UP, LOGOUT } from '../actions/auth.action'

const initialState = {
  loading: false,
  error: null,
  errorSignUp: null,
  user: null,
}

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP + '_PENDING':
      return {
        ...state,
        loading: true,
      }

    case SIGN_UP + '_FULFILLED':
      return {
        ...state,
        user: ({ token: payload.token, user: payload.user }),
        loading: false
      }

    case SIGN_UP + '_REJECTED':
      return {
        ...state,
        errorSignUp: payload,
        loading: false
      }

    case SIGN_IN + '_FULFILLED': {
      return {
        ...state,
        user: ({ token: payload.token, user: payload.user }),
        loading: false
      }
    }

    case SIGN_IN + '_REJECTED':
      return {
        ...state,
        error: payload,
        loading: false
      }

    case LOGOUT: {
      return {
        ...state,
        user: null
      }
    }
    default: {
      return state
    }
  }
}

export default auth
