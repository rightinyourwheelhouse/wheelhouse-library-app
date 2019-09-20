import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookActionFile from '../../redux/actions/books';
import StatusText from './StatusText';
import './Book.scss';

const mapDispatchToProps = dispatch => ({
  bookActions: bindActionCreators(bookActionFile, dispatch),
});

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, mapDispatchToProps)(({
  bookData,
  RentAction,
  InfoAction,
  Users,
  Expanded,
  bookActions,
}) => {
  const handleRent = () => {
    RentAction(bookData.id);
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
        <button onClick={handleRent} type="button" className="action-button primary">Rent</button>
        <button onClick={handleInfo} type="button" className="action-button secondary">Info</button>
      </div>
    </div>
  );
});
