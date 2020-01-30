import { useCallback, useState } from 'react';
import useCookie from '../../hooks/useCookie';
import useToast, { MESSAGE_TYPES } from '../../hooks/useToast';
import { baseURL, namespace } from '../../utils/api';

export default () => {
  const [rentInProgress, setRentInProgress] = useState(false);
  const [userObject] = useCookie('user');
  const { showMessage } = useToast();

  const rentOrReturnBook = useCallback((book) => {
    async function rentBook(bookId, accessToken, userId) {
      return fetch(
        `${baseURL}${namespace}/books/${bookId}/rent`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'account-id': userId,
          },
          method: 'POST',
        }
      ).then(async (response) => {
        if (response.ok) {
          showMessage('It\'s yours... for now!', 'success', MESSAGE_TYPES.SUCCESS);
          return response.json();
        }
        const errorMessage = await response.text();
        throw new Error(errorMessage.length ? errorMessage : response.statusText);
      }).catch((error) => {
        showMessage(error.toString(), MESSAGE_TYPES.ERROR);
      });
    }

    async function returnBook(bookId, accessToken, userId) {
      return fetch(`${baseURL}${namespace}/books/${bookId}/return`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'account-id': userId,
          },
          method: 'POST',
        }).then(async (response) => {
        if (response.ok) {
          showMessage('Aaaaand it\'s gone', 'success', MESSAGE_TYPES.SUCCESS);
          return response.json();
        }
        const errorMessage = await response.text();
        throw new Error(errorMessage.length ? errorMessage : response.statusText);
      }).catch((error) => {
        showMessage(error.toString(), MESSAGE_TYPES.ERROR);
      });
    }

    const makeRental = async ({ rentee, id: bookId }) => {
      const {
        accessToken,
        user: {
          id: userId,
        },
      } = JSON.parse(userObject);

      setRentInProgress(true);
      let rentedBook;
      if (rentee === userId) {
        rentedBook = await returnBook(bookId, accessToken, userId);
      } else {
        rentedBook = await rentBook(bookId, accessToken, userId);
      }

      if (rentedBook) {
        setRentInProgress(false);
        return rentedBook;
      }

      return null;
    };

    if (!rentInProgress) {
      return makeRental(book);
    }

    return null;
  }, [rentInProgress, showMessage, userObject]);

  return {
    rentOrReturnBook,
  };
};
