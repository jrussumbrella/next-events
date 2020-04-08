import baseURL from '../utils/baseURL';
import axios from 'axios';
const API_URL = `${baseURL}/api/v1`;

export const fetchAllGroups = async (page) => {
  try {
    const payload = { params: { limit: 5, page } };
    const { data } = await axios.get(`${API_URL}/groups`, payload);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const fetchGroups = async () => {
  try {
    const payload = { params: { limit: 10 } };
    const { data } = await axios.get(`${API_URL}/groups`, payload);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const fetchGroup = async (slug) => {
  try {
    const { data } = await axios.get(`${API_URL}/groups/${slug}`);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const fetchGroupEvents = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/groups/${id}/events`);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const fetchGroupMembers = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/groups/${id}/members`);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const joinGroup = async (groupId, token) => {
  try {
    const payload = { headers: { authorization: `Bearer ${token}` } };
    const { data } = await axios.post(
      `${API_URL}/groups/${groupId}/members`,
      {},
      payload
    );
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const leaveGroup = async (groupId, token) => {
  try {
    const payload = { headers: { authorization: `Bearer ${token}` } };
    const { data } = await axios.delete(
      `${API_URL}/groups/${groupId}/members`,
      payload
    );
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};
