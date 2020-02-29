import { FETCH_GROUPS_SUCCESS, FETCH_GROUP_SUCCESS } from './groupsType';
import * as apiCall from '../../api/apiCall';

export const getGroups = () => async dispatch => {
  try {
    const { data } = await apiCall.fetchGroups();
    dispatch({ type: FETCH_GROUPS_SUCCESS, payload: data.groups });
  } catch (error) {
    console.log(error);
  }
};

export const getGroup = slug => async dispatch => {
  try {
    const { data } = await apiCall.fetchGroup(slug);
    dispatch({ type: FETCH_GROUP_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
