import { FETCH_PRODUCTS_ERROR } from "../home/redux";

const PREFIX = 'ORDER.';

export const FETCH_ORDER_PENDING = 'spree/orders/FETCH_ORDER_PENDING'
export const FETCH_ORDER_SUCCESS = 'spree/orders/FETCH_ORDER_SUCCESS'
export const FETCH_ORDER_ERROR = 'spree/orders/FETCH_ORDER_ERROR'

const initialOrderState = {
  orders: [],
  pending: false,
  error: null,
}

export const fetchOrdersPending = () => {
  return {
    type: FETCH_ORDER_PENDING
  }
}

export const fetchOrdersSuccess = (orders) => {
  return {
    type: FETCH_ORDER_SUCCESS,
    orders
  }
}

export const fetchOrdersError = (error) => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error
  }
}

export const ordersReducer = (state = initialOrderState, action) => {
  switch(action.type){
    case FETCH_ORDER_PENDING: 
      return {
        ...state,
        pending: true
      }
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        pending: false,
        orders: action.orders
      }
    case FETCH_ORDER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default: 
      return state
  }
}