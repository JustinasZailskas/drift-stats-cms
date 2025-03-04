import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import ChildrenProps from "../interface/ChildrenProps";
import NavigationComponent from "../components/NavigationComponent";
import Footer from "../components/Footer";

const PrivateLayout = ({ children }: ChildrenProps) => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <NavigationComponent />
      {isAuthenticated ? children : <Navigate to="/" />}
      <Footer />
    </>
  );
};

export default PrivateLayout;
