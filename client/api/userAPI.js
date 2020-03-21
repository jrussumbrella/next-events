import baseURL from '../utils/baseURL';
import axios from 'axios';
const API_URL = `${baseURL}/api/v1`;

export const fetchUser = async userId => {
  try {
    const { data } = await axios.get(`${API_URL}/users/${userId}`);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};
