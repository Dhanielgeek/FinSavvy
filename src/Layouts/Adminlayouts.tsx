import { Outlet } from "react-router-dom";

// import Menu from "./Menu"

import { useState } from "react";
import Sidebar from "../Admin/AdminMenu";
import UserHeader from "../Admin/AdminHeader";

const Adminlayout = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="h-screen w-screen max-w-[100vw] max-h-[100dvh] overflow-hidden flex">
      <Sidebar active={active} setActive={setActive} />
      <div className=" w-full h-full">
        <UserHeader active={active} setActive={setActive} />
        <Outlet />
      </div>
    </div>
  );
};

export default Adminlayout;
