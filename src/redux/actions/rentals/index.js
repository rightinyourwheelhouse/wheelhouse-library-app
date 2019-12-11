import * as actionTypes from './types';
import { baseURL, namespace } from '../../../utils/api';

const fetchAllRentalsSuccess = books => ({ type: actionTypes.FETCH_ALL_BOOKS_SUCCESS, books });
const fetchAllRentalsFailed = error => ({ type: actionTypes.FETCH_ALL_BOOKS_FAILED, error });

export default function fetchAllRentals() {
  return (dispatch) => {
    fetch(`${baseURL}${namespace}/rentals`).then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error('Could not fetch rentals properly');
    }, (error) => {
      throw error;
    }).then(response => response.json())
      .then(books => dispatch(fetchAllRentalsSuccess(books)))
      .catch((error) => {
        dispatch(fetchAllRentalsFailed(error));
      });
  };
}
