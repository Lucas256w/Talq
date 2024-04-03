import { useState, useEffect } from "react";

import styles from "./AddFriend.module.css";
import placeholder from "/placeholder.webp";

import {
  sendFriendRequestAPI,
  getIncomingRequestsAPI,
  acceptFriendRequestAPI,
  deleteFriendRequestAPI,
} from "../../../api/friendRequestAPI";

const AddFriend = () => {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [incomingRequests, setIncomingRequests] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    // Fetch incoming friend requests
    const getIncomingRequests = async () => {
      try {
        const incomingRequests = await getIncomingRequestsAPI(token);
        setIncomingRequests(incomingRequests);
      } catch (error) {
        console.error(error);
      }
    };

    getIncomingRequests();

    const intervalId = setInterval(getIncomingRequests, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleAddFriend = async (e) => {
    e.preventDefault();
    if (!search) return;
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      // Send friend request
      const result = await sendFriendRequestAPI(token, search);
      setSearch("");
      setMessage(result.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccept = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      // Accept friend request
      await acceptFriendRequestAPI(token, id);
      setIncomingRequests(incomingRequests.filter((req) => req._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecline = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      // Decline friend request
      await deleteFriendRequestAPI(token, id);
      setIncomingRequests(incomingRequests.filter((req) => req._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.addFriendPage}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="You can add friends with their Talq username."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddFriend(e);
          }}
          minLength={1}
        />
        <button onClick={handleAddFriend} className={styles.sendBtn}>
          Send
        </button>
      </div>
      {message && <div className={styles.searchMessage}>{message}</div>}
      <div>Requests - {incomingRequests.length}</div>
      <div className={styles.usersContainer}>
        {incomingRequests.map((friendRequest) => (
          <div className={styles.userTab} key={friendRequest._id}>
            <img
              className={styles.profileIcon}
              src={
                friendRequest.from.profile_img
                  ? friendRequest.from.profile_img
                  : placeholder
              }
            />
            <div className={styles.userName}>{friendRequest.from.username}</div>
            <button
              onClick={() => handleAccept(friendRequest._id)}
              className={styles.accept}
            >
              accept
            </button>
            <button
              onClick={() => handleDecline(friendRequest._id)}
              className={styles.decline}
            >
              decline
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddFriend;
