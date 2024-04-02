import placeholder from "/placeholder.webp";
import styles from "./PendingList.module.css";
import {
  getOutgoingRequestsAPI,
  deleteFriendRequestAPI,
} from "../../../api/friendRequestAPI";
import { useEffect, useState } from "react";

const PendingList = () => {
  const [pending, setPending] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPending, setFilteredPending] = useState([]);

  // Fetch pending friend requests
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const getPending = async () => {
      try {
        const outgoingRequests = await getOutgoingRequestsAPI(token);
        setPending(outgoingRequests);
      } catch (error) {
        console.error(error);
      }
    };

    getPending();
  }, []);

  // Cancel friend request
  const handleCancel = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await deleteFriendRequestAPI(token, id);
      setPending(pending.filter((req) => req._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // Filter by search matching username
  useEffect(() => {
    setFilteredPending(
      pending.filter((req) =>
        req.to.username.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, pending]);

  return (
    <div className={styles.pendingListPage}>
      <div className={styles.inputContainer}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Search"
        />
      </div>
      <div>Pending - {pending.length}</div>
      <div className={styles.usersContainer}>
        {filteredPending.map((request) => (
          <div className={styles.userTab} key={request._id}>
            <img
              className={styles.profileIcon}
              src={
                request.to.profile_img ? request.to.profile_img : placeholder
              }
            />
            <div className={styles.userName}>{request.to.username}</div>
            <button
              onClick={() => handleCancel(request._id)}
              className={styles.cancel}
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingList;
