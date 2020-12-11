import {
ADD_POST,
ADD_POST_SUCCESS,
ADD_POST_FAIL,
DELETE_POST,
DELETE_POST_SUCCESS,
DELETE_POST_FAIL,
GET_POSTS,
GET_POSTS_SUCCESS,
GET_POSTS_FAIL,
GET_POST_USER_NAME,
GET_POST_USER_NAME_SUCCESS,
GET_POST_USER_NAME_FAIL,


  } from '../constants/action-types';
  
  const initialState = {
    loading: false,
    posts: null,
    addedPost:null,
    deletedPost:null,
    gettedPUserName:null,
    errors: null,
  };
  
  const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADD_POST:
        return {
          ...state,
          loading: true,
        };
      case ADD_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          addedPost:payload,
          errors:null,
        };
      case ADD_POST_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
      case DELETE_POST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_POST_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
      case DELETE_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          deletedPost: payload,
          errors:null,

        };
      case GET_POSTS:
        return {
          ...state,
          loading: true,
        };
      case GET_POSTS_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
      case GET_POSTS_SUCCESS:
        return {
          ...state,
          loading: false,
          posts:payload,
          errors:null,
        };
        case GET_POST_USER_NAME:
          return {
            ...state,
            loading: true,
          };
        case GET_POST_USER_NAME_FAIL:
          return {
            ...state,
            loading: false,
            errors: payload,
          };
        case GET_POST_USER_NAME_SUCCESS:
          return {
            ...state,
            loading: false,
            gettedPUserName:payload,
            errors:null,
          };  
  
      default:
        return state;
    }
  };
  export default postReducer;
  