import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookActionFile from '../../redux/actions/books';
import StatusText from './StatusText';
import ActionButton from '../Button/ActionButton';
import useRental from '../../api/rentals/useRental';
import './Book.scss';

const mapDispatchToProps = dispatch => ({
  bookActions: bindActionCreators(bookActionFile, dispatch),
});

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, mapDispatchToProps)(({
  bookData,
  InfoAction,
  Users,
  Expanded,
  ActiveUser,
  bookActions,
}) => {
  const { rentOrReturnBook } = useRental();

  const handleRent = async () => {
    bookActions.updateBook(await rentOrReturnBook(bookData));
  };

  const handleInfo = () => {
    InfoAction(bookData.id);
  };

  return (
    <div className={`book-row-container ${Expanded ? 'expanded' : ''}`}>
      <div onClick={() => bookActions.expandBookInformation(bookData.id)} role="button" className="book">
        <img src={bookData.coverimg} alt="Book cover" />
        <div className="info">
          <h2 className="book-title">{bookData.title}</h2>
          <StatusText Users={Users} bookData={bookData} />
        </div>
      </div>
      <div className="actions-container">
        <ActionButton onClick={handleRent} type="button" color="primary" isDisabled={bookData.rentee && bookData.rentee !== ActiveUser.id}>
          {bookData.rentee === ActiveUser.id ? 'Return' : 'Rent'}
        </ActionButton>
        <ActionButton onClick={handleInfo} type="button" color="secondary" isDisabled={false}>Info</ActionButton>
      </div>
    </div>
  );
});
