import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.9:3000', // reemplaza por la IP real de tu PC
});
