import { Link } from "react-router-dom";
import TalqIcon from "/Talq-icon.png";
import styles from "./Form.module.css";
import PropTypes from "prop-types";

const LoginForm = ({ handleLogin, setLoginInfo, loginInfo }) => {
  return (
    <div className={styles.formPage}>
      <div className={styles.formContainer}>
        <div className={styles.iconContainer}>
          <img className={styles.icon} src={TalqIcon} alt="Talq Icon" />
          <div className={styles.appName}>Talq</div>
        </div>
        <div className={styles.formTitle}>Welcome back!</div>
        <div className={styles.formSubtitle}>So excited to see you again</div>
        <form className={styles.form} onSubmit={(e) => handleLogin(e)}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="username">
              USERNAME
            </label>
            <input
              className={styles.input}
              type="text"
              name="username"
              id="username"
              value={loginInfo.username}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, username: e.target.value })
              }
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">
              PASSWORD
            </label>
            <input
              className={styles.input}
              type="password"
              name="password"
              id="password"
              value={loginInfo.password}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
            />
          </div>
          <div className={styles.btnsContainer}>
            <button className={styles.btn} type="submit">
              Log In
            </button>
            <button
              className={styles.demobtn}
              onClick={(e) => handleLogin(e, true)}
            >
              Log In with Demo Account
            </button>
          </div>
        </form>
        <div className={styles.signupDirect}>
          Need an account?{" "}
          <Link className={styles.signupLink} to={"/signup"}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  setLoginInfo: PropTypes.func.isRequired,
  loginInfo: PropTypes.object.isRequired,
};

export default LoginForm;
