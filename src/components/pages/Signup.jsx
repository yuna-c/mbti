import { useNavigate } from 'react-router-dom';
import AuthForm from '../common/ui/AuthForm';
import Article from '../common/ui/Article';
import { useSignUp } from '../../core/hooks/useAuth';

export default function Signup() {
  const navigate = useNavigate();
  const { mutate } = useSignUp();

  const onHandleSignup = (userData) => {
    mutate(userData, {
      onSuccess: () => {
        navigate('/login');
      }
    });
  };

  return (
    <Article className="Signup">
      <h1 className="mb-6 text-3xl">회원가입</h1>
      {/*  text-center */}
      <AuthForm mode="signup" onSubmit={onHandleSignup} />
    </Article>
  );
}
