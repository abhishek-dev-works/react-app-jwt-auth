import axios from "axios";

const api = axios.create({
  baseURL: "https://run.mocky.io/v3", // Replace with your backend API
});

// Add Authorization header if token exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;