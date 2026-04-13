import { useState } from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SearchProvider>
      <div className="flex_box h_full_vh">
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="outlet">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Outlet />
        </div>
      </div>
    </SearchProvider>
  );
};

export default Layout;
