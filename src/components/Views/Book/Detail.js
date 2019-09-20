import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MenuBar from '../../Navigation/MenuBar/MenuBar';
import StatusText from '../../Book/StatusText';
import './Detail.scss';

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(({
  userReducer,
  bookReducer,
  history,
  match: {
    params: {
      id,
    },
  },
}) => {
  const activeBook = bookReducer.books.find(book => book.id === id);

  useEffect(() => {
    if (!userReducer.activeUser) {
      history.push('/users');
    }
  });

  return (
    <>
      <MenuBar Title="Book Detail" />
      { activeBook
        ? (
          <div className="card book-detail">
            <h2 className="book-title">{activeBook.title}</h2>

            <div className="book-info">
              <img src={activeBook.coverimg} alt="Book cover" />
              <div className="stats">
                <StatusText Users={userReducer.users} bookData={activeBook} />
                <div className="pages-badge">
                  <span className="fas fa-book-open" /> {activeBook.pages}
                </div>
              </div>
            </div>
          </div>
        ) : <></>
      }
    </>
  );
});
