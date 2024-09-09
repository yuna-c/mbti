import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import TestPage from '../test/TestPage';
import Layout from '../common/Layout';
import ProtectedRoute from './ProtectedRoute';
import TestResult from '../test/TestResult';
import TestResultItem from '../test/TestResultItem';

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
      path: '/result',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <TestResult />
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
