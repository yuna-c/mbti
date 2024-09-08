import axios from 'axios';

const API_URL = 'http://localhost:5000/testResults';

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axios.post(API_URL, resultData);
  console.log('제출됨');
  return response.data;
};

// export const deleteTestResult = async (id) => {};
// export const updateTestResultVisibility = async (id, visibility) => {};
