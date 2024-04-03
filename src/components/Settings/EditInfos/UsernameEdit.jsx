import styles from "./Edit.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { updateUsernameAPI } from "../../../api/userAPI";

const UsernameEdit = ({ setEditScreen, setUserData }) => {
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  // Update username
  const handleUpdate = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    // needs to be at least 4-20 characters long
    if (info.username.length < 4 || info.username.length > 20) {
      alert("Username must be between 4 and 20 characters");
      return;
    }

    try {
      const result = await updateUsernameAPI(token, info);
      if (result.errors) {
        alert(result.errors[0].msg);
        return;
      }

      if (result.message === "Username updated") {
        alert("Username updated");
        setEditScreen(null);
        setUserData((prev) => ({ ...prev, username: info.username }));
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.editCard}>
        <div className={styles.editTitle}>Change your username</div>
        <div className={styles.editSubTitle}>
          Enter a new username and your existing password
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="username">
            USERNAME
          </label>
          <input
            className={styles.input}
            name="username"
            type="text"
            id="username"
            value={info.username}
            onChange={(e) => setInfo({ ...info, username: e.target.value })}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">
            PASSWORD
          </label>
          <input
            className={styles.input}
            name="password"
            type="password"
            id="password"
            value={info.password}
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
          />
        </div>
        <div className={styles.actionButtonContainer}>
          <button className={styles.cancel} onClick={() => setEditScreen(null)}>
            Cancel
          </button>
          <button className={styles.done} onClick={handleUpdate}>
            Done
          </button>
        </div>
      </div>
    </>
  );
};

UsernameEdit.propTypes = {
  setEditScreen: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default UsernameEdit;
