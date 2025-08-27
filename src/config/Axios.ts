import axios from 'axios';
import { BASE_URL } from './ApiConstants';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
});
