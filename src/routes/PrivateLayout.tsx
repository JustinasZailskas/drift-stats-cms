import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import NavigationComponent from "../components/NavigationComponent";
import Footer from "../components/Footer";
import Dashboard from "../pages/Dashboard";

const PrivateLayout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <NavigationComponent />
      {isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
      <Footer />
    </>
  );
};

export default PrivateLayout;
