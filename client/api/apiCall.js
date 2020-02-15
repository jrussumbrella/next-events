import baseURL from '../utils/baseURL';
import axios from 'axios';
const API_URL = `${baseURL}/api/v1`;

export const login = async user => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, user);
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
