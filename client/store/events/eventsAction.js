import {
  FETCH_EVENTS_SUCCESS,
  FETCH_SELECTED_EVENT,
  TOGGLE_JOIN_EVENT,
  CLEAR_SELECTED_EVENT
} from './eventsType';
import * as apiCall from '../../api/apiCall';

export const getEvents = () => async dispatch => {
  try {
    const { data } = await apiCall.fetchEvents();
    dispatch({ type: FETCH_EVENTS_SUCCESS, payload: data.events });
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

export const clearSelectedEvent = () => dispatch => {
  dispatch({ type: CLEAR_SELECTED_EVENT });
};

export const toggleAttend = eventId => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const { data } = await apiCall.toggleAttend(eventId, token);
    dispatch({ type: TOGGLE_JOIN_EVENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
