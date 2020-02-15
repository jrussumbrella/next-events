import { FETCH_GROUPS_SUCCESS } from './groupsType';
import axios from 'axios';
import * as apiCall from '../../api/apiCall';

export const getGroups = () => async dispatch => {
  try {
    const { data } = await apiCall.fetchGroups();
    dispatch({ type: FETCH_GROUPS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
