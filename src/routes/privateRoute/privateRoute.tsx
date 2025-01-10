// Packages
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const isUserLoggedIn = localStorage.getItem('@dragon:dragon-state-1.0.0');

  if (isUserLoggedIn === 'batata') {
    return props.children;
  }

  return <Navigate to="/login" />;
};
