import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ text, ...props }) => (
  <div className="button" {...props}>{text}</div>
);

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: '',
};

export default Button;
