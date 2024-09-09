import TestForm from './TestForm';
import useAuthStore from '../../store/useAuthStore';
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
      <div className="mb-4 text-2xl font-bold">
        <h1>MBTI 테스트</h1>
        <TestForm onSubmit={onHandleTestSubmit} />
      </div>
    </div>
  );
}

// import TestForm from './TestForm';
// import useAuthStore from '../../store/AuthStore';
// import calculateMBTI from '../../utils/calculateMBTI';
// import { useNavigate } from 'react-router-dom';
// import { useMutation } from '@tanstack/react-query'; // React Query의 useMutation 훅 사용
// import { createTestResult } from '../../api/testResults'; // 서버로 결과를 전송하는 함수
// import { MBTI_DESCRIPTIONS } from './../../utils/mbtiDescriptions';

// export default function TestPage() {
//   const navigate = useNavigate();

//   const { userId, nickname } = useAuthStore((state) => ({
//     userId: state.userId,
//     nickname: state.nickname
//   }));

//   const {
//     mutate: submitTestResult,
//     isLoading,
//     isError,
//     error
//   } = useMutation(createTestResult, {
//     onSuccess: (resultData) => {
//       navigate('/result', {
//         state: {
//           nickname: resultData.nickname,
//           result: resultData.result,
//           description: resultData.description
//         }
//       });
//     },
//     onError: (error) => {
//       console.error('결과 제출 중 오류 발생:', error.message || error);
//       alert(`서버 오류 발생: ${error.message || '알 수 없는 오류'}`);
//     }
//   });

//   const onHandleTestSubmit = async (answers) => {
//     const result = calculateMBTI(answers);
//     const description = MBTI_DESCRIPTIONS[result];

//     const resultData = {
//       userId,
//       nickname,
//       result,
//       answers,
//       description,
//       date: new Date().toISOString(),
//       visibility: true
//     };

//     // useMutation의 mutate 함수로 서버로 결과 전송
//     submitTestResult(resultData);
//   };

//   return (
//     <div className="TestPage">
//       <div className="mb-4 text-2xl font-bold">
//         <h1>MBTI 테스트</h1>
//         {isLoading && <p>결과를 제출 중입니다...</p>} {/* 로딩 상태 표시 */}
//         {isError && <p>에러 발생: {error.message}</p>} {/* 에러 상태 표시 */}
//         <TestForm onSubmit={onHandleTestSubmit} />
//       </div>
//     </div>
//   );
// }
