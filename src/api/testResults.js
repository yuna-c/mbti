import { api } from '../instance/Instance';

// 테스트 결과 목록 가져오기
export const getTestResults = async () => {
  try {
    const { data } = await api.get('/testResults');
    return data;
  } catch (error) {
    console.error(
      '서버와 통신 중 오류 발생 (getTestResults):',
      error.response?.data /*서버에서 반환된 에러 메시지를 출력*/ || error.message
    );
    throw new Error('테스트 결과를 불러오는 중 오류가 발생했습니다.');
  }
};

// 테스트 결과 생성
export const createTestResult = async (resultData) => {
  try {
    const { data } = await api.post('/testResults', resultData);
    return data;
  } catch (error) {
    console.error('서버와 통신 중 오류 발생 (createTestResult):', error.response?.data || error.message);
    throw new Error('테스트 결과를 저장하는 중 오류가 발생했습니다.');
  }
};

// 테스트 결과 삭제
export const deleteTestResult = async (id) => {
  try {
    const { data } = await api.delete(`/testResults/${id}`);
    return data;
  } catch (error) {
    console.error('서버와 통신 중 오류 발생 (deleteTestResult):', error.response?.data || error.message);
    throw new Error('테스트 결과를 삭제하는 중 오류가 발생했습니다.');
  }
};

// 테스트 결과 공개/비공개 상태 업데이트
export const updateTestResultVisibility = async (id, newVisibility) => {
  try {
    const { data } = await api.patch(`/testResults/${id}`, {
      visibility: newVisibility
    });
    return data;
  } catch (error) {
    console.error('서버와 통신 중 오류 발생 (updateTestResultVisibility):', error.response?.data || error.message);
    throw new Error('테스트 결과의 공개 상태를 업데이트하는 중 오류가 발생했습니다.');
  }
};
