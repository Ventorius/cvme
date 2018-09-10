import React from 'react';
import PropTypes from 'prop-types';
import Skill from './Skill';
import DottedButton from '../../DottedButton';
import './styles.scss';

const Skills = ({ openEditSkillsModal, skills }) => (
  <div className="skills">
    {skills.map(skill => <Skill>{skill}</Skill>)}
    <div className="skills--edit">
      <DottedButton text="Edit skills" onClick={openEditSkillsModal} />
    </div>
  </div>
);

Skills.propTypes = {
  openEditSkillsModal: PropTypes.func,
  skills: PropTypes.arrayOf(PropTypes.string),
};

Skills.defaultProps = {
  openEditSkillsModal: () => {},
  skills: [],
};

export default Skills;
