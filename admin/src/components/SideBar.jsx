import "./sidebar.css";
import { Link } from "react-router-dom";
import { MdDashboard,MdViewInAr } from "react-icons/md";
import { FaFileDownload} from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { CgLogOut } from "react-icons/cg";

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <aside className={`side_bar ${sidebarOpen ? "open" : ""}`}>
      <div className="logo flex_box justify_between align_center">
        <h2>
          Nova<span>Asset</span>
        </h2>
      </div>

      <nav>
        <ul onClick={() => setSidebarOpen(false)}>
          <li>
            <Link to="/dashboard" className="flex_box align_center">
              <MdDashboard /> <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/upload" className="flex_box align_center">
              <FaFileDownload /> <span>Upload Asset</span>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/assets" className="flex_box align_center">
              <MdViewInAr /> <span>All Assets</span>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/profile" className="flex_box align_center">
              <ImProfile /> <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="logout">
        <ul>
          <li className="flex_box align_center">
            <CgLogOut />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
