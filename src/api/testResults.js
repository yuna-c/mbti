import { api } from '../instance/Instance';

export const getTestResults = async () => {
  const { data } = await api.get('/testResults');
  return data;
};

export const createTestResult = async (resultData) => {
  const { data } = await api.post('/testResults', resultData);
  return data;
};

export const deleteTestResult = async (id) => {
  const { data } = await api.delete(`/testResults/${id}`);
  return data;
};

export const updateTestResultVisibility = async (id, newVisibility) => {
  const { data } = await api.patch(`/testResults/${id}`, {
    visibility: newVisibility
  });
  return data;
};
