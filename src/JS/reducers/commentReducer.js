import {
ADD_COMMENT,
ADD_COMMENT_SUCCESS,
ADD_COMMENT_FAIL,
DELETE_COMMENT,
DELETE_COMMENT_SUCCESS,
DELETE_COMMENT_FAIL,
GET_COMMENTS,
GET_COMMENTS_SUCCESS,
GET_COMMENTS_FAIL,
GET_COMMENT_USER_NAME,
GET_COMMENT_USER_NAME_SUCCESS,
GET_COMMENT_USER_NAME_FAIL,


  } from '../constants/action-types';
  
  const initialState = {
    loading: false,
    comments: null,
    addedComment:null,
    deletedComment:null,
    gettedCUserName:null,
    errors: null,
  };
  
  const commentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADD_COMMENT:
        return {
          ...state,
          loading: true,
        };
      case ADD_COMMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          errors:null,
          addedComment:payload,

        };
      case ADD_COMMENT_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
      case DELETE_COMMENT:
        return {
          ...state,
          loading: true,
        };
      case DELETE_COMMENT_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
      case DELETE_COMMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          errors:null,
          deletedComment: payload,

        };
      case GET_COMMENTS:
        return {
          ...state,
          loading: true,
        };
      case GET_COMMENTS_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
      case GET_COMMENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          comments:payload,
          errors:null,
        };
        case GET_COMMENT_USER_NAME:
          return {
            ...state,
            loading: true,
          };
        case GET_COMMENT_USER_NAME_FAIL:
          return {
            ...state,
            loading: false,
            errors: payload,
          };
        case GET_COMMENT_USER_NAME_SUCCESS:
          return {
            ...state,
            loading: false,
            gettedCUserName:payload,
            errors:null,
          };  

      default:
        return state;
    }
  };
  export default commentReducer;
  