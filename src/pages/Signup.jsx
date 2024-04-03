import placeholder from "/placeholder.webp";
import SignupForm from "../components/LoginSignup/SignupForm";
import { signupAPI } from "../api/authAPI";
import { useState } from "react";

const Signup = () => {
  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profile_img: placeholder,
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // check if passwords match
    if (formData.get("password") !== formData.get("confirmPassword")) {
      alert("Passwords do not match");
      return;
    }

    // check if username is length 4-20
    if (
      formData.get("username").length < 4 ||
      formData.get("username").length > 20
    ) {
      alert("Username must be between 4 and 20 characters");
      return;
    }

    // check if password is at least 8 characters
    if (formData.get("password").length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    try {
      const result = await signupAPI(formData);
      alert(result.message);
      setInfo({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        profile_img: placeholder,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignupForm info={info} setInfo={setInfo} handleSignup={handleSignup} />
  );
};

export default Signup;
