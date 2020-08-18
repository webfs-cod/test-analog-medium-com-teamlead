import axios from 'axios';

let params = {
  baseURL: 'http://localhost:3000'
};

const api = axios.create(params);

export default api;