import axios from 'axios';
// axios.defaults.method
export const api = axios.create({
  baseURL: 'http://localhost:4000',
});
