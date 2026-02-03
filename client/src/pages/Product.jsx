import Avatar from "../assets/avatar.jpg";
import "./product.css";
import { FaShare } from "react-icons/fa";
import { RxDownload } from "react-icons/rx";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Comment from "../components/Comment";
import { Checkout } from "../components/Checkout";
import { IoTriangleSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import img01 from "../assets/img01.png";
import Share from "../components/Share";

const Product = () => {
  let [like, setLike] = useState(false);
  let [more, setMore] = useState(false);
  let [share, setShare] = useState(false);

  let handleLike = () => {
    setLike(!like);
  };
  let showMore = () => {
    setMore(true);
  };

  let handleShare = () => {
    setShare(true);
  };

  useEffect(() => {
    if (more || share) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [more, share]);

  let more_info = [
    {
      license: "CG Trade",
      formate: ["GLB", "FBX", "GLTF", "USDZ"],
      size: "223mb",
      texture: false,
      textures: 33,
      materials: 9,
      material: true,
      vertices: "23k",
      triangle: "233k",
      pbr: "metalness",
    },
  ];

  let displayMoreInfo = () => {
    return (
      <>
        <div className="modal_header">
          <h3>More Model Information</h3>
          <button className="close_btn" onClick={() => setMore(false)}>
            X
          </button>
        </div>

        {more_info.map((item, index) => (
          <ul className="info_details" key={index}>
            <li className="flex_box justify_between">
              <strong>License:</strong> {item.license}
            </li>
            <li className="flex_box justify_between">
              <strong>Formats:</strong> {item.formate.join(", ")}
            </li>
            <li className="flex_box justify_between">
              <strong>Size:</strong> {item.size}
            </li>
            <li className="flex_box justify_between">
              <strong>Textures:</strong>{" "}
              {item.texture ? `${item.textures} textures` : "No"}
            </li>
            <li className="flex_box justify_between">
              <strong>Materials:</strong>{" "}
              {item.material ? `${item.materials} materials` : "No"}
            </li>
            <li className="flex_box justify_between">
              <strong>Vertices:</strong> {item.vertices}
            </li>
            <li className="flex_box justify_between">
              <strong>Triangles:</strong> {item.triangle}
            </li>
            <li className="flex_box justify_between">
              <strong>PBR:</strong> {item.pbr}
            </li>
          </ul>
        ))}
      </>
    );
  };
  let shareModel = () => {
    return (
      <>
        <div className="modal_header">
          <button className="close_btn" onClick={() => setShare(false)}>
            ✕
          </button>
          <Share />
        </div>
      </>
    );
  };

  return (
    <div className="container flex_box product_section ">
      <div className="product">
        <div className="product_details">
          <div className="view_product round">
            <img src={img01} alt="" className="round" />
          </div>
          <div className="product_name">
            <h3>Seoul City | Gameready | Render | Blender | PBR</h3>
            <div className="product_type">
              <h4>3D model</h4>
            </div>
          </div>
          <div className="product_author flex_box justify_between">
            <div className="author_left flex_box align_center">
              <div className="author_profile_pic">
                <img src={Avatar} alt="" />
              </div>
              <div className="author_profile_name">
                <p>abhay</p>
              </div>
            </div>
            <ul className="author_right flex_box align_center">
              <li onClick={handleLike} className="star">
                {like ? <FaStar /> : <FaRegStar />}548
              </li>
              <li onClick={handleShare}>
                <FaShare /> share
              </li>
              <li>
                <RxDownload /> Download
              </li>
            </ul>
          </div>
          <ul className="model_info flex_box align_center">
            <li>
              <IoTriangleSharp /> Triangle: 123.3k
            </li>
            <li>
              <RxDownload /> Vertices: 344.4k
            </li>
            <li onClick={showMore}>More model information</li>
          </ul>
        </div>
        <div className="product_detail_para">
          Modelled, Textured, Baked, Rendered and exported using Blender by me!
          Feel free to use the model in your games, renders, etc. RENDERS:
          rendered using cycles in blender with compositor enabled(fog bloom,
          diamond sharpen and CRGB curve) DAY
        </div>
        <Comment />
      </div>

      <section className="checkout_section round">
        <Checkout />
      </section>
      {more && (
        <div className="modal_overlay">
          <div className="modal_content">{displayMoreInfo()}</div>
        </div>
      )}
      {share && (
        <div className="modal_overlay">
          <div className="modal_content">{shareModel()}</div>
        </div>
      )}
    </div>
  );
};

export default Product;
