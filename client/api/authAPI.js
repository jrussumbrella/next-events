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

export const register = async user => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/register`, user);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const forgotPassword = async email => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/forgotPassword`, email);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const resetPassword = async (token, resetObj) => {
  try {
    const { data } = await axios.put(
      `${API_URL}/auth/resetPassword/${token}`,
      resetObj
    );
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

export const updateUserDetails = async (token, userData) => {
  try {
    const headers = { headers: { authorization: `Bearer ${token}` } };
    const { data } = await axios.put(
      `${API_URL}/auth/updateDetails`,
      userData,
      headers
    );
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};
