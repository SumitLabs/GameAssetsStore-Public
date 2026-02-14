import { useState } from "react";
import "./transaction.css";
import { TransactionTable } from "../components/TransactionTable";
import PageNo from "../components/PageNo";

/* 🔹 Items per page */
const ITEMS_PER_PAGE = 2;

export const Transaction = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const Transactions = [
    {
      transaction: "M495MN664",
      user: "sumit",
      email: "sumit.@gmail.com",
      amount: 94,
      status: "Completed",
    },
    {
      transaction: "956NGMNLC",
      user: "sumit",
      email: "sumit.@gmail.com",
      amount: 94,
      status: "Completed",
    },
    {
      transaction: "0483MNMF",
      user: "sumit",
      email: "sumit.@gmail.com",
      amount: 94,
      status: "Completed",
    },
    {
      transaction: "7845NMKFD",
      user: "sumit",
      email: "sumit.@gmail.com",
      amount: 120,
      status: "Pending",
    },
    {
      transaction: "3456LMNFD",
      user: "sumit",
      email: "sumit.@gmail.com",
      amount: 75,
      status: "Completed",
    },
  ];

  /* ✅ Pagination Logic */
  const totalPages = Math.ceil(Transactions.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentTransactions = Transactions.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="transaction">
      <div className="round transactions">
        <TransactionTable data={currentTransactions} />

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