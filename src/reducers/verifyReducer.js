import {
  SEND_OTP_FAIL,
  VERIFICATION_SUCCESS,
  SEND_OTP_SUCCESS,
  VERIFICATION_FAIL,
} from '../actions/types';

const initialState = {
  role: null,
  isVerified: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEND_OTP_FAIL:
    case SEND_OTP_SUCCESS:
    case VERIFICATION_SUCCESS:
      return {
        ...state,
        isVerified: true,
        role: action.payload,
      };
    case VERIFICATION_FAIL:
      return {
        ...state,
        isVerified: false,
        role: action.payload,
      };
    default:
      return { ...state };
  }
}
