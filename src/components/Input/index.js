import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Input = ({ type, placeholder, ...props }) => (
  <input
    className="input"
    type={type}
    placeholder={placeholder}
    {...props}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
