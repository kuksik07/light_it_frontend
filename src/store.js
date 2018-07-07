import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import auth from './redux/reducers/auth.reducer'
import product from './redux/reducers/product.reducer'

const reducers = combineReducers({
    auth,
    product,
})

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(
            thunk,
        )
    )
)

export default store