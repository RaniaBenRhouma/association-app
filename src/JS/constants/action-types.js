//actions sur event

//on cliquant sur un button paticipated
// on envoie l'id de l'evenement dans l'action pour que le 
// server renvoie la liste des evenements choisie vers le dachboard
// donc c"est seulement le status de l'evenent qui change 

export const PARTICIPATE = `PARTICIPATE`;
export const UNPARTICIPATE = `UNPARTICIPATE`;


//actions sur posts
// ajout post ( on cliquant on envoie un variable={userId: , contenu:" " } pour l'ajouter dans le db de post de ce user )

export const ADD_POST = `ADD_POST`;

// delete post ( on cliquant  on envoie l'id de ce post au db pour la suprimer )
// commenter un post
export const DELETE_POST = `DELETE_POST`;

// actions sur comments

// ajout comment (en cliquant  on envoie l'id de user ,  l'id du post  et le contenu du comment pour l'ajouter au db de comment)
export const ADD_COMMENT = `ADD_COMMENT`;

// delete comment (en cliquant  on envoie l'id du comment vers le BD pour le refiltrer le tableau des comments sans ce comment)
export const DELETE_COMMENT = `DELETE_COMMENT`;


// action  get forum () en page forum (on loading page get comments and posts with their IdUser) //we must use useEffect()    //(get ,sucess, fail)

//  action  get events() en page event    //(get ,sucess, fail)

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



