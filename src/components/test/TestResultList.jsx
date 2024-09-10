import React from 'react';
import TestResultItem from './TestResultItem';
import useAuthStore from '../../store/useAuthStore';

const TestResultList = ({ results, onUpdate, onDelete }) => {
  const { userId } = useAuthStore((state) => ({
    userId: state.userId
  }));

  return (
    <>
      <div className="space-y-4">
        <h1 className="mb-6 text-3xl text-center text-primary-color">모든 테스트 결과</h1>

        {results
          .filter((result) => result.visibility || result.userId === userId)
          .map((result, index) => (
            <TestResultItem key={result.id || index} result={result} onUpdate={onUpdate} onDelete={onDelete} />
          ))}
      </div>
    </>
  );
};

export default TestResultList;
