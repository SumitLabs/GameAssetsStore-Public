import { useState } from "react";
import Header from "../components/Header";
import "./asset.css";
import { Link } from "react-router-dom";
import img08 from "../assets/img08.jpg";
import img02 from "../assets/3dtype_02.jpg";
import img03 from "../assets/3dtype_05.jpg";
import img04 from "../assets/3dtype_03.jpg";
import img05 from "../assets/type_04.jpg";
import img01 from "../assets/3dtype_01.jpg";
import Filter from "../components/Filter";
import Search from "../components/Search";
import Card from "../components/Card";
import PageNo from "../components/PageNo";

/* 🔹 items per page */
const ITEMS_PER_PAGE = 6;

const Gui = () => {
  const [currentPage, setCurrentPage] = useState(1);

  /* 🔹 Asset Types */
  const types = [
    { img: img01, title: "ALL", link: "" },
    { img: img02, title: "Characters", link: "" },
    { img: img03, title: "Environments", link: "" },
    { img: img04, title: "GUI", link: "" },
    { img: img05, title: "Textures & Materials", link: "" },
  ];

  /* 🔹 Assets Data */
  const gui_asset = [
    {
      title: "2D Featured Creator Bundle",
      dev: "gamedevmarket",
      info: "High quality 3D assets for modern games.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
     {
      title: "2D Featured Creator Bundle",
      dev: "gamedevmarket",
      info: "High quality 3D assets for modern games.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
     {
      title: "2D Featured Creator Bundle",
      dev: "gamedevmarket",
      info: "High quality 3D assets for modern games.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
     {
      title: "2D Featured Creator Bundle",
      dev: "gamedevmarket",
      info: "High quality 3D assets for modern games.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
     {
      title: "2D Featured Creator Bundle",
      dev: "gamedevmarket",
      info: "High quality 3D assets for modern games.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
     {
      title: "2D Featured Creator Bundle",
      dev: "gamedevmarket",
      info: "High quality 3D assets for modern games.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
     {
      title: "2D Featured Creator Bundle",
      dev: "gamedevmarket",
      info: "High quality 3D assets for modern games.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
     {
      title: "2D Featured Creator Bundle",
      dev: "gamedevmarket",
      info: "High quality 3D assets for modern games.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },

    {
      title: "Environment Pack",
      dev: "EpicDev",
      info: "AAA environment models for open world games.",
      price: "99",
      isFree: false,
      img: img01,
      link: "",
    },
    {
      title: "Character Pack",
      dev: "GameStudio",
      info: "Stylized characters with animations.",
      price: "9",
      isFree: false,
      img: img01,
      link: "",
    },
    {
      title: "GUI Kit",
      dev: "UIForge",
      info: "Modern game UI components.",
      price: "99",
      isFree: false,
      img: img01,
      link: "",
    },
    {
      title: "Free Props Pack",
      dev: "OpenAssets",
      info: "Free props for indie developers.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
    {
      title: "Free Nature Pack",
      dev: "NatureLab",
      info: "Trees, rocks & grass models.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
  ];

  /* 🔹 Pagination Logic */
  const totalPages = Math.ceil(gui_asset.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAssets = gui_asset.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <Header
        title="3D Assets"
        para="Exclusive 3D Assets Packs"
        bg={img08}
      />

      {/* 🔹 Asset Types */}
      <div className="container">
        <div className="asset_types flex_box align_center">
          {types.map((type, index) => (
            <Link to="" key={index} className="tumb">
              <div className="tumb_img">
                <img src={type.img} alt={type.title} />
              </div>
              <div className="tumb_title">
                <p>{type.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 🔹 Assets Section */}
      <div className="container assets_container flex_box">
        <Filter />

        <section className="assets">
          <Search />

          <div className="assets_grid">
            {currentAssets.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                dev={item.dev}
                info={item.info}
                price={item.price}
                isFree={item.isFree}
                img={item.img}
                link={item.link}
              />
            ))}
          </div>

          {/* 🔹 Pagination */}
          <div className="page_navigater">
            <PageNo
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Gui;

 