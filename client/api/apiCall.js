import baseURL from '../utils/baseURL';
import axios from 'axios';
const API_URL = `${baseURL}/api/v1`;

export const login = user => {
  try {
    const { data } = axios.post(`${API_URL}/login`, user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGroups = async () => {
  try {
    const payload = { params: { limit: 10 } };
    const { data } = await axios.get(`${API_URL}/groups`, payload);
    return data;
  } catch (error) {
    return error;
  }
};
