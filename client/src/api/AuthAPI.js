import apiClient from '../utils/apiClient';

const login = async (email, password) => {
  const { data } = await apiClient.post('/auth/login', { email, password });
  return data;
};

export default {
  login,
};
