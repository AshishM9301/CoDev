import { MESSAGE_SHOW, MESSAGE_CLEAR } from '../actions/types';

const initialState = {
  msg: {},
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MESSAGE_SHOW:
      return {
        msg: action.payload.message,
        id: action.payload.id,
      };
    case MESSAGE_CLEAR:
      return {
        ...state,
      };
    default:
      return state;
  }
}
