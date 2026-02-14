import "./newscard.css";
import { Link } from "react-router-dom";
const NewsCard = ({ img, title, para, author, date, imgHeight, layout }) => {
  return (
    <div
      className={layout}
      style={{
        marginTop: "42px",
        width: "100%",
        backgroundColor: "var(--Primary-light-color)",
      }}
    >
      <div className="newscard_banner">
        <img src={img} height={imgHeight} width={"100%"} />
      </div>
      <div className="newscard_body">
        <div className="newscard_contant">
          <h3>{title}</h3>
          <p>{para}</p>
        </div>
        <div className="newscard_footer flex_box ">
          <ul className="news_info">
            <li>{author}</li>
            <li>{date}</li>
          </ul>
          <div className="news_link">
            <Link to="" className="round">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
