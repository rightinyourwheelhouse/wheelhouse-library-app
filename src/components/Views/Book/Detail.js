import React from 'react';
import { connect } from 'react-redux';

import BookDetail from '../../BookDetail/BookDetail';
import MenuBar from '../../Navigation/MenuBar/MenuBar';

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
  }) => (
    <>
      <MenuBar Title="Book Detail" history={history} Back />
      {users.length ? (
        <div>
          <BookDetail bookId={id} />
        </div>
      ) : (
        <></>
      )}
    </>
  )
);
