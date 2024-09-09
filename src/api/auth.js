import { auth } from '../instance/Instance';

export const register = async (userData) => {
  const { data } = await auth.post(`/register`, userData);
  return data;
};

export const login = async (userData) => {
  const { data } = await auth.post(`/login`, userData);
  return data;
};

export const getUserProfile = async (token) => {
  const { data } = await auth.get(`/login`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const updateProfile = async (token, userData) => {
  const { data } = await auth.patch(
    `/profile`,
    { nickname: userData.nickname },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
  return data;
};
