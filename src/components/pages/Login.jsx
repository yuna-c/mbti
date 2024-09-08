import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';

import AuthForm from '../common/AuthForm';
import useAuthStore from '../../store/AuthStore';

export default function Login() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { accessToken, nickname, userId } = data;
      // Test 결과 DB 저장을 위한 userId 저장, 중복 storage.setItem삭제
      setAuth(accessToken, nickname, userId);

      // 다시 사라지는 이유는 ... 이렇게 안해서 그런가?
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('nickname', nickname);
      localStorage.setItem('userId', userId);
      navigate('/');
    },
    onError: (error) => {
      console.error('로그인 실패:', error.response?.data || error.message);
    }
  });

  const onHandleLogin = (userData) => {
    mutation.mutate(userData);
  };

  return (
    <div className="Login">
      <h2>로그인</h2>
      <AuthForm mode="login" onSubmit={onHandleLogin} />
    </div>
  );
}
