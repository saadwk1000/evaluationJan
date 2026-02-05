import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface Props {
  children: ReactNode;
}

interface AuthState {
  auth: {
    isAuthenticated: boolean;
  };
}

const ProtectedRoute = ({ children }: Props) => {
  const isAuthenticated = useSelector(
    (state: AuthState) => state.auth.isAuthenticated,
  );

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
