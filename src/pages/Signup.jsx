import placeholder from "/placeholder.webp";
import SignupForm from "../components/LoginSignup/SignupForm";
import { signupAPI } from "../api/userAPI";
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
