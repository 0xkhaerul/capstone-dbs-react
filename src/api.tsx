import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_MAIN_URL}/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to request headers if exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const mlapi = axios.create({
  baseURL: import.meta.env.VITE_ML_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to request headers if exists
mlapi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
