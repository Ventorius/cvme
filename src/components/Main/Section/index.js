import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Section = ({ header, children }) => (
  <div className="section">
    <h3>{header}</h3>
    {children}
  </div>
);

Section.propTypes = {
  header: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.string),
};

Section.defaultProps = {
  header: '',
  children: [],
};

export default Section;
