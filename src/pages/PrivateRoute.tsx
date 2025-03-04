import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import ChildrenProps from "../interface/ChildrenProps";

const PrivateRoute = ({ children }: ChildrenProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
