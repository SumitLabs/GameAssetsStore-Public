import Card from "../components/Card";
import "./dashboard.css";
import { MdVisibility } from "react-icons/md";
import { LiaFirstdraft } from "react-icons/lia";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import MasterTable from "../components/MasterTable";
import PageNo from "../components/PageNo";
import { useState } from "react";

/* 🔹 items per page */
const ITEMS_PER_PAGE = 4;

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const assets_count = [
    { title: "Total Assets", number: 232, icon: <BsFillCollectionFill /> },
    { title: "Active Users", number: 120, icon: <MdPeople /> },
    { title: "Active Admin", number: 85, icon: <LiaFirstdraft /> },
    { title: "Visitor", number: 1450, icon: <MdVisibility /> },
  ];

  const uploads = [
    { thumb: "thumb", name: "sc", category: "category", status: "status", admin: "sumit" },
    { thumb: "thumb", name: "sc", category: "category", status: "status", admin: "sumith" },
    { thumb: "thumb", name: "cs", category: "category", status: "status", admin: "sumith" },
    { thumb: "thumb", name: "nascsme", category: "category", status: "status", admin: "sumith" },
    { thumb: "thumb", name: "namcsce", category: "category", status: "status", admin: "sumith" },
    { thumb: "thumb", name: "cs", category: "category", status: "status", admin: "sumith" },
    { thumb: "thumb", name: "name", category: "category", status: "statuncs", admin: "sumith" },
    { thumb: "thumb", name: "na]me", category: "category", status: "status", admin: "sumith" },
  ];

  /* ✅ Pagination Logic (FIXED) */
  const totalPages = Math.ceil(uploads.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentUploads = uploads.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="dashboard">
      {/* CARDS */}
      <div className="assets_count flex_box justify_around">
        {assets_count.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            number={item.number}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="recent_uploads round">
        <h3>Recent Uploads</h3>

        {/* ✅ Pass paginated data */}
        <MasterTable data={currentUploads} />

        {/* Pagination */}
        <div className="page_navigater">
          <PageNo
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;