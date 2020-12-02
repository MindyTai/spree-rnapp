import { fetchOrdersPending, fetchOrdersSuccess, fetchOrdersError } from './redux'
import { client } from '../api'

export const fetchOrders = (token) => {
  return async (dispatch) => {
    dispatch(fetchOrdersPending())
    const res = await client.account.completedOrdersList({ bearerToken: token })

    if(res.isSuccess()){
      const orders = res.success().data
      dispatch(fetchOrdersSuccess(orders))
    } else {
      const err = res.fail().data
      dispatch(fetchOrdersError(err))
    }
  }
}