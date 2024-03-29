import { redirect, useNavigate } from "react-router-dom";
import SignupForm from "../components/LoginSignup/SignupForm";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/chats");
  };

  return <SignupForm handleLogin={handleSignup} />;
};

export default Signup;
