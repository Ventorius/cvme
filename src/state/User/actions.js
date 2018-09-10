export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const getUser = () => async (dispatch) => {
  dispatch(FETCH_USER_START);
};

export const updateUser = () => async (dispatch) => {
  dispatch(UPDATE_USER_START);
};
