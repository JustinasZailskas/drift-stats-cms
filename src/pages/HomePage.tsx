import { Link } from "react-router";
import styles from "../styles/HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homePageBlock}>
      <p>Informacija</p>
      <Link to="/login">Prisijungti</Link>
    </div>
  );
}

export default HomePage;
