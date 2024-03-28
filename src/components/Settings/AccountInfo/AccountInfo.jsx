import profileIcon from "/placeholder.webp";
import styles from "./AccountInfo.module.css";
import { useState } from "react";

const testUser = {
  username: "User Here",
  email: "Test@gmail.com",
};

const UsernameEdit = ({ setEditScreen }) => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.editCard}>
        <div className={styles.editTitle}>Change your username</div>
        <div className={styles.editSubTitle}>
          Enter a new username and your existing password
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="username">
            USERNAME
          </label>
          <input className={styles.input} name="username" type="text" />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">
            PASSWORD
          </label>
          <input className={styles.input} name="password" type="password" />
        </div>
        <div className={styles.actionButtonContainer}>
          <button className={styles.cancel} onClick={() => setEditScreen(null)}>
            Cancel
          </button>
          <button className={styles.done}>Done</button>
        </div>
      </div>
    </>
  );
};

const EmailEdit = ({ setEditScreen }) => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.editCard}>
        <div className={styles.editTitle}>Change your Email</div>
        <div className={styles.editSubTitle}>
          Enter a new email and your existing password
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">
            EMAIL
          </label>
          <input className={styles.input} name="email" type="email" />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">
            PASSWORD
          </label>
          <input className={styles.input} name="password" type="password" />
        </div>
        <div className={styles.actionButtonContainer}>
          <button className={styles.cancel} onClick={() => setEditScreen(null)}>
            Cancel
          </button>
          <button className={styles.done}>Done</button>
        </div>
      </div>
    </>
  );
};

const PasswordEdit = ({ setEditScreen }) => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.editCard}>
        <div className={styles.editTitle}>Change your password</div>
        <div className={styles.editSubTitle}>
          Enter a new password and your existing password
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="currentPassword">
            CURRENT PASSWORD
          </label>
          <input
            className={styles.input}
            name="currentPassword"
            type="password"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="newPassword">
            NEW PASSWORD
          </label>
          <input className={styles.input} name="newPassword" type="password" />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="confirmPassword">
            CONFIRM NEW PASSWORD
          </label>
          <input
            className={styles.input}
            name="confirmPassword"
            type="password"
          />
        </div>
        <div className={styles.actionButtonContainer}>
          <button className={styles.cancel} onClick={() => setEditScreen(null)}>
            Cancel
          </button>
          <button className={styles.done}>Done</button>
        </div>
      </div>
    </>
  );
};

const AccountInfo = () => {
  const [editScreen, setEditScreen] = useState(null);

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
      </div>
    </div>
  );
};
export default AccountInfo;
