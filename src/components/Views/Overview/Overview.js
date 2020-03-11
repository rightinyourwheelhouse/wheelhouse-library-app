import React, { useEffect, useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookActionFile from '../../../redux/actions/books';
import Book from '../../Book/Book';
import BookPlaceholder from '../../Book/BookPlaceholder';

import Navigation from '../../Navigation/Navigation';

import useRental from '../../../api/rentals/useRental';


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
  const { rentOrReturnBook } = useRental();

  useEffect(() => {
    bookActions.fetchAllBooks();
  }, [bookActions]);

  const handleRentClicked = useCallback(async (data) => {
    const { updateBook } = bookActions;

    updateBook(await rentOrReturnBook(data));
  }, [bookActions, rentOrReturnBook]);

  const handleInfoClicked = useCallback((bookId) => {
    history.push(`/book/${bookId}`);
  }, [history]);

  const handleAddClicked = useCallback(() => {
    history.push('/books/add');
  }, [history]);

  const { books } = bookReducer;

  const onBookSelect = useCallback(
    (id) => {
      const { expandBookInformation } = bookActions;
      expandBookInformation(id);
    },
    [bookActions],
  );

  return (
    <>
      <Navigation Title="Books" />
      {
        books.map((book) => {
          const { id, expanded, rentee } = book;

          if (users.length) {
            return (
              <Book
                key={id}
                data={book}
                onSelect={onBookSelect}
                expanded={expanded}
                onRent={handleRentClicked}
                onInfo={handleInfoClicked}
                rentable={!rentee}
                returnable={!!rentee && rentee === activeUser.id} />
            );
          }
          return null;
        })
      }
      <BookPlaceholder Action={handleAddClicked} />
    </>
  );
});
