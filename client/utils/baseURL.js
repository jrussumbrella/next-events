const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'production-url-here'
    : 'http://localhost:5000';

export default baseURL;
