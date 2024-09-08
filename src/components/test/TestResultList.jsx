import TestResultItem from './TestResultItem';
export default function TestResultList({ results, user, onUpdate, onDelete }) {
  return (
    <div className="TestResultList">
      <div className="space-y-4">
        {results
          .filter((result) => result.visibility || result.userId === user.id)
          .map((result) => (
            <TestResultItem key={result.id} result={result} user={user} onUpdate={onUpdate} onDelete={onDelete} />
          ))}
      </div>
    </div>
  );
}
