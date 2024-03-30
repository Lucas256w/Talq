import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TalqIcon from "/Talq-icon.png";
import placeholder from "/placeholder.webp";
import styles from "./Form.module.css";

const LoginForm = ({ info, setInfo, handleSignup }) => {
  return (
    <div className={styles.formPage}>
      <div className={styles.formContainer}>
        <div className={styles.iconContainer}>
          <img className={styles.icon} src={TalqIcon} alt="Talq Icon" />
          <div className={styles.appName}>Talq</div>
        </div>
        <div className={styles.formTitle}>Create an account</div>
        <img className={styles.icon} src={info.profile_img} />
        <form
          className={styles.form}
          onSubmit={handleSignup}
          encType="multipart/form-data"
        >
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="profile_img">
              Profile Picture (Optional)
            </label>
            <input
              className={styles.input}
              type="file"
              accept="image/*"
              name="profile_img"
              onChange={(e) => {
                const file = e.target.files[0];
                const imageURL = URL.createObjectURL(file);
                setInfo({ ...info, profile_img: imageURL });
              }}
              id="profile_img"
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="username">
              USERNAME
            </label>
            <input
              className={styles.input}
              type="text"
              name="username"
              value={info.username}
              onChange={(e) => setInfo({ ...info, username: e.target.value })}
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
              value={info.email}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              id="email"
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
              value={info.password}
              onChange={(e) => setInfo({ ...info, password: e.target.value })}
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
              value={info.confirmPassword}
              onChange={(e) =>
                setInfo({ ...info, confirmPassword: e.target.value })
              }
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

LoginForm.propTypes = {
  info: PropTypes.object.isRequired,
  setInfo: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
};

export default LoginForm;
