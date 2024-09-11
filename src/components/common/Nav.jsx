import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../core/hooks/useAuth';
import { HiMenu, HiX } from 'react-icons/hi';
import { useState } from 'react';
import Button from './ui/Button';
import NavLink from './ui/NavLink';

export default function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { accessToken, nickname, clearAuth } = useLogout();

  const onHandleLogout = () => {
    clearAuth();
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav aria-label="Global" className="relative z-10 flex items-center justify-between mx-auto md:px-14 Nav">
      <div className="flex items-center Logo">
        <NavLink to="/" label="홈" />
      </div>

      <button onClick={toggleMenu} className="text-3xl md:hidden focus:outline-none" aria-label="Toggle menu">
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* <ul className="flex items-center justify-between"> */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex items-center justify-between absolute top-14 left-0 right-0 w-full rounded-md border border-black md:space-y-0 space-y-4 md:border-0 md:w-auto md:static md:p-0 p-3 bg-white md:bg-transparent transition-all duration-300 ease-in-out`}
      >
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
                <span className="text-customPink">❤ {nickname} ❤</span>
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
