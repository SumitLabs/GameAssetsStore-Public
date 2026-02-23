import "./header.css";
import { FaSearch } from "react-icons/fa";
import Avatar from "../assets/avatar.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isProfilePage = location.pathname === "/dashboard/profile" || location.pathname=== "/dashboard/upload";

  return (
    <header className="flex_box justify_between align_center">
      <div
        className="hamburger"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes /> : <GiHamburgerMenu />}
      </div>

      {/* Hide Search on Profile Page */}
      {!isProfilePage && (
        <div className="search">
          <form>
            <input type="search" placeholder="Search" className="round" />
            <FaSearch />
          </form>
        </div>
      )}

      <div className={isProfilePage?"profile flex_box align_center justify_end w-100":"profile flex_box align_center"}>
        <h5>Admin</h5>
        <div className="pic" onClick={() => navigate("/dashboard/profile")}>
          <img src={Avatar} alt="Pic" />
        </div>
      </div>
    </header>
  );
};

export default Header;