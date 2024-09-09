import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';

import AuthForm from '../common/ui/AuthForm';
import useAuthStore from '../../store/AuthStore';

export default function Login() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { accessToken, nickname, userId } = data;
      setAuth(accessToken, nickname, userId);
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
