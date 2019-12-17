import { useCallback, useState } from 'react';
import useCookie from '../../hooks/useCookie';
import useToast, { MESSAGE_TYPES } from '../../hooks/useToast';
import { baseURL, namespace } from '../../utils/api';

export default () => {
  const [rentInProgress, setRentInProgress] = useState(false);
  const [userObject] = useCookie('user');
  const { showMessage } = useToast();

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
          showMessage('It\'s yours... for now!', 'success', MESSAGE_TYPES.SUCCESS);
          return response.json();
        }
        const errorMessage = await response.text();
        throw new Error(errorMessage.length ? errorMessage : response.statusText);
      }).catch((error) => {
        showMessage(error.toString(), MESSAGE_TYPES.ERROR);
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
