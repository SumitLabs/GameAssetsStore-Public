import "./contact.css";
import Header from "../components/Header";
import img from '../assets/img04.jpg'
import img2 from '../assets/img03.jpg'
import img3 from '../assets/map.png'
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
      <Header title="Contact Us" para="Feel free to get in touch with us..." bg={img3} />
      <section className="contact_section flex_box align_center justify_between container">
        <div className="contact_form">
          <h3>We're Here to Help!</h3>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form
            action=""
            method="get"
            className="flex_box flex_col "
          >
            <div className="flex_box justify_between mb-24 flex_wrap">
              <div className="flex_box flex_col">
                <label htmlFor="name">yor name</label>
                <input type="text" name="name" />
              </div>
              <div className="flex_box flex_col">
                <label htmlFor="email">your email</label>
                <input type="email" name="email" />
              </div>
            </div>

            <label htmlFor="text">write message</label>
            <textarea name="text" cols="30" rows="10"></textarea>

            <input type="submit" className="btn" value="post comments" />
          </form>
        </div>
        <div className="contact_info">
          <img src={img}  className="img1"/>
          <div className="over_text">
            <h3>Need Any Help</h3>
            <p>Nees Any Help, Call Us 24/7 Full Support</p>
          <ul >
            <li><span><IoMdCall/></span>Call us: +009 438 222 9540</li>
            <li><span><IoMdMail/></span>Mail us: infor@xridergamil.com</li>
            <li><span><FaLocationDot/></span>Location: Toronto, Montreal, City</li>
          </ul>
          </div>
          <img src={img2} className="img2"/>
        </div>
      </section >
      <section className="container contact_map">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.840165402267!2d77.03647148715818!3d28.615971199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05ec704d1f4b%3A0xb53b105548966ab1!2sS-106%20Param%20Puri!5e0!3m2!1sen!2sin!4v1754839655946!5m2!1sen!2sin"  ></iframe>
              
      </section>
    </>
  );
};

export default Contact;
