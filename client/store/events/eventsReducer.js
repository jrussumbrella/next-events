import {
  FETCH_EVENTS_SUCCESS,
  FETCH_SELECTED_EVENT,
  ATTEND_EVENT,
  CLEAR_SELECTED_EVENT,
  FETCH_ALL_EVENTS,
  FETCH_EVENT_ATTENDEES,
  LEAVE_EVENT
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
    case ATTEND_EVENT:
      return {
        ...state,
        selected: {
          ...state.selected,
          countAttendees: state.selected.countAttendees + 1
        }
      };
    case LEAVE_EVENT:
      return {
        ...state,
        selected: {
          ...state.selected,
          countAttendees: state.selected.countAttendees - 1
        }
      };
    case FETCH_SELECTED_EVENT:
      return { ...state, selected: action.payload };
    case FETCH_EVENT_ATTENDEES:
      return {
        ...state,
        selected: { ...state.selected, attendees: action.payload }
      };
    case CLEAR_SELECTED_EVENT:
      return { ...state, selected: null };
    default:
      return state;
  }
};
