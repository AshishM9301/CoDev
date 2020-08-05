import {
  GET_PROFILE,
  GET_PAYMENT,
  DETAIL_UPDATING_SUCCESS,
  DETAIL_UPDATING_FAIL,
  GET_PROGRESS,
  USER_ACTIVATE_SUCCESS,
  USERS_LOADING_SUCCESS,
  USERS_LOADING_FAIL,
} from '../actions/types';

const initialstate = {
  id: null,
  user: null,
  users: [],
  isLoading: true,
  message: null,
  updatingSuccess: false,
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case DETAIL_UPDATING_SUCCESS:
      return {
        message: action.payload,
        id: action.payload.id,
        updatingSuccess: true,
      };
    case DETAIL_UPDATING_FAIL:
      return {
        message: 'Error',
        id: action.payload.id,
        updatingSuccess: false,
      };
    case GET_PROFILE:
    case GET_PAYMENT:
    case GET_PROGRESS:
      return {
        id: action.payload.id,
      };
    case USERS_LOADING_SUCCESS:
      return {
        users: action.payload,
        isLoading: false,
      };
    case USERS_LOADING_FAIL:
      return {
        users: null,
        message: 'Error',
      };
    default:
      return state;
  }
}
