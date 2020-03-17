import { SET_LOADING } from './apiStateTypes';

const initialState = {
  groupMembers: {
    loading: true,
    error: null
  },
  categories: {
    loading: true,
    error: null
  },
  upcoming: {
    loading: true,
    error: null
  },
  mostPopular: {
    loading: true
  }
};

export default (state = initialState, action) => {
  if (action.type === SET_LOADING) {
    return {
      ...state,
      [action.payload.name]: {
        ...state[action.payload.name],
        loading: action.payload.status
      }
    };
  } else {
    return state;
  }
};
