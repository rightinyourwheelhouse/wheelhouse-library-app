import * as bookActions from '../../actions/books/types';

const initialState = {
  isLoading: false,
  books: [],
};

export default function config(state = initialState, action) {
  switch (action.type) {
    case bookActions.FETCH_ALL_BOOKS_SUCCESS: {
      const booksWithFlags = action.books.map(book => ({
        ...book,
        expanded: false,
      }));

      return {
        ...state,
        books: booksWithFlags,
      };
    }
    case bookActions.ASSOCIATE_RENTAL_WITH_BOOK: {
      const { books } = state;
      const { bookId, user: { id: userId } } = action;

      const updatedBooks = [...books].map((book) => {
        const modifiedBook = { ...book };
        const { id: currentBookId } = book;

        if (bookId === currentBookId) {
          const timeStamp = new Date().toISOString();
          modifiedBook.rentee = userId;
          modifiedBook.rentalstartdate = timeStamp;
        }

        return modifiedBook;
      });

      return {
        ...state,
        books: updatedBooks,
      };
    }

    case bookActions.EXPAND_BOOK_INFO: {
      const updatedBooks = state.books.map((book) => {
        const newBook = { ...book, expanded: false };

        if (newBook.id === action.bookId) {
          newBook.expanded = !book.expanded;
        }

        return newBook;
      });

      return {
        ...state,
        books: updatedBooks,
      };
    }

    default: return state;
  }
}
