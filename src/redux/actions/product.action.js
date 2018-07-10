import axios from 'axios'

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
export const LOAD_PRODUCT = 'LOAD_PRODUCT'
export const LOAD_REVIEWS = 'LOAD_REVIEWS'
export const LEAVE_REVIEW = 'LEAVE_A_REVIEW'

const config = () => ({
    headers: {
        'Authorization': `Token ${localStorage.getItem('token') && localStorage.getItem('token') || ''}`
    }
})

export const loadProducts = () => async dispatch => {
    localStorage.hasOwnProperty('token') && axios.get('http://smktesting.herokuapp.com/api/products/', config())
        .catch(() => localStorage.clear())
    await dispatch({
        type: LOAD_PRODUCTS,
        payload: await axios.get('http://smktesting.herokuapp.com/api/products/')
            .then(res => res.data)
    })
}

export const loadProduct = id => async dispatch => {
    localStorage.hasOwnProperty('token') && axios.get('http://smktesting.herokuapp.com/api/products/', config())
        .catch(() => localStorage.clear())
    await dispatch({
        type: LOAD_PRODUCT,
        payload: await axios.get('http://smktesting.herokuapp.com/api/products/')
            .then(res => res.data.find((product) => product.id === parseInt(id, 10)))
    })
}

export const loadReviews = id => async dispatch => {
    localStorage.hasOwnProperty('token') && axios.get(`http://smktesting.herokuapp.com/api/reviews/${id}`, config())
        .catch(() => localStorage.clear())
    await dispatch({
        type: LOAD_REVIEWS,
        payload: await axios.get(`http://smktesting.herokuapp.com/api/reviews/${id}`)
            .then(res => res.data)
    })
}

export const leaveReview = (data, id) => async dispatch => {
    await dispatch({
        type: LEAVE_REVIEW,
        payload: await axios.post(`http://smktesting.herokuapp.com/api/reviews/${id}`, data, config())
            .then(res => res.data)
    })
}

