import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Skill = ({ children, ...props }) => (
  <div className="skill" {...props}>{children}</div>
);

Skill.propTypes = {
  children: PropTypes.string,
};

Skill.defaultProps = {
  children: [],
};

export default Skill;
