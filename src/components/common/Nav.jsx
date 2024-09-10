import { useLogout } from '../../hook/useAuth';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import NavLink from './ui/NavLink';

export default function Nav() {
  const navigate = useNavigate();
  const { accessToken, nickname, clearAuth } = useLogout();

  const onHandleLogout = () => {
    clearAuth();
    navigate('/');
  };

  return (
    <nav
      aria-label="Global"
      className="flex items-center justify-between p-4 mx-auto border-b border-stone-950 max-w-7xl Nav"
    >
      <div className="flex items-center Logo">
        <NavLink to="/" label="홈" />
      </div>
      <ul className="flex items-center justify-between">
        {accessToken ? (
          <>
            <li className="mx-3">
              <NavLink to="/profile" label="프로필" />
            </li>
            <li className="mx-3">
              <NavLink to="/test" label="테스트" />
            </li>
            <li className="mx-3">
              <NavLink to="/resultlist" label="결과보기" />
            </li>
            <li className="flex items-center ml-2">
              <p>
                <span className="text-red-400">❤{nickname}❤</span>
              </p>
              <Button onClick={onHandleLogout} className="px-3 py-1 ml-3 text-base">
                로그아웃
              </Button>
            </li>
          </>
        ) : (
          <>
            <li className="mx-3">
              <NavLink to="/login" label="로그인" />
            </li>
            <li className="mx-3">
              <NavLink to="/signup" label="회원가입" />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
