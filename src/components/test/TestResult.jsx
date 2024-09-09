import { useEffect, useState } from 'react';
import { getTestResults } from '../../api/testResults';
import TestResultList from './TestResultList';
import { useLocation } from 'react-router-dom';
import useTestStore from '../../store/useTestStore';

const TestResult = () => {
  const location = useLocation();
  const [showResultsList, setShowResultsList] = useState(false);
  const { results, setResults } = useTestStore();
  const { result, nickname, description } = location.state || {};

  const fetchResults = async () => {
    try {
      // setLoading(true);
      const fetchedResults = await getTestResults();
      setResults(fetchedResults); // 상태 업데이트
    } catch (error) {
      console.error('결과를 가져오는 중 오류 발생:', error);
    } finally {
      // setLoading(false);
    }
  };

  // 마운트시 테스트 결과 가져옴
  useEffect(() => {
    fetchResults();
  }, []);

  const handleShowResultsList = () => {
    setShowResultsList(true);
  };

  return (
    <>
      {!showResultsList && (
        <div className="max-w-2xl p-6 mx-auto mt-10 mb-10 bg-white rounded-lg shadow-md TestResultPage">
          <>
            <h1 className="mb-6 text-3xl text-center text-primary-color">MBTI 테스트 결과</h1>
            <div className="w-full max-w-2xl bg-white">
              {result ? (
                <div className="mb-6 text-center">
                  <p className="text-lg">닉네임: {nickname}</p>
                  <p className="text-lg">MBTI 유형: {result}</p>
                  <p className="text-gray-700">{description}</p>

                  <button onClick={handleShowResultsList} className="mt-6 underline text-primary-color">
                    전체 게시물 보러가기
                  </button>
                </div>
              ) : (
                <p>결과를 확인할 수 없습니다. 테스트를 다시 시도해 주세요.</p>
              )}
            </div>
          </>
        </div>
      )}

      {showResultsList && (
        <div className="flex flex-col items-center justify-center w-full p-8 bg-white rounded-lg shadow-lg">
          {/* {loading ? (<p>결과를 불러오는 중입니다...</p>) : ()} */}
          <TestResultList results={results} onUpdate={fetchResults} onDelete={fetchResults} />
        </div>
      )}
    </>
  );
};

export default TestResult;
