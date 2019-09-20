import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookActions from '../../../redux/actions/books';
import MenuBar from '../../Navigation/MenuBar/MenuBar';
import Book from '../../Book/Book';
import BookPlaceholder from '../../Book/BookPlaceholder';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.handleRentClicked = this.handleRentClicked.bind(this);
    this.handleInfoClicked = this.handleInfoClicked.bind(this);
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

  handleInfoClicked(bookId) {
    const { history } = this.props;

    history.push(`/book/${bookId}`);
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
        InfoAction={this.handleInfoClicked}
        bookData={book}
        Users={this.props.userReducer.users}
        Expanded={book.expanded}
      />
    ));

    return (
      <>
        <MenuBar Title="Books" />
        { books }
        <BookPlaceholder Action={this.handleAddClicked} />
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
