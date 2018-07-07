import {LOAD_PRODUCTS, LOAD_REVIEWS, LEAVE_REVIEW} from "../actions/product.action";

const initialState = {
    products: [],
    reviews: [],
}

const product = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_PRODUCTS: {
            return {
                ...state,
                products: payload
            }
        }
        case LOAD_REVIEWS: {
            return {
                ...state,
                reviews: payload
            }
        }
        case LEAVE_REVIEW: {
            return {
                ...state,
                reviews: payload
            }
        }
        default: {
            return state
        }
    }
}

export default product
