import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { reloginAPI } from "./api/userAPI";

export const UserContext = createContext({
  user: {},
});

function App() {
  const [page, setPage] = useState("chats");
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  useEffect(() => {
    // Set the active tab based on the current path
    const currentPath = location.pathname.replace("/", "");
    setPage(currentPath || "chats");
  }, [location]);

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
        } finally {
          setIsLoading(false);
        }
      } else {
        navigate("/login");
        setIsLoading(false);
      }
    };

    initializeUser();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className={styles.loaderBackground}>
        <div className={styles.loader}></div>
      </div>
    ); // Display a loading indicator
  }

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
