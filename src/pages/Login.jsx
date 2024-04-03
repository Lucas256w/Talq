import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginAPI } from "../api/authAPI";
import LoginForm from "../components/LoginSignup/LoginForm";

const Login = () => {
  const demoPassword = import.meta.env.VITE_DEMO_PASSWORD;
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e, demoAccount = false) => {
    e.preventDefault();

    if (demoAccount) {
      try {
        const result = await loginAPI({
          username: "Demo User",
          password: demoPassword,
        });
        localStorage.setItem("token", result.token);
        navigate("/chats");
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const result = await loginAPI(loginInfo);
        localStorage.setItem("token", result.token);
        navigate("/chats");
      } catch (error) {
        console.error(error);
      }
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
