import { SET_ALERT, REMOVE_ALERT } from './alertTypes';

const initialState = {
  alert: {
    type: '',
    text: '',
    active: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return { ...state, alert: action.payload };
    case REMOVE_ALERT:
      return { ...initialState };
    default:
      return state;
  }
};
