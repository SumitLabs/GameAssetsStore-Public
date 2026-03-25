import "./news.css";
import Header from "../components/Header";
import img08 from "../assets/img08.jpg";
import NewsCard from "../components/NewsCard";
import TrandingCard from "../components/TrandingCard";
import AdvertisementCard from "../components/AdvertisementCard";
import PageNo from "../components/PageNo";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

const ITEMS_PER_PAGE = 4;

const News = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch News
  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=sports&sortBy=popularity&apiKey=ed08cabbe98344c09f874a32cdac1340",
        );

        setData(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    getNews();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentAssets = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <Header
        title="Latest News & Update"
        para="Read the latest news, tips and update from NavaAsset"
        bg={img08}
      />

      <section className="advertisement m_advertisement">
        <AdvertisementCard />
        <AdvertisementCard />
        <AdvertisementCard />
        <AdvertisementCard />
      </section>

      <div className="news container flex_box">
        {/* LEFT SIDE NEWS */}
        <section className="news_container">
          {currentAssets.map((item, index) => (
            <NewsCard
              key={index}
              img={item.urlToImage || img08}
              title={item.title}
              para={item.description}
              author={item.author || "Unknown"}
              date={
                item.publishedAt
                  ? new Date(item.publishedAt).toDateString()
                  : "No Date"
              }
              link={item.url || "#"}
              imgHeight={index === 0 && currentPage === 1 ? 360 : 210}
              layout={index === 0 && currentPage === 1 ? "block" : "flex_box"}
            />
          ))}

          {/* PAGINATION */}
          <div className="page_navigater">
            <PageNo
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          </div>
        </section>

        {/* RIGHT SIDE */}
        <div className="advertisement_container">
          <div className="w_display">
            <TrandingCard />
          </div>

          <section className="social_links_container">
            <h5>Social Links</h5>
            <ul className="social_links flex_box">
              <li>
                <Link to="">
                  <AiFillInstagram />
                </Link>
              </li>
              <li>
                <Link to="">
                  <AiFillLinkedin />
                </Link>
              </li>
              <li>
                <Link to="">
                  <AiFillFacebook />
                </Link>
              </li>
              <li>
                <Link to="">
                  <BsTwitterX />
                </Link>
              </li>
            </ul>
          </section>

          <section className="advertisement">
            <AdvertisementCard />
            <AdvertisementCard />
          </section>

          <div className="w_display">
            <TrandingCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
