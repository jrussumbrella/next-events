import { FETCH_EVENTS_SUCCESS, FETCH_SELECTED_EVENT } from './eventsType';
import * as apiCall from '../../api/apiCall';

export const getEvents = () => async dispatch => {
  try {
    const { data } = await apiCall.fetchEvents();
    dispatch({ type: FETCH_EVENTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getEvent = eventId => async dispatch => {
  try {
    const { data } = await apiCall.fetchEvent(eventId);
    dispatch({ type: FETCH_SELECTED_EVENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
