import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import Layout from "../Components/Layout";
import Policy from "../Page/Policy";
import Review from "../Page/Review";
import About from "../Page/About";
import Homepage from "../Page/Homepage";

export const MainRoutes = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "policy",
        element: <Policy />,
      },
      {
        path: "review",
        element: <Review />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
