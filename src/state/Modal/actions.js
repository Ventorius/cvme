import {
  NEW_SECTION,
  ADD_WORK_POSITION,
  ADD_EDUCATION_POSITION,
  EDIT_CONTACT_DATA,
  EDIT_SKILLS,
} from './modal.types';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openNewSectionModal = () => async (dispatch) => {
  dispatch({ type: OPEN_MODAL, modal: NEW_SECTION });
};

export const openAddWorkPositionModal = () => async (dispatch) => {
  dispatch({ type: OPEN_MODAL, modal: ADD_WORK_POSITION });
};

export const openAddEducationPositionModal = () => async (dispatch) => {
  dispatch({ type: OPEN_MODAL, modal: ADD_EDUCATION_POSITION });
};

export const openEditContactDataModal = () => async (dispatch) => {
  dispatch({ type: OPEN_MODAL, modal: EDIT_CONTACT_DATA });
};

export const openEditSkillsModal = () => async (dispatch) => {
  dispatch({ type: OPEN_MODAL, modal: EDIT_SKILLS });
};

export const closeModal = () => async (dispatch) => {
  dispatch({ type: CLOSE_MODAL });
};
