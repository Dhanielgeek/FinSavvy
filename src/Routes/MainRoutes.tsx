import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import Layout from "../Components/Layout";
import Policy from "../Page/Policy";
import Review from "../Page/Review";
import About from "../Page/About";
import Homepage from "../Page/Homepage";
import Dashboardlayout from "../Layouts/Dashboardlayout";
import Overview from "../Client/Overview";
import Withdraw from "../Client/Withdraw";
import Myplans from "../Client/Myplans";
import Packages from "../Client/Packages";
import Deposit from "../Client/Deposit";

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
  {
    path: "user",
    element: <Dashboardlayout />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "withdraw",
        element: <Withdraw />,
      },
      {
        path: "my-plans",
        element: <Myplans />,
      },
      {
        path: "packages",
        element: <Packages />,
      },
      {
        path: "deposit",
        element: <Deposit />,
      },
    ],
  },
]);
