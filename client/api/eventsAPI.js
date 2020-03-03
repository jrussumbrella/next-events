import baseURL from '../utils/baseURL';
import axios from 'axios';
const API_URL = `${baseURL}/api/v1`;

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
