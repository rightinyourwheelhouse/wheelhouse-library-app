import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import MenuBar from '../../Navigation/MenuBar/MenuBar';
import StatusText from '../../Book/StatusText';
import useBook from '../../../api/books/useBook';
import './Detail.scss';

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(
  ({
    userReducer: {
      users,
    },
    match: {
      params: { id },
    },
    history,
  }) => {
    const { book: activeBook } = useBook(id);

    const onQRClick = useCallback(
      () => {
        window.print();
      },
      [],
    );

    return (
      <>
        <MenuBar Title="Book Detail" history={history} Back />
        {activeBook && users.length ? (
          <div className="card book-detail">
            <h2 className="book-title">{activeBook.title}</h2>

            <div className="book-info">
              <img src={activeBook.coverimg} alt="Book cover" />
              <div className="stats">
                <StatusText Users={users} bookData={activeBook} />
                <div className="pages-badge">
                  <FontAwesomeIcon icon={faBookOpen} />
                  {' '}
                  {activeBook.pages}
                </div>
              </div>
            </div>
            <div className="qr">
              <img onClick={onQRClick} src={activeBook.qrcode} alt="qr" />
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
);
