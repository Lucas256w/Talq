import chats from "/chats.svg";
import chatsSelected from "/chats-selected.svg";
import friends from "/friends.svg";
import friendsSelected from "/friends-selected.svg";
import settings from "/settings.svg";
import settingsSelected from "/settings-selected.svg";
import styles from "./Navbar.module.css";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";

const Navbar = ({ page }) => {
  const navigate = useNavigate();

  // Function to handle tab change and potentially other logic
  const changeTab = (newPage) => {
    if (newPage !== page) {
      navigate(`/${newPage}`);
    }
  };

  // Helper function to determine the correct class name based on the selected page
  const getClassName = (tabName) => {
    return page === tabName
      ? `${styles.iconContainer} ${styles.selected}`
      : styles.iconContainer;
  };

  return (
    <div className={styles.navbar}>
      <div className={getClassName("chats")} onClick={() => changeTab("chats")}>
        <img
          className={styles.icon}
          src={page === "chats" ? chatsSelected : chats}
          alt="chats"
        />
      </div>
      <div
        className={getClassName("friends")}
        onClick={() => changeTab("friends")}
      >
        <img
          className={styles.icon}
          src={page === "friends" ? friendsSelected : friends}
          alt="friends"
        />
      </div>
      <div
        className={getClassName("settings")}
        onClick={() => changeTab("settings")}
      >
        <img
          className={styles.icon}
          src={page === "settings" ? settingsSelected : settings}
          alt="settings"
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Navbar;
