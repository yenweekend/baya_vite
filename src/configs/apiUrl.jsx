export const apiUrl =
  process.env.NODE_ENV != "production"
    ? "http://localhost:3001"
    : process.env.URL_SERVER;
