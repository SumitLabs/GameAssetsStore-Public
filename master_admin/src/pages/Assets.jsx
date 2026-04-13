import { useMemo, useState } from "react";
import "./assets.css";
import { Table } from "../components/Table";
import PageNo from "../components/PageNo";
import { useTableSearch } from "../context/SearchContext";
import { filterRowsBySearch } from "../utils/filterTableSearch";

/* 🔹 Items per page */
const ITEMS_PER_PAGE = 4;

const ASSETS_ROWS = [
  { thumb: "thumb", name: "name1", category: "category", status: "Active" },
  { thumb: "thumb", name: "name2", category: "category", status: "Pending" },
  { thumb: "thumb", name: "name3", category: "category", status: "Active" },
  { thumb: "thumb", name: "name4", category: "category", status: "Rejected" },
  { thumb: "thumb", name: "name5", category: "category", status: "Active" },
  { thumb: "thumb", name: "name6", category: "category", status: "Pending" },
  { thumb: "thumb", name: "name7", category: "category", status: "Active" },
  { thumb: "thumb", name: "name8", category: "category", status: "Rejected" },
];

function AssetsTableBlock({ searchQuery }) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUploads = useMemo(
    () => filterRowsBySearch(ASSETS_ROWS, searchQuery),
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
    <div className="upload round">
      <Table data={currentUploads} />

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

const Assets = () => {
  const { searchQuery } = useTableSearch();

  return (
    <section className="assets">
      <AssetsTableBlock key={searchQuery} searchQuery={searchQuery} />
    </section>
  );
};

export default Assets;