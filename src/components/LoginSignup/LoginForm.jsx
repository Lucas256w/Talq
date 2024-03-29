import { Link } from "react-router-dom";
import TalqIcon from "/Talq-icon.png";
import styles from "./Form.module.css";

const LoginForm = ({ handleLogin }) => {
  return (
    <div className={styles.formPage}>
      <div className={styles.formContainer}>
        <div className={styles.iconContainer}>
          <img className={styles.icon} src={TalqIcon} alt="Talq Icon" />
          <div className={styles.appName}>Talq</div>
        </div>
        <div className={styles.formTitle}>Welcome back!</div>
        <div className={styles.formSubtitle}>So excited to see you again</div>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="username">
              USERNAME
            </label>
            <input
              className={styles.input}
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">
              PASSWORD
            </label>
            <input
              className={styles.input}
              type="text"
              name="password"
              id="password"
            />
          </div>
          <button className={styles.btn} type="submit">
            Log In
          </button>
        </form>
        <div className={styles.signupDirect}>
          Need an account?{" "}
          <Link className={styles.signupLink} to={"/Signup"}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
