import Card from "../components/Card";
import "./dashboard.css";
import { MdPublishedWithChanges, MdVisibility } from "react-icons/md";
import { LiaFirstdraft } from "react-icons/lia";
import { BsFillCollectionFill } from "react-icons/bs";
import { Table } from "../components/Table";

const Dashboard = () => {
  const assets_count = [
    { title: "Total Assets", number: 232, icon: <BsFillCollectionFill /> },
    { title: "Published Assets", number: 120, icon: <MdPublishedWithChanges /> },
    { title: "Draft Assets", number: 85, icon: <LiaFirstdraft /> },
    { title: "Visitor", number: 1450, icon: <MdVisibility /> },
  ];

  const recent_uploads = [
    {
      thumb: "thumb.png",
      name: "Low Poly Tree",
      category: "3D Model",
      status: "Published",
    },
    {
      thumb: "thumb2.png",
      name: "Sci-Fi Gun",
      category: "Weapon",
      status: "Draft",
    },
  ];

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
        <Table data={recent_uploads} />
      </div>
    </section>
  );
};

export default Dashboard;
