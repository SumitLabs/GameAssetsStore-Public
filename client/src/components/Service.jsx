import "./service.css";
import { MdOutline3dRotation } from "react-icons/md";
import { FaRegFileImage } from "react-icons/fa";
import { IoMusicalNoteSharp } from "react-icons/io5";

const services = [
  { icon: <MdOutline3dRotation />, title: "3D Models" },
  { icon: <FaRegFileImage />, title: "2D Sprite Sheet" },
  { icon: <IoMusicalNoteSharp />, title: "Audio" },
  { icon: <FaRegFileImage />, title: "GUI Icon" },
];

const Service = () => {
  return (
    <section className="service_section round">
      <div className="service_list flex_box align_center justify_evenly">
        {services.map((service, index) => (
          <div
            className="service_item flex_box justify_center align_center flex_col"
            key={index}
          >
            <div className="service_icon">{service.icon}</div>
            <h3 className="text_center">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
