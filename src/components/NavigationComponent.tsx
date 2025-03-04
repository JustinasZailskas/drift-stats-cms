import styles from "../styles/Navigation.module.css";
import { Link } from "react-router";

const NavigationComponent = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home page</Link>
      <Link to="/events">Kalendorius</Link>
    </nav>
  );
};

export default NavigationComponent;
