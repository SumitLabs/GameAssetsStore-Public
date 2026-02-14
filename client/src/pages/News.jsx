import "./news.css";
import Header from "../components/Header";
import img08 from "../assets/img08.jpg";
import NewsCard from "../components/NewsCard";
import TrandingCard from "../components/TrandingCard";
import AdvertisementCard from "../components/AdvertisementCard";
import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
const News = () => {
  let news_list = [
    {
      img: img08,
      title: "2D Featured Creator Bundle",
      para: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem? `,
      author: "J.son",
      date: " April 12",
      imgHeight: 360,
      layout: "block",
    },
    {
      img: img08,
      title: "2D Featured Creator Bundle",
      para: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem? `,
      author: "J.son",
      date: " April 12",
      imgHeight: 210,
      layout: "flex_box",
    },
    {
      img: img08,
      title: "2D Featured Creator Bundle",
      para: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem? `,
      author: "J.son",
      date: " April 12",
      imgHeight: 210,
      layout: "flex_box",
    },
    {
      img: img08,
      title: "2D Featured Creator Bundle",
      para: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem? `,
      author: "Sumit Kumar Sharma",
      date: " April 12",
      imgHeight: 210,
      layout: "flex_box",
    },
  ];

  return (
    <>
      <Header
        title="Leatest News & Update"
        para="Read the latest news, tips and update fron NavaAsset"
        bg={img08}
      />
        <section className="advertisement m_advertisement">
            <AdvertisementCard />
            <AdvertisementCard />
             <AdvertisementCard />
              <AdvertisementCard />
          </section>
      <div className="news container flex_box">
        <section className="news_container">
          {news_list.map((item, index) => (
            <NewsCard
              key={index}
              img={item.img}
              title={item.title}
              para={item.para}
              author={item.author}
              date={item.date}
              imgHeight={item.imgHeight}
              layout={item.layout}
            />
          ))}
        </section>
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
