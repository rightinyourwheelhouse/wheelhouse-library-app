import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import MenuBar from '../../Navigation/MenuBar/MenuBar';
import StatusText from '../../Book/StatusText';
import useBook from '../../../api/books/useBook';
import './Detail.scss';

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(
  ({
    userReducer,
    match: {
      params: { id },
    },
  }) => {
    const { book: activeBook } = useBook(id);

    const onQRClick = useCallback(
      () => {
        window.print();
      },
      [activeBook],
    );

    return (
      <>
        <MenuBar Title="Book Detail" />
        {activeBook ? (
          <div className="card book-detail">
            <h2 className="book-title">{activeBook.title}</h2>

            <div className="book-info">
              <img src={activeBook.coverimg} alt="Book cover" />
              <div className="stats">
                <StatusText Users={userReducer.users} bookData={activeBook} />
                <div className="pages-badge">
                  <span className="fas fa-book-open" />
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
