import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import { useEffect, useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { reloginAPI } from "./api/userAPI";

const UserContext = createContext({
  user: {},
});

function App() {
  const [page, setPage] = useState("chats");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  useEffect(() => {
    const initializeUser = async () => {
      const token = localStorage.getItem("token");
      // Assuming the token is already verified for existence and validity in a previous useEffect
      if (token) {
        try {
          const userData = await reloginAPI(token);
          setUser(userData);
        } catch (error) {
          console.error(error);
          localStorage.removeItem("token");
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    };

    initializeUser();
  }, [navigate]);

  return (
    <div className={styles.page}>
      <UserContext.Provider value={{ user }}>
        <Navbar page={page} setPage={setPage} />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}

export default App;
