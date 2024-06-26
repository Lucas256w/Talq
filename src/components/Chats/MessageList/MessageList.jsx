import placeholder from "/placeholder.webp";
import group from "/group.svg";
import styles from "./MessageList.module.css";
import PropTypes from "prop-types";
import Popup from "../Popup/Popup";
import { useState, useEffect, useContext } from "react";
import { getMessageRoomsAPI } from "../../../api/messageRoomAPI";
import { UserContext } from "../../../App";

const MessageList = ({ selected, setSelected }) => {
  const [search, setSearch] = useState("");
  const [popup, setPopup] = useState(false);
  const [messageRooms, setMessageRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const handleSelect = (id) => {
    setSelected(id);
  };
  const { user } = useContext(UserContext);

  // Fetch message rooms
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchMessageRooms = async () => {
      try {
        const data = await getMessageRoomsAPI(token);
        setMessageRooms(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessageRooms();

    const intervalId = setInterval(fetchMessageRooms, 5000);
    return () => clearInterval(intervalId);
  }, [popup, selected]);

  // Filter message rooms through search by all usernames
  useEffect(() => {
    setFilteredRooms(
      messageRooms.filter((room) =>
        room.name
          ? room.name.toLowerCase().includes(search.toLowerCase())
          : room.users[0].username.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, messageRooms]);

  // get all usernames except the current user in the format (username1, username2, username3)

  return (
    <div className={styles.messageList}>
      <>{popup && <Popup setPopup={setPopup} makeRoom={true} />}</>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          placeholder="Search Message"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.tabTitle}>Messages</div>
        <div className={styles.addRoom} onClick={() => setPopup(true)}>
          +
        </div>
      </div>
      <div className={styles.tabsContainer}>
        {filteredRooms.map((room) => (
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
                <div className={styles.name}>
                  {room.name
                    ? room.name
                    : room.users
                        .map((u) => u.username)
                        .filter((u) => u !== user.username)
                        .join(", ")}
                </div>
              </div>
              <div className={styles.lastTextAndDate}>
                <div className={styles.lastText}>
                  {room.lastMessage && room.lastMessage}
                </div>
                <div className={styles.date}>
                  {room.lastUpdated && room.lastUpdated}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

MessageList.propTypes = {
  selected: PropTypes.string,
  setSelected: PropTypes.func,
};

export default MessageList;
