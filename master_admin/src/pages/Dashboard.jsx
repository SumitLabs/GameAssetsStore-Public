import Card from "../components/Card";
import "./dashboard.css";
import { MdVisibility } from "react-icons/md";
import { LiaFirstdraft } from "react-icons/lia";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import MasterTable from "../components/MasterTable";
import PageNo from "../components/PageNo";
import { useMemo, useState } from "react";
import { useTableSearch } from "../context/SearchContext";
import { filterRowsBySearch } from "../utils/filterTableSearch";

/* 🔹 items per page */
const ITEMS_PER_PAGE = 4;

const DASHBOARD_UPLOADS = [
  { thumb: "thumb", name: "sc", category: "category", status: "status", admin: "sumit" },
  { thumb: "thumb", name: "sc", category: "category", status: "status", admin: "sumith" },
  { thumb: "thumb", name: "cs", category: "category", status: "status", admin: "sumith" },
  { thumb: "thumb", name: "nascsme", category: "category", status: "status", admin: "sumith" },
  { thumb: "thumb", name: "namcsce", category: "category", status: "status", admin: "sumith" },
  { thumb: "thumb", name: "cs", category: "category", status: "status", admin: "sumith" },
  { thumb: "thumb", name: "name", category: "category", status: "statuncs", admin: "sumith" },
  { thumb: "thumb", name: "na]me", category: "category", status: "status", admin: "sumith" },
];

function DashboardRecentUploads({ searchQuery }) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUploads = useMemo(
    () => filterRowsBySearch(DASHBOARD_UPLOADS, searchQuery),
    [searchQuery]
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredUploads.length / ITEMS_PER_PAGE)
  );
  const page = Math.min(currentPage, totalPages);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  const currentUploads = filteredUploads.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="recent_uploads round">
      <h3>Recent Uploads</h3>

      <MasterTable data={currentUploads} />

      <div className="page_navigater">
        <PageNo
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

const Dashboard = () => {
  const { searchQuery } = useTableSearch();

  const assets_count = [
    { title: "Total Assets", number: 232, icon: <BsFillCollectionFill /> },
    { title: "Active Users", number: 120, icon: <MdPeople /> },
    { title: "Active Admin", number: 85, icon: <LiaFirstdraft /> },
    { title: "Visitor", number: 1450, icon: <MdVisibility /> },
  ];

  return (
    <section className="dashboard">
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

      <DashboardRecentUploads key={searchQuery} searchQuery={searchQuery} />
    </section>
  );
};

export default Dashboard;