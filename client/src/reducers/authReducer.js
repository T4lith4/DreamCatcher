import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from '../actions/types';
  
  //user authentication (when user is loading)
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
  };
  
  
  export default function(state = initialState, action) {
    switch (action.type) {
        //user loading is where we get the user from the backend and validating it
      case USER_LOADING:
        return {
          ...state,
          isLoading: true
        };
        //the user has been validated by the backend and is being fetched to the front
        //this is going to run with every request to see if the user is logge in or not
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload
        };
        //the user has successfully been logged in and gets a token
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false
        };
        //if the any part of the auth is not successful we want to clear out the user and token
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
      case REGISTER_FAIL:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false
        };
      default:

        return state;
    }
  }