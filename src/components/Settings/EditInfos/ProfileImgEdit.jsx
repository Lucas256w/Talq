import styles from "./Edit.module.css";
import { useState, useRef } from "react";
import { updateProfileImageAPI } from "../../../api/userAPI";
import placeHolder from "/placeholder.webp";
import PropTypes from "prop-types";

const ProfileImgEdit = ({ setEditScreen, setUserData }) => {
  const [profileImg, setProfileImg] = useState(placeHolder);
  const fileInput = useRef(null);

  const handleClick = () => {
    fileInput.current.click();
  };

  // Update profile image
  const handleUpdate = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    // if no file is selected
    if (!fileInput.current.files[0]) {
      alert("No photo selected");
      return;
    }

    const formData = new FormData();
    formData.append("profile_img", fileInput.current.files[0]);

    try {
      const result = await updateProfileImageAPI(token, formData);
      if (result.errors) {
        alert(result.errors[0].msg);
        return;
      }

      if (result.message === "Profile image updated") {
        alert("Profile image updated");
        setEditScreen(null);
        setUserData((prev) => ({ ...prev, profile_img: profileImg }));
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.editCard}>
        <div className={styles.editTitle}>Change your profile photo</div>
        <div className={styles.editSubTitle}>Upload a new profile photo</div>
        <div className={`${styles.inputGroup} ${styles.imgInputGroup}`}>
          <img className={styles.profileImg} src={profileImg} />
          <input
            className={styles.input}
            name="profileImg"
            type="file"
            accept="image/*"
            id="profileImg"
            style={{ display: "none" }}
            ref={fileInput}
            onChange={(e) => {
              const file = e.target.files[0];
              const imageURL = URL.createObjectURL(file);
              setProfileImg(imageURL);
            }}
          />
          <div className={styles.changePic} onClick={handleClick}>
            Choose Photo
          </div>
        </div>
        <div className={styles.actionButtonContainer}>
          <button className={styles.cancel} onClick={() => setEditScreen(null)}>
            Cancel
          </button>
          <button className={styles.done} onClick={handleUpdate}>
            Done
          </button>
        </div>
      </div>
    </>
  );
};

ProfileImgEdit.propTypes = {
  setEditScreen: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default ProfileImgEdit;
