import { useState } from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex_box">
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="outlet">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
