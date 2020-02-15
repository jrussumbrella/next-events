import {
  SET_USER_SUCCESS,
  SET_USER_FAILURE,
  CLEAR_ERROR,
  LOGOUT_USER
} from '../auth/authTypes';
import * as apiCall from '../../api/apiCall';
import Router from 'next/router';
import cookie from 'js-cookie';

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
    cookie.set('token', token);
    Router.push('/');
  } catch (error) {
    dispatch({ type: SET_USER_FAILURE, payload: error });
  }
};

export const logout = () => async dispatch => {
  try {
    await apiCall.logout();
    dispatch({ type: LOGOUT_USER });
    cookie.remove('token');
    Router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const clearError = () => dispatch => {
  dispatch({ type: CLEAR_ERROR });
};
