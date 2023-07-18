import { useAuth } from 'hooks';
import { Navigate, useLocation } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, defaultRedirectTo }) => {
  const { isLoggedIn } = useAuth();
  const { state } = useLocation();

  return isLoggedIn ? (
    <Navigate to={state ? state : defaultRedirectTo} />
  ) : (
    Component
  );
};