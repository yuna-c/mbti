import { register } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import AuthForm from '../common/ui/AuthForm';
import useAuthStore from '../../store/useAuthStore';
import Article from '../common/ui/Article';

export default function Signup() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setAuth(data.accessToken, data.nickname, data.userId);
      navigate('/login');
    },
    onError: (error) => {
      console.error('회원가입 실패:', error.response?.data || error.message);
    }
  });

  const onHandleSignup = (userData) => {
    mutate(userData);
  };

  return (
    <Article className="Signup">
      <h1 className="mb-6 text-3xl text-center">회원가입</h1>
      <AuthForm mode="signup" onSubmit={onHandleSignup} />
    </Article>
  );
}
