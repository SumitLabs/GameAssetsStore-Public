import './assets.css'
import { Table } from "../components/Table";
const Assets = () => {
    let uploads = [
   
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
   
  ];
  return (
    <section className="assets  ">
   <div className="upload round">
    <Table data={uploads} />
   </div>
    </section>
  )
}

export default Assets