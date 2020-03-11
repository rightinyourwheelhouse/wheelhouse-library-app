import React from 'react';
import { connect } from 'react-redux';

import BookDetail from '../../BookDetail/BookDetail';
import Navigation from '../../Navigation/Navigation';

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
  }) => (
    <>
      <Navigation title="Book Detail" back />
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
