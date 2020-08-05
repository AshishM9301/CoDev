import { GET_PAYMENT, GET_PROFILE, GET_PROGRESS } from './types';

export const clickedProfileButton = (id = null) => {
  return {
    type: GET_PROFILE,
    payload: { id },
  };
};

export const clickedPaymentButton = (id = null) => {
  return {
    type: GET_PAYMENT,
    payload: { id },
  };
};

export const clickedProgressButton = (id = null) => {
  return {
    type: GET_PROGRESS,
    payload: { id },
  };
};
