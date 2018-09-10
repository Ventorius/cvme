import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import Info from './Info';
import Skills from './Skills';

import './styles.scss';

const Sidebar = ({
  openEditContactDataModal,
  openEditSkillsModal,
}) => (
  <div className="sidebar">
    <div className="inner">
      <Photo />
      <Info openEditContactDataModal={openEditContactDataModal} />
      <Skills openEditSkillsModal={openEditSkillsModal} />
    </div>

  </div>
);

Sidebar.propTypes = {
  openEditContactDataModal: PropTypes.func,
  openEditSkillsModal: PropTypes.func,
};

Sidebar.defaultProps = {
  openEditContactDataModal: () => {},
  openEditSkillsModal: () => {},
};

export default Sidebar;
