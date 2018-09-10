import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Label = ({ value }) => (
  <h3 className="label">{value}</h3>
);

Label.propTypes = {
  value: PropTypes.string,
};

Label.defaultProps = {
  value: '',
};

export default Label;
