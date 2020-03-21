import { SET_MODAL } from './modalTypes';
const initialState = {
  open: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return { ...state, open: action.payload };
    default:
      return state;
  }
};
