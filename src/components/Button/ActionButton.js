import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { ActionButton } from './button.styles';

const Button = ({
  children, color, type, ...props
}) => (
  <ActionButton {...props} className={color} color={color} type={type}>
    {children}
  </ActionButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  color: PropTypes.oneOf(['primary', 'secundary']),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  color: 'primary',
  type: 'button',
};

export default memo(Button);
