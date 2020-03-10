/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

import useBook from '../../api/books/useBook';

import BookHero from './_BookHero/BookHero';

import { Container, OuterContainer, Author } from './bookDetail.styles';

const BookDetail = ({ bookId }) => {
  const {
    book: {
      coverimg, title, author, pages, qrcode,
    },
  } = useBook(bookId);

  const onQRClick = useCallback(
    () => {
      window.print();
    },
    [],
  );


  return (
    <OuterContainer>
      <BookHero img={coverimg} />
      <Container>
        <h1>{title}</h1>
        <h2>
by
          {' '}
          <Author>{author}</Author>
        </h2>
        <span>
          {pages}
          {' '}
pages
        </span>
        <div className="qr">
          <img onClick={onQRClick} src={qrcode} alt="qr" />
        </div>
      </Container>
    </OuterContainer>
  );
};

BookDetail.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default memo(BookDetail);
