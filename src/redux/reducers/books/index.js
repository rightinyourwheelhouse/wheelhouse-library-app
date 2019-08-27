import * as bookActions from '../../actions/books/types';

const initialState = {
  isLoading: false,
  books: [],
};

export default function config(state = initialState, action) {
  switch (action.type) {
    case bookActions.FETCH_ALL_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.books,
      };
    case bookActions.ASSOCIATE_RENTAL_WITH_BOOK: {
      let rentedBook;
      const filteredBooks = state.books.filter(book => action.bookId === book.id);
      const otherBooks = state.books.filter(book => action.bookId !== book.id);

      // Safe lookup of rental
      if (filteredBooks[0]) {
        const timeStamp = new Date().toISOString();
        [rentedBook] = filteredBooks;
        rentedBook.rentee = action.user.id;
        rentedBook.rentalstartdate = timeStamp;
      }

      return {
        ...state,
        books: [
          ...otherBooks,
          rentedBook,
        ],
      };
    }
    default: return state;
  }
}
