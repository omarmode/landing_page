import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "x-app-token": import.meta.env.VITE_APP_TOKEN,
  },
});
export const url = import.meta.env.VITE_BASE_URL