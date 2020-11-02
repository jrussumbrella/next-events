import apiClient from '../utils/apiClient';

const login = async (email, password) => {
  const { data } = await apiClient.post('/auth/login', { email, password });
  return data;
};

const getMe = async () => {
  const { data } = await apiClient.get('/auth/account');
  return data;
};

export default {
  login,
  getMe,
};
