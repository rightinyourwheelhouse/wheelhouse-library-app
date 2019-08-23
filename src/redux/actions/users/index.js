import * as actionTypes from './types';
import { baseURL, namespace } from '../../../utils/api';

const fetchAllUsersSuccess = users => ({ type: actionTypes.FETCH_ALL_USERS_SUCCESS, users });
const fetchAllUsersFailed = error => ({ type: actionTypes.FETCH_ALL_USERS_FAILED, error });

export const setActiveUser = user => ({ type: actionTypes.SET_ACTIVE_USER, user });

export function fetchAllUsers() {
  return (dispatch) => {
    fetch(`${baseURL}${namespace}/users`).then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error('Could not fetch users properly');
    }, (error) => {
      throw error;
    }).then(response => response.json())
      .then(users => dispatch(fetchAllUsersSuccess(users)))
      .catch((error) => {
        dispatch(fetchAllUsersFailed(error));
      });
  };
}
