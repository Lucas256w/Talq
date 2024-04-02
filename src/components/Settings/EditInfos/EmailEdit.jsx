import styles from "./Edit.module.css";
import PropTypes from "prop-types";
import { updateEmailAPI } from "../../../api/userAPI";
import { useState } from "react";

const EmailEdit = ({ setEditScreen, setUserData }) => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  // Update email
  const handleUpdate = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const result = await updateEmailAPI(token, info);
      if (result.errors) {
        alert(result.errors[0].msg);
        return;
      }

      if (result.message === "Email updated") {
        alert("Email updated");
        setEditScreen(null);
        setUserData((prev) => ({ ...prev, email: info.email }));
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
        <div className={styles.editTitle}>Change your Email</div>
        <div className={styles.editSubTitle}>
          Enter a new email and your existing password
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">
            EMAIL
          </label>
          <input
            className={styles.input}
            name="email"
            type="email"
            id="email"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
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

EmailEdit.propTypes = {
  setEditScreen: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default EmailEdit;
