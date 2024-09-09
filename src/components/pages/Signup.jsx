import { register } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import AuthForm from '../common/AuthForm';
import useAuthStore from '../../store/AuthStore';

export default function Signup() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      // 성공 시 zustand 상태 업데이트
      console.log('회원가입 성공:', data);
      setAuth(data.accessToken, data.nickname, data.userId);
      navigate('/login');
    },
    onError: (error) => {
      console.error('회원가입 실패:', error.response?.data || error.message);
    }
  });

  const onHandleSignup = (userData) => {
    console.log('회원가입 데이터:', userData);
    mutation.mutate(userData);
  };

  return (
    <div className="Signup">
      <h2>회원가입</h2>
      <AuthForm mode="signup" onSubmit={onHandleSignup} />
    </div>
  );
}
