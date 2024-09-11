import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../../core/stores/useAuthStore';

export default function ProtectedRoute() {
  const { accessToken } = useAuthStore();

  if (!accessToken) {
    alert('로그인해야 접근할 수 있습니다.');
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
