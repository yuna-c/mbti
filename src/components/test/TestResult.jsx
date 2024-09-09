import { useEffect, useState } from 'react';
import { getTestResults } from '../../api/testResults';
import TestResultList from './TestResultList';
import { useLocation } from 'react-router-dom';

const TestResult = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [showResultsList, setShowResultsList] = useState(false); // 전체 게시물 보이기 상태 추가
  const { result, nickname, description } = location.state || {};
  console.log(`result =>`, result);

  const fetchResults = async () => {
    const fetchedResults = await getTestResults();
    setResults(fetchedResults);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleUpdate = () => {
    fetchResults();
  };

  const handleDelete = () => {
    fetchResults();
  };

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
          <TestResultList results={results} result={result} onUpdate={handleUpdate} onDelete={handleDelete} />
        </div>
      )}
    </>
  );
};

export default TestResult;
