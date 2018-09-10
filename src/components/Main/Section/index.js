import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Section = ({ header, children }) => (
  <div className="section">
    <h3>{header}</h3>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque beatae consequuntur
      cum deserunt expedita fugiat harum inventore, ipsa iusto labore minus molestias nemo
      obcaecati, optio repellendus sed temporibus voluptatem? Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Aperiam atque beatae consequuntur
      cum deserunt expedita fugiat harum inventore, ipsa iusto labore minus molestias nemo
      obcaecati, optio repellendus sed temporibus voluptatem?
    </span>
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
