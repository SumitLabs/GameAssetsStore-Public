import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdViewInAr,
  MdPayments,
} from "react-icons/md";
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
            <Link to="/master/admin/dashboard" className="flex_box align_center">
              <MdDashboard /> <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/master/admin/dashboard/assets" className="flex_box align_center">
              <MdViewInAr /> <span>All Assets</span>
            </Link>
          </li>

          <li>
            <Link to="/master/admin/dashboard/users" className="flex_box align_center">
              <MdPeople /> <span>Users</span>
            </Link>
          </li>

          <li>
            <Link to="/master/admin/dashboard/transaction" className="flex_box align_center">
              <MdPayments /> <span>Transaction</span>
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
