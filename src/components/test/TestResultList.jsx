import TestResultItem from './TestResultItem';
import useAuthStore from '../../core/stores/useAuthStore';
import Article from '../common/ui/Article';
import useTestStore from '../../core/stores/useTestStore';

export default function TestResultList({ onUpdate, onDelete }) {
  const { userId } = useAuthStore((state) => ({ userId: state.userId }));
  const { results } = useTestStore();
  // console.log(`results=>`, results);
  return (
    <Article className="Result">
      <h1 className="mb-6 text-3xl text-primary-color">모든 테스트 결과</h1>

      {results
        .filter((result) => result.visibility || result.userId === userId)
        .map((result, index) => (
          // {console.log(`이거뭐야`, result.id, result)}
          // <p>이거뭐야 {result.id}</p>
          <TestResultItem key={result.id || index} result={result} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
    </Article>
  );
}
