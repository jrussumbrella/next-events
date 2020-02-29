import {
  SET_USER_SUCCESS,
  SET_USER_FAILURE,
  CLEAR_ERROR,
  LOGOUT_USER,
  JOIN_GROUP_SUCCESS,
  LEAVE_GROUP_SUCCESS
} from './authTypes';
const initState = {
  user: null,
  loading: true,
  error: null,
  groups: [],
  events: []
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
    case SET_USER_FAILURE:
      return { ...state, error: action.payload, loading: false, token: null };
    case CLEAR_ERROR:
      return { ...state, error: null };
    case LOGOUT_USER:
      return { ...state, user: null, loading: true, error: null };
    case JOIN_GROUP_SUCCESS:
      return {
        ...state,
        user: { ...state.user, groups: [...state.user.groups, action.payload] }
      };
    case LEAVE_GROUP_SUCCESS:
      const filteredGroups = state.user.groups.filter(
        group => group !== action.payload
      );
      return { ...state, user: { ...state.user, groups: filteredGroups } };
    default:
      return state;
  }
};
