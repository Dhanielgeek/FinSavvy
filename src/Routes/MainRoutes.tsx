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
import WelcomeAdmin from "../Admin/WelcomeAdmin";
import AllUsers from "../Admin/Allusers";
import InvestmentPack from "../Admin/InvestmentPack";
import UserDetails from "../Admin/UserDetails";
import Setting from "../Admin/Setting";
import AdminDeposit from "../Admin/AdminDeposit";
import AdminHome from "../Admin/AdminHome";
import AdminWithdraw from "../Admin/AdminWithdraw";
import Adminlayout from "../Layouts/Adminlayouts";
import History from "../Client/History";
import Account from "../Client/Account/Account";
import Profile from "../Client/Account/Profile";
import Security from "../Client/Account/Security";
import AdminPri from "./AdminPri";
import UserPri from "./UserPri";

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
    element: <UserPri />,
    children: [
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
          {
            path: "history",
            element: <History />,
          },
          {
            path: "account",
            element: <Account />,
            children: [
              {
                path: "profile",
                element: <Profile />,
              },
              {
                path: "security",
                element: <Security />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "welcome",
    element: <WelcomeAdmin />,
  },
  {
    element: <AdminPri />,
    children: [
      {
        path: "admin",
        element: <Adminlayout />,
        children: [
          {
            path: "adminhome",
            element: <AdminHome />,
          },
          {
            path: "allusers",
            element: <AllUsers />,
          },
          {
            path: "admindeposit",
            element: <AdminDeposit />,
          },
          {
            path: "adminwithdraw",
            element: <AdminWithdraw />,
          },
          {
            path: "packs",
            element: <InvestmentPack />,
          },
          {
            path: "userdetails/:_id",
            element: <UserDetails />,
          },
          {
            path: "settings",
            element: <Setting />,
          },
        ],
      },
    ],
  },
]);
