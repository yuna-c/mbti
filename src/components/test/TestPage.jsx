import TestForm from './TestForm';
import useAuthStore from '../../store/useAuthStore';
import useTestStore from '../../store/useTestStore';
import calculateMBTI from '../../utils/calculateMBTI';
import { useNavigate } from 'react-router-dom';
import { createTestResult } from '../../api/testResults';
import { MBTI_DESCRIPTIONS } from './../../utils/mbtiDescriptions';

export default function TestPage() {
  const navigate = useNavigate();
  const { addResult, setCurrentResult } = useTestStore(); // 전역 상태 업데이트 함수
  const { userId, nickname } = useAuthStore((state) => ({
    userId: state.userId,
    nickname: state.nickname
  }));

  const onHandleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const description = MBTI_DESCRIPTIONS[result];

    const resultData = {
      userId,
      nickname,
      result,
      answers,
      description,
      date: new Date().toISOString(), // 날짜와 시간을 UTC 기준의 ISO 8601 형식으로 변환
      visibility: true
    };

    await createTestResult(resultData); // 서버에 결과 전송
    addResult(resultData); // 상태에 결과 추가
    setCurrentResult(resultData); // 전역 상태에 현재 결과 저장

    // location.state로 데이터를 넘기지 않고 상태관리를 통해 결과 페이지 이동 처리
    // navigate('/result', { state: { nickname, result, description } })
    navigate('/result');
  };

  return (
    <div className="TestPage">
      <div className="mb-4 text-2xl font-bold">
        <h1>MBTI 테스트</h1>
        <TestForm onSubmit={onHandleTestSubmit} />
      </div>
    </div>
  );
}
