import React, { memo } from 'react';
import { defaultProps, propTypes } from './propTypes';

import { BaseButton } from './button.styles';

const Button = ({
  children, color, type, ...props
}) => (
  <BaseButton {...props} className={color} color={color} type={type}>
    {children}
  </BaseButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default memo(Button);
