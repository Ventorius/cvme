import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Content = ({ children }) => (
  <div className="content">
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};

Content.defaultProps = {
  children: [],
};

export default Content;
