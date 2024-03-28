import styles from "./Edit.module.css";

const PasswordEdit = ({ setEditScreen }) => {
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
            type="password"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="newPassword">
            NEW PASSWORD
          </label>
          <input className={styles.input} name="newPassword" type="password" />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="confirmPassword">
            CONFIRM NEW PASSWORD
          </label>
          <input
            className={styles.input}
            name="confirmPassword"
            type="password"
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

export default PasswordEdit;
