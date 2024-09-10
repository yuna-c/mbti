import useTestStore from '../../store/useTestStore';
import { useNavigate } from 'react-router-dom';

export default function TestResult() {
  const { currentResult } = useTestStore();
  const navigate = useNavigate();

  const handleShowResultsList = () => {
    navigate('/resultlist');
  };

  if (!currentResult) {
    return <p>결과를 확인할 수 없습니다. 테스트를 다시 시도해 주세요.</p>;
  }

  return (
    <div className="max-w-2xl p-6 mx-auto mt-10 mb-10 bg-white rounded-lg shadow-md TestResultPage">
      <h1 className="mb-6 text-3xl text-center text-primary-color">MBTI 테스트 결과</h1>
      <div className="w-full max-w-2xl bg-white">
        <div className="mb-6 text-center">
          <p className="text-lg">닉네임: {currentResult.nickname}</p>
          <p className="text-lg">MBTI 유형: {currentResult.result}</p>
          <p className="text-gray-700">{currentResult.description}</p>

          <button onClick={handleShowResultsList} className="mt-6 underline text-primary-color">
            전체 게시물 보러가기
          </button>
        </div>
      </div>
    </div>
  );
}
