import React, { memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import {
  NavigationContainer, Spacer, Actions, Title,
} from './navigation.styles';

const Navigation = ({ title, back }) => {
  const history = useHistory();

  const navigateToScan = useCallback(
    () => {
      history.push('/scan');
    },
    [history],
  );

  const navigateBack = useCallback(
    () => {
      history.goBack();
    },
    [history],
  );

  return (
    <div>
      <NavigationContainer>
        <Title>
          { back ? <FontAwesomeIcon onClick={navigateBack} role="button" icon={faArrowLeft} /> : ''}
          <span>{title}</span>
        </Title>
        <Actions>
          <FontAwesomeIcon onClick={navigateToScan} role="button" icon={faQrcode} />
        </Actions>
      </NavigationContainer>
      <Spacer />
    </div>
  );
};

Navigation.propTypes = {
  back: PropTypes.bool,
  title: PropTypes.string,
};

Navigation.defaultProps = {
  back: false,
  title: '',
};


export default memo(Navigation);
