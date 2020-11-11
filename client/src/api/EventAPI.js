import apiClient from 'utils/apiClient';

const getEvents = async (page = 1) => {
  const payload = { params: { limit: 10, page } };
  const { data } = await apiClient.get('/events', payload);
  return data;
};

const getEvent = async (eventId) => {
  const { data } = await apiClient.get(`/events/${eventId}`);
  return data;
};

const getEventAttendees = async (eventId) => {
  const { data } = await apiClient.get(`/events/${eventId}/attendees`);
  return data;
};

const attendEvent = async (eventId) => {
  const { data } = await apiClient.post(`/events/${eventId}/attendees`);
  return data;
};

const leaveEvent = async (eventId) => {
  const { data } = await apiClient.delete(`/events/${eventId}/attendees`);
  return data;
};

export default {
  getEvent,
  getEvents,
  getEventAttendees,
  attendEvent,
  leaveEvent,
};
