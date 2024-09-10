import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAuthStore from '../store/useAuthStore';
import { login, register, updateProfile } from '../api/auth';

// 회원가입
export const useSignUp = () => {
  const queryClient = useQueryClient();
  const setAuth = useAuthStore((state) => state.setAuth);

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setAuth(data.accessToken, data.nickname, data.userId);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error('회원가입 실패:', error.response?.data || error.message);
    }
  });

  return mutation;
};

// 로그인
export const useLogin = () => {
  const queryClient = useQueryClient();
  const setAuth = useAuthStore((state) => state.setAuth);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { accessToken, nickname, userId } = data;
      setAuth(accessToken, nickname, userId);
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error('로그인 실패:', error.response?.data || error.message);
    }
  });

  return mutation;
};

// 로그아웃
export const useLogout = () => {
  const { accessToken, clearAuth, nickname } = useAuthStore((state) => ({
    accessToken: state.accessToken,
    clearAuth: state.clearAuth,
    nickname: state.nickname
  }));

  return { accessToken, nickname, clearAuth };
};

// 닉네임 수정
export const useProfile = () => {
  const queryClient = useQueryClient();
  const { token, setNicknameInStore } = useAuthStore((state) => ({
    token: state.accessToken,
    setNicknameInStore: state.setNickname
  }));

  const mutation = useMutation({
    mutationFn: (newNickname) => updateProfile(token, { nickname: newNickname }),
    onSuccess: (data, newNickname) => {
      setNicknameInStore(newNickname); // newNickname을 store에 저장
      queryClient.invalidateQueries(); // 캐시된 쿼리 무효화
    },
    onError: (error) => {
      console.error('닉네임 변경 실패:', error);
    }
  });

  return mutation;
};
