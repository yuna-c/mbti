import TestResultList from './TestResultList';
import { getTestResults } from '../../core/api/testResults';
import useTestStore from '../../core/stores/useTestStore';
import { useQuery, useQueryClient } from '@tanstack/react-query';
// import { useEffect } from 'react';

export default function TestResultListHub() {
  const queryClient = useQueryClient();

  const { results, setResults } = useTestStore(); // 전역 상태에서 결과 가져옴

  // 가능
  // const fetchResults = async () => {
  //   try {
  //     const fetchedResults = await getTestResults();
  //     setResults(fetchedResults); // 상태 업데이트
  //   } catch (error) {
  // 이 부분이 무슨 문제가 있나요?

  //     console.error('결과를 가져오는 중 오류 발생:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchResults();
  // }, []);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['testResults'], // 쿼리키
    queryFn: getTestResults, // 데이터 패칭 함수  <== 일단 얘는 필요함
    onSuccess: (fetchedResults) => {
      console.log('패칭된 결과:', fetchedResults); //fetchedResults 얘가 피요한데
      // 근데 지금 console에 무슨 에러나오고있어요?
      // mutant 쓸때 아니면 invalidate 필요없지요?
      // 이게 직접 refetch이거로 하면 저 상태가 필요가 없다고 변할 때마다 바로 상태도 변하는 함수라고 해서 썼었는데
      // 그래서 useQueryClient 요거 대신 refetch요걸 썻는데
      setResults(fetchedResults); // 상태 업데이트 혹시 뭐하나만 써봐도될까여??
      //SAPP p..ㅋㅋㄴㅋㄴ메ㅔ?ㅋㅋㅋㅋ
      // QueryClient() << == // ㅅ이거랑 invalidateQueries 이거 쓰면 바로 반영되지않나여?잠시 ㄱㄷ저 뮤테이션 안쓰고
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error('결과 가져오는 중 오류가 발생하였어요.', error);
    }
  });

  // 저 return gownsms값을 보고싶은데 data

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
      <TestResultList results={results} onUpdate={setResults} onDelete={setResults} />
      {/* onUpdate={fetchResults} onDelete={fetchResults} */}
    </>
  );
}
