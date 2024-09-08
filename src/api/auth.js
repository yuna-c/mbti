import axios from 'axios';

const API_URL = 'https://moneyfulpublicpolicy.co.kr';

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);

  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/login`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

// export const login = async (userData) => {};
// export const updateProfile = async (formData) => {};
