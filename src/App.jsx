import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("chats");

  return (
    <div className={styles.page}>
      <Navbar page={page} setPage={setPage} />
      <Outlet />
    </div>
  );
}

export default App;
