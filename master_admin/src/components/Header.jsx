import "./header.css";
import { FaSearch } from "react-icons/fa";
import Avatar from "../assets/avatar.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useTableSearch } from "../context/SearchContext";
const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const { searchQuery, setSearchQuery } = useTableSearch();

  return (
    <header className="flex_box justify_between align_center">
      <div
        className="hamburger"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes /> : <GiHamburgerMenu />}
      </div>

      <div className="search">
        <form
          onSubmit={(e) => e.preventDefault()}
          role="search"
        >
          <input
            type="search"
            placeholder="Search table on this page"
            className="round"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search current table"
          />
          <FaSearch />
        </form>
      </div>

      <div className="profile flex_box align_center">
        <h5>Admin</h5>
        <div className="pic">
          <img src={Avatar} alt="Pic" />
        </div>
      </div>
    </header>
  );
};

export default Header;
