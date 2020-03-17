import {
  FETCH_ALL_GROUPS,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUP_SUCCESS,
  REMOVE_MEMBER,
  ADD_MEMBER,
  FETCH_GROUP_EVENTS_SUCCESS,
  FETCH_GROUP_MEMBERS_SUCCESS
} from './groupsType';
import * as groupsAPI from '../../api/groupsAPI';
import { setLoading } from '../apiState/apiStateAction';

export const getAllGroups = page => async dispatch => {
  try {
    const { data } = await groupsAPI.fetchGroups(page);
    dispatch({ type: FETCH_ALL_GROUPS, payload: data.groups });
  } catch (error) {
    console.log(error);
  }
};

export const getGroups = () => async dispatch => {
  try {
    const { data } = await groupsAPI.fetchGroups();
    dispatch({ type: FETCH_GROUPS_SUCCESS, payload: data.groups });
  } catch (error) {
    console.log(error);
  }
};

export const getGroup = slug => async dispatch => {
  try {
    const { data } = await groupsAPI.fetchGroup(slug);
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
    const { data } = await groupsAPI.fetchGroupEvents(id);
    dispatch({ type: FETCH_GROUP_EVENTS_SUCCESS, payload: data.events });
  } catch (error) {
    console.log(error);
  }
};

export const getGroupMembers = id => async dispatch => {
  try {
    const { data } = await groupsAPI.fetchGroupMembers(id);
    dispatch({ type: FETCH_GROUP_MEMBERS_SUCCESS, payload: data.members });
    dispatch(setLoading('groupMembers', false));
  } catch (error) {
    console.log(error);
  }
};
