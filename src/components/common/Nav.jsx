import { useNavigate, NavLink } from 'react-router-dom';
import useAuthStore from '../../store/AuthStore';

export default function Nav() {
  const { accessToken, clearAuth, nickname } = useAuthStore((state) => ({
    accessToken: state.accessToken,
    clearAuth: state.clearAuth,
    nickname: state.nickname
  }));

  const navigate = useNavigate();

  const onHandleLogout = () => {
    clearAuth();
    alert('로그아웃 되셨습니다.');
    navigate('/');
  };
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active text-blue-500 font-bold' : 'text-gray-500')}>
            홈
          </NavLink>
        </li>
        {accessToken ? (
          <>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? 'active text-blue-500 font-bold' : 'text-gray-500')}
              >
                프로필
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/test"
                className={({ isActive }) => (isActive ? 'active text-blue-500 font-bold' : 'text-gray-500')}
              >
                테스트
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/results"
                className={({ isActive }) => (isActive ? 'active text-blue-500 font-bold' : 'text-gray-500')}
              >
                결과보기
              </NavLink>
            </li>
            <li>
              <span>{nickname}</span>
            </li>
            <li>
              <button onClick={onHandleLogout}>로그아웃</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'active text-blue-500 font-bold' : 'text-gray-500')}
              >
                로그인
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? 'active text-blue-500 font-bold' : 'text-gray-500')}
              >
                회원가입
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
