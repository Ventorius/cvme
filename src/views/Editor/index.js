/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';
import {
  openEditContactDataModal,
  openEditSkillsModal,
  openNewSectionModal,
} from '../../state/Modal/actions';

import './styles.scss';

const Editor = ({
  openEditContactDataModal,
  openEditSkillsModal,
  openNewSectionModal,
}) => (
  <div className="editor">
    <Sidebar
      openEditContactDataModal={openEditContactDataModal}
      openEditSkillsModal={openEditSkillsModal}
    />
    <Main openNewSectionModal={openNewSectionModal} />
  </div>
);

Editor.propTypes = {
  openEditContactDataModal: PropTypes.func,
  openEditSkillsModal: PropTypes.func,
  openNewSectionModal: PropTypes.func,
};

Editor.defaultProps = {
  openEditContactDataModal: () => {},
  openEditSkillsModal: () => {},
  openNewSectionModal: () => {},
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  openEditContactDataModal,
  openEditSkillsModal,
  openNewSectionModal,
})(Editor);
