import Avatar from "../assets/avatar.jpg";
import "./product.css";
import { FaShare } from "react-icons/fa";
import { RxDownload } from "react-icons/rx";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaTag, FaTelegram, FaFacebookMessenger,FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoTriangleSharp } from "react-icons/io5";
import { useState, useEffect } from "react";


import img07 from "../assets/img07.jpg";
import img08 from "../assets/img08.jpg";
import img01 from "../assets/img01.png";

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

  let collection = [
    {
      img: img07,
      title: "Diorama",
      author: "golu",
      like: "765",
      Download: "767",
    },
    {
      img: img08,
      title: "Diorama",
      author: "golu",
      like: "765",
      Download: "648",
    },
  ];
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
  let copy = async () => {
    await navigator.clipboard
      .writeText("https://www.ikea.com/in/en/p/alex-desk-black-brown-90473556/")
      .then(alert("copyed!"));
  };

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
        <div className="modal_header flex_box justify_between align_center">
          <h3>Share</h3>
          <button className="close_btn" onClick={() => setShare(false)}>
            ✕
          </button>
        </div>

        <div className="modal_body">
          {/* As a post */}
          <h4 className="section_title">As a post</h4>
          <ul className="share_list">
            <li>
              <FaFacebook size={40} className="facebook" />
              <span>Facebook</span>
            </li>
            <li>
              <RiInstagramFill size={40} className="instagram" />
              <span>Instagram</span>
            </li>

            <li>
              <FaXTwitter size={40} className="twitter" />
              <span>Twitter</span>
            </li>
          </ul>

          {/* As a message */}
          <h4 className="section_title">As a message</h4>
          <ul className="share_list">
            <li>
              <FaFacebookMessenger size={40} className="messenger" />
              <span>Messenger</span>
            </li>
            <li>
              <IoLogoWhatsapp size={40} className="whatsapp" />
              <span>WhatsApp</span>
            </li>
            <li>
              <FaTelegram size={40} className="telegram" />
              <span>Telegram</span>
            </li>
          </ul>

          {/* Copy Link */}
          <h4 className="section_title">Or copy link</h4>
          <div className="copy_link">
            <input
              type="text"
              value="https://www.ikea.com/in/en/p/alex-desk-black-brown-90473556/"
              readOnly
            />
            <button className="copy_btn" onClick={copy}>
              COPY
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container flex_box product_section ">
      <div className="product">
        <div className="product_details">
          <div className="view_product">
            <img src={img01} alt="" />
          </div>
          <div className="product_name">
            <h3>Seoul City | Gameready | Render | Blender | PBR</h3>
            <div className="product_type">3D model</div>
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
          <div className="tag">
            <p>
              <FaTag /> Tag :
            </p>

            <ul className="flex_box flex_wrap">
              <li>Scene</li>
              <li>unity</li>
              <li>Scene</li>
              <li>unity</li>
              <li>Scene</li>
              <li>unity</li>
              <li>Scene</li>
              <li>unity</li>
              <li>Scene</li>
              <li>unity</li>
            </ul>
          </div>
        </div>
        <div className="product_detail_para">
          Modelled, Textured, Baked, Rendered and exported using Blender by me!
          Feel free to use the model in your games, renders, etc. RENDERS:
          rendered using cycles in blender with compositor enabled(fog bloom,
          diamond sharpen and CRGB curve) DAY
        </div>
      </div>
      <div className="suggested_product">
        <p>In Collections</p>

        {collection.map((item, index) => (
          <Link to={item.like} className="collection_item flex_box" key={index}>
            <div className="tumb_img">
              <img src={item.img} alt="" />
            </div>
            <div className="tumb_disc flex_box flex_col justify_between">
              <div className="tumb_top_disc">
                <h4>{item.title}</h4>
                <p>{item.author}</p>
              </div>

              <ul className="tumb_bottom_disc flex_box">
                <li>
                  <FaStar /> {item.like}
                </li>
                <li>
                  <RxDownload /> {item.Download}
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
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
