import { deleteTestResult, updateTestResultVisibility } from '../../core/api/testResults';
import { mbtiDescriptions } from '../../assets/data/descriptions';
import useAuthStore from '../../core/stores/useAuthStore';
import Button from '../common/ui/Button';

export default function TestResultItem({ result, onUpdate, onDelete }) {
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
      alert('게시글 삭제 실패하였습니다. 다시 시도해 주세요!');
    }
  };

  return (
    <div className="p-6 mb-4 bg-white border border-black rounded-lg shadow-md hover:shadow-lg ">
      <div className="flex justify-between pb-3 mb-3 border-b border-black">
        <h4 className="text-2xl font-medium text-customPink">{result.nickname}</h4>
        <p className="text-sm text-black">{formattedDate}</p>
      </div>

      <p className="mb-4 text-2xl text-customBlue">{result.result}</p>
      <p className="mb-4 text-black">{description}</p>

      {isOwner && (
        <div className="flex justify-end space-x-4">
          <Button
            onClick={handleToggleVisibility}
            className="px-4 py-2 text-lg !bg-customBlue hover:!bg-customBlue-light focus:ring-2 focus:ring-customBlue-light !focus-visible:bg-customBlue-dark "
          >
            {result.visibility ? '비공개로 전환' : '공개로 전환'}
          </Button>

          <Button onClick={handleDelete} className="px-3 py-1 ml-3 text-lg">
            삭제
          </Button>
        </div>
      )}
    </div>
  );
}
