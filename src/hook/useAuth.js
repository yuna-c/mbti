import { useMutation } from '@tanstack/react-query';
import useAuthStore from '../store/useAuthStore';
import { login, register } from '../api/auth';

// 로그아웃
export const useLogout = () => {
  const { accessToken, clearAuth, nickname } = useAuthStore((state) => ({
    accessToken: state.accessToken,
    clearAuth: state.clearAuth,
    nickname: state.nickname
  }));

  return { accessToken, nickname, clearAuth };
};

// 회원가입
export const useSignUp = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setAuth(data.accessToken, data.nickname, data.userId);
    },
    onError: (error) => {
      console.error('회원가입 실패:', error.response?.data || error.message);
    }
  });

  return mutation;
};

// 로그인
export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { accessToken, nickname, userId } = data;
      setAuth(accessToken, nickname, userId);
    },
    onError: (error) => {
      console.error('로그인 실패:', error.response?.data || error.message);
    }
  });

  return mutation;
};
