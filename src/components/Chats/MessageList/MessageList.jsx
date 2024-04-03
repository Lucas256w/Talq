import placeholder from "/placeholder.webp";
import group from "/group.svg";
import styles from "./MessageList.module.css";
import PropTypes from "prop-types";
import Popup from "../Popup/Popup";
import { useState, useEffect } from "react";
import { getMessageRoomsAPI } from "../../../api/messageRoomAPI";

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
  const [popup, setPopup] = useState(false);
  const [messageRooms, setMessageRooms] = useState([]);
  const handleSelect = (id) => {
    setSelected(id);
  };

  // Fetch message rooms
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchMessageRooms = async () => {
      try {
        const data = await getMessageRoomsAPI(token);
        console.log(data);
        setMessageRooms(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessageRooms();
  }, []);

  return (
    <div className={styles.messageList}>
      <>{popup && <Popup setPopup={setPopup} />}</>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          placeholder="Search Message"
        />
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.tabTitle}>Messages</div>
        <div className={styles.addRoom} onClick={() => setPopup(true)}>
          +
        </div>
      </div>
      <div className={styles.tabsContainer}>
        {messageRooms.map((room) => (
          <div
            className={`${styles.messageTab} ${
              selected === room._id ? styles.selected : ""
            }`}
            key={room._id}
            onClick={() => handleSelect(room._id)}
          >
            {room.users.length > 1 ? (
              <img className={styles.groupIcon} src={group} />
            ) : room.users[0].profile_img ? (
              <img
                className={styles.profileIcon}
                src={room.users[0].profile_img}
              />
            ) : (
              <img className={styles.profileIcon} src={placeholder} />
            )}
            <div className={styles.info}>
              <div className={styles.nameAndDateContainer}>
                <div className={styles.name}>{`${room.users.map(
                  (user) => user.username + " "
                )}`}</div>

                <div className={styles.date}>
                  {room.lastupdated && room.lastupdated}
                </div>
              </div>
              <div className={styles.lastText}>
                {room.lastMessage && room.lastMessage}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

MessageList.propTypes = {
  selected: PropTypes.number,
  setSelected: PropTypes.func,
};

export default MessageList;
