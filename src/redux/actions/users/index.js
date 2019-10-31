import * as actionTypes from './types';
import { baseURL, namespace } from '../../../utils/api';

const fetchAllUsersSuccess = users => ({ type: actionTypes.FETCH_ALL_USERS_SUCCESS, users });
const fetchAllUsersFailed = error => ({ type: actionTypes.FETCH_ALL_USERS_FAILED, error });

export const setActiveUser = user => ({ type: actionTypes.SET_ACTIVE_USER, user });

export function login(code) {
  return () => {
    fetch(`${baseURL}${namespace}/auth/slack?code=${code}`).then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error('Could not log in properly');
    }, (error) => {
      throw error;
    }).then(response => response.json())
      .then((response) => {
        console.log('%cLOGIN RESPONSE', 'background-color: #5a9ac8; padding: 5px; border-radius: 3px; font-weight: bold; color: white', response);
      });
  };
}

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
