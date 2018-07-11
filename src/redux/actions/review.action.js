import * as API from '../../services/api'

export const GET_REVIEWS = 'GET_REVIEWS'
export const SEND_REVIEW = 'SEND_REVIEW'

export const getReviews = id => ({
  type: GET_REVIEWS,
  payload: API.reviews.load(id)
})

export const sendReview = (id, data) => async dispatch => {
  await dispatch({
    type: SEND_REVIEW,
    payload: API.reviews.add(id, data)
  })
  dispatch(getReviews(id))
}
