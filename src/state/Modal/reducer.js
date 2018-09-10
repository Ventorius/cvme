import { OPEN_MODAL, CLOSE_MODAL } from './actions';

const initialState = {
  modal: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modal: action.modal,
        data: action.data,
      };
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default modalReducer;
