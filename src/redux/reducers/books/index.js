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
        key: book.id,
      }));

      return {
        ...state,
        books: booksWithFlags,
      };
    }
    case bookActions.UPDATE_BOOK_SUCCESS: {
      const { books } = state;
      const { id: bookId } = action.book;

      const updatedBooks = [...books].map((book) => {
        const modifiedBook = { ...book };
        const { id: currentBookId } = book;

        if (bookId === currentBookId) {
          return { ...action.book, key: action.book.id };
        }
        return modifiedBook;
      });

      return {
        ...state,
        books: updatedBooks,
      };
    }
    case bookActions.ADD_NEW_BOOK_SUCCESS: {
      const { books } = state;

      const updatedBooks = [...books].concat({ ...action.newBook, key: action.newBook.id });

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
