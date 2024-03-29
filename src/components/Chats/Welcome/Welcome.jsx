import styles from "./Welcome.module.css";
import TalqIcon from "/Talq-icon.png";

const Welcome = () => {
  return (
    <div className={styles.welcomePage}>
      <img className={styles.icon} src={TalqIcon} />
      <div>Select a chat to start Talqing!</div>
    </div>
  );
};

export default Welcome;
