export const FETCH_PRODUCTS_PENDING = 'spree/products/FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'spree/products/FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'spree/products/FETCH_PRODUCTS_ERROR';
export const CHANGE_PAGE = 'spree/products/CHANGE_PAGE'

const initialProductsState = {
  products: [],
  pending: false,
  error: null,
}

export const fetchProductsPending = () => {
  return {
    type: FETCH_PRODUCTS_PENDING
  }
}

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products
  }
}

export const fetchProductsError = (error) => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error
  }
}

export const productsReducer = (state = initialProductsState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS_PENDING: 
      return {
        ...state,
        pending: true,
      }
    case FETCH_PRODUCTS_SUCCESS: 
      return {
        ...state,
        pending: false,
        products: action.products
      }
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default: 
      return state
  }
}