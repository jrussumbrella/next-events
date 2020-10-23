import apiClient from '../utils/apiClient';

const getCategories = async () => {
  const { data } = await apiClient.get('/categories');
  return data;
};

export default {
  getCategories,
};
