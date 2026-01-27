import Card from "../components/Card";
import "./dashboard.css";
import { MdVisibility } from "react-icons/md";
import { LiaFirstdraft } from "react-icons/lia";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import MasterTable from "../components/MasterTable";
const Dashboard = () => {
  const assets_count = [
    { title: "Total Assets", number: 232, icon: <BsFillCollectionFill /> },
    { title: "Active Users", number: 120, icon: <MdPeople /> },
    { title: "Active Admin", number: 85, icon: <LiaFirstdraft /> },
    { title: "Visitor", number: 1450, icon: <MdVisibility /> },
  ];
  let uploads = [
   
     {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
      admin:"sumit"
    }, {
      thumb: "thumb",
      name: "name",
      category: "category",
      status: "status",
      admin:"sumith"
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
      <div className="recent_uploads round">
        <h3>Recent Uploads</h3>
        <MasterTable data={uploads}/>
      </div>
    </section>
  );
};

export default Dashboard;
