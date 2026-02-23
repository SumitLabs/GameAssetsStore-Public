import "./blogcard.css";
import { Link } from "react-router-dom";

function BlogCard({ img, title, para, author, date }) {
  
    const shortPara = para.length > 145 ? para.substr(0, 145) + '...' : para;
    const shortTitle = title.length > 40 ? title.substr(0, 40) + '...' : title;
  return (
    <div className="blogcard round">
      <div className="blogcard_banner">
        <img src={img} alt={title} />
      </div>

      <div className="blogcard_body">
        <div className="blogcard_content">
          <h3>{shortTitle}</h3>
          <p>{shortPara}</p>
        </div>

        <div className="blogcard_footer">
          <ul className="blog_info">
            <li>{author}</li>
            <li>{date}</li>
          </ul>

          <Link to="/article/2" className="read_more_btn">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard; 