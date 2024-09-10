import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';

import AuthForm from '../common/ui/AuthForm';
import useAuthStore from '../../store/useAuthStore';
import Article from '../common/ui/Article';

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
    <Article className="Login">
      <h1 className="mb-6 text-3xl text-center">로그인</h1>
      <AuthForm mode="login" onSubmit={onHandleLogin} />
    </Article>
  );
}
