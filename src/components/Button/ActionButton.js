import React, { memo } from 'react';
import { defaultProps, propTypes } from './propTypes';

import { ActionBaseButton } from './button.styles';

const ActionButton = ({
  children, color, type, isDisabled, ...props
}) => (
  <ActionBaseButton {...props} className={color} color={color} type={type} disabled={isDisabled}>
    {children}
  </ActionBaseButton>
);

ActionButton.propTypes = propTypes;
ActionButton.defaultProps = defaultProps;

export default memo(ActionButton);
