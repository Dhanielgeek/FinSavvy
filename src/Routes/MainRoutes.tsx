import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

export const MainRoutes = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);
