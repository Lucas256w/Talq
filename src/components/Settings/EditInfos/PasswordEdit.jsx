import styles from "./Edit.module.css";
import PropTypes from "prop-types";
import { updatePasswordAPI } from "../../../api/userAPI";
import { useState } from "react";
const PasswordEdit = ({ setEditScreen }) => {
  const [info, setInfo] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Update password
  const handleUpdate = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    if (info.newPassword !== info.confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }

    if (info.newPassword.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    try {
      const result = await updatePasswordAPI(token, info);
      if (result.errors) {
        alert(result.errors[0].msg);
        return;
      }

      if (result.message === "Password updated") {
        setEditScreen(null);
        alert("Password updated");
      } else {
        alert("Password update failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.editCard}>
        <div className={styles.editTitle}>Change your password</div>
        <div className={styles.editSubTitle}>
          Enter a new password and your existing password
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="currentPassword">
            CURRENT PASSWORD
          </label>
          <input
            className={styles.input}
            name="currentPassword"
            id="currentPassword"
            type="password"
            value={info.currentPassword}
            onChange={(e) =>
              setInfo({ ...info, currentPassword: e.target.value })
            }
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="newPassword">
            NEW PASSWORD
          </label>
          <input
            className={styles.input}
            name="newPassword"
            type="password"
            id="newPassword"
            value={info.newPassword}
            onChange={(e) => setInfo({ ...info, newPassword: e.target.value })}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="confirmPassword">
            CONFIRM NEW PASSWORD
          </label>
          <input
            className={styles.input}
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            value={info.confirmPassword}
            onChange={(e) =>
              setInfo({ ...info, confirmPassword: e.target.value })
            }
          />
        </div>
        <div className={styles.actionButtonContainer}>
          <button className={styles.cancel} onClick={() => setEditScreen(null)}>
            Cancel
          </button>
          <button onClick={handleUpdate} className={styles.done}>
            Done
          </button>
        </div>
      </div>
    </>
  );
};

PasswordEdit.propTypes = {
  setEditScreen: PropTypes.func.isRequired,
};

export default PasswordEdit;
