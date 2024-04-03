import profileIcon from "/placeholder.webp";
import EmailEdit from "../EditInfos/EmailEdit";
import PasswordEdit from "../EditInfos/PasswordEdit";
import UsernameEdit from "../EditInfos/UsernameEdit";
import ProfileImgEdit from "../EditInfos/ProfileImgEdit";
import { useNavigate } from "react-router-dom";
import styles from "./AccountInfo.module.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getAccountInfoAPI } from "../../../api/userAPI";

const AccountInfo = () => {
  const [editScreen, setEditScreen] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch user data
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const getUserData = async () => {
      try {
        const userData = await getAccountInfoAPI(token);
        setUserData(userData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  const handleLogout = () => {
    localStorage.clear("token");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className={styles.loaderBackground}>
        <div className={styles.loader}></div>
      </div>
    ); // Display a loading indicator
  }

  return (
    <div className={styles.accountInfoPage}>
      {editScreen === "Username" ? (
        <UsernameEdit setEditScreen={setEditScreen} setUserData={setUserData} />
      ) : editScreen === "Email" ? (
        <EmailEdit setEditScreen={setEditScreen} setUserData={setUserData} />
      ) : editScreen === "Password" ? (
        <PasswordEdit setEditScreen={setEditScreen} setUserData={setUserData} />
      ) : editScreen === "ProfileImg" ? (
        <ProfileImgEdit
          setEditScreen={setEditScreen}
          setUserData={setUserData}
        />
      ) : null}
      <div className={styles.accountInfoCard}>
        <img
          className={styles.profileIcon}
          src={userData.profile_img ? userData.profile_img : profileIcon}
          alt="Profile Icon"
        />
        {userData.username === "Demo User" ? (
          <div>Can not edit information on Demo Account</div>
        ) : (
          <div
            className={styles.imageUpload}
            onClick={() => setEditScreen("ProfileImg")}
          >
            Change Profile Photo (Optional)
          </div>
        )}
        <div className={styles.accountInfos}>
          <div className={styles.infoSection}>
            <div>
              <div>Username </div>
              <div className={styles.accountInfo}>{userData.username}</div>
            </div>
            <button
              className={styles.edit}
              onClick={() => setEditScreen("Username")}
              {...(userData.username === "Demo User" && { disabled: true })}
            >
              Edit
            </button>
          </div>
          <div className={styles.infoSection}>
            <div>
              <div>Email </div>
              <div className={styles.accountInfo}>{userData.email}</div>
            </div>
            <button
              className={styles.edit}
              onClick={() => setEditScreen("Email")}
              {...(userData.username === "Demo User" && { disabled: true })}
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
              {...(userData.username === "Demo User" && { disabled: true })}
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

AccountInfo.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profile_img: PropTypes.string,
  }),
};

export default AccountInfo;
