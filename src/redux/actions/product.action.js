import axios from 'axios'

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
export const LOAD_REVIEWS = 'LOAD_REVIEWS'
export const LEAVE_REVIEW = 'LEAVE_A_REVIEW'

const config = token => ({
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Token ${token}`
    }
})

export const loadProducts = () => async dispatch => {
    dispatch({
        type: LOAD_PRODUCTS,
        payload: await axios.get('http://smktesting.herokuapp.com/api/products/')
            .then(res => res.data)
    })
}

export const loadReviews = id =>  async dispatch => {
    dispatch({
        type: LOAD_REVIEWS,
        payload: await axios.get(`http://smktesting.herokuapp.com/api/reviews/${id}`)
            .then(res => res.data)
    })
}

export const leaveReview = (data, id) => dispatch => {
    const token = localStorage.getItem('token') !== null && localStorage.getItem('token').replace(/"/g, '')
    dispatch({
        type: LEAVE_REVIEW,
        payload: axios.post(`http://smktesting.herokuapp.com/api/reviews/${id}`, data, config(token))
            .then(res => res.data)
    })
}


