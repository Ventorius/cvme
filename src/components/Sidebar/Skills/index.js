import React from 'react';
import PropTypes from 'prop-types';
import Skill from './Skill';
import Button from '../../Button';
import './styles.scss';

const Skills = ({ openEditSkillsModal }) => (
  <div className="skills">
    <Skill>HTML</Skill>
    <Skill>CSS</Skill>
    <Skill>SCSS</Skill>
    <Skill>crazy</Skill>
    <Skill>javascript</Skill>
    <Skill>React JS</Skill>
    <div className="skills--edit">
      <Button text="Edit skills" onClick={openEditSkillsModal} />
    </div>

  </div>
);

Skills.propTypes = {
  openEditSkillsModal: PropTypes.func,
};

Skills.defaultProps = {
  openEditSkillsModal: () => {},
};

export default Skills;
