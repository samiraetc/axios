
import axios from 'axios';

export const baseURL =  'https://pokeapi.co/'

const api = axios.create({
  baseURL
});

export default api;