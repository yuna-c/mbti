import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../core/stores/useAuthStore';
import useTestStore from '../../core/stores/useTestStore';
import calculateMBTI from '../../core/utils/calculateMBTI';
import { createTestResult } from '../../core/api/testResults';
import { mbtiDescriptions } from '../../assets/data/descriptions';
import TestForm from './TestForm';
import Article from '../common/ui/Article';

export default function TestPage() {
  const navigate = useNavigate();
  const { addResult, setCurrentResult } = useTestStore();
  const { userId, nickname } = useAuthStore((state) => ({
    userId: state.userId,
    nickname: state.nickname
  }));

  const onHandleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const description = mbtiDescriptions[result];

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
    <Article className="TestPage">
      <h1 className="mb-6 text-3xl">MBTI 테스트 하기</h1>

      <TestForm onSubmit={onHandleTestSubmit} />
    </Article>
  );
}
