import Card from "../components/Card";
import "./dashboard.css";
import { MdPublishedWithChanges, MdVisibility } from "react-icons/md";
import { LiaFirstdraft } from "react-icons/lia";
import { BsFillCollectionFill } from "react-icons/bs";
import { Table } from "../components/Table";
import PageNo from "../components/PageNo";
import { useEffect, useState } from "react";
import { useSearchQuery } from "../context/SearchContext";

/* 🔹 items per page */
const ITEMS_PER_PAGE = 5;

const CATEGORIES = ["Furniture", "Lighting", "Decor", "Electronics"];

const recent_uploads = Array.from({ length: 15 }, (_, i) => ({
  thumb: "thumb",
  name: `Upload ${i + 1}`,
  category: CATEGORIES[i % CATEGORIES.length],
  status: i % 2 === 0 ? "Published" : "Draft",
}));

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { searchQuery } = useSearchQuery();

  const assets_count = [
    { title: "Total Assets", number: 232, icon: <BsFillCollectionFill /> },
    { title: "Published Assets", number: 120, icon: <MdPublishedWithChanges /> },
    { title: "Draft Assets", number: 85, icon: <LiaFirstdraft /> },
    { title: "Visitor", number: 1450, icon: <MdVisibility /> },
  ];

  const trimmedQuery = searchQuery.trim().toLowerCase();
  const filteredUploads = !trimmedQuery
    ? recent_uploads
    : recent_uploads.filter((item) =>
        [item.name, item.category, item.status]
          .join(" ")
          .toLowerCase()
          .includes(trimmedQuery)
      );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  /* 🔹 Pagination Logic */
  const totalPages = Math.max(1, Math.ceil(filteredUploads.length / ITEMS_PER_PAGE));

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAssets = filteredUploads.slice(
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

      {/* RECENT UPLOADS */}
      <div className="recent_uploads round">
        <h3>Recent Uploads</h3>

        {/* ✅ FIXED HERE */}
        <Table data={currentAssets} />

        {/* 🔹 Pagination */}
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