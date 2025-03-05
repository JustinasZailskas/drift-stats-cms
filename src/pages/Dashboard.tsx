import { Outlet, Link } from "react-router";
import styles from "../styles/Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <ul>
          <Link to="create-season">Sukurti sezona</Link>
          <Link to="create-event">Sukurti eventa</Link>
        </ul>
      </aside>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
