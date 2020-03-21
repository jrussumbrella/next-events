import { SET_MODAL } from './modalTypes';

export const setModal = active => dispatch => {
  dispatch({ type: SET_MODAL, payload: active });
};
