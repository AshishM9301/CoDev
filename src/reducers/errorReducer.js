import { GET_ERROR, CLEAR_ERROR } from '../actions/types';

const initialState = {
  errorMessage: {},
  success: null,
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERROR:
      return {
        errorMessage: action.payload.errorMessage,
        success: false,
        id: action.payload.id,
      };

    case CLEAR_ERROR:
      return {
        errorMessage: {},
        success: null,
        id: null,
      };
    default:
      return state;
  }
}
