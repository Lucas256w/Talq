import placeholder from "/placeholder.webp";
import styles from "./MessageList.module.css";
import { useState } from "react";

const testData = [
  { id: 1, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { id: 2, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { id: 3, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { id: 4, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { id: 5, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { id: 6, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { id: 7, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { id: 8, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { id: 9, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { id: 10, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { id: 12, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { id: 11, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { id: 13, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { id: 14, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
  { id: 15, name: "mike", lastText: "something wrong?", date: "13.10 PM" },
];

const MessageList = ({ selected, setSelected }) => {
  const handleSelect = (id) => {
    setSelected(id);
  };

  console.log(selected);

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
          <div
            className={`${styles.messageTab} ${
              selected === t.id ? styles.selected : ""
            }`}
            key={t.id}
            onClick={() => handleSelect(t.id)}
          >
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
