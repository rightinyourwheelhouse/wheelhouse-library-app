import React, { useEffect, useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookActionFile from '../../../redux/actions/books';
import MenuBar from '../../Navigation/MenuBar/MenuBar';
import Book from '../../Book/Book';
import BookPlaceholder from '../../Book/BookPlaceholder';


const mapDispatchToProps = dispatch => ({
  bookActions: bindActionCreators(bookActionFile, dispatch),
});

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, mapDispatchToProps)(({
  bookActions,
  userReducer: {
    activeUser,
    users,
  },
  bookReducer,
  history,
}) => {
  useEffect(() => {
    if (!users.length) {
      bookActions.fetchAllBooks();
    }
  }, [users]);

  const handleRentClicked = useCallback((bookId) => {
    bookActions.rentBook(bookId, activeUser);
  }, [bookReducer.books]);

  const handleInfoClicked = useCallback((bookId) => {
    history.push(`/book/${bookId}`);
  }, [bookReducer.books]);

  const handleAddClicked = useCallback(() => {
    history.push('/books/add');
  }, [bookReducer.books]);

  const books = bookReducer.books.map((book) => {
    if (users.length) {
      return (
        <Book
          key={book.id}
          RentAction={handleRentClicked}
          InfoAction={handleInfoClicked}
          bookData={book}
          Users={users}
          Expanded={book.expanded} />
      );
    }
    return null;
  });

  return (
    <>
      <MenuBar Title="Books" history={history} />
      { books }
      <BookPlaceholder Action={handleAddClicked} />
    </>
  );
});
