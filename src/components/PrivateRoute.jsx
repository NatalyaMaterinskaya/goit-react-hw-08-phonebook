import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  return !isLoggedIn && !isRefreshing ? (
    Component
  ) : (
    <Navigate to={redirectTo} />
  );
};
