import baseURL from '../utils/baseURL';
import axios from 'axios';
const API_URL = `${baseURL}/api/v1`;

export const fetchCategories = async page => {
  try {
    const payload = { params: { limit: 10, page } };
    const { data } = await axios.get(`${API_URL}/categories`, payload);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};
