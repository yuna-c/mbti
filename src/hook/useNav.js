import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/AuthStore';

export const useNav = () => {
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

  return { accessToken, nickname, onHandleLogout };
};
