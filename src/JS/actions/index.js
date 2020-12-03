import {
    PARTICIPATE,
    UNPARTICIPATE,
    SIGNUP_USER,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_USER,
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAIL,

  } from '../constants/action-types';
  import axios from 'axios'


//BTn Participate
  export const participate = ({id_User, id_event}) => async (dispatch) => {
        const sendIdChoosenEvent = await axios.put('/events/chooseEvent', {id_User, id_event});

        dispatch({
          type: PARTICIPATE,
          payload: sendIdChoosenEvent.data,
        });
      
      }
    

  export const unparticipate = ({id_User, id_event}) => async (dispatch) => {

        const sendIdUnparticipatedEvent  = await axios.put('/events/unChooseEvent', {id_User, id_event});

        dispatch({
          type: UNPARTICIPATE,
          payload: sendIdUnparticipatedEvent.data,
        });

        
  };

  //BTn Sign Up
  export const signUp = (newUser) => async (dispatch) => {

      dispatch({
        type: SIGNUP_USER,
      });
      try {
        const addReslt = await axios.post('/user/signUp', newUser);
        console.log(`add response ${addReslt}`)
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: addReslt.data,
        });
      } catch (error) {
        dispatch({
          type: SIGNUP_FAIL,
          payload: error.response,
        });
      }
    }; 

  //Btn Log In 

  export const logIn = (loggedUser) => async (dispatch) => {

    dispatch({
      type: LOGIN_USER,
    });
    try {
      const logReslt = await axios.post('/user/logIn', loggedUser);
      console.log(`add response ${loggedUser}`)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: logReslt.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response,
      });
    }
  }; 

  
  export const logOut = () => (dispatch) => {

    dispatch({
      type: LOGOUT_USER,
    });
  };

  //Get profile

    export const getProfile = (id_loggedUser) => async (dispatch) => {

      dispatch({
        type: GET_PROFILE,
      });
      try {
        const loadReslt = await axios.get('/user/profile', id_loggedUser);
        dispatch({
          type: GET_PROFILE_SUCCESS,
          payload: loadReslt.data,
        });
      } catch (error) {
        dispatch({
          type: GET_PROFILE_FAIL,
          payload: error.response,
        });
      }
    }; 
