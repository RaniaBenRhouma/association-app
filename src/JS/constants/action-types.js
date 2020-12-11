//actions sur event

//on cliquant sur un button paticipated
// on envoie l'id de l'evenement dans l'action pour que le 
// server renvoie la liste des evenements choisie vers le dachboard
// donc c"est seulement le status de l'evenent qui change 

export const PARTICIPATE = `PARTICIPATE`;
export const PARTICIPATE_FAIL = `PARTICIPATE_FAIL`;
export const PARTICIPATE_SUCCESS = `PARTICIPATE_SUCCESS`;

export const UNPARTICIPATE = `UNPARTICIPATE`;
export const UNPARTICIPATE_FAIL = `UNPARTICIPATE_FAIL`;
export const UNPARTICIPATE_SUCCESS = `UNPARTICIPATE_SUCCESS`;


//actions sur posts
// ajout post ( on cliquant on envoie un variable={userId: , contenu:" " } pour l'ajouter dans le db de post de ce user )

export const ADD_POST = `ADD_POST`;
export const ADD_POST_SUCCESS = `ADD_POST_SUCCESS`;
export const ADD_POST_FAIL = `ADD_POST_FAIL`;


// delete post ( on cliquant  on envoie l'id de ce post au db pour la suprimer )
// commenter un post
export const DELETE_POST = `DELETE_POST`;
export const DELETE_POST_SUCCESS = `DELETE_POST_SUCCESS`;
export const DELETE_POST_FAIL = `DELETE_POST_FAIL`;


// actions sur comments

// ajout comment (en cliquant  on envoie l'id de user ,  l'id du post  et le contenu du comment pour l'ajouter au db de comment)
export const ADD_COMMENT = `ADD_COMMENT`;
export const ADD_COMMENT_SUCCESS = `ADD_COMMENT_SUCCESS`;
export const ADD_COMMENT_FAIL = `ADD_COMMENT_FAIL`;


// delete comment (en cliquant  on envoie l'id du comment vers le BD pour le refiltrer le tableau des comments sans ce comment)
export const DELETE_COMMENT = `DELETE_COMMENT`;
export const DELETE_COMMENT_SUCCESS = `DELETE_COMMENT_SUCCESS`;
export const DELETE_COMMENT_FAIL = `DELETE_COMMENT_FAIL`;


// action  get forum () en page forum (on loading page get comments and posts with their IdUser) //we must use useEffect()    //(get ,sucess, fail)

//  action  get events() en page event    //(get ,sucess, fail)

export const GET_EVENTS_SUCCESS = `GET_EVENTS_SUCCESS`;
export const GET_EVENTS_FAIL = `GET_EVENTS_FAIL`;
export const GET_EVENTS = `GET_EVENTS`;








// action get profile()  en dachboard page  get user img , name, chosen events   //(get ,sucess, fail)

//action update profile() //profile setting


// actions sur user 

// sign up (sign up ,sucess, fail)
// log in (log in ,success, fail)

export const SIGNUP_USER = `SIGNUP_USER`;
export const SIGNUP_SUCCESS = `SIGNUP_SUCCESS`;
export const SIGNUP_FAIL = `SIGNUP_FAIL`;

export const LOGIN_USER = `LOGIN_USER`;
export const LOGIN_SUCCESS = `LOGIN_SUCCESS`;
export const LOGIN_FAIL = `LOGIN_FAIL`;

export const LOGOUT_USER = `LOGOUT_USER`;


export const GET_PROFILE = `GET_PROFILE`;
export const GET_PROFILE_SUCCESS = `GET_PROFILE_SUCCESS`;
export const GET_PROFILE_FAIL = `GET_PROFILE_FAIL`;


export const GET_POSTS = `GET_POSTS`;
export const GET_POSTS_SUCCESS = `GET_POSTS_SUCCESS`;
export const GET_POSTS_FAIL = `GET_POSTS_FAIL`;


export const GET_COMMENTS = `GET_COMMENTS`;
export const GET_COMMENTS_SUCCESS = `GET_COMMENTS_SUCCESS`;
export const GET_COMMENTS_FAIL = `GET_COMMENTS_FAIL`;


export const GET_POST_USER_NAME = `GET_POST_USER_NAME`;
export const GET_POST_USER_NAME_SUCCESS = `GET_POST_USER_NAME_SUCCESS`;
export const GET_POST_USER_NAME_FAIL = `GET_POST_USER_NAME_FAIL`;
export const GET_COMMENT_USER_NAME = `GET_COMMENT_USER_NAME`;
export const GET_COMMENT_USER_NAME_SUCCESS = `GET_COMMENT_USER_NAME_SUCCESS`;
export const GET_COMMENT_USER_NAME_FAIL = `GET_COMMENT_USER_NAME_FAIL`;

export const ADD_EVENT = `ADD_EVENT`;
export const ADD_EVENT_FAIL  = `ADD_EVENT_FAIL`;
export const ADD_EVENT_SUCCESS  = `ADD_EVENT_SUCCESS`;
