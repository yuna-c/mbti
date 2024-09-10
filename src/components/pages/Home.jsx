import { Link } from 'react-router-dom';
import useAuthStore from '../../core/stores/useAuthStore';
import Article from '../common/ui/Article';

export default function Home() {
  const accessToken = useAuthStore((state) => state.accessToken);

  return (
    <Article className="Home">
      <h1 className="mb-6 text-3xl text-center">무료 성격 테스트</h1>

      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      {!accessToken ? <Link to="/login">로그인하기</Link> : <Link to="/test">테스트 하러 가기</Link>}
    </Article>
  );
}
