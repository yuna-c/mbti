import { useNavigate } from 'react-router-dom';
import useTestStore from '../../core/stores/useTestStore';
import Button from '../common/ui/Button';
import Article from '../common/ui/Article';
import { randomImages } from '../../assets/data/images';

export default function TestResult() {
  const { currentResult } = useTestStore();
  const navigate = useNavigate();
  const mbtiImage = randomImages[Math.floor(Math.random() * randomImages.length)];

  const handleShowResultsList = () => {
    navigate('/resultlist');
  };

  if (!currentResult) {
    return <p>결과를 확인할 수 없습니다. 테스트를 다시 시도해 주세요.</p>;
  }

  return (
    <Article className="flex items-center justify-center w-full p-8 ex-col TestResult ">
      <h1 className="mb-6 text-3xl">MBTI 테스트 결과</h1>

      <div className="result">
        <div className="w-1/3 mx-auto my-8 -z-10 -top-20 -right-12 opacity-85">
          <img src={mbtiImage} alt="ranDomImage" className="h-auto w-fit" />
        </div>

        <div className="mb-6 space-y-4 text-center">
          <p className="text-2xl">닉네임: {currentResult.nickname}</p>
          <p className="text-2xl">{currentResult.result}</p>
          <p className="!mb-6 text-gray-700">{currentResult.description}</p>

          <Button onClick={handleShowResultsList} className="w-full p-2 ">
            전체 게시물 보러가기
          </Button>
        </div>
      </div>
    </Article>
  );
}
