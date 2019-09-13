import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookActions from '../../../redux/actions/books';
import Book from '../../Book/Book';
import AddBookButton from '../../Book/AddBookButton';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.handleRentClicked = this.handleRentClicked.bind(this);
    this.handleAddClicked = this.handleAddClicked.bind(this);
  }

  componentDidMount() {
    if (!this.props.userReducer.activeUser) {
      this.props.history.push('/users');
    }

    this.props.bookActions.fetchAllBooks();
  }

  handleRentClicked(bookId) {
    const { userReducer: { activeUser } } = this.props;
    this.props.bookActions.rentBook(bookId, activeUser);
  }

  handleAddClicked() {
    const { history } = this.props;
    history.push('/books/add');
  }

  render() {
    const books = this.props.bookReducer.books.map(book => (
      <Book
        key={book.id}
        RentAction={this.handleRentClicked}
        bookData={book}
        Users={this.props.userReducer.users}
        Expanded={book.expanded}
      />
    ));

    return (
      <>
        { books }
        <AddBookButton Click={this.handleAddClicked} />
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
