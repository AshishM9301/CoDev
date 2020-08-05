import {
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGN_OUT,
  REGISTERSUCCESS,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT,
  VERIFICATION_SUCCESS,
  VERIFICATION_FAIL,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAIL,
  DETAIL_UPDATING_SUCCESS,
  DETAIL_UPDATING_FAIL,
  USERS_LOADING_SUCCESS,
  USERS_LOADING_FAIL,
  USER_ACTIVATE_FAIL,
  USER_ACTIVATE_SUCCESS,
  ATTENDANCE_UPDATE_SUCCESS,
  ATTENDANCE_UPDATE_FAIL,
} from './types';

import { returnError } from './errorAction';

import Axios from 'axios';
import { getMessage } from './msgAction';
import { clickedPaymentButton } from './dashboardAction';

export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const myHeaders = new Headers();
  myHeaders.append('end-auth', `${getState().auth.token}`);

  console.log(myHeaders);
  await fetch('/api/users/auth', {
    method: 'GET',
    headers: myHeaders,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.isAuth) {
        dispatch({
          type: USER_LOADED,
          payload: data,
        });
      } else {
        console.log(data);
        dispatch(returnError(data.errorMessage, 'AUTH_ERROR'));
        dispatch({ type: AUTH_ERROR });
      }
    })
    .catch((err) => {});
};

export const signIn = (userId) => {
  return {
    type: GOOGLE_SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: GOOGLE_SIGN_OUT,
  };
};

export const login = (formValues) => {
  return (dispatch) => {
    const response = fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(getMessage(data.message, 'LOGIN_SUCCESS'));
          dispatch({ type: LOGIN_SUCCESS, payload: data });
        } else {
          console.log(data);
          dispatch(returnError(data.errorMessage, 'LOGIN_FAIL'));
          dispatch({
            type: LOGIN_FAIL,
          });
        }
      })
      .catch((error) => {});
  };
};

export const register = (formValues) => {
  return (dispatch) => {
    if (formValues.password !== formValues.repassword) {
      dispatch(returnError('Password did not Match', 'REGISTER_FAIL'));
      dispatch({
        type: REGISTER_FAIL,
      });
    } else {
      const response = fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            dispatch(getMessage(data.message, 'REGISTERSUCCESS'));
            dispatch({
              type: REGISTERSUCCESS,
              payload: data,
            });
          } else {
            dispatch(returnError(data.errorMessage, 'REGISTER_FAIL'));
            dispatch({
              type: REGISTER_FAIL,
            });
          }
        })
        .catch((err) => {});
    }
  };
};

export const logout = () => {
  const respose = fetch('/api/users/logout').then((res) => res.data);

  return {
    type: SIGN_OUT,
  };
};

export const configToken = (getState) => {
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  //If Token, add to headers
  if (token) {
    config.headers['end_auth'] = token;
  }

  return config;
};

export const verify = (formValues) => {
  return async (dispatch) => {
    await fetch('/api/users/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(getMessage(data.message, 'VERIFICATION_SUCCESS'));
          dispatch({
            type: VERIFICATION_SUCCESS,
            payload: data,
          });
        } else {
          dispatch(returnError(data.errorMessage, 'VERIFICATION_FAIL'));
          dispatch({
            type: VERIFICATION_FAIL,
          });
        }
      })
      .catch((err) => {});
  };
};

export const otpSend = () => {
  return (dispatch) => {
    fetch('/api/users/emailverify')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(getMessage(data.message, 'SEND_OTP_SUCCESS'));
          dispatch({
            type: SEND_OTP_SUCCESS,
            payload: data,
          });
        } else {
          dispatch(returnError(data.errorMessage, 'SEND_OTP_FAIL'));
          dispatch({
            type: SEND_OTP_FAIL,
          });
        }
      })
      .catch((err) => {});
  };
};

export const detailUpdater = (formValues) => {
  return (dispatch) => {
    if (formValues.password !== formValues.password2) {
      dispatch(returnError('Password did not Match', 'REGISTER_FAIL'));
      dispatch({
        type: REGISTER_FAIL,
      });
    } else {
      fetch('/api/users/detials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            dispatch(clickedPaymentButton('GET_PAYMENT'));
            dispatch(getMessage(data.message, 'DETAIL_UPDATING_SUCCESS'));
            dispatch({
              type: DETAIL_UPDATING_SUCCESS,
              payload: data,
            });
          } else {
            dispatch(returnError(data.errorMessage, 'DETAIL_UPDATING_FAIL'));

            dispatch({
              type: DETAIL_UPDATING_FAIL,
            });
          }
        })
        .catch((err) => {});
    }
  };
};

export const displayUser = () => {
  return async (dispatch) => {
    await fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(getMessage(data.message, 'USERS_LOADING_SUCCESS'));
          dispatch({
            type: USERS_LOADING_SUCCESS,
            payload: data,
          });
        } else {
          dispatch(returnError(data.errorMessage, 'USERS_LOADING_FAIL'));
          dispatch({
            type: USERS_LOADING_FAIL,
          });
        }
      })
      .catch((err) => {});
  };
};

export const activateUser = (formValues) => {
  return (dispatch) => {
    if (formValues.role !== 2) {
      dispatch(
        returnError(
          `${formValues.firstName} is not updated his Detail `,
          'USER_ACTIVATE_FAIL'
        )
      );
      dispatch({
        type: USER_ACTIVATE_FAIL,
      });
    } else {
      fetch('/api/users/activate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            dispatch(getMessage(data.message, 'USER_ACTIVATE_SUCCESS'));
            dispatch({
              type: USER_ACTIVATE_SUCCESS,
              payload: data,
            });
          } else {
            dispatch(returnError(data.errorMessage, 'USER_ACTIVATE_FAIL'));

            dispatch({
              type: USER_ACTIVATE_FAIL,
            });
          }
        })
        .catch((err) => {});
    }
  };
};

export const makeAttendance = () => {
  return async (dispatch) => {
    await fetch('/api/users/auth')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(getMessage(data.message, 'ATTENDANCE_UPDATE_SUCCESS'));
          dispatch({
            type: ATTENDANCE_UPDATE_SUCCESS,
            payload: data,
          });
        } else {
          console.log(data);
          dispatch(returnError(data.errorMessage, 'ATTENDANCE_UPDATE_FAIL'));
          dispatch({ type: ATTENDANCE_UPDATE_FAIL });
        }
      })
      .catch((err) => {});
  };
};
