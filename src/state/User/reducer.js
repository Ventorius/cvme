import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from './actions';

const initialState = {
  profile: {},
  isLoading: false,

};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        isLoading: false,
        profile: action.payload,
      };

    case FETCH_USER_FAILURE:
      return {
        isLoading: false,
        profile: {},
      };

    case UPDATE_USER_START:
      return state;

    case UPDATE_USER_SUCCESS:
      return state;

    case UPDATE_USER_FAILURE:
      return state;

    default:
      return state;
  }
};

export default userReducer;
