import {
  SET_USER_SUCCESS,
  SET_USER_FAILURE,
  CLEAR_ERROR,
  LOGOUT_USER,
  ADD_EVENT,
  REMOVE_EVENT,
  SET_USER_PROFILE,
  UPDATE_USER,
  ADD_GROUP,
  REMOVE_GROUP,
  GET_USER_EVENTS,
  GET_USER_GROUPS
} from './userTypes';

const initState = {
  user: null,
  error: null,
  selectedUser: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false
      };
    case UPDATE_USER:
      return { ...state, user: action.payload };
    case SET_USER_FAILURE:
      return { ...state, error: action.payload, loading: false, token: null };
    case CLEAR_ERROR:
      return { ...state, error: null };
    case LOGOUT_USER:
      return { ...state, user: null, loading: true, error: null };
    case SET_USER_PROFILE:
      return { ...state, selectedUser: action.payload };
    case GET_USER_EVENTS:
      return {
        ...state,
        selectedUser: { ...state.selectedUser, myEvents: action.payload }
      };
    case GET_USER_GROUPS:
      return {
        ...state,
        selectedUser: { ...state.selectedUser, myGroups: action.payload }
      };
    case ADD_GROUP:
      return {
        ...state,
        user: { ...state.user, groups: [...state.user.groups, action.payload] }
      };
    case REMOVE_GROUP:
      const filteredGroups = state.user.groups.filter(
        group => group !== action.payload
      );
      return { ...state, user: { ...state.user, groups: filteredGroups } };
    case ADD_EVENT:
      return {
        ...state,
        user: { ...state.user, events: [...state.user.events, action.payload] }
      };
    case REMOVE_EVENT:
      const filteredEvents = state.user.events.filter(
        event => event !== action.payload
      );
      return { ...state, user: { ...state.user, events: filteredEvents } };
    default:
      return state;
  }
};
