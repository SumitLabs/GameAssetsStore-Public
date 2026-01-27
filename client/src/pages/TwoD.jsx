import Header from "../components/Header";
import "./twod.css";
import img08 from "../assets/img08.jpg";
import img02 from "../assets/type_02.jpg";
import img03 from "../assets/type_05.jpg";
import img04 from "../assets/type_03.jpg";
import img05 from "../assets/type_04.jpg";
import img01 from "../assets/type_01.jpg";
import { Link } from "react-router-dom";

const TwoD = () => {
  let types = [
    { img: img01, title: "ALL", link: "" },
    { img: img02, title: "Characters", link: "" },
    { img: img03, title: "Environments", link: "" },
    { img: img04, title: "GUI", link: "" },
    { img: img05, title: "Textures & Materials", link: "" },
  ];

  return (
    <>
      <Header title="2D Assets" para="Exclusive 2D Assets Packs" bg={img08} />
      <div className="container">
        <div className="asset_types flex_box align_center">
          {types.map((type, index) => (
            <Link to="" key={index} className="tumb">
              <div className="tumb_img ">
                <img src={type.img} alt={type.title} />
              </div>
              <div className="tumb_title">
                <p>{type.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="title">
          <p>Best 3d Assets assets</p>
        </div>
      </div>
    </>
  );
};

export default TwoD;
