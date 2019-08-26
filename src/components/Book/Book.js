import React, { useState } from 'react';
import moment from 'moment';
import ProgressBar from '../UI/ProgressBar/ProgressBar';
import safeDivide from '../../utils/safeDivide';
import clamp from '../../utils/clamp';
import './Book.scss';

export default ({ bookData, RentAction }) => {
  let statusText = 'Available!';
  let statusClass = 'available';
  let progressBar;

  const [expanded, setExpansion] = useState(false);

  if (bookData.rented) {
    // If book was rented, we need to determine how far we're into the renting period
    const elapsedDays = Math.abs(moment().diff(bookData.startDate, 'days'));
    const progress = clamp(safeDivide(elapsedDays, bookData.rentalPeriod) * 100, 100);
    const isOverdue = elapsedDays > bookData.rentalPeriod;

    // Set the status text to be the name of the renter, and set the color class too
    statusText = bookData.renter;
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
    <div className={`book-row-container ${expanded ? 'expanded' : ''}`}>
      <div role="button" onClick={() => setExpansion(!expanded)} className="book">
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
        <button onClick={rent} type="button" className="action-button rent">Rent</button>
        <button type="button" className="action-button info">Info</button>
      </div>
    </div>
  );
};
