import baseURL from '../utils/baseURL';
import axios from 'axios';
const API_URL = `${baseURL}/api/v1`;

export const login = user => {
  try {
    const { data } = axios.post(`${API_URL}/login`, user);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchGroups = () => {
  try {
    const { data } = axios.get(`${API_URL}/groups`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
