import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import * as bookActionFile from '../../redux/actions/books';
import ProgressBar from '../UI/ProgressBar/ProgressBar';
import ProfileBubble from '../Account/ProfileBubble/ProfileBubble';
import safeDivide from '../../utils/safeDivide';
import clamp from '../../utils/clamp';
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
  Users,
  Expanded,
  bookActions,
}) => {
  let statusText = 'Available!';
  let statusClass = 'available';
  let progressBar;

  if (bookData.rentee) {
    // If book was rented, we need to determine how far we're into the renting period
    const elapsedDays = Math.abs(moment().diff(bookData.rentalstartdate, 'days'));
    const progress = clamp(safeDivide(elapsedDays, bookData.rentalperiod) * 100, 100);
    const isOverdue = elapsedDays > bookData.rentalperiod;
    const user = Users.filter(({ id }) => bookData.rentee === id)[0];

    // Set the status text to be the name of the renter, and set the color class too
    statusText = (
      <div className="rentee">
        <ProfileBubble account={user} small />
        <span className="username">{user.username}</span>
      </div>
    );
    statusClass = `rented ${isOverdue ? 'overdue' : ''}`;

    // Make a nice progress bar to immediately see if the book will be available soon
    const progressBarColor = isOverdue ? '#d1342a' : '#004fff';
    progressBar = (
      <ProgressBar color={progressBarColor} percentage={progress} />
    );
  }

  const rent = () => {
    RentAction(bookData.id);
  };

  return (
    <div className={`book-row-container ${Expanded ? 'expanded' : ''}`}>
      <div onClick={() => bookActions.expandBookInformation(bookData.id)} role="button" className="book">
        <img src={bookData.coverimg} alt="Book cover" />
        <div className="info">
          <h2 className="book-title">{bookData.title}</h2>
          <div className={`rent-status ${statusClass}`}>
            <h3>{statusText}</h3>
            {progressBar}
          </div>
        </div>
      </div>
      <div className="actions-container">
        <button onClick={rent} type="button" className="action-button primary">Rent</button>
        <button type="button" className="action-button secondary">Info</button>
      </div>
    </div>
  );
});
