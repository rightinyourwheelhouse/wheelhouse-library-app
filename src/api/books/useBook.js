import { useState, useEffect } from 'react';
import { baseURL, namespace } from '../../utils/api';

export default (bookId) => {
  const [book, setBook] = useState();

  useEffect(() => {
    const fetchBook = async () => {
      const fetchedBook = await fetch(
        `${baseURL}${namespace}/books/${bookId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET',
        }
      ).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Could not fetch book ID ${bookId}`);
      });

      if (fetchedBook) {
        setBook(fetchedBook);
      }
    };

    if (bookId !== null) {
      fetchBook(bookId);
    }
  }, [bookId]);

  return { book };
};
