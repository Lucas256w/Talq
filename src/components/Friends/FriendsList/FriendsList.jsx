import placeholder from "/placeholder.webp";
import styles from "./FriendsList.module.css";
import { useEffect, useState } from "react";
import { getFriendsAPI, removeFriendAPI } from "../../../api/userAPI.js";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredFriends, setFilteredFriends] = useState([]);

  // Fetch friends
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const getFriends = async () => {
      try {
        const friends = await getFriendsAPI(token);
        setFriends(friends);
      } catch (error) {
        console.error(error);
      }
    };

    getFriends();
  }, []);

  // Remove friend
  const handleRemove = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await removeFriendAPI(token, id);
      setFriends(friends.filter((friend) => friend._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // Filter by search matching username
  useEffect(() => {
    setFilteredFriends(
      friends.filter((friend) =>
        friend.username.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, friends]);

  return (
    <div className={styles.friendListPage}>
      <div className={styles.inputContainer}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Search"
        />
      </div>
      <div>All Friends - {friends.length}</div>
      <div className={styles.friendsContainer}>
        {filteredFriends.map((friend) => (
          <div className={styles.friendTab} key={friend._id}>
            <img
              className={styles.profileIcon}
              src={friend.profile_img ? friend.profile_img : placeholder}
            />
            <div className={styles.friendName}>{friend.username}</div>
            <button
              onClick={() => handleRemove(friend._id)}
              className={styles.removeFriend}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
