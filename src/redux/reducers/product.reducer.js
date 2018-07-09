import {LOAD_PRODUCTS, LOAD_PRODUCT, LOAD_REVIEWS, LEAVE_REVIEW,} from "../actions/product.action";

const initialState = {
    products: [],
    product: null,
    reviews: [],

    leaveReviewResponse: null
}

const product = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_PRODUCTS: {
            return {
                ...state,
                products: payload
            }
        }
        case LOAD_PRODUCT: {
            return {
                ...state,
                product: payload
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
                leaveReviewResponse: payload
            }
        }
        default: {
            return state
        }
    }
}

export default product
