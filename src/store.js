import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { productsReducer } from './home/redux';
import { accountReducer } from './account/redux';
import { ordersReducer } from './order/redux';

export const store = createStore(
  combineReducers({
    productsReducer,
    accountReducer,
    ordersReducer
  }),
  compose(
    applyMiddleware(thunk)
  )
)
