import {
  FETCH_EVENTS_SUCCESS,
  FETCH_SELECTED_EVENT,
  TOGGLE_JOIN_EVENT,
  CLEAR_SELECTED_EVENT,
  FETCH_ALL_EVENTS
} from './eventsType';
const initState = {
  upcoming: [],
  allEvents: [],
  selected: null,
  loading: true,
  error: null
};
export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return { ...state, upcoming: action.payload };
    case FETCH_ALL_EVENTS:
      return { ...state, allEvents: action.payload };
    case TOGGLE_JOIN_EVENT:
    case FETCH_SELECTED_EVENT:
      return { ...state, selected: action.payload };
    case CLEAR_SELECTED_EVENT:
      return { ...state, selected: null };
    default:
      return state;
  }
};
