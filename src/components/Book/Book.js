import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';


import {
  OuterContainer, Container, Thumb, Details, Actions, ActionButton,
} from './book.styles';

const Book = ({
  data: {
    id, coverimg, title, author,
  }, data, onSelect, expanded, onInfo, onRent, rentable, returnable,
}) => {
  const onClick = useCallback(
    () => {
      onSelect(id);
    },
    [id, onSelect],
  );

  const onInfoClick = useCallback(
    () => {
      onInfo(id);
    },
    [id, onInfo],
  );

  const onRentClick = useCallback(
    async () => {
      onRent(data);
    },
    [data, onRent],
  );

  return (
    <OuterContainer className={expanded && 'expanded'}>
      <Container role="button" onClick={onClick}>
        <Thumb>
          <img src={coverimg} alt="Book cover" />
        </Thumb>
        <Details>
          <h2>{title}</h2>
          <h3>
by
            {' '}
            <span>{author}</span>
          </h3>
        </Details>
      </Container>
      <Actions>
        {returnable ? <ActionButton type="button" onClick={onRentClick}>return</ActionButton> : <ActionButton type="button" onClick={onRentClick} disabled={!rentable}>{rentable ? 'rent' : 'rented out'}</ActionButton>}
        <ActionButton type="button" onClick={onInfoClick} className="info">info</ActionButton>
      </Actions>
    </OuterContainer>
  );
};

Book.propTypes = {
  data: PropTypes.shape({
    bookCover: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  expanded: PropTypes.bool,
  onInfo: PropTypes.func.isRequired,
  onRent: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  rentable: PropTypes.bool,
  returnable: PropTypes.bool,
};

Book.defaultProps = {
  expanded: false,
  rentable: true,
  returnable: false,
};

export default memo(Book);
