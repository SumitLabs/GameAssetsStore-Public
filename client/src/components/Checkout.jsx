import "./checkout.css";
import { FaStar } from "react-icons/fa6";
import { RxDownload } from "react-icons/rx";
import { MdReportProblem } from "react-icons/md";
import Avatar from "../assets/avatar.jpg";

export const Checkout = () => {
  return (
    <aside className="checkout_card round">
      {/* Author */}
      <div className="checkout_author flex_box align_center">
        <img src={Avatar} alt="author" className="author_avatar" />
        <div className="author_info">
          <p className="author_name">PolySphere Studio</p>
          <div className="rating flex_box align_center">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="rating_count">(11)</span>
          </div>
        </div>
      </div>

      {/* License */}
      <div className="license_box">
        <label>Select a License</label>
        <select>
          <option>From ₹43,200.87 to ₹108,003.81</option>
        </select>
      </div>

      {/* Buttons (UPDATED LIKE IMAGE) */}
      <div className="checkout_buttons">
        <button className="buy_now_btn">Buy now</button>
        <button className="add_cart_btn">Add to cart</button>
      </div>

      {/* Formats */}
      <div className="formats mt-24">
        <p className="section_title">Included formats</p>
        <div className="format_icons flex_box align_center">
          <span className="format_badge">UE</span>
          <span className="format_badge">FBX</span>
        </div>
      </div>

      {/* Details */}
      <div className="details mt-24">
        <p className="section_title">Details</p>
        <ul>
          <li><span>Last update</span><span>December 9, 2025</span></li>
          <li><span>Published</span><span>August 12, 2021</span></li>
          <li><span>License terms</span><span className="link">Standard License</span></li>
          <li><span>Age rating</span><span>Not Mature</span></li>
          <li><span>Allows AI usage</span><span>No</span></li>
          <li><span>Generated with AI</span><span>No</span></li>
        </ul>
      </div>

      {/* Footer */}
      <div className="checkout_footer flex_box justify_between mt-24">
        <button className="footer_btn">
          <RxDownload /> Share
        </button>
        <button className="footer_btn"><MdReportProblem />  Report</button>
      </div>
    </aside>
  );
};
