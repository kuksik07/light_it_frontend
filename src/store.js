import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import auth from './redux/reducers/auth.reducer'
import product from './redux/reducers/product.reducer'
import review from './redux/reducers/review.reducer'

const reducers = combineReducers({
  auth,
  product,
  review
})

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(
    thunk,
    promiseMiddleware()
  )))

export default store
