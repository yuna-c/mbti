import TestForm from './TestForm';
import useAuthStore from '../../store/AuthStore';
import calculateMBTI from '../../utils/calculateMBTI';

import { useNavigate } from 'react-router-dom';
import { createTestResult } from '../../api/testResults';
import { MBTI_DESCRIPTIONS } from './../../utils/mbtiDescriptions';

export default function TestPage() {
  const navigate = useNavigate();

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
      date: new Date().toISOString(), // 날짜와 시간을 UTC 기준의 ISO 8601 형식으로 문자열로 변환하는 함수
      visibility: true
    };

    await createTestResult(resultData);

    navigate('/result', {
      state: {
        nickname: resultData.nickname,
        result: resultData.result,
        description: resultData.description
      }
    });
  };

  return (
    <div className="TestPage">
      <div className="mb-4 text-2xl ">
        <h1>MBTI 테스트</h1>
        <TestForm onSubmit={onHandleTestSubmit} />
      </div>
    </div>
  );
}
