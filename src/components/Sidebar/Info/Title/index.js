import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Title = ({ jobTitle }) => (
  <div className="title">
    <em>{jobTitle}</em>
  </div>
);

Title.propTypes = {
  jobTitle: PropTypes.string,
};

Title.defaultProps = {
  jobTitle: '',
};

export default Title;
