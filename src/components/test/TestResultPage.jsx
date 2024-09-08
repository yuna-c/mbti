import { useEffect, useState } from 'react';
import { getTestResults } from '../../api/testResults';
import TestResultList from './TestResultList';

export default function TestResultPage({ user }) {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const data = await getTestResults();
    setResults(data);
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
  return (
    <div className="TestResultPage">
      <h1>테스트 결과 페이지</h1>
      <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
        <div className="bg-white max-w-2xl w-full">
          <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">모든 테스트 결과</h1>
          <TestResultList results={results} user={user} onUpdate={handleUpdate} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
