import apiClient from '../utils/apiClient';

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

// const attendEvent = async (eventId, token) => {
//   try {
//     const headers = { headers: { authorization: `Bearer ${token}` } };
//     const { data } = await axios.post(
//       `${API_URL}/events/${eventId}/attendees`,
//       {},
//       headers
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw error.response.data.error;
//   }
// };

// const leaveEvent = async (eventId, token) => {
//   try {
//     const headers = { headers: { authorization: `Bearer ${token}` } };
//     const { data } = await axios.delete(
//       `${API_URL}/events/${eventId}/attendees`,
//       headers
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw error.response.data.error;
//   }
// };

export default {
  getEvent,
  getEvents,
  getEventAttendees,
};
