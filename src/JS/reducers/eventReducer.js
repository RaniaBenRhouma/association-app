import {
    GET_EVENTS,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAIL,
    ADD_EVENT,
    ADD_EVENT_FAIL,
    ADD_EVENT_SUCCESS,
  


  } from '../constants/action-types';
  
  const initialState = {
    loading: false,
    events: null,
    isAdded:false,
    errors: null,
  };
  
  const eventReducer = (state = initialState, { type, payload }) => {
    switch (type) {

      case GET_EVENTS:
        return {
          ...state,
          loading: true,
        };
      case GET_EVENTS_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
      case GET_EVENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          events:payload,
          errors:null,

        };
        case ADD_EVENT:
          return {
            ...state,
            loading: true,
          };
        case ADD_EVENT_FAIL:
          return {
            ...state,
            loading: false,
            errors: payload,
          };
        case ADD_EVENT_SUCCESS:
          return {
            ...state,
            loading: false,
            isAdded: true,
            errors:null,
  
          };
  
      default:
        return state;
    }
  };
  export default eventReducer;
  