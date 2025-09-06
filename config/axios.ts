import axios, { AxiosInstance } from "axios";

// Create an Axios instance
const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // optional timeout
});

// Request interceptor (optional, e.g., for auth token)
axiosClient.interceptors.request.use(
  (config) => {
    // Example: Add token if exists
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response.data, // return only response.data
  (error) => {
    console.error("Axios Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosClient;
