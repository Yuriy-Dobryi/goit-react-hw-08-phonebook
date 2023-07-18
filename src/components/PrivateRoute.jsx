import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const { pathname } = useLocation();

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    <Navigate to={redirectTo} state={pathname} />
  ) : (
    Component
  );
};