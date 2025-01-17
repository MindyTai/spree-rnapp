import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from './redux'
import { client } from '../api'

export const fetchProducts = (page) => {
  return async (dispatch) => {
    dispatch(fetchProductsPending())
    const res = await client.products.list()

    if(res.isSuccess()){
      const products = res.success().data
      dispatch(fetchProductsSuccess(products))
    } else {
      const err = res.fail().data
      dispatch(fetchProductsError(err))
    }
  }
}