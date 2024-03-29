import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Chats from "./pages/Chats";
import Friends from "./pages/Friends";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import App from "./App";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Navigate to="/chats" replace /> },
        { path: "chats", element: <Chats /> },
        { path: "friends", element: <Friends /> },
        { path: "settings", element: <Settings /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
