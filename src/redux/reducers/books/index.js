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
    default: return state;
  }
}
