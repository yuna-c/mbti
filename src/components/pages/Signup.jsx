import { register } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import AuthForm from '../common/ui/AuthForm';
import useAuthStore from '../../store/useAuthStore';

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
    <div className="Signup">
      <h2>회원가입</h2>
      <AuthForm mode="signup" onSubmit={onHandleSignup} />
    </div>
  );
}
