import { combineReducers } from 'redux';
import userReducer from './users';
import bookReducer from './books';
import messageReducer from './messages';

export default combineReducers({
  userReducer,
  bookReducer,
  messageReducer,
});
