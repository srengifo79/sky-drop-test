import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  responseType: "json",
  headers: {
    Authorization: `Token ${process.env.REACT_APP_TOKEN}`,
  },
});

export default axiosInstance;
