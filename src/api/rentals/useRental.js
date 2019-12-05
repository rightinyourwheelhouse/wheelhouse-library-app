import { useCallback, useState } from 'react';
import useCookie from '../../hooks/useCookie';
import { baseURL, namespace } from '../../utils/api';

export default () => {
  const [rentInProgress, setRentInProgress] = useState(false);
  const [userObject] = useCookie('user');

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
      ).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Could not fetch book ID ${bookId}`);
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
  }
};
