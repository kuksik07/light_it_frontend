import { GET_REVIEWS, SEND_REVIEW, } from '../actions/review.action'

const initialState = {
  loading: false,
  error: null,
  sendReviewError: null,
  reviews: [],
}

const review = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_REVIEWS + '_FULFILLED': {
      return {
        ...state,
        reviews: payload,
        loading: false
      }
    }

    case GET_REVIEWS + '_REJECTED': {
      return {
        ...state,
        error: payload,
        loading: false
      }
    }

    case SEND_REVIEW + '_PENDING': {
      return {
        ...state,
        loading: true,
      }
    }

    case SEND_REVIEW + '_REJECTED': {
      return {
        ...state,
        sendReviewError: payload,
        loading: false
      }
    }

    case SEND_REVIEW + '_FULFILLED': {
      state.loading = false
      return {
        ...state,
        sendReviewError: null
      }
    }

    default: {
      return state
    }
  }
}

export default review
