import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.chec.io/v1",
});

export default api;