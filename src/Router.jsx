import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chats from "./pages/Chats";
import Friends from "./pages/Friends";
import Settings from "./pages/Settings";
import App from "./App";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "chats", element: <Chats /> },
        { path: "friends", element: <Friends /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
