import { useState } from "react";
import FriendsList from "../components/Friends/FriendsList";
import NavTab from "../components/Friends/NavTab/NavTab";

const Friends = () => {
  const [page, setPage] = useState("All Friends");

  return (
    <div style={{ flex: 1 }}>
      <NavTab page={page} setPage={setPage} />
      {page === "All Friends" ? <FriendsList /> : <div>Pending</div>}
    </div>
  );
};

export default Friends;
