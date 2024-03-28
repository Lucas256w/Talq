import styles from "./AddFriend.module.css";
import placeholder from "/placeholder.webp";

const testData = [
  { id: 1, name: "mike" },
  { id: 2, name: "mike" },
  { id: 3, name: "mike" },
  { id: 4, name: "mike" },
];

const AddFriend = () => {
  return (
    <div className={styles.addFriendPage}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="You can add friends with their Talq username."
        />
      </div>
      <div>Requests - 37</div>
      <div className={styles.usersContainer}>
        {testData.map((f) => (
          <div className={styles.userTab} key={f.id}>
            <img className={styles.profileIcon} src={placeholder} />
            <div className={styles.userName}>{f.name}</div>
            <button className={styles.accept}>accept</button>
            <button className={styles.decline}>decline</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddFriend;
