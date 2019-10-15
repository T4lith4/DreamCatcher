//Here we handle authorization
import axios from 'axios';
import { returnErrors } from './errorActions';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';

//Get the token from the state
export const loadUser = () => (dispatch, getState) => {
  //Change the value of user_loading form false to true
  dispatch({ type: USER_LOADING });

  //fetch the actual user
  axios
  //get token from the state through the route
    .get('/api/auth/user', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

//Register the user
export const register = ({ name, email, password }) => dispatch => {
  //Add headers so that raw json can be processed
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //Request body of the user
  const body = JSON.stringify({ name, email, password });
//fetch the body of the user or handle the error with the REGISTER_FAIL action
  axios
    .post('/api/users', body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

//Log the user in
export const login = ({ email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //Request body of user
  const body = JSON.stringify({ email, password });
//hit the api and return the user data through the payload
  axios
    .post('/api/auth', body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
  //should there be an error, the login needs to fail
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

//Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

//Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;

  //We set the header as we are sending json
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  //If there is token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};

