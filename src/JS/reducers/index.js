import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import eventReducer from './eventReducer';


export default combineReducers({
  userReducer,postReducer,commentReducer,eventReducer,
});
