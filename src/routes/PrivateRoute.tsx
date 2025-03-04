import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import ChildrenProps from "../interface/ChildrenProps";
import NavigationComponent from "../components/NavigationComponent";

const PrivateRoute = ({ children }: ChildrenProps) => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <NavigationComponent />
      {isAuthenticated ? children : <Navigate to="/" />}
    </>
  );
};

export default PrivateRoute;
