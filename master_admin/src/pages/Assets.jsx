import { useState } from "react";
import "./assets.css";
import { Table } from "../components/Table";
import PageNo from "../components/PageNo";

/* 🔹 Items per page */
const ITEMS_PER_PAGE = 4;

const Assets = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const uploads = [
    { thumb: "thumb", name: "name1", category: "category", status: "Active" },
    { thumb: "thumb", name: "name2", category: "category", status: "Pending" },
    { thumb: "thumb", name: "name3", category: "category", status: "Active" },
    { thumb: "thumb", name: "name4", category: "category", status: "Rejected" },
    { thumb: "thumb", name: "name5", category: "category", status: "Active" },
    { thumb: "thumb", name: "name6", category: "category", status: "Pending" },
    { thumb: "thumb", name: "name7", category: "category", status: "Active" },
    { thumb: "thumb", name: "name8", category: "category", status: "Rejected" },
  ];

  /* ✅ Pagination Logic */
  const totalPages = Math.ceil(uploads.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentUploads = uploads.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="assets">
      <div className="upload round">
        <Table data={currentUploads} />

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

export default Assets;