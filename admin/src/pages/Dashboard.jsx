import Card from "../components/Card";
import "./dashboard.css";
import { MdPublishedWithChanges, MdVisibility } from "react-icons/md";
import { LiaFirstdraft } from "react-icons/lia";
import { BsFillCollectionFill } from "react-icons/bs";
import { Table } from "../components/Table";
import PageNo from "../components/PageNo";
import { useState } from "react";

/* 🔹 items per page */
const ITEMS_PER_PAGE = 5;

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const assets_count = [
    { title: "Total Assets", number: 232, icon: <BsFillCollectionFill /> },
    { title: "Published Assets", number: 120, icon: <MdPublishedWithChanges /> },
    { title: "Draft Assets", number: 85, icon: <LiaFirstdraft /> },
    { title: "Visitor", number: 1450, icon: <MdVisibility /> },
  ];

  const recent_uploads = [
  
      {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    }, 
      {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    }, 
      {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    }, 
      {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    }, 
      {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    }, 
      {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    }, 
      {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    }, 
      {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    }, 
    
     {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    }, {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    },
    {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    },
    {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    },
    {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    },
    {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    },
    {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    },
    {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    },
    {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
    },
  ];

  /* 🔹 Pagination Logic */
  const totalPages = Math.ceil(recent_uploads.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAssets = recent_uploads.slice(
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