import styles from "./Edit.module.css";

const UsernameEdit = ({ setEditScreen }) => {
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
          <input className={styles.input} name="username" type="text" />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">
            PASSWORD
          </label>
          <input className={styles.input} name="password" type="password" />
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

export default UsernameEdit;
