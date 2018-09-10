import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const DottedButton = ({ text, ...props }) => (
  <div className="dotted-button" {...props}>{text}</div>
);

DottedButton.propTypes = {
  text: PropTypes.string,
};

DottedButton.defaultProps = {
  text: '',
};

export default DottedButton;
