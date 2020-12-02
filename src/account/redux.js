const PREFIX = 'ACCOUNT.';

const LOGIN_REQUEST = `${PREFIX}_LOGIN_REQUEST`;
const LOGOUT_REQUEST = `${PREFIX}_LOGOUT_REQUEST`
const GET_ACCESS_TOKEN = `${PREFIX}_GET_ACCESS_TOKEN`;

export const initialState = {
  accessToken: null,
  refreshToken: null,
  isLogIn: false
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const getAccessToken = (token) => {
  return {
    type: GET_ACCESS_TOKEN,
    accessToken: token
  }
}

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  }
}

export const accountReducer = (state=initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLogIn: true
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLogIn: false,
        accessToken: null
      }
    case GET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken
      }
    default: 
      return state
  }
}