import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export const defaultProps = {
  color: 'primary',
  type: 'button',
};
