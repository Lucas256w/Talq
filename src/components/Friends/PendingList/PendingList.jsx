import placeholder from "/placeholder.webp";
import styles from "./PendingList.module.css";

const testData = [
  { id: 1, name: "mike" },
  { id: 2, name: "mike" },
  { id: 3, name: "mike" },
  { id: 4, name: "mike" },
];

const PendingList = () => {
  return (
    <div className={styles.pendingListPage}>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" placeholder="Search" />
      </div>
      <div>Pending - 37</div>
      <div className={styles.usersContainer}>
        {testData.map((f) => (
          <div className={styles.userTab} key={f.id}>
            <img className={styles.profileIcon} src={placeholder} />
            <div className={styles.userName}>{f.name}</div>
            <button className={styles.cancel}>Cancel</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingList;
