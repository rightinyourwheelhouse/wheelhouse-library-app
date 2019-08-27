import * as actionTypes from './types';
import { baseURL, namespace } from '../../../utils/api';

const fetchAllBooksSuccess = books => ({ type: actionTypes.FETCH_ALL_BOOKS_SUCCESS, books });
const fetchAllBooksFailed = error => ({ type: actionTypes.FETCH_ALL_BOOKS_FAILED, error });

const associateRentalToBook = (bookId, user) => ({
  type: actionTypes.ASSOCIATE_RENTAL_WITH_BOOK,
  bookId,
  user,
});

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
      .then(books => dispatch(fetchAllBooksSuccess(books)))
      .catch((error) => {
        dispatch(fetchAllBooksFailed(error));
      });
  };
}

export function rentBook(bookId, activeUser) {
  return dispatch => (
    fetch(`${baseURL}${namespace}/books/${bookId}/rent`, {
      method: 'POST',
      headers: {
        'account-id': activeUser.id,
      },
    }).then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error('Could not fetch books properly');
    }, (error) => {
      throw error;
    }).then(() => {
      dispatch(associateRentalToBook(bookId, activeUser));
    }).catch((error) => {
      dispatch(fetchAllBooksFailed(error));
    }));
}
