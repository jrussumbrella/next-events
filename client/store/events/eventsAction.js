import {
  FETCH_EVENTS_SUCCESS,
  FETCH_SELECTED_EVENT,
  CLEAR_SELECTED_EVENT,
  FETCH_ALL_EVENTS,
  FETCH_EVENT_ATTENDEES,
  ATTEND_EVENT,
  LEAVE_EVENT
} from './eventsType';
import * as eventsAPI from '../../api/eventsAPI';
import { setLoading } from '../apiState/apiStateAction';

export const getAllEvents = page => async dispatch => {
  try {
    const { data } = await eventsAPI.fetchEvents(page);
    dispatch({ type: FETCH_ALL_EVENTS, payload: data.events });
  } catch (error) {
    console.log(error);
  }
};

export const getEvents = () => async dispatch => {
  try {
    const { data } = await eventsAPI.fetchEvents();
    dispatch({ type: FETCH_EVENTS_SUCCESS, payload: data.events });
    dispatch(setLoading('upcoming', false));
  } catch (error) {
    console.log(error);
  }
};

export const getEvent = eventId => async dispatch => {
  try {
    const { data } = await eventsAPI.fetchEvent(eventId);
    dispatch({ type: FETCH_SELECTED_EVENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getEventAttendees = eventId => async dispatch => {
  try {
    const { data } = await eventsAPI.fetchEventAttendees(eventId);
    dispatch({ type: FETCH_EVENT_ATTENDEES, payload: data.attendees });
  } catch (error) {
    console.log(error);
  }
};

export const clearSelectedEvent = () => dispatch => {
  dispatch({ type: CLEAR_SELECTED_EVENT });
};

export const attendEvent = eventId => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const { data } = await eventsAPI.attendEvent(eventId, token);
    dispatch({ type: ATTEND_EVENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const leaveEvent = eventId => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const { data } = await eventsAPI.leaveEvent(eventId, token);
    dispatch({ type: LEAVE_EVENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
