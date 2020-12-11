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
  PARTICIPATE,
  PARTICIPATE_FAIL,
  PARTICIPATE_SUCCESS,
  UNPARTICIPATE,
  UNPARTICIPATE_FAIL,
  UNPARTICIPATE_SUCCESS,
} from "../constants/action-types";

const initialState = {
  isConnected: JSON.parse(localStorage.getItem('isConnected')) || false,
  loading: false,
  user: null,
  loggedUser: JSON.parse(localStorage.getItem('loggedUser')) || null,
  // choosenEventsIds:null, ////
  role:"none",
  choosenEventsD: null,
  errors: null,
  name: null,
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
        errors: null,
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
        user: null,
        loggedUser: payload,
        errors: null,
        isConnected: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loggedUser:null,
        choosenEventsIds: null,
        choosenEventsD: null,
        isConnected:false,
        errors: null,
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
        isConnected: true,
        choosenEventsD: payload,
        errors: null,
      };
    case PARTICIPATE:
      return {
        ...state,
        loading: true,
      };
    case PARTICIPATE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case PARTICIPATE_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedUser: payload,
        errors: null,
      };
    case UNPARTICIPATE:
      return {
        ...state,
        loading: true,
      };
    case UNPARTICIPATE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case UNPARTICIPATE_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedUser: payload,
        errors: null,
      };
    case `GETTING_USER`:
      return {
        ...state,
        loading: true,
      };
    case `GETTING_USER_SUCCESS`:
      return {
        ...state,
        loading: false,
        name: payload,
      };
    case `GETTING_USER_FAIL`:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};
export default userReducer;
