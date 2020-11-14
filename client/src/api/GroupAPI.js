import apiClient from 'utils/apiClient';

const getGroups = async (page = 1, limit = 12) => {
  const payload = { params: { limit, page } };
  const { data } = await apiClient.get(`/groups`, payload);
  return data;
};

const getGroup = async (slug) => {
  try {
    const { data } = await apiClient.get(`/groups/${slug}`);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

const getGroupEvents = async (id) => {
  const { data } = await apiClient.get(`/groups/${id}/events`);
  return data;
};

const getGroupMembers = async (id) => {
  try {
    const { data } = await apiClient.get(`/groups/${id}/members`);
    return data;
  } catch (error) {
    throw error.response.data.error;
  }
};

const joinGroup = async (groupId) => {
  const { data } = await apiClient.post(`/groups/${groupId}/members`);
  return data;
};

const leaveGroup = async (groupId) => {
  const { data } = await apiClient.delete(`/groups/${groupId}/members`);
  return data;
};

export default {
  getGroup,
  getGroups,
  leaveGroup,
  joinGroup,
  getGroupMembers,
  getGroupEvents,
};
