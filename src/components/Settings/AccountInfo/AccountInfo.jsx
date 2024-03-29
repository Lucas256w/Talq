import profileIcon from "/placeholder.webp";
import EmailEdit from "../EditInfos/EmailEdit";
import PasswordEdit from "../EditInfos/PasswordEdit";
import UsernameEdit from "../EditInfos/UsernameEdit";
import { useNavigate } from "react-router-dom";
import styles from "./AccountInfo.module.css";
import { useState } from "react";

const testUser = {
  username: "User Here",
  email: "Test@gmail.com",
};

const AccountInfo = () => {
  const [editScreen, setEditScreen] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear("token");
    navigate("/login");
  };

  return (
    <div className={styles.accountInfoPage}>
      {editScreen === "Username" ? (
        <UsernameEdit setEditScreen={setEditScreen} />
      ) : editScreen === "Email" ? (
        <EmailEdit setEditScreen={setEditScreen} />
      ) : editScreen === "Password" ? (
        <PasswordEdit setEditScreen={setEditScreen} />
      ) : null}
      <div className={styles.accountInfoCard}>
        <img
          className={styles.profileIcon}
          src={profileIcon}
          alt="Profile Icon"
        />
        <div className={styles.accountInfos}>
          <div className={styles.infoSection}>
            <div>
              <div>Username </div>
              <div className={styles.accountInfo}>{testUser.username}</div>
            </div>
            <button
              className={styles.edit}
              onClick={() => setEditScreen("Username")}
            >
              Edit
            </button>
          </div>
          <div className={styles.infoSection}>
            <div>
              <div>Email </div>
              <div className={styles.accountInfo}>{testUser.email}</div>
            </div>
            <button
              className={styles.edit}
              onClick={() => setEditScreen("Email")}
            >
              Edit
            </button>
          </div>
          <div className={styles.infoSection}>
            <div>
              <div>Password </div>
              <div className={styles.accountInfo}>********</div>
            </div>
            <button
              className={styles.edit}
              onClick={() => setEditScreen("Password")}
            >
              Edit
            </button>
          </div>
        </div>
        <div>
          <button className={styles.logout} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default AccountInfo;