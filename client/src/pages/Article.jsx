import "./article.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
const Article = () => {
  return (
    <div className="article_page flex_box justify_center">
      <div className="article_container">
        {/* Header Image */}
        <div className="article_header">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Article Header"
          />
        </div>

        {/* Article Content */}
        <div className="article_content">
          <h1>The Future of Technology: What to Expect</h1>

          <div className="article_meta">
            <span>By Sarah Johnson</span>
            <span>•</span>
            <span>Feb 6, 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          <p>
            Technology is evolving at an unprecedented pace. From artificial
            intelligence to next-generation connectivity, innovations continue
            to reshape the way we live and work.
          </p>

          <h2>Artificial Intelligence</h2>
          <p>
            AI is transforming industries by automating processes, enhancing
            decision-making, and enabling smarter applications across sectors.
          </p>

          <h2>The Rise of 5G</h2>
          <p>
            5G connectivity brings faster speeds and lower latency, unlocking
            new possibilities for smart cities, IoT devices, and immersive
            experiences.
          </p>

          <p>
            As technology continues to evolve, staying informed is essential.
            The next decade promises groundbreaking advancements that will
            redefine our digital future.
          </p>
        </div>
      </div>
    
        <ul className="share">
          <li><Link><IoLogoWhatsapp/></Link></li>
          <li><Link><FaTelegramPlane/></Link></li>
        </ul>
      
    </div>
  );
};

export default Article;
