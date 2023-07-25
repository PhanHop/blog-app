import axios from "axios";
export const instance = axios.create({
  timeout: 1000,
  headers: {
    authorization: process.env.NEXT_PUBLIC_API_KEY,
  },
  baseURL: process.env.NEXT_PUBLIC_API_NEWS_URL,
});
