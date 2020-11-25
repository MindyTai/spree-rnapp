import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { productsReducer } from './home/reduxStore';

export const store = createStore(
  combineReducers({
    productsReducer
  }),
  // persistedState,
  compose(
    applyMiddleware(thunk)
  )
)
