import { useEffect, useRef } from "react";
import {
  getMessageRoomAPI,
  removeUserFromMessageRoomAPI,
} from "../../../api/messageRoomAPI";
import { createMessageAPI, getMessagesAPI } from "../../../api/messageAPI";
import placeholder from "/placeholder.webp";
import back from "/back.svg";
import styles from "./MessageRoom.module.css";
import propTypes from "prop-types";
import { UserContext } from "../../../App";
import { useContext, useState } from "react";

const MessageRoom = ({ selected, setSelected }) => {
  const bottomRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [messageToSend, setMessageToSend] = useState("");
  const [messages, setMessages] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (bottomRef.current) {
      const { scrollHeight, clientHeight } = bottomRef.current;
      bottomRef.current.scrollTop = scrollHeight - clientHeight;
    }
  }, [selected, messages]);

  // Fetch message room
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchMessageRoom = async () => {
      try {
        const data = await getMessageRoomAPI(token, selected);
        if (data.errors) {
          alert(data.errors[0].msg);
          return;
        }

        if (data.message === "Message room not found") {
          setSelected(null);
          return;
        }

        setUsers(data.users.filter((u) => u._id !== user.id));
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessageRoom();
  }, [selected, user, setSelected]);

  // Send message
  const handleSend = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    if (!messageToSend) {
      alert("Please enter a message");
      return;
    }

    try {
      const data = await createMessageAPI(token, messageToSend, selected);
      if (data.errors) {
        alert(data.errors[0].msg);
        return;
      }

      if (data.message === "Message room not found") {
        setSelected(null);
        return;
      }

      setMessages([...messages, data]);
      setMessageToSend("");
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch messages
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchMessages = async () => {
      try {
        const data = await getMessagesAPI(token, selected);
        if (data.errors) {
          alert(data.errors[0].msg);
          return;
        }

        if (data.message === "Message room not found") {
          setSelected(null);
          return;
        }

        setMessages(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();

    const intervalId = setInterval(fetchMessages, 5000);
    return () => clearInterval(intervalId);
  }, [selected, setSelected]);

  // Remove user from message room
  const handleLeave = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    // alert prompt to confirm
    const confirm = window.confirm("Are you sure you want to leave?");
    if (!confirm) return;

    try {
      await removeUserFromMessageRoomAPI(token, selected);
      setSelected(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.messageRoom}>
      <div className={styles.roomHeader}>
        <img
          className={styles.backIcon}
          src={back}
          alt="back button"
          onClick={() => setSelected(null)}
        />
        <div>{`${users.map((user) => " " + user.username)}`}</div>
        <button className={styles.leaveBtn} onClick={handleLeave}>
          Leave
        </button>
      </div>
      <div className={styles.room} ref={bottomRef}>
        {messages.map((message) =>
          message.user._id !== user.id ? (
            <div key={message._id} className={styles.receiver}>
              <div className={styles.nameAndPicContainer}>
                <img
                  className={styles.messageProfileImg}
                  src={
                    message.user.profile_img
                      ? message.user.profile_img
                      : placeholder
                  }
                />
                <div className={styles.messageUsername}>
                  {message.user.username}
                </div>
              </div>
              <div className={styles.receiverBox}>
                <div className={styles.message}>{message.message}</div>
              </div>
              <div className={styles.receiverTime}>{message.created_at}</div>
            </div>
          ) : (
            <div key={message._id} className={styles.sender}>
              <div className={styles.nameAndPicContainer}>
                <img
                  className={styles.messageProfileImg}
                  src={user.profile_img ? user.profile_img : placeholder}
                />
                <div className={styles.messageUsername}>{user.username}</div>
              </div>
              <div className={styles.senderBox}>
                <div className={styles.message}>{message.message}</div>
              </div>
              <div className={styles.senderTime}>{message.created_at}</div>
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
            value={messageToSend}
            onChange={(e) => setMessageToSend(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />
          <button className={styles.sendBtn} onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

MessageRoom.propTypes = {
  selected: propTypes.string,
  setSelected: propTypes.func,
};

export default MessageRoom;
