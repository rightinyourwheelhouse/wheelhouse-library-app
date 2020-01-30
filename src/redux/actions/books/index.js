import * as actionTypes from './types';
import { baseURL, namespace } from '../../../utils/api';

const fetchAllBooksSuccess = books => ({ type: actionTypes.FETCH_ALL_BOOKS_SUCCESS, books });
const fetchAllBooksFailed = error => ({ type: actionTypes.FETCH_ALL_BOOKS_FAILED, error });

const addNewBookSuccess = newBook => ({
  type: actionTypes.ADD_NEW_BOOK_SUCCESS,
  newBook,
});

const addNewBookFailed = error => ({
  type: actionTypes.ADD_NEW_BOOK_FAILED,
  error,
});

const updateBookSuccess = book => ({
  type: actionTypes.UPDATE_BOOK_SUCCESS,
  book,
});

export function addBook(ISBN, activeUser, isOwner) {
  return (dispatch) => {
    const headers = {
      'account-id': activeUser.id,
      'Content-Type': 'application/json',
    };

    return fetch(`${baseURL}${namespace}/books`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        ISBN,
        ownerId: isOwner ? activeUser.id : null,
      }),
    }).then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error('Could not add a new book');
    }, (error) => {
      throw error;
    }).then(response => response.json())
      .then(books => dispatch(addNewBookSuccess(books)))
      .catch((error) => {
        dispatch(addNewBookFailed(error));
      });
  };
}

export function updateBook(book) {
  return (dispatch) => {
    dispatch(updateBookSuccess(book));
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
