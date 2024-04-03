import styles from "./NavTab.module.css";
import propTypes from "prop-types";
import { useEffect, useState } from "react";
import { getIncomingRequestsAPI } from "../../../api/friendRequestAPI";

const NavTab = ({ page, setPage }) => {
  const [incomingRequests, setIncomingRequests] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    // Fetch incoming friend requests
    const getIncomingRequests = async () => {
      try {
        const incomingRequests = await getIncomingRequestsAPI(token);
        setIncomingRequests(incomingRequests.length);
      } catch (error) {
        console.error(error);
      }
    };

    getIncomingRequests();
    const intervalId = setInterval(getIncomingRequests, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.navContainer}>
      <button
        className={`${styles.tab} ${
          page === "All Friends" ? styles.selected : null
        }`}
        onClick={() => setPage("All Friends")}
      >
        All Friends
      </button>
      <button
        className={`${styles.tab} ${
          page === "Pending" ? styles.selected : null
        }`}
        onClick={() => setPage("Pending")}
      >
        Pending
      </button>
      <button
        className={`${styles.tab} ${
          page === "Add Friend" ? styles.selected : null
        }`}
        onClick={() => setPage("Add Friend")}
      >
        Add Friend{" "}
        {incomingRequests > 99
          ? `(99+)`
          : incomingRequests > 0
          ? `(${incomingRequests})`
          : null}
      </button>
    </div>
  );
};

NavTab.propTypes = {
  page: propTypes.string.isRequired,
  setPage: propTypes.func.isRequired,
};

export default NavTab;
