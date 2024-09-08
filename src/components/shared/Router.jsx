import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import TestPage from '../test/TestPage';
import TestResultPage from '../test/TestResultPage';
import Layout from '../common/Layout';
import ProtectedRoute from './ProtectedRoute';
import useAuthStore from '../../store/AuthStore';

const isAuthenticated = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  return accessToken !== null;
};

export default function Router() {
  // 공통
  const publicRoutes = [
    {
      path: '/',
      element: <Home />
    }
  ];

  // 비로그인
  const guestRoutes = [
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ];

  // 로그인
  const protectedRoutes = [
    {
      path: '/profile',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <Profile />
        }
      ]
    },
    {
      path: '/test',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <TestPage />
        }
      ]
    },
    {
      path: '/results',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <TestResultPage />
        }
      ]
    }
  ];

  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [...publicRoutes, ...guestRoutes, ...protectedRoutes]
    }
  ];

  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
}
