import baseURL from '../utils/baseURL';
import axios from 'axios';
const API_URL = `${baseURL}/api/v1`;

export const fetchAllEvents = async page => {
  try {
    const payload = { params: { limit: 10, page } };
    const { data } = await axios.get(`${API_URL}/events`, payload);
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

export const fetchEventAttendees = async eventId => {
  try {
    const { data } = await axios.get(`${API_URL}/events/${eventId}/attendees`);
    return data;
  } catch (error) {
    console.log(error);
    throw error.response.data.error;
  }
};

export const attendEvent = async (eventId, token) => {
  try {
    const headers = { headers: { authorization: `Bearer ${token}` } };
    const { data } = await axios.post(
      `${API_URL}/events/${eventId}/attendees`,
      {},
      headers
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error.response.data.error;
  }
};

export const leaveEvent = async (eventId, token) => {
  try {
    const headers = { headers: { authorization: `Bearer ${token}` } };
    const { data } = await axios.delete(
      `${API_URL}/events/${eventId}/attendees`,
      headers
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error.response.data.error;
  }
};
