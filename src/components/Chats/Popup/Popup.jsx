import styles from "./Popup.module.css";
import propType from "prop-types";
import placeholder from "/placeholder.webp";
import { getFriendsAPI } from "../../../api/userAPI";
import { createMessageRoomAPI } from "../../../api/messageRoomAPI";
import { useState, useEffect } from "react";

const Popup = ({ setPopup }) => {
  const [selected, setSelected] = useState([]);
  const [friends, setFriends] = useState([]);

  // get friends
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchFriends = async () => {
      try {
        const data = await getFriendsAPI(token);
        setFriends(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFriends();
  }, []);

  // create message room
  const handleCreate = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    if (selected.length === 0) {
      alert("Select at least one friend");
      return;
    }

    try {
      const result = await createMessageRoomAPI(token, { users: selected });
      if (result.errors) {
        alert(result.errors[0].msg);
        return;
      }

      if (result.message === "Message room created") {
        setPopup(false);
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.card}>
        <div className={styles.cardTitle}>Select Friends</div>
        <div className={styles.friendList}>
          {friends.map((f) => (
            <div
              className={styles.friend}
              key={f._id}
              onClick={() =>
                setSelected(
                  selected.includes(f.username)
                    ? selected.filter((username) => username !== f.username)
                    : [...selected, f.username]
                )
              }
            >
              <img
                src={f.profile_img ? f.profile_img : placeholder}
                className={styles.profileIcon}
              />
              <div className={styles.username}>{f.username}</div>
              <div
                className={`${styles.checkbox} ${
                  selected.includes(f.username) ? styles.checked : ""
                }`}
              ></div>
            </div>
          ))}
        </div>
        <div className={styles.btnsContainer}>
          <button className={styles.btn} onClick={handleCreate}>
            Create
          </button>
          <button className={styles.btn} onClick={() => setPopup(false)}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

Popup.propTypes = {
  setPopup: propType.func.isRequired,
};

export default Popup;
