import {
  REGISTERSUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  SIGN_OUT,
  USER_LOADING,
  USER_LOADED,
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isLoading: false,
  isSignedIn: null,
  isAuthenticated: false,
  isLogin: null,
  isAdmin: false,
  user: null,
  success: null,
  verified: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isAuthenticated: true,
        isAdmin: action.payload.user.isAdmin,
        verified: action.payload.user,
        user: action.payload,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        isLogin: true,
        user: action.payload,
        isAdmin: action.payload.user.isAdmin,
        verified: action.payload.user,
      };

    case GOOGLE_SIGN_IN:
    case REGISTERSUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
        verified: action.payload.user,
        isAuthenticated: true,
        isLoading: false,
        success: true,
      };
    case AUTH_ERROR:
    case GOOGLE_SIGN_OUT:
    case SIGN_OUT:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        msg: null,
        token: null,
        user: null,
        isAdmin: false,
        isSignedIn: false,
        googleUserId: null,
        isLogin: false,
        isAuthenticated: false,
        isLoading: false,
        success: false,
        verified: false,
      };
    default:
      return state;
  }
}
