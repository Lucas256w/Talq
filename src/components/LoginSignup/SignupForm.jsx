import { Link } from "react-router-dom";
import TalqIcon from "/Talq-icon.png";
import styles from "./Form.module.css";

const LoginForm = ({ handleSignup }) => {
  return (
    <div className={styles.formPage}>
      <div className={styles.formContainer}>
        <div className={styles.iconContainer}>
          <img className={styles.icon} src={TalqIcon} alt="Talq Icon" />
          <div className={styles.appName}>Talq</div>
        </div>
        <div className={styles.formTitle}>Create an account</div>
        <form className={styles.form} onSubmit={handleSignup}>
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
            <label className={styles.label} htmlFor="email">
              EMAIL
            </label>
            <input
              className={styles.input}
              type="email"
              name="email"
              id="email"
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
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="confirmPassword">
              CONFIRM PASSWORD
            </label>
            <input
              className={styles.input}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
          </div>
          <button className={styles.btn} type="submit">
            Sign Up
          </button>
        </form>
        <div className={styles.signupDirect}>
          Already have an account?{" "}
          <Link className={styles.signupLink} to={"/Login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
