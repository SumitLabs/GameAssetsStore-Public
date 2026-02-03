import "./contact.css";
import Header from "../components/Header";
import img from "../assets/img04.jpg";
import img2 from "../assets/img03.jpg";
import img3 from "../assets/map.png";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <Header
        title="Contact Us"
        para="Feel free to get in touch with us..."
        bg={img3}
      />

      <section className="contact_section container">
        <div className="contact_form">
          <h3>We're Here to Help!</h3>
          <p>Your email address will not be published. Required fields *</p>

          <form className="contact_form_grid">
            <div className="form_row">
              <div className="form_group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>

              <div className="form_group">
                <label>Your Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="form_group">
              <label>Write Message</label>
              <textarea rows="6" placeholder="Your message..."></textarea>
            </div>

            <button type="submit" className="btn">
              Post Comment
            </button>
          </form>
        </div>

        <div className="contact_info">
          <img src={img} className="img1" alt="" />

          <div className="over_text">
            <h3>Need Any Help</h3>
            <p>Call us 24/7 full support</p>

            <ul>
              <li>
                <span><IoMdCall /></span> +009 438 222 9540
              </li>
              <li>
                <span><IoMdMail /></span> info@xridergamil.com
              </li>
              <li>
                <span><FaLocationDot /></span> Toronto, Montreal
              </li>
            </ul>
          </div>

          <img src={img2} className="img2" alt="" />
        </div>
      </section>

      <section className="container contact_map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.840165402267!2d77.03647148715818!3d28.615971199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05ec704d1f4b%3A0xb53b105548966ab1!2sS-106%20Param%20Puri!5e0!3m2!1sen!2sin!4v1754839655946!5m2!1sen!2sin"  ></iframe>
      </section>
    </>
  );
};

export default Contact;
