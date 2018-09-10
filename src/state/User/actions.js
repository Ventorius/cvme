import UserService from '../../api/user';

export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const getUser = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_START });
  try {
    const res = await UserService.getUser();
    dispatch({ type: FETCH_USER_SUCCESS, payload: res });
  } catch (e) {
    dispatch({ type: FETCH_USER_FAILURE });
  }
};

export const updateUser = () => async (dispatch) => {
  const res = await UserService.updateUser();
  dispatch({ type: UPDATE_USER_START, payload: res });
};
