import {
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUP_SUCCESS,
  INCREMENT_COUNT_MEMBER,
  DECREMENT_COUNT_MEMBER,
  FETCH_GROUP_EVENTS_SUCCESS,
  FETCH_GROUP_MEMBERS_SUCCESS
} from './groupsType';

const initState = {
  mostPopular: [],
  group: null,
  groupEvents: [],
  groupMembers: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_GROUPS_SUCCESS:
      return { ...state, mostPopular: action.payload };
    case FETCH_GROUP_SUCCESS:
      return { ...state, group: action.payload };
    case INCREMENT_COUNT_MEMBER:
      return {
        ...state,
        group: { ...state.group, countMembers: state.group.countMembers + 1 }
      };
    case DECREMENT_COUNT_MEMBER:
      return {
        ...state,
        group: { ...state.group, countMembers: state.group.countMembers - 1 }
      };
    case FETCH_GROUP_EVENTS_SUCCESS:
      return { ...state, groupEvents: action.payload };
    case FETCH_GROUP_MEMBERS_SUCCESS:
      return { ...state, groupMembers: action.payload };
    default:
      return state;
  }
};
