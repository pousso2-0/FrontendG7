// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Ajustez l'URL selon votre configuration

const authService = {
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/users/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default authService;