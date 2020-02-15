import { FETCH_GROUPS_SUCCESS } from './groupsType';

const initState = {
  groups: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_GROUPS_SUCCESS:
      return { ...state, groups: action.payload };
    default:
      return state;
  }
};
