import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Skill = ({ children }) => (
  <div className="skill">{children}</div>
);

Skill.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string),
};

Skill.defaultProps = {
  children: [],
};

export default Skill;
