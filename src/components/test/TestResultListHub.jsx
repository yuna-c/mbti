import { useEffect } from 'react';
import { getTestResults } from '../../api/testResults';
import TestResultList from './TestResultList';
import useTestStore from '../../store/useTestStore';

export default function TestResultListHub() {
  const { results, setResults } = useTestStore(); // 전역 상태에서 결과 가져옴

  const fetchResults = async () => {
    try {
      const fetchedResults = await getTestResults();
      setResults(fetchedResults); // 상태 업데이트
    } catch (error) {
      console.error('결과를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 bg-white rounded-lg shadow-lg">
      <TestResultList key={results.id} results={results} onUpdate={fetchResults} onDelete={fetchResults} />
    </div>
  );
}
