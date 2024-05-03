import axios from "axios";

const apiRequestUrl = axios.create({
  baseURL: "http://localhost:8700/api",
  withCredentials: true,
});

export default apiRequestUrl;
