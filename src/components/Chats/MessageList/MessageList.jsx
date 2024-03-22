import placeholder from "/placeholder.webp";
import styles from "./MessageList.module.css";

const testData = [
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { name: "mike", lastText: "something wrong?", date: "13.10 PM" },
];

const MessageList = () => {
  return (
    <div className={styles.messageList}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          placeholder="Search Message"
        />
      </div>
      <div className={styles.tabTitle}>Messages</div>
      <div className={styles.tabsContainer}>
        {testData.map((t) => (
          <div className={styles.messageTab} key={testData.indexOf(t)}>
            <img className={styles.profileIcon} src={placeholder} />
            <div className={styles.info}>
              <div className={styles.nameAndDateContainer}>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.date}>{t.date}</div>
              </div>
              <div className={styles.lastText}>{t.lastText}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
