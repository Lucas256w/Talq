import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", { name: "hello" });
    navigate("/chats");
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
