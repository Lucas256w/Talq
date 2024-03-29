import MessageList from "../components/Chats/MessageList/MessageList";
import MessageRoom from "../components/Chats/MessageRoom/MessageRoom";
import Welcome from "../components/Chats/Welcome/Welcome";
import { useState, useEffect } from "react";

const Chats = () => {
  const [selected, setSelected] = useState(null);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenSize > 900 ? (
        <>
          <MessageList selected={selected} setSelected={setSelected} />
          {selected ? <MessageRoom setSelected={setSelected} /> : <Welcome />}
        </>
      ) : selected ? (
        <MessageRoom setSelected={setSelected} />
      ) : (
        <MessageList selected={selected} setSelected={setSelected} />
      )}
    </>
  );
};

export default Chats;
