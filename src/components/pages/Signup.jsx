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
      console.log('회원가입 성공:', data); // 응답 데이터 확인
      const { accessToken, nickname, userId } = data;
      setAuth(accessToken, nickname, userId);
    },
    onError: (error) => {
      console.error('회원가입 실패:', error.response?.data || error.message);
    }
  });

  const onHandleSignup = (userData) => {
    console.log('회원가입 데이터:', userData); // 전달된 회원가입 데이터 확인
    mutation.mutate(userData); // 회원가입 실행
  };

  return (
    <div className="Signup">
      <h2>회원가입</h2>
      <AuthForm mode="signup" onSubmit={onHandleSignup} />
    </div>
  );
}
