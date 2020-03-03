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
