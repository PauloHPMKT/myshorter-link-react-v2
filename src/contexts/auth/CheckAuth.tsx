import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

export const CheckAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (auth.user && localStorage.getItem('access_token')) {
    return <Navigate to="/app/dashboard" replace />;
  }

  return children;
}
