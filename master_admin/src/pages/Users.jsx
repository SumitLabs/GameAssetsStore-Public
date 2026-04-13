import { useMemo, useState } from "react";
import "./users.css";
import Card from "../components/Card";
import { MdPeople } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { UserTable } from "../components/UsersTable";
import PageNo from "../components/PageNo";
import { useTableSearch } from "../context/SearchContext";
import { filterRowsBySearch } from "../utils/filterTableSearch";

/* 🔹 Items per page */
const ITEMS_PER_PAGE = 3;

const USERS_ROWS = [
  { name: "User1", email: "user1@gmail.com", role: "admin", revennue: 95, parchase: 43 },
  { name: "User2", email: "user2@gmail.com", role: "user", revennue: 50, parchase: 12 },
  { name: "User3", email: "user3@gmail.com", role: "admin", revennue: 70, parchase: 30 },
  { name: "User4", email: "user4@gmail.com", role: "user", revennue: 40, parchase: 20 },
  { name: "User5", email: "user5@gmail.com", role: "admin", revennue: 100, parchase: 55 },
  { name: "User6", email: "user6@gmail.com", role: "user", revennue: 25, parchase: 8 },
];

function UsersTableBlock({ searchQuery }) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = useMemo(
    () => filterRowsBySearch(USERS_ROWS, searchQuery),
    [searchQuery]
  );

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / ITEMS_PER_PAGE));
  const page = Math.min(currentPage, totalPages);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="user_table round">
      <UserTable data={currentUsers} />

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

export const Users = () => {
  const { searchQuery } = useTableSearch();

  const user_count = [
    { title: "Total Users", number: 232, icon: <MdPeople /> },
    { title: "Active Users", number: 120, icon: <GoDotFill /> },
    { title: "Active Admin", number: 85, icon: <MdPeople /> },
  ];

  return (
    <section className="users">
      <div className="flex_box justify_evenly users_count">
        {user_count.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            number={item.number}
            icon={item.icon}
          />
        ))}
      </div>

      <UsersTableBlock key={searchQuery} searchQuery={searchQuery} />
    </section>
  );
};