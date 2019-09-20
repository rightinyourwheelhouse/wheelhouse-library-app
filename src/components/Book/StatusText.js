import React from 'react';
import moment from 'moment';
import ProfileBubble from '../Account/ProfileBubble/ProfileBubble';
import ProgressBar from '../UI/ProgressBar/ProgressBar';
import clamp from '../../utils/clamp';
import safeDivide from '../../utils/safeDivide';
import './StatusText.scss';

export default ({ bookData, Users }) => {
  let statusText = 'Available!';
  let statusClass = 'available';
  let progressBar;

  if (bookData.rentee) {
    // If book was rented, we need to determine how far we're into the renting period
    const elapsedDays = Math.abs(moment().diff(bookData.rentalstartdate, 'days'));
    const progress = clamp(safeDivide(elapsedDays, bookData.rentalperiod) * 100, 100);
    const isOverdue = elapsedDays > bookData.rentalperiod;
    const user = Users.find(({ id }) => bookData.rentee === id);

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

  return (
    <div className={`status-text rent-status ${statusClass}`}>
      <h3>{statusText}</h3>
      {progressBar}
    </div>
  );
};
