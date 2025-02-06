export const apiUrl =
  process.env.NODE_ENV != "production"
    ? "http://localhost:3001"
    : "https://baya-server-urzh.onrender.com";
