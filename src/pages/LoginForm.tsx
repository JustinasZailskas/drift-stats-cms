import styles from "../styles/Login.module.css";
import React, { useContext, useState } from "react";
import { AuthContext } from "../services/AuthContext";

function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useContext(AuthContext);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Handle submit");

    try {
      login(username, password);
    } catch (error) {
      console.log("Klaida, ", error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Vartotojo vardas"
            required
            value={username}
            className={styles.input}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Slaptažodis"
            required
            value={password}
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.button}>Prisijungti</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
