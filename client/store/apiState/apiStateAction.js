import { SET_LOADING } from './apiStateTypes';

export const setLoading = (name, status) => dispatch => {
  dispatch({ type: SET_LOADING, payload: { status, name } });
};
