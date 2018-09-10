import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ text, cancel, ...props }) => (
  <div className={`button ${cancel ? 'button__cancel' : ''}`} {...props}>{text}</div>
);

Button.propTypes = {
  text: PropTypes.string,
  cancel: PropTypes.bool,
};
Button.defaultProps = {
  text: '',
  cancel: false,
};

export default Button;
