import { SET_USER } from './authTypes';
const initState = {
  user: null
};
export default (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
