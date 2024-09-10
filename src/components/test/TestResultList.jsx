import TestResultItem from './TestResultItem';
import useAuthStore from '../../core/stores/useAuthStore';
import Article from '../common/ui/Article';

export default function TestResultList({ results, onUpdate, onDelete }) {
  const { userId } = useAuthStore((state) => ({
    userId: state.userId
  }));

  return (
    <Article className="Result">
      <h1 className="mb-6 text-3xl text-primary-color">모든 테스트 결과</h1>

      {results
        .filter((result) => result.visibility || result.userId === userId)
        .map((result, index) => (
          <TestResultItem key={result.id || index} result={result} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
    </Article>
  );
}
