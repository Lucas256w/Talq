import { useEffect, useRef } from "react";

import placeholder from "/placeholder.webp";
import back from "/back.svg";
import styles from "./MessageRoom.module.css";

const testData = [
  { id: 1, content: "Hello, Lucas Liu", time: "12.00 PM" },
  {
    id: 2,
    content:
      "Thank you for the offer you gave me. yes I will accept the project from you. for the brief please send it now so I can study it first.Thank you for the offer you gave me. yes I will accept the project from you. for the brief please send it now so I can study it first.Thank you for the offer you gave me. yes I will accept the project from you. for the brief please send it now so I can study it first.Thank you for the offer you gave me. yes I will accept the project from you. for the brief please send it now so I can study it first.Thank you for the offer you gave me. yes I will accept the project from you. for the brief please send it now so I can study it first.",
    time: "12.00 PM",
    uid: 2,
  },
  {
    id: 1,
    content:
      "Good afternoon. may I ask your help to make me a real estate landing page. for more details I will send as soon as you approve it. thanks!",
    time: "12.00 PM",
    uid: 3,
  },
  { id: 2, content: "Hello, Mike", time: "12.00 PM", uid: 4 },
];

const MessageRoom = ({ setSelected }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      const { scrollHeight, clientHeight } = bottomRef.current;
      bottomRef.current.scrollTop = scrollHeight - clientHeight;
    }
  }, []);
  return (
    <div className={styles.messageRoom}>
      <div className={styles.roomHeader}>
        <img
          className={styles.backIcon}
          src={back}
          alt="back button"
          onClick={() => setSelected(null)}
        />
        <img className={styles.profileIcon} src={placeholder} alt="Profile" />
        <div>Mike</div>
      </div>
      <div className={styles.room} ref={bottomRef}>
        {testData.map((message) =>
          message.id % 2 === 1 ? (
            <div key={message.uid} className={styles.receiver}>
              <div className={styles.receiverBox} key={message.id}>
                <div>{message.content}</div>
              </div>
              <div className={styles.receiverTime}>{message.time}</div>
            </div>
          ) : (
            <div key={message.uid} className={styles.sender}>
              <div className={styles.senderBox} key={message.id}>
                <div>{message.content}</div>
              </div>
              <div className={styles.senderTime}>{message.time}</div>
            </div>
          )
        )}
      </div>
      <div className={styles.bottom}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.input}
            placeholder="Send message..."
          />
        </div>
      </div>
    </div>
  );
};

export default MessageRoom;
