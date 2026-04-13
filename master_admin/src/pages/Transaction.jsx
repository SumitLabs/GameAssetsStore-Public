import { useMemo, useState } from "react";
import "./transaction.css";
import { TransactionTable } from "../components/TransactionTable";
import PageNo from "../components/PageNo";
import { useTableSearch } from "../context/SearchContext";
import { filterRowsBySearch } from "../utils/filterTableSearch";

/* 🔹 Items per page */
const ITEMS_PER_PAGE = 8;

const TRANSACTION_ROWS = [
  {
    transaction: "M495MN664",
    user: "sumit",
    email: "sumit.@gmail.com",
    amount: 94,
    status: "Completed",
  },
  {
    transaction: "M495MN664",
    user: "sumit",
    email: "sumit.@gmail.com",
    amount: 94,
    status: "Completed",
  },
  {
    transaction: "M495MN664",
    user: "sumit",
    email: "sumit.@gmail.com",
    amount: 94,
    status: "Completed",
  },
  {
    transaction: "M495MN664",
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
  {
    transaction: "3456LMNFD",
    user: "sumit",
    email: "sumit.@gmail.com",
    amount: 75,
    status: "Completed",
  },
  {
    transaction: "3456LMNFD",
    user: "sumit",
    email: "sumit.@gmail.com",
    amount: 75,
    status: "Completed",
  },
  {
    transaction: "3456LMNFD",
    user: "sumit",
    email: "sumit.@gmail.com",
    amount: 75,
    status: "Completed",
  },
  {
    transaction: "3456LMNFD",
    user: "sumit",
    email: "sumit.@gmail.com",
    amount: 75,
    status: "Completed",
  },
  {
    transaction: "3456LMNFD",
    user: "sumit",
    email: "sumit.@gmail.com",
    amount: 75,
    status: "Completed",
  },
  {
    transaction: "3456LMNFD",
    user: "sumit",
    email: "sumit.@gmail.com",
    amount: 75,
    status: "Completed",
  },
  {
    transaction: "3456LMNFD",
    user: "sumit",
    email: "sumit.@gmail.com",
    amount: 75,
    status: "Completed",
  },
];

function TransactionTableBlock({ searchQuery }) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTransactions = useMemo(
    () => filterRowsBySearch(TRANSACTION_ROWS, searchQuery),
    [searchQuery]
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE)
  );
  const page = Math.min(currentPage, totalPages);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  const currentTransactions = filteredTransactions.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="round transactions">
      <TransactionTable data={currentTransactions} />

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

export const Transaction = () => {
  const { searchQuery } = useTableSearch();

  return (
    <section className="transaction">
      <TransactionTableBlock key={searchQuery} searchQuery={searchQuery} />
    </section>
  );
};