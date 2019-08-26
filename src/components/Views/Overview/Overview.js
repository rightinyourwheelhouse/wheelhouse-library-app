import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookActions from '../../../redux/actions/books';
import Book from '../../Book/Book';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.handleRentClicked = this.handleRentClicked.bind(this);
  }

  componentDidMount() {
    if (!this.props.userReducer.activeUser) {
      this.props.history.push('/users');
    }

    this.props.bookActions.fetchAllBooks();
  }

  handleRentClicked(bookId) {
    const { userReducer: { activeUser } } = this.props;
    console.log('%cRENT', 'background-color: #1962dd; padding: 5px; border-radius: 3px; font-weight: bold; color: white', activeUser);
    this.props.bookActions.rentBook(bookId, activeUser.id);
  }

  render() {
    const books = this.props.bookReducer.books.map(book => (
      <Book key={book.id} RentAction={this.handleRentClicked} bookData={book} />
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
