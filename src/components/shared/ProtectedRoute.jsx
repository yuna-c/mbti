import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';

const ProtectedRoute = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  if (!accessToken) {
    alert('로그인해야 접근할 수 있습니다.');
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
