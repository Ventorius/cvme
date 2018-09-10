import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import Info from './Info';
import Skills from './Skills';

import './styles.scss';

const Sidebar = ({
  openEditContactDataModal,
  openEditSkillsModal,
  skills,
  contact,
  jobTitle,
}) => (
  <div className="sidebar">
    <div className="inner">
      <Photo />
      <Info
        jobTitle={jobTitle}
        contact={contact}
        openEditContactDataModal={openEditContactDataModal}
      />
      <Skills skills={skills} openEditSkillsModal={openEditSkillsModal} />
    </div>

  </div>
);

Sidebar.propTypes = {
  openEditContactDataModal: PropTypes.func,
  openEditSkillsModal: PropTypes.func,
  contact: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    location: PropTypes.string,
  }),
  skills: PropTypes.arrayOf(PropTypes.string),
  jobTitle: PropTypes.string,
};

Sidebar.defaultProps = {
  openEditContactDataModal: () => {},
  openEditSkillsModal: () => {},
  contact: {},
  skills: [],
  jobTitle: '',
};

export default Sidebar;
