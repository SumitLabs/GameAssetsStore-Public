import { useState } from "react";
import "./users.css";
import Card from "../components/Card";
import { MdPeople } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { UserTable } from "../components/UsersTable";
import PageNo from "../components/PageNo";

/* 🔹 Items per page */
const ITEMS_PER_PAGE = 3;

export const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const user_count = [
    { title: "Total Users", number: 232, icon: <MdPeople /> },
    { title: "Active Users", number: 120, icon: <GoDotFill /> },
    { title: "Active Admin", number: 85, icon: <MdPeople /> },
  ];

  const users = [
    { name: "User1", email: "user1@gmail.com", role: "admin", revennue: 95, parchase: 43 },
    { name: "User2", email: "user2@gmail.com", role: "user", revennue: 50, parchase: 12 },
    { name: "User3", email: "user3@gmail.com", role: "admin", revennue: 70, parchase: 30 },
    { name: "User4", email: "user4@gmail.com", role: "user", revennue: 40, parchase: 20 },
    { name: "User5", email: "user5@gmail.com", role: "admin", revennue: 100, parchase: 55 },
    { name: "User6", email: "user6@gmail.com", role: "user", revennue: 25, parchase: 8 },
  ];

  /* ✅ Pagination Logic */
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentUsers = users.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="users">
      {/* 🔹 User Count Cards */}
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

      {/* 🔹 Users Table */}
      <div className="user_table round">
        <UserTable data={currentUsers} />

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