import * as actionTypes from './types';
import { baseURL, namespace } from '../../utils/api';

const fetchAllUsersSuccess = users => ({ type: actionTypes.FETCH_ALL_USERS_SUCCESS, users });

export function fetchAllUsers() {
  const users = [];

  fetch(`${baseURL}${namespace}/users`).then(console.log);

  return (dispatch) => {
    dispatch(fetchAllUsersSuccess(users));
  };
}
