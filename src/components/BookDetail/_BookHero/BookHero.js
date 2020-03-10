import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { OuterContainer, Background, BookCover } from './bookHero.styles';

const BookHero = ({ img }) => (
  <OuterContainer>
    {img && <Background img={img} />}
    <BookCover src={img} />
  </OuterContainer>
);

BookHero.propTypes = {
  img: PropTypes.string,
};

BookHero.defaultProps = {
  img: null,
};

export default memo(BookHero);
