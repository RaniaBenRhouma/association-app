import {
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
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
  PARTICIPATE,
  PARTICIPATE_FAIL,
  PARTICIPATE_SUCCESS,
  UNPARTICIPATE,
  UNPARTICIPATE_FAIL,
  UNPARTICIPATE_SUCCESS,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  // GET_POST_USER_NAME,
  // GET_POST_USER_NAME_SUCCESS,
  // GET_POST_USER_NAME_FAIL,
  // GET_COMMENT_USER_NAME,
  // GET_COMMENT_USER_NAME_SUCCESS,
  // GET_COMMENT_USER_NAME_FAIL,
  ADD_EVENT,
  ADD_EVENT_FAIL,
  ADD_EVENT_SUCCESS,

} from "../constants/action-types";
import axios from "axios";

//BTn Participate
export const participate = ({ idUser, idEvent }) => async (dispatch,getState) => {

  dispatch({
    type: PARTICIPATE,
  });
  try {
    const sendIdChoosenEvent = await axios.put("/user/chooseEvent", {
      idUser,
      idEvent,
    });

    dispatch({
      type: PARTICIPATE_SUCCESS,
      payload: sendIdChoosenEvent.data,
    });
  } catch (error) {
    dispatch({
      type: PARTICIPATE_FAIL,
      payload: error,
    });
  }
  localStorage.setItem('loggedUser', JSON.stringify(getState().userReducer.loggedUser));

};

export const unparticipate = ({ idUser, idEvent }) => async (dispatch,getState) => {
  dispatch({
    type: UNPARTICIPATE,
  });
  try {
    const sendIdUnparticipatedEvent = await axios.put("/user/unChooseEvent", {
      idUser,
      idEvent,
    });
    dispatch({
      type: UNPARTICIPATE_SUCCESS,
      payload: sendIdUnparticipatedEvent.data,
    });
  } catch (error) {
    dispatch({
      type: UNPARTICIPATE_FAIL,
      payload: error,
    });
  }
  localStorage.setItem('loggedUser', JSON.stringify(getState().userReducer.loggedUser));
};

//BTn Sign Up
export const signUp = (newUser) => async (dispatch) => {
  dispatch({
    type: SIGNUP_USER,
  });
  try {
    const addReslt = await axios.post("/user/signUp", newUser);
    // console.log(`add response ${addReslt}`)
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

export const logIn = (loggedUser) => async (dispatch,getState) => {
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const logReslt = await axios.post("/user/logIn", loggedUser);
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
  localStorage.setItem('loggedUser', JSON.stringify(getState().userReducer.loggedUser));
  console.log(`logged user `, getState().userReducer.loggedUser);
  localStorage.setItem('isConnected', JSON.stringify(getState().userReducer.isConnected));

};

export const logOut = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
  localStorage.removeItem('loggedUser');
  localStorage.removeItem('isConnected');

};

//Get profile

export const getProfile = (id) => async (dispatch) => {
  // id  c'est l'id de loggedUser
  dispatch({
    type: GET_PROFILE,
  });
  try {
    const loadReslt = await axios.post("/user/profile", { id });

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: loadReslt.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error,
    });
  }
};

//getEvents

export const getEvents = () => async (dispatch) => {
  dispatch({
    type: GET_EVENTS,
  });
  try {
    const loadReslt = await axios.get("/events/eventsPage");

    dispatch({
      type: GET_EVENTS_SUCCESS,
      payload: loadReslt.data,
    });
  } catch (error) {
    dispatch({
      type: GET_EVENTS_FAIL,
      payload: error,
    });
  }
};

//getPosts

export const getPosts = () => async (dispatch) => {
  dispatch({
    type: GET_POSTS,
  });
  try {
    const loadPostsReslt = await axios.get("/forum/getPosts");

    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: loadPostsReslt.data,
    });
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAIL,
      payload: error,
    });
  }
};

//getComments
export const getComments = () => async (dispatch) => {
  dispatch({
    type: GET_COMMENTS,
  });
  try {
    const loadCommentsReslt = await axios.get("/forum/getComments");

    dispatch({
      type: GET_COMMENTS_SUCCESS,
      payload: loadCommentsReslt.data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMMENTS_FAIL,
      payload: error,
    });
  }
};

//add a post

export const addPost = ( idUser, content ) => async (dispatch) => {
  dispatch({
    type: ADD_POST,
  });
  try {
    const addPostReslt = await axios.post("/forum/addPost", { idUser, content });

    dispatch({
      type: ADD_POST_SUCCESS,
      payload: addPostReslt.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_POST_FAIL,
      payload: error.response,
    });
  }
};

//add a comment

export const addComment = ( idUser, idPost, content) => async (dispatch) => {
  // console.log(idUser, idPost, content )
  dispatch({
    type: ADD_COMMENT,
  });
  try {
    const addCommentReslt = await axios.post(`/forum/addComment`, { idUser,idPost,content });

    dispatch({
      type: ADD_COMMENT_SUCCESS,
      payload: addCommentReslt.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_COMMENT_FAIL,
      payload: error.response,
    });
  }
};

//delete a post

export const deletePost = (idPost) => async (dispatch) => {
  console.log(idPost)
  dispatch({
    type: DELETE_POST,
  });
  try {
    const deletePostReslt = await axios.delete(`/forum/deletePost/${ idPost }`);

    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: deletePostReslt.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_POST_FAIL,
      payload: error.response,
    });
  }
};
//delete a comment

export const deleteComment = ( idComment, idPost) => async (dispatch) => {
  console.log({ idComment, idPost })
  dispatch({
    type: DELETE_COMMENT,
  });
  try {
    const deleteCommentReslt = await axios.delete(`/forum/deleteComment/${idComment}/${idPost}`);

    dispatch({
      type: DELETE_COMMENT_SUCCESS,
      payload: deleteCommentReslt.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_COMMENT_FAIL,
      payload: error.response,
    });
  }
};

// //getPostUserName

// export const getPostUserName = (idUserP) => async (dispatch) => {
//   console.log(`idUser`, idUserP);
//   dispatch({
//     type: GET_POST_USER_NAME,
//   });
//   try {
//     const loadUserPostNameReslt = await axios.get("/forum/getPostUserName", {
//       idUserP,
//     });

//     if (loadUserPostNameReslt.status === 200) {
//       dispatch({
//         type: GET_POST_USER_NAME_SUCCESS,
//         payload: loadUserPostNameReslt.data,
//       });
//     }
//   } catch (error) {
//     dispatch({
//       type: GET_POST_USER_NAME_FAIL,
//       payload: error,
//     });
//   }
// };

// //getCommentUserName

// export const getCommentUserName = (idUserC) => async (dispatch) => {
//   dispatch({
//     type: GET_COMMENT_USER_NAME,
//   });
//   try {
//     const loadUserCommentNameReslt = await axios.get(
//       "/forum/getCommentUserName",
//       { idUserC }
//     );

//     dispatch({
//       type: GET_COMMENT_USER_NAME_SUCCESS,
//       payload: loadUserCommentNameReslt.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_COMMENT_USER_NAME_FAIL,
//       payload: error,
//     });
//   }
// };

// export const getUserById = (id) => async (dispatch) => {
//   dispatch({
//     type: `GETTING_USER`,
//   });
//   try {
//     const userName = await axios.get(`/user/getUserById/${id}`);
//     console.log('userName', userName)
//     dispatch({
//       type: `GETTING_USER_SUCCESS`,
//       payload: userName.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: `GETTING_USER_FAIL`,
//       payload: error,
//     });
//   }
// };

//add an event

export const addEvent = (newEvent) => async (dispatch) => {
  dispatch({
    type: ADD_EVENT,
  });
  try {
    const addEventReslt = await axios.post("/events/admin/addEvent", newEvent);
    dispatch({
      type: ADD_EVENT_SUCCESS,
      payload: addEventReslt.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_EVENT_FAIL,
      payload: error.response,
    });
  }
};

// get user name by his Id

    // const getuser = async () => {
    //   try {
    //     const userName = await Axios.get(`/user/getUserById/${comment.idUserC}`);

    //   } catch (error) {
    //     console.error(error);
    //   }
    // };



//     export const getUser = (id) => async (dispatch) => {
//   dispatch({
//     type: `GETTING_USER`,
//   });
//   try {
//     const userName = await axios.get(`/user/getUserById/${id}`);
//     console.log('userName', userName)
//     dispatch({
//       type: `GETTING_USER_SUCCESS`,
//       payload: userName.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: `GETTING_USER_FAIL`,
//       payload: error,
//     });
//   }
// };


