import {
  FETCH_ALL_GROUPS,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUP_SUCCESS,
  REMOVE_MEMBER,
  ADD_MEMBER,
  FETCH_GROUP_EVENTS_SUCCESS,
  FETCH_GROUP_MEMBERS_SUCCESS,
  CLEAR_GROUP,
} from './groupsType';
import * as groupsAPI from '../../api/groupsAPI';
import { setLoading } from '../apiState/apiStateAction';
import { setAlert } from '../alert/alertAction';
import { addGroup, removeGroup } from '../user/userAction';

export const getAllGroups = (page) => async (dispatch) => {
  try {
    const { data } = await groupsAPI.fetchAllGroups(page);
    dispatch({ type: FETCH_ALL_GROUPS, payload: data.groups });
  } catch (error) {
    console.log(error);
  }
};

export const getGroups = () => async (dispatch) => {
  try {
    const { data } = await groupsAPI.fetchGroups();
    dispatch({ type: FETCH_GROUPS_SUCCESS, payload: data.groups });
    dispatch(setLoading('mostPopular', false));
  } catch (error) {
    console.log(error);
  }
};

export const getGroup = (slug) => async (dispatch) => {
  try {
    const { data } = await groupsAPI.fetchGroup(slug);
    dispatch({ type: FETCH_GROUP_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const clearGroup = () => (dispatch) => {
  dispatch({ type: CLEAR_GROUP });
};

export const getGroupEvents = (id) => async (dispatch) => {
  try {
    const { data } = await groupsAPI.fetchGroupEvents(id);
    dispatch({ type: FETCH_GROUP_EVENTS_SUCCESS, payload: data.events });
  } catch (error) {
    console.log(error);
  }
};

export const getGroupMembers = (id) => async (dispatch) => {
  try {
    const { data } = await groupsAPI.fetchGroupMembers(id);
    dispatch({ type: FETCH_GROUP_MEMBERS_SUCCESS, payload: data.members });
    dispatch(setLoading('groupMembers', false));
  } catch (error) {
    console.log(error);
  }
};

export const joinGroup = (groupId, token) => async (dispatch) => {
  try {
    const { data } = await groupsAPI.joinGroup(groupId, token);
    dispatch({ type: ADD_MEMBER, payload: data.member.group });
    dispatch(addGroup(groupId));
    dispatch(setAlert('success', 'Successfully joined group.'));
  } catch (error) {
    dispatch(setAlert('error', error));
  }
};

export const leaveGroup = (groupId, token) => async (dispatch) => {
  try {
    const { data } = await groupsAPI.leaveGroup(groupId, token);
    dispatch({ type: REMOVE_MEMBER, payload: groupId });
    dispatch(removeGroup(groupId));
    dispatch(setAlert('success', 'Successfully leaved group.'));
  } catch (error) {
    console.log(error);
    dispatch(setAlert('error', error));
  }
};
