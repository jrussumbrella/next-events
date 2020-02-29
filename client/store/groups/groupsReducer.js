import { FETCH_GROUPS_SUCCESS, FETCH_GROUP_SUCCESS } from './groupsType';

const initState = {
  mostPopular: [],
  group: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_GROUPS_SUCCESS:
      return { ...state, mostPopular: action.payload };
    case FETCH_GROUP_SUCCESS:
      return { ...state, group: action.payload };
    default:
      return state;
  }
};
