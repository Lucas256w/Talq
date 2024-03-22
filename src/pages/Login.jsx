import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({ name: "test" });
    navigate("/chats");
  };
  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
