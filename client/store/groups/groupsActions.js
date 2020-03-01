import {
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUP_SUCCESS,
  REMOVE_MEMBER,
  ADD_MEMBER,
  FETCH_GROUP_EVENTS_SUCCESS,
  FETCH_GROUP_MEMBERS_SUCCESS
} from './groupsType';
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

export const addMember = user => dispatch => {
  dispatch({ type: ADD_MEMBER, payload: user });
};

export const removeMember = user => dispatch => {
  dispatch({ type: REMOVE_MEMBER, payload: user });
};

export const getGroupEvents = id => async dispatch => {
  try {
    const { data } = await apiCall.fetchGroupEvents(id);
    dispatch({ type: FETCH_GROUP_EVENTS_SUCCESS, payload: data.events });
  } catch (error) {
    console.log(error);
  }
};

export const getGroupMembers = id => async dispatch => {
  try {
    const { data } = await apiCall.fetchGroupMembers(id);
    dispatch({ type: FETCH_GROUP_MEMBERS_SUCCESS, payload: data.members });
  } catch (error) {
    console.log(error);
  }
};
