import styles from "./NavTab.module.css";

const NavTab = ({ page, setPage }) => {
  return (
    <div className={styles.navContainer}>
      <button
        className={`${styles.tab} ${
          page === "All Friends" ? styles.selected : null
        }`}
        onClick={() => setPage("All Friends")}
      >
        All Friends
      </button>
      <button
        className={`${styles.tab} ${
          page === "Pending" ? styles.selected : null
        }`}
        onClick={() => setPage("Pending")}
      >
        Pending
      </button>
      <button
        className={`${styles.tab} ${
          page === "Add Friend" ? styles.selected : null
        }`}
        onClick={() => setPage("Add Friend")}
      >
        Add Friend
      </button>
    </div>
  );
};

export default NavTab;
