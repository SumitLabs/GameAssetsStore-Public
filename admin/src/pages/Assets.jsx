import './assets.css'
import { Table } from "../components/Table";
import { useState } from 'react';
import PageNo from '../components/PageNo';
/* 🔹 items per page */
const ITEMS_PER_PAGE = 10;
const Assets = () => {
   const [currentPage, setCurrentPage] = useState(1);
    let uploads = [
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
  const totalPages = Math.ceil(uploads.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAssets = uploads.slice(
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

export default Assets