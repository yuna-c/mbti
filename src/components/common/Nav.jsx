import { useNavigate, NavLink } from 'react-router-dom';
import useAuthStore from '../../store/AuthStore';

export default function Nav() {
  const navigate = useNavigate();

  const { accessToken, clearAuth, nickname } = useAuthStore((state) => ({
    accessToken: state.accessToken,
    clearAuth: state.clearAuth,
    nickname: state.nickname
  }));

  const onHandleLogout = () => {
    clearAuth();
    alert('로그아웃 되셨습니다.');
    navigate('/');
  };

  return (
    <nav
      aria-label="Global"
      className="flex items-center justify-between p-4 mx-auto border-b border-stone-950 max-w-7xl Nav"
    >
      <div className="flex items-center Logo">
        <NavLink to="/" className={({ isActive }) => `${isActive ? 'active text-red-400' : 'text-black-500'}`}>
          홈
        </NavLink>
      </div>
      <ul className="flex items-center justify-between">
        {accessToken ? (
          <>
            <li className="mx-3">
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? 'active  text-red-400' : 'text-black-500')}
              >
                프로필
              </NavLink>
            </li>
            <li className="mx-3">
              <NavLink to="/test" className={({ isActive }) => (isActive ? 'active text-red-400' : 'text-black-500')}>
                테스트
              </NavLink>
            </li>
            <li className="mx-3">
              <NavLink to="/result" className={({ isActive }) => (isActive ? 'active text-red-400' : 'text-black-500')}>
                결과보기
              </NavLink>
            </li>
            <li className="flex items-center ml-2">
              <p className="">
                <span className="text-red-400">{nickname}</span>님 환영합니다
              </p>
              <button
                className="px-3 py-1 ml-3 text-sm text-white rounded-md bg-stone-950 hover:bg-stone-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={onHandleLogout}
              >
                로그아웃
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="mx-3">
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'active text-red-400 ' : 'text-black-500')}>
                로그인
              </NavLink>
            </li>
            <li className="mx-3">
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? 'active text-red-400 ' : 'text-black-500')}
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
