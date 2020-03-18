import { SET_ALERT, REMOVE_ALERT } from './alertTypes';

export const setAlert = (type, text) => dispatch => {
  dispatch({ type: SET_ALERT, payload: { type, text, active: true } });
  setTimeout(() => {
    dispatch({ type: REMOVE_ALERT });
  }, 3000);
};

export const removeAlert = () => dispatch => {
  dispatch({ type: REMOVE_ALERT });
};
