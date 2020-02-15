import {
  SET_USER_SUCCESS,
  SET_USER_FAILURE,
  CLEAR_ERROR
} from '../auth/authTypes';
import * as apiCall from '../../api/apiCall';
import Router from 'next/router';

export const login = user => async dispatch => {
  try {
    const { data, token } = await apiCall.login(user);
    dispatch({
      type: SET_USER_SUCCESS,
      payload: { user: data, token: token }
    });
    Router.push('/');
  } catch (error) {
    dispatch({ type: SET_USER_FAILURE, payload: error });
  }
};

export const clearError = () => dispatch => {
  dispatch({ type: CLEAR_ERROR });
};
