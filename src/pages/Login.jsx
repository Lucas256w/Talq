import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginSignup/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", { name: "hello" });
    navigate("/chats");
  };

  return <LoginForm handleLogin={handleLogin} />;
};

export default Login;
