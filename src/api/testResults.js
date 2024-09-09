import { api } from '../instance/Instance';

export const getTestResults = async () => {
  const { data } = await api.get('/testResults');
  return data;
};

// export const createTestResult = async (resultData) => {
//   const { data } = await api.post('/testResults', resultData);
//   return data;
// };

export const createTestResult = async (resultData) => {
  try {
    const { data } = await api.post('/testResults', resultData);
    return data;
  } catch (error) {
    console.error('서버와 통신 중 오류 발생:', error);
    throw error; // 오류가 발생하면 이를 상위로 던져줌
  }
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
