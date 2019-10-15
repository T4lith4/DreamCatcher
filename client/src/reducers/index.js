//root reducer set up

import { combineReducers } from 'redux';
import dreamReducer from './dreamReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers ({
    dream: dreamReducer,
    error: errorReducer,
    auth: authReducer
  
});