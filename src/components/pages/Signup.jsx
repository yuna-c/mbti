import { useMutation } from '@tanstack/react-query';
import { register } from '../../api/auth';

import useAuthStore from '../../store/AuthStore';
import AuthForm from '../common/AuthForm';

export default function Signup() {
  const setAuth = useAuthStore((state) => state.setAuth);

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      // 성공 시 zustand 상태 업데이트
      setAuth(data.accessToken, data.nickname, data.userId);
    },
    onError: (error) => {
      console.error('회원가입 실패:', error);
    }
  });

  const onHandleSignup = (userData) => {
    mutation.mutate(userData); // 회원가입 실행
  };

  return (
    <div className="Signup">
      <h2>회원가입</h2>
      <AuthForm mode="signup" onSubmit={onHandleSignup} />
    </div>
  );
}
