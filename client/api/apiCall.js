import baseURL from '../utils/baseURL';
import axios from 'axios';
const API_URL = `${baseURL}/api/v1`;

export const verifyToken = async token => {
  try {
    const payload = { headers: { authorization: `Bearer ${token}` } };
    const { data } = await axios.get(`${API_URL}/auth/account`, payload);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const login = async user => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, user);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const logout = async () => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/logout`);
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

export const fetchGroup = async slug => {
  try {
    const { data } = await axios.get(`${API_URL}/groups/${slug}`);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const fetchGroupEvents = async id => {
  try {
    const { data } = await axios.get(`${API_URL}/groups/${id}/events`);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const fetchGroupMembers = async id => {
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

export const fetchEvents = async () => {
  try {
    const payload = { params: { limit: 10 } };
    const { data } = await axios.get(`${API_URL}/events`, payload);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const fetchEvent = async eventId => {
  try {
    const { data } = await axios.get(`${API_URL}/events/${eventId}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error.response.data.error;
  }
};

export const toggleAttend = async (eventId, token) => {
  try {
    const payload = { headers: { authorization: `Bearer ${token}` } };
    const { data } = await axios.post(
      `${API_URL}/events/${eventId}/attend`,
      {},
      payload
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error.response.data.error;
  }
};
