import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active text-blue-500 font-bold' : 'text-gray-500')}>
            홈
          </NavLink>
        </li>
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
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active text-blue-500 font-bold' : 'text-gray-500')}
            >
              <button>로그아웃</button>
            </NavLink>
          </li>
        </>
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
      </ul>
    </nav>
  );
}
