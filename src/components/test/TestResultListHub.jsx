import TestResultList from './TestResultList';
import { getTestResults } from '../../core/api/testResults';
import useTestStore from '../../core/stores/useTestStore';
import { useQuery } from '@tanstack/react-query';
// import { useEffect } from 'react';

export default function TestResultListHub() {
  const { results, setResults } = useTestStore(); // 전역 상태에서 결과 가져옴

  // 가능
  // const fetchResults = async () => {
  //   try {
  //     const fetchedResults = await getTestResults();
  //     setResults(fetchedResults); // 상태 업데이트
  //   } catch (error) {
  //     console.error('결과를 가져오는 중 오류 발생:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchResults();
  // }, []);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['testResults'], // 쿼리키
    queryFn: getTestResults, // 데이터 패칭 함수
    onSuccess: (fetchedResults) => {
      console.log('패칭된 결과:', fetchedResults);
      setResults(fetchedResults); // 상태 업데이트
    },
    onError: (error) => {
      console.error('결과 가져오는 중 오류가 발생하였어요.', error);
    }
  });
  console.log('hub ', results);
  if (isLoading) {
    return <p>결과를 불러오는 중입니다</p>;
  }

  if (isError) {
    return <p>결과를 가져오는 중 오류가 발생했습니다: {error.message}</p>;
  }
  // {
  //   console.log('results', results.id);
  // }
  // {
  //   /* JSON.stringify(results) */
  // }

  // 쿼리로 하면 에러가 나는 이유
  // 1. 아이디가 분실됨..

  return (
    <>
      <TestResultList onUpdate={setResults} onDelete={setResults} />
    </>
  );
}
