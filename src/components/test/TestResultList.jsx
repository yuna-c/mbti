import React from 'react';
import TestResultItem from './TestResultItem';
import useAuthStore from '../../store/AuthStore';

const TestResultList = ({ result, results, onUpdate, onDelete }) => {
  const { userId } = useAuthStore((state) => ({
    userId: state.userId
  }));

  console.log(`results=>`, results);
  console.log(`result=>`, result);
  return (
    <>
      <div className="space-y-4">
        <h1 className="mb-6 text-3xl  text-center text-primary-color">모든 테스트 결과</h1>

        {results
          .filter((result) => result.visibility || result.userId === userId)
          .map((result) => (
            <TestResultItem key={result.id} result={result} onUpdate={onUpdate} onDelete={onDelete} />
          ))}
      </div>
    </>
  );
};

export default TestResultList;
