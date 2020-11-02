import axios from 'axios';
import { API_URL } from '../constants';

const accessToken = localStorage.getItem('access_token');

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default instance;
