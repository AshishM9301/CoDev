import { GET_ERROR, CLEAR_ERROR } from './types';

export const returnError = (errorMessage, id = null) => {
  return {
    type: GET_ERROR,
    payload: { errorMessage, id },
  };
};

export const clearError = (errorMessage, id = null) => {
  return {
    type: CLEAR_ERROR,
  };
};
