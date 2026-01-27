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
            <li>Careers</li>
            <li>Affiliates</li>
            <li>Supply Chain</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="footer_col">
          <h4>My NovaAsset</h4>
          <ul>
            <li>My Account</li>
            <li>Orders</li>
            <li>Wishlist</li>
            <li>Rewards</li>
            <li>Subscription</li>
          </ul>
        </div>

        <div className="footer_col">
          <h4>Help & FAQs</h4>
          <ul>
            <li>Payment</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Customer Support</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer_col">
          <h4>Ways to Explore</h4>
          <ul>
            <li>New Assets</li>
            <li>Bestsellers</li>
            <li>Offers</li>
            <li>Free Assets</li>
            <li>Events</li>
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
