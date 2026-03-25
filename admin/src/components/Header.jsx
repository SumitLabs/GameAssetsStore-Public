import "./header.css";
import { FaSearch } from "react-icons/fa";
import Avatar from "../assets/avatar.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = ({ sidebarOpen, setSidebarOpen, onSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState("");

  const isProfilePage =
    location.pathname === "/dashboard/profile" ||
    location.pathname === "/dashboard/upload";

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // trigger parent search
    if (onSearch) {
      onSearch(value);
    }
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
              value={query}
              onChange={handleChange}
            />
            <FaSearch />
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