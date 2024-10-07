import { AxiosHttpClient } from './axiosHttpClient';
import { FetchHttpClient } from './fetchHttpClient';

const API_URL = 'http://localhost:5000/api';

// Choisissez le client HTTP que vous voulez utiliser
export const api = new AxiosHttpClient(API_URL);
// ou
// export const api = new FetchHttpClient(API_URL);

// Ajoutez l'intercepteur pour le token d'authentification
api.instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);