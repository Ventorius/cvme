/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { closeModal } from '../../state/Modal/actions'
import {
  NEW_SECTION,
  ADD_WORK_POSITION,
  ADD_EDUCATION_POSITION,
  EDIT_CONTACT_DATA,
  EDIT_SKILLS,
} from '../../state/Modal/modal.types'

import closeIcon from '../../assets/close.svg'
import './styles.scss'

const Modal = ({modal}) => {
  const renderInBody = component => ReactDOM.createPortal(<div className="overlay">
    <div className="container">
      <div className="close">
        <img src={closeIcon} alt=""/>
      </div>
      {component}
    </div>
  </div>, document.body)

  switch (modal.modal) {
    case NEW_SECTION:
      return renderInBody(<div/>)
    case ADD_WORK_POSITION:
      return renderInBody(<div/>)
    case ADD_EDUCATION_POSITION:
      return renderInBody(<div/>)
    case EDIT_CONTACT_DATA:
      return renderInBody(<div/>)
    case EDIT_SKILLS:
      return renderInBody(<div/>)
    default:
      return null
  }
}

Modal.propTypes = {
  modal: PropTypes.object,
}

function mapStateToProps ({modal}) {
  return {modal}
}

export default connect(
  mapStateToProps,
  {closeModal},
)(Modal)
