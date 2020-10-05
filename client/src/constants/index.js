export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'production-url-here'
    : 'http://localhost:5000/api/v1';
