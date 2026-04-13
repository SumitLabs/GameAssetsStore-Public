import "./header.css";
import { FaSearch } from "react-icons/fa";
import Avatar from "../assets/avatar.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useSearchQuery } from "../context/SearchContext";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useSearchQuery();

  const isProfilePage =
    location.pathname === "/dashboard/profile" ||
    location.pathname === "/dashboard/upload";

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="flex_box justify_between align_center">
      
      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes /> : <GiHamburgerMenu />}
      </div>

      {/* Search */}
      {!isProfilePage && (
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search Assets..."
              className="round"
              value={searchQuery ?? ""}
              onChange={handleChange}
              autoComplete="off"
            />
            <FaSearch aria-hidden className="search_icon" />
          </form>
        </div>
      )}

      {/* Profile */}
      <div
        className={
          isProfilePage
            ? "profile flex_box align_center justify_end w-100"
            : "profile flex_box align_center"
        }
      >
        <h5>Admin</h5>
        <div
          className="pic"
          onClick={() => navigate("/dashboard/profile")}
        >
          <img src={Avatar} alt="Pic" />
        </div>
      </div>
    </header>
  );
};

export default Header;