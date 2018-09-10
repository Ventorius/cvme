/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { closeModal } from '../../state/Modal/actions';
import {
  NEW_SECTION,
  ADD_WORK_POSITION,
  ADD_EDUCATION_POSITION,
  EDIT_CONTACT_DATA,
  EDIT_SKILLS,
} from '../../state/Modal/modal.types';

import AddEducationPosition from './AddEducationPosition';
import AddWorkPosition from './AddWorkPosition';
import EditContactData from './EditContactData';
import EditSkills from './EditSkills';
import NewSection from './NewSection';

import closeIcon from '../../assets/close.svg';
import './styles.scss';

const Modal = ({ modal, closeModal }) => {
  const renderInBody = component => ReactDOM.createPortal(
    <div className="overlay">
      <div className="container">
        <div className="close" onClick={closeModal} onKeyPress={closeModal} role="button" tabIndex={0}>
          <img src={closeIcon} alt="" />
        </div>
        {component}
      </div>
    </div>, document.body,
  );

  switch (modal.modal) {
    case NEW_SECTION:
      return renderInBody(<NewSection />);
    case ADD_WORK_POSITION:
      return renderInBody(<AddWorkPosition />);
    case ADD_EDUCATION_POSITION:
      return renderInBody(<AddEducationPosition />);
    case EDIT_CONTACT_DATA:
      return renderInBody(<EditContactData />);
    case EDIT_SKILLS:
      return renderInBody(<EditSkills />);
    default:
      return null;
  }
};

Modal.propTypes = {
  modal: PropTypes.shape({
    modal: PropTypes.string,
  }),
  closeModal: PropTypes.func,
};

function mapStateToProps({ modal }) {
  return { modal };
}

export default connect(
  mapStateToProps,
  { closeModal },
)(Modal);
