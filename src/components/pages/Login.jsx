import { useNavigate } from 'react-router-dom';
import AuthForm from '../common/ui/AuthForm';
import Article from '../common/ui/Article';
import { useLogin } from '../../hook/useAuth';

export default function Login() {
  const navigate = useNavigate();
  const { mutate } = useLogin();

  const onHandleLogin = (userData) => {
    mutate(userData, {
      onSuccess: () => {
        navigate('/');
      }
    });
  };

  return (
    <Article className="Login">
      <h1 className="mb-6 text-3xl text-center">로그인</h1>
      <AuthForm mode="login" onSubmit={onHandleLogin} />
    </Article>
  );
}
