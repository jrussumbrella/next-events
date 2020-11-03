import apiClient from 'utils/apiClient';

const getUserProfile = async (id) => {
  const { data } = await apiClient.get(`/users/${id}`);
  return data;
};

export default {
  getUserProfile,
};
