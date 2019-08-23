import * as actionTypes from './types';
import { baseURL, namespace } from '../../../utils/api';

const fetchAllUsersSuccess = users => ({ type: actionTypes.FETCH_ALL_USERS_SUCCESS, users });

export function fetchAllUsers() {
  return (dispatch) => {
    fetch(`${baseURL}${namespace}/users`)
      .then(response => response.json())
      .then(users => dispatch(fetchAllUsersSuccess(users)));
  };
}
