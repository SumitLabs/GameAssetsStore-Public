import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Links */}
      <div className="footer_top">
        <div className="footer_col">
          <h4>About NovaAsset</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Audio Assets</li>
            <li>3D Assets</li>
            <li>2D Assets</li>
            <li>GUI Assets</li>
          </ul>
        </div>
   <div className="footer_col">
          <h4>Blogs & News</h4>
          <ul>
            <li>New Blogs</li>
            <li>News</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="footer_col">
          <h4>My NovaAsset</h4>
          <ul>
            <li>My Account</li>
            <li>Orders</li>
            <li>Rewards</li>
          </ul>
        </div>

        <div className="footer_col">
          <h4>Help & FAQs</h4>
          <ul>
            <li>Payment</li>
            <li>Download</li>
            <li>Customer Support</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Use </li>
          </ul>
        </div>

     
      </div>

      {/* Middle Section */}
      <div className="footer_middle">
        <div className="newsletter">
          <span>Sign up for NovaAsset Emails</span>
          <div className="newsletter_box">
            <input type="email" placeholder="Email address" />
            <button>→</button>
          </div>
        </div>

        <div className="social_icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
          <FaLinkedinIn />
        </div>
      </div>

      {/* Bottom */}
      <div className="footer_bottom">
        <p>
          © 2026 NovaAsset. All rights reserved. Terms of Use | Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
