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
  REMOVE_GROUP
} from './userTypes';
import * as authAPI from '../../api/authAPI';
import * as userAPI from '../../api/userAPI';
import Router from 'next/router';
import { setCookie, destroyCookie } from 'nookies';
import { setModal } from '../../store/modal/modalAction';
import { setAlert } from '../alert/alertAction';

export const setUser = token => async dispatch => {
  try {
    const { data } = await authAPI.verifyToken(token);
    dispatch({ type: SET_USER_SUCCESS, payload: { user: data, token } });
  } catch (error) {
    throw error;
  }
};

export const getUser = userId => async dispatch => {
  try {
    const { data } = await userAPI.fetchUser(userId);
    dispatch({ type: SET_USER_PROFILE, payload: data });
  } catch (error) {
    console.log(error);
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

export const updateUserDetails = (token, userData) => async dispatch => {
  try {
    const { data } = await authAPI.updateUserDetails(token, userData);
    dispatch({ type: UPDATE_USER, payload: data });
    dispatch(setAlert('success', 'Successfully profile updated'));
    dispatch(setModal(false));
  } catch (error) {
    dispatch(setAlert('error', error));
  }
};

export const addGroup = user => dispatch => {
  dispatch({ type: ADD_GROUP, payload: user });
};

export const removeGroup = user => dispatch => {
  dispatch({ type: REMOVE_GROUP, payload: user });
};

export const addEvent = eventId => dispatch => {
  dispatch({ type: ADD_EVENT, payload: eventId });
};

export const removeEvent = eventId => dispatch => {
  dispatch({ type: REMOVE_EVENT, payload: eventId });
};
