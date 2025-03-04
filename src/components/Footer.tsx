import React from "react";
import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Justinas Zailskas. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
