import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("chats");
  const [user, setUser] = useState(null);

  return (
    <>
      {user ? (
        <div className={styles.page}>
          <Navbar page={page} setPage={setPage} />
          <Outlet />
        </div>
      ) : (
        <Login setUser={setUser} />
      )}
    </>
  );
}

export default App;
