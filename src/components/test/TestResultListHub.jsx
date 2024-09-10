import { useEffect } from 'react';
import TestResultList from './TestResultList';
import { getTestResults } from '../../core/api/testResults';
import useTestStore from '../../core/stores/useTestStore';

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
    <>
      <TestResultList key={results.id} results={results} onUpdate={fetchResults} onDelete={fetchResults} />
    </>
  );
}
