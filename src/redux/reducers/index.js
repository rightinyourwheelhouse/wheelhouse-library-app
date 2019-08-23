import { combineReducers } from 'redux';
import userReducer from './users';
import bookReducer from './books';

export default combineReducers({
  userReducer,
  bookReducer,
});
