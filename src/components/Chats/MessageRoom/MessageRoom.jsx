import { useEffect, useRef } from "react";
import {
  getMessageRoomAPI,
  removeUserFromMessageRoomAPI,
  updateMessageRoomNameAPI,
} from "../../../api/messageRoomAPI";
import { createMessageAPI, getMessagesAPI } from "../../../api/messageAPI";
import placeholder from "/placeholder.webp";
import back from "/back.svg";
import styles from "./MessageRoom.module.css";
import propTypes from "prop-types";
import { UserContext } from "../../../App";
import { useContext, useState } from "react";
import Popup from "../Popup/Popup";
import edit from "/edit.svg";

const MessageRoom = ({ selected, setSelected }) => {
  const bottomRef = useRef(null);
  const [messageRoomInfo, setMessageRoomInfo] = useState({
    users: [],
    name: "",
    type: "",
  });
  const [messageToSend, setMessageToSend] = useState("");
  const [messages, setMessages] = useState([]);
  const { user } = useContext(UserContext);
  const [popup, setPopup] = useState(false);
  const [toggleNameInput, setToggleNameInput] = useState(false);
  const [name, setName] = useState("");

  console.log(name);

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

        setMessageRoomInfo(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessageRoom();
    const intervalId = setInterval(fetchMessageRoom, 5000);
    return () => clearInterval(intervalId);
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

  // Update message room name
  const handleUpdateName = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    if (!name) {
      alert("Please enter a name");
      return;
    }

    try {
      const data = await updateMessageRoomNameAPI(token, selected, { name });
      if (data.errors) {
        alert(data.errors[0].msg);
        return;
      }

      if (data.message === "Message room not found") {
        setSelected(null);
        return;
      }

      if (data.message === "Message room name updated") {
        setMessageRoomInfo({ ...messageRoomInfo, name });
        setToggleNameInput(false);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.messageRoom}>
      {popup && (
        <Popup setPopup={setPopup} inviteUsers={true} roomId={selected} />
      )}
      <div className={styles.roomHeader}>
        <img
          className={styles.backIcon}
          src={back}
          alt="back button"
          onClick={() => setSelected(null)}
        />
        {messageRoomInfo.type === "group" && (
          <img
            className={styles.editIcon}
            src={edit}
            alt="edit button"
            onClick={() => setToggleNameInput(!toggleNameInput)}
          />
        )}
        {messageRoomInfo.type === "group" && toggleNameInput ? (
          <input
            type="text"
            className={styles.roomNameInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <div className={styles.roomName}>
            {messageRoomInfo.name
              ? messageRoomInfo.name
              : messageRoomInfo.users
                  .map((u) => u.username)
                  .filter((u) => u !== user.username)
                  .join(", ")}
          </div>
        )}

        {messageRoomInfo.type === "group" && toggleNameInput ? (
          <button className={styles.inviteBtn} onClick={handleUpdateName}>
            Save
          </button>
        ) : messageRoomInfo.type === "group" && !toggleNameInput ? (
          <>
            <button className={styles.inviteBtn} onClick={() => setPopup(true)}>
              Invite
            </button>
            <button className={styles.leaveBtn} onClick={handleLeave}>
              Leave
            </button>
          </>
        ) : null}
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
