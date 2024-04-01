import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginAPI } from "../api/userAPI";
import LoginForm from "../components/LoginSignup/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await loginAPI(loginInfo);
      localStorage.setItem("token", result.token);
      navigate("/chats");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginForm
      handleLogin={handleLogin}
      setLoginInfo={setLoginInfo}
      loginInfo={loginInfo}
    />
  );
};

export default Login;
