import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import { useRef } from "react";

const SignupForm = ({ info, setInfo, handleSignup }) => {
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  return (
    <div className={styles.formPage}>
      <div className={styles.formContainer}>
        <div className={styles.formTitle}>Create an account</div>
        <form
          className={styles.form}
          onSubmit={handleSignup}
          encType="multipart/form-data"
        >
          <div className={styles.profilePicGroup}>
            <input
              type="file"
              accept="image/*"
              name="profile_img"
              onChange={(e) => {
                const file = e.target.files[0];
                const imageURL = URL.createObjectURL(file);
                setInfo({ ...info, profile_img: imageURL });
              }}
              id="profile_img"
              ref={hiddenFileInput}
              style={{ display: "none" }}
            />
            <img className={styles.icon} src={info.profile_img} />
            <div className={styles.imageUpload} onClick={handleClick}>
              Change Profile Photo (Optional)
            </div>
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
          <div className={styles.btnsContainer}>
            <button className={styles.btn} type="submit">
              Sign Up
            </button>
          </div>
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

SignupForm.propTypes = {
  info: PropTypes.object.isRequired,
  setInfo: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
};

export default SignupForm;
