import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chats from "./pages/Chats";
import App from "./App";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [{ index: true, element: <Chats /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
