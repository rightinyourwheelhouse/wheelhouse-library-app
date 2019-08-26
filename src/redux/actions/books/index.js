import * as actionTypes from './types';
import { baseURL, namespace } from '../../../utils/api';

const fetchAllBooksSuccess = books => ({ type: actionTypes.FETCH_ALL_BOOKS_SUCCESS, books });
const fetchAllBooksFailed = error => ({ type: actionTypes.FETCH_ALL_BOOKS_FAILED, error });

export function fetchAllBooks() {
  return (dispatch) => {
    fetch(`${baseURL}${namespace}/books`).then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error('Could not fetch books properly');
    }, (error) => {
      throw error;
    }).then(response => response.json())
      .then(users => dispatch(fetchAllBooksSuccess(users)))
      .catch((error) => {
        dispatch(fetchAllBooksFailed(error));
      });
  };
}

export function rentBook(bookId, userId) {
  return (dispatch) => {
    fetch(`${baseURL}${namespace}/books/${bookId}/rent`, {
      method: 'POST',
      headers: {
        'account-id': userId,
      },
    }).then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error('Could not fetch books properly');
    }, (error) => {
      throw error;
    }).catch((error) => {
      dispatch(fetchAllBooksFailed(error));
    });
  };
}
