import * as actionTypes from './types';
import { baseURL, namespace } from '../../../utils/api';

const fetchAllBooksSuccess = books => ({ type: actionTypes.FETCH_ALL_BOOKS_SUCCESS, books });
const fetchAllBooksFailed = error => ({ type: actionTypes.FETCH_ALL_BOOKS_FAILED, error });

const associateRentalToBook = (bookId, user) => ({
  type: actionTypes.ASSOCIATE_RENTAL_WITH_BOOK,
  bookId,
  user,
});

export function addBook(ISBN, activeUser, isOwner) {
  return (dispatch) => {
    fetch(`${baseURL}${namespace}/books`, {
      method: 'POST',
      headers: {
        'account-id': activeUser.id,
      },
      body: JSON.stringify({
        ISBN,
        ownerid: isOwner ? activeUser.id : null,
      }),
    }).then((response) => {
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

export function expandBookInformation(bookId) {
  return { type: actionTypes.EXPAND_BOOK_INFO, bookId };
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
      dispatch(expandBookInformation(bookId));
    }).catch((error) => {
      dispatch(fetchAllBooksFailed(error));
    }));
}
