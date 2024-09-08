import TestForm from './TestForm';
import calculateMBTI from '../../utils/calculateMBTI';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/AuthStore';
import { createTestResult } from '../../api/testResults';

export default function TestPage() {
  const navigate = useNavigate();

  // userId가 null인 이유는?
  const { userId, nickname } = useAuthStore((state) => ({
    userId: state.userId,
    nickname: state.nickname
  }));
  // alert(userId);

  const onHandleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const resultData = {
      userId,
      nickname,
      result,
      answers,
      // toISOString() : 날짜와 시간을 UTC 기준의 ISO 8601 형식으로 문자열로 변환하는 함수
      date: new Date().toISOString(),
      visibility: true
    };
    await createTestResult(resultData);
    navigate('/results');
  };

  return (
    <div className="TestPage">
      <div className="text-2xl font-bold mb-4">
        <h1>MBTI 테스트 페이지</h1>
        <TestForm onSubmit={onHandleTestSubmit} />
      </div>
    </div>
  );
}
