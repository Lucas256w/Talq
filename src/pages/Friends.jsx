import { useState } from "react";
import FriendsList from "../components/Friends/FriendsList/FriendsList";
import PendingList from "../components/Friends/PendingList/PendingList";
import AddFriend from "../components/Friends/AddFriend/AddFriend";
import NavTab from "../components/Friends/NavTab/NavTab";

const Friends = () => {
  const [page, setPage] = useState("All Friends");

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <NavTab page={page} setPage={setPage} />
      {page === "All Friends" ? (
        <FriendsList />
      ) : page === "Pending" ? (
        <PendingList />
      ) : (
        <AddFriend />
      )}
    </div>
  );
};

export default Friends;
