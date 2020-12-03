import {
    GET_PROFILE,
    GET_PROFILE_FAIL,
    GET_PROFILE_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGIN_USER,
    LOGOUT_USER,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_USER,
  } from '../constants/action-types';
  
  const initialState = {
    isConnected: false,
    loading: false,
    user: null,
    loggedUser:null,
    choosenEventsD:null,
    errors: null,
  };
  
  const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SIGNUP_USER:
        return {
          ...state,
          loading: true,
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          loading: false,
          user: payload,
          errors:null,
        };
      case SIGNUP_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
      case LOGIN_USER:
        return {
          ...state,
          loading: true,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          user:null,
          loggedUser:payload,
          errors:null,
          isConnected:true,


        };
        case LOGOUT_USER:
          return {
            ...state,
            loggedUser:null,
            choosenEventsD:null,
            isConnected:false,


          };
      case GET_PROFILE:
        return {
          ...state,
          loading: true,
        };
      case GET_PROFILE_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
      case GET_PROFILE_SUCCESS:
        return {
          ...state,
          loading: false,
          isConnected:true,
          choosenEventsD:payload,
          errors:null,

        };
      default:
        return state;
    }
  };
  export default userReducer;
  