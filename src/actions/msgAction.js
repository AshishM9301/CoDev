import { MESSAGE_CLEAR, MESSAGE_SHOW } from './types';

export const getMessage = (message, id = null) => {
  return {
    type: MESSAGE_SHOW,
    payload: { message, id },
  };
};

export const clearMessage = () => {
  return {
    type: MESSAGE_CLEAR,
  };
};
