import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import useCookie from '../../hooks/useCookie';
import { baseURL, namespace } from '../../utils/api';
import { showErrorMessage, showSuccessMessage } from '../../redux/actions/messages';

export default () => {
  const [rentInProgress, setRentInProgress] = useState(false);
  const [userObject] = useCookie('user');
  const dispatch = useDispatch();

  const rentBook = useCallback((bookId) => {
    const makeRental = async () => {
      const {
        accessToken,
        user: {
          id: userId,
        },
      } = JSON.parse(userObject);

      setRentInProgress(true);
      const rentedBook = await fetch(
        `${baseURL}${namespace}/books/${bookId}/rent`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
            'account-id': userId,
          },
          method: 'POST',
        }
      ).then(async (response) => {
        if (response.ok) {
          dispatch(showSuccessMessage('It\'s yours... for now!'));
          return response.json();
        }
        const errorMessage = await response.text();
        throw new Error(errorMessage.length ? errorMessage : response.statusText);
      }).catch((error) => {
        dispatch(showErrorMessage(error.toString()));
      });

      if (rentedBook) {
        setRentInProgress(false);
        return rentedBook;
      }

      return null;
    };

    if (!rentInProgress) {
      return makeRental(bookId);
    }

    return null;
  }, [userObject]);

  return {
    rentBook,
  };
};
