import {
  SET_USER_SUCCESS,
  SET_USER_FAILURE,
  CLEAR_ERROR,
  LOGOUT_USER,
  LEAVE_GROUP_SUCCESS,
  JOIN_GROUP_SUCCESS,
  ADD_EVENT,
  REMOVE_EVENT
} from './userTypes';
import * as authAPI from '../../api/authAPI';
import Router from 'next/router';
import { setCookie, destroyCookie } from 'nookies';

export const setUser = token => async dispatch => {
  try {
    const { data } = await authAPI.verifyToken(token);
    dispatch({ type: SET_USER_SUCCESS, payload: { user: data, token } });
  } catch (error) {
    throw error;
  }
};

export const login = user => async dispatch => {
  try {
    const { data, token } = await authAPI.login(user);
    dispatch({
      type: SET_USER_SUCCESS,
      payload: { user: data, token }
    });
    setCookie({}, 'token', token, { maxAge: 30 * 24 * 60 * 60, path: '/' });
    Router.push('/');
  } catch (error) {
    dispatch({ type: SET_USER_FAILURE, payload: error });
  }
};

export const logout = () => async dispatch => {
  try {
    await authAPI.logout();
    dispatch({ type: LOGOUT_USER });
    destroyCookie({}, 'token');
    Router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const clearError = () => dispatch => {
  dispatch({ type: CLEAR_ERROR });
};

export const joinGroup = (groupId, token) => async dispatch => {
  try {
    const { data } = await apiCall.joinGroup(groupId, token);
    dispatch({ type: JOIN_GROUP_SUCCESS, payload: data.member.group });
  } catch (error) {
    console.log(error);
  }
};

export const leaveGroup = (groupId, token) => async dispatch => {
  try {
    const { data } = await apiCall.leaveGroup(groupId, token);
    dispatch({ type: LEAVE_GROUP_SUCCESS, payload: groupId });
    return data.group;
  } catch (error) {
    console.log(error);
  }
};

export const addEvent = eventId => dispatch => {
  dispatch({ type: ADD_EVENT, payload: eventId });
};

export const removeEvent = eventId => dispatch => {
  dispatch({ type: REMOVE_EVENT, payload: eventId });
};
