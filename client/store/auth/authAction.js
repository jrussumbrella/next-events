import {
  SET_USER_SUCCESS,
  SET_USER_FAILURE,
  CLEAR_ERROR,
  LOGOUT_USER
} from '../auth/authTypes';
import * as apiCall from '../../api/apiCall';
import Router from 'next/router';
import { setCookie, destroyCookie } from 'nookies';

export const setUser = token => async dispatch => {
  try {
    const { data } = await apiCall.verifyToken(token);
    dispatch({ type: SET_USER_SUCCESS, payload: { user: data, token } });
  } catch (error) {
    throw error;
  }
};

export const login = user => async dispatch => {
  try {
    const { data, token } = await apiCall.login(user);
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
    await apiCall.logout();
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
