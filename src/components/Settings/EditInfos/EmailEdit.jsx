import styles from "./Edit.module.css";
import PropTypes from "prop-types";

const EmailEdit = ({ setEditScreen }) => {
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
          />
        </div>
        <div className={styles.actionButtonContainer}>
          <button className={styles.cancel} onClick={() => setEditScreen(null)}>
            Cancel
          </button>
          <button className={styles.done}>Done</button>
        </div>
      </div>
    </>
  );
};

EmailEdit.propTypes = {
  setEditScreen: PropTypes.func.isRequired,
};

export default EmailEdit;
