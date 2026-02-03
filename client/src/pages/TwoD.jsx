import { useState } from "react";
import Header from "../components/Header";
import "./asset.css";
import img08 from "../assets/img08.jpg";
import img02 from "../assets/type_02.jpg";
import img03 from "../assets/type_05.jpg";
import img04 from "../assets/type_03.jpg";
import img05 from "../assets/type_04.jpg";
import img01 from "../assets/type_01.jpg";
import { Link } from "react-router-dom";

import Filter from "../components/Filter";
import Search from "../components/Search";
import Card from "../components/Card";
import PageNo from "../components/PageNo";

/* 🔹 Items per page */
const ITEMS_PER_PAGE = 6;

const TwoD = () => {
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
  const twod_asset = [
    {
      title: "2D Featured Creator Bundle",
      dev: "gamedevmarket",
      info: "High quality 2D assets for modern games.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
    {
      title: "Pixel Art Pack",
      dev: "PixelStudio",
      info: "Pixel-perfect assets for retro games.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
    {
      title: "UI Icons Pack",
      dev: "UIForge",
      info: "Clean UI icons for games & apps.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
    {
      title: "2D Environment Pack",
      dev: "EnvLab",
      info: "Beautiful hand-painted environments.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
    {
      title: "Free Sprite Pack",
      dev: "OpenAssets",
      info: "Free sprites for indie developers.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
    {
      title: "Premium UI Kit",
      dev: "GameUI",
      info: "Premium UI components for games.",
      price: "99",
      isFree: false,
      img: img01,
      link: "",
    },
    {
      title: "Character Animation Pack",
      dev: "AnimStudio",
      info: "2D character animations.",
      price: "9",
      isFree: false,
      img: img01,
      link: "",
    },
    {
      title: "HUD Elements Pack",
      dev: "HUDLab",
      info: "Professional HUD elements.",
      price: "99",
      isFree: false,
      img: img01,
      link: "",
    },
    {
      title: "Free Background Pack",
      dev: "NatureLab",
      info: "Free 2D background images.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
    {
      title: "Free Icon Set",
      dev: "IconHub",
      info: "Minimal icons for UI.",
      price: "0",
      isFree: true,
      img: img01,
      link: "",
    },
  ];

  /* 🔹 Pagination Logic */
  const totalPages = Math.ceil(twod_asset.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAssets = twod_asset.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <Header
        title="2D Assets"
        para="Exclusive 2D Assets Packs"
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

export default TwoD;
