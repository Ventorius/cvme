/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';
import Loader from '../../components/Loader';
import { getUser } from '../../state/User/actions';
import {
  openEditContactDataModal,
  openEditSkillsModal,
  openNewSectionModal,
} from '../../state/Modal/actions';

import './styles.scss';

class Editor extends Component {
  async componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    await this.props.getUser();
  }

  render() {
    const {
      openEditContactDataModal,
      openEditSkillsModal,
      openNewSectionModal,
      isLoading,
      user: {
        contact, skills, jobTitle, firstName, lastName,
      },
    } = this.props;

    return (
      isLoading ? <Loader /> : (
        <div className="editor">
          <Sidebar
            contact={contact}
            skills={skills}
            jobTitle={jobTitle}
            openEditContactDataModal={openEditContactDataModal}
            openEditSkillsModal={openEditSkillsModal}
          />
          <Main
            firstName={firstName}
            lastName={lastName}

            openNewSectionModal={openNewSectionModal}
          />
        </div>
      )

    );
  }
}

Editor.propTypes = {
  openEditContactDataModal: PropTypes.func,
  openEditSkillsModal: PropTypes.func,
  openNewSectionModal: PropTypes.func,
  getUser: PropTypes.func,
  user: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    jobTitle: PropTypes.string,
    contact: PropTypes.object,
    skills: PropTypes.array,
  }),
  isLoading: PropTypes.bool,
};

Editor.defaultProps = {
  openEditContactDataModal: () => {},
  openEditSkillsModal: () => {},
  openNewSectionModal: () => {},
  getUser: () => {},
  user: {},
  isLoading: true,
};

function mapStateToProps({ user }) {
  return { user: user.profile, isLoading: user.isLoading };
}

export default connect(mapStateToProps, {
  openEditContactDataModal,
  openEditSkillsModal,
  openNewSectionModal,
  getUser,
})(Editor);
