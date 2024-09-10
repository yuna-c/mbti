import { deleteTestResult, updateTestResultVisibility } from '../../api/testResults';
import useAuthStore from '../../store/useAuthStore';
import Button from '../common/ui/Button';
import { mbtiDescriptions } from '../../data/descriptions';

const TestResultItem = ({ result, onUpdate, onDelete }) => {
  const { userId } = useAuthStore((state) => ({
    userId: state.userId
  }));

  const isOwner = result.userId === userId;
  const formattedDate = new Date(result.date).toLocaleString();
  const description = mbtiDescriptions[result.result] || 'MBTI 유형 설명을 찾을 수 없습니다.';

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
    <div className="p-6 mb-4 border rounded-lg shadow-md border-slate-50 hover:shadow-lg">
      <div className="flex items-center justify-between pb-3 mb-3 border-b">
        <h4 className="text-xl text-red-400">{result.nickname}</h4>
        <p className="text-sm text-gray-400">{formattedDate}</p>
      </div>
      <p className="mb-4 text-2xl text-red-300">{result.result}</p>
      <p className="mb-4 text-base text-gray-500">{description}</p>

      {isOwner && (
        <div className="flex justify-end space-x-4">
          <Button onClick={handleToggleVisibility} className="px-4 py-2 text-base bg-blue-400 hover:bg-blue-300">
            {result.visibility ? '비공개로 전환' : '공개로 전환'}
          </Button>
          <Button onClick={handleDelete} className="px-3 py-1 ml-3 text-base">
            삭제
          </Button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
