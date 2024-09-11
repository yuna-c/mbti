import { Link } from 'react-router-dom';
import { mainText } from './../../assets/data/maintext';
import TextBox from '../common/ui/TextBox';
import useAuthStore from '../../core/stores/useAuthStore';
import Article from '../common/ui/Article';
import Button from '../common/ui/Button';

export default function Home() {
  const accessToken = useAuthStore();

  return (
    <Article className="space-y-4 Home">
      <h1 className="mb-2 text-3xl">무료 성격 테스트</h1>

      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>

      <div className="flex flex-col gap-4 py-4 md:flex-row text">
        {mainText.map((data, index) => {
          return <TextBox data={data} key={data.id} />;
        })}
      </div>

      {!accessToken ? (
        <Link to="/login">
          <Button className="w-full p-2">로그인하기</Button>
        </Link>
      ) : (
        <Link to="/test">
          <Button className="w-full p-2">테스트 하러 가기</Button>
        </Link>
      )}
    </Article>
  );
}
