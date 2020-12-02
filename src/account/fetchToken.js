import { getAccessToken } from './redux'
import { client } from '../api'

export const fetchAccessToken = () => {
  return async (dispatch) => {
    const res = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })
    if(res.isSuccess()){
      const token = res.success().access_token
      dispatch(getAccessToken(token))
    }
  }
}