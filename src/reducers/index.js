import { combineReducers } from 'redux';
import authReducer from './authReducer';
import msgReducer from './msgReducer';
import errorReducer from './errorReducer';
import dashboardReducer from './dashboardReducer';
import verifyReducer from './verifyReducer';

export default combineReducers({
  msg: msgReducer,
  auth: authReducer,
  error: errorReducer,
  dashboard: dashboardReducer,
  verfication: verifyReducer,
});
