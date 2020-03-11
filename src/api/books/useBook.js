import { useState, useEffect } from 'react';

import { PENDING, REJECTED, RESOLVED } from '../../constants/loadingStates';
import { baseURL, namespace } from '../../utils/api';

export default (bookId) => {
  const [book, setBook] = useState({});
  const [status, setStatus] = useState(PENDING);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `${baseURL}${namespace}/books/${bookId}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'GET',
          }
        );

        if (response.ok) {
          const fetchedBook = await response.json();

          setBook(fetchedBook);
          setStatus(RESOLVED);
          return;
        }

        throw new Error();
      } catch (err) {
        setStatus(REJECTED);
        setError(`Could not fetch book ID ${bookId}`);
      }
    };

    if (bookId !== null) {
      fetchBook(bookId);
    }
  }, [bookId]);

  return { book, error, status };
};
