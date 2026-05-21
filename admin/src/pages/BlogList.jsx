import './assets.css'
import { Table } from "../components/Table";
import { useEffect, useState } from 'react';
import PageNo from '../components/PageNo';
import { useSearchQuery } from '../context/SearchContext';

/* 🔹 items per page */
const ITEMS_PER_PAGE = 10;

const CATEGORIES = ["Furniture", "Lighting", "Decor", "Electronics"];

const uploads = Array.from({ length: 18 }, (_, i) => ({
  thumb: "thumb",
  name: `Asset ${i + 1}`,
  category: CATEGORIES[i % CATEGORIES.length],
  status: i % 2 === 0 ? "Published" : "Draft",
}));

const BlogList = () => {
       const [currentPage, setCurrentPage] = useState(1);
       const { searchQuery } = useSearchQuery();
    
      const trimmedQuery = searchQuery.trim().toLowerCase();
      const filteredUploads = !trimmedQuery
        ? uploads
        : uploads.filter((item) =>
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
    <section className="assets">
   <div className="upload round">
     <Table data={currentAssets} />
     <div className="page_navigater">
          <PageNo
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
   </div>
    </section>
  )
  
}

export default BlogList