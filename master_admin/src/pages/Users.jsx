import "./users.css";
import Card from "../components/Card";
import { MdPeople } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { UserTable } from "../components/UsersTable";

export const Users = () => {
  const user_count = [
    { title: "Total Users", number: 232, icon: <MdPeople /> },
    { title: "Active Users", number: 120, icon: <GoDotFill /> },
    { title: "Active Admin", number: 85, icon: <MdPeople /> },
  ];

  const users = [
    {
      name: "thumb",
      email: "name",
      role: "admin",
      revennue: 95,
      parchase: 43,
    },
    {
      name: "thumb",
      email: "name",
      role: "user",
      revennue: 95,
      parchase: 43,
    },
     {
      name: "thumb",
      email: "name",
      role: "admin",
      revennue: 95,
      parchase: 43,
    },
    {
      name: "thumb",
      email: "name",
      role: "user",
      revennue: 95,
      parchase: 43,
    },
     {
      name: "thumb",
      email: "name",
      role: "admin",
      revennue: 95,
      parchase: 43,
    },
 

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

      <div className="user_table round">
        <UserTable data={users} />
      </div>
    </section>
  );
};
