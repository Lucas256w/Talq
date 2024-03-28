import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [page, setPage] = useState("chats");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  useEffect(() => {
    const initializeUser = () => {
      const token = localStorage.getItem("token");
      // Assuming the token is already verified for existence and validity in a previous useEffect
      if (token) {
        setUser(token);
      } else {
        navigate("/login");
      }
    };
    initializeUser();
  }, [navigate]);

  return (
    <div className={styles.page}>
      <Navbar page={page} setPage={setPage} />
      <Outlet />
    </div>
  );
}

export default App;
