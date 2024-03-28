import placeholder from "/placeholder.webp";
import styles from "./FriendsList.module.css";

const testData = [
  { id: 1, name: "mike" },
  { id: 2, name: "mike" },
  { id: 3, name: "mike" },
  { id: 4, name: "mike" },
];

const FriendsList = () => {
  return (
    <div className={styles.friendListPage}>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" placeholder="Search" />
      </div>
      <div>All Friends - 37</div>
      <div className={styles.friendsContainer}>
        {testData.map((f) => (
          <div className={styles.friendTab} key={f.id}>
            <img className={styles.profileIcon} src={placeholder} />
            <div className={styles.friendName}>{f.name}</div>
            <button className={styles.removeFriend}>remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
