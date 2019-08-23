import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookActions from '../../../redux/actions/books';
import Book from '../../Book/Book';

class Overview extends Component {
  componentDidMount() {
    if (!this.props.userReducer.activeUser) {
      this.props.history.push('/users');
    }

    this.props.bookActions.fetchAllBooks();
  }

  render() {
    const books = this.props.bookReducer.books.map(book => (
      <Book key={book.id} bookData={book} />
    ));

    return (
      <>
        { books }
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  bookActions: bindActionCreators(bookActions, dispatch),
});

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
