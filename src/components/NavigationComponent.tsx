import styles from "../styles/Navigation.module.css";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";

const NavigationComponent = () => {
  const { logout } = useAuth();
  return (
    <nav className={styles.navbar}>
      <Link to="/dashboard">Home page</Link>

      <a onClick={logout}>Atsijungti</a>
    </nav>
  );
};

export default NavigationComponent;
