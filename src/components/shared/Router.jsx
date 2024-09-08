import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import TestPage from '../pages/TestPage';
import TestResultPage from '../test/TestResultPage';
import Layout from '../common/Layout';
import ProtectedRoute from './ProtectedRoute';

const isAuthenticated = () => {
  return localStorage.getItem('userToken') !== null;
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
      element: isAuthenticated() ? <Navigate to="/" /> : <Login />
    },
    {
      path: '/signup',
      element: isAuthenticated() ? <Navigate to="/" /> : <Signup />
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
