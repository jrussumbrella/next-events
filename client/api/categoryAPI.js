import baseURL from '../utils/baseURL';
import axios from 'axios';
const API_URL = `${baseURL}/api/v1`;

export const fetchCategories = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/categories`);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};
