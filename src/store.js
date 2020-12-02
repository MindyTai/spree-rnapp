import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { productsReducer } from './home/redux';
import { accountReducer } from './account/redux'

export const store = createStore(
  combineReducers({
    productsReducer,
    accountReducer
  }),
  compose(
    applyMiddleware(thunk)
  )
)
