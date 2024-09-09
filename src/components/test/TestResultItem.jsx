import React from 'react';
import { deleteTestResult, updateTestResultVisibility } from '../../api/testResults';
import useAuthStore from '../../store/useAuthStore';
import { MBTI_DESCRIPTIONS } from './../../utils/mbtiDescriptions';

const TestResultItem = ({ result, onUpdate, onDelete }) => {
  const { userId } = useAuthStore((state) => ({
    userId: state.userId
  }));

  console.log(result);
  const isOwner = result.userId === userId;
  const formattedDate = new Date(result.date).toLocaleString();
  const description = MBTI_DESCRIPTIONS[result.result] || 'MBTI 유형 설명을 찾을 수 없습니다.';

  const handleToggleVisibility = async () => {
    try {
      const newVisibility = !result.visibility;
      await updateTestResultVisibility(result.id, newVisibility);
      onUpdate(); // 부모 컴포넌트에서 결과 목록을 다시 불러오도록 요청
    } catch (error) {
      console.error('게시물 공개/ 비공개 실패 :', error);
      alert('게시물 공개/ 비공개 실패. 다시시도');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTestResult(result.id);
      onDelete(); // 부모 컴포넌트에서 결과 목록을 다시 불러오도록 요청
    } catch (error) {
      console.error('삭제 실패:', error);
      alert('삭제 실패. 다시 시도');
    }
  };

  return (
    <div className="p-6 text-white bg-gray-800 rounded-lg shadow-lg">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-700">
        <h4 className="text-xl font-semibold">{result.nickname}</h4>
        <p className="text-sm text-gray-400">{formattedDate}</p>
      </div>
      <p className="mb-4 text-2xl text-yellow-400">{result.result}</p>
      <p className="mb-4 text-base text-gray-300">{description}</p>

      {isOwner && (
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleToggleVisibility}
            className="px-4 py-2 text-sm transition bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            {result.visibility ? '비공개로 전환' : '공개로 전환'}
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 text-sm transition bg-red-500 rounded-lg hover:bg-red-600"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
