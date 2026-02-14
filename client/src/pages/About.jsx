import Header from "../components/Header";
import img08 from "../assets/img08.jpg";
import img06 from "../assets/img06.png";
import { BiTargetLock } from "react-icons/bi";
import { TbDeviceVisionProFilled } from "react-icons/tb";
import { LuAudioLines } from "react-icons/lu";
import img05 from "../assets/img05.png";
import Subscribe from "../components/Subscribe";
import "./about.css";
import Review from "../components/Review";
import Title from "../components/Title";

const About = () => {
  return (
    <>
      <Header title="About Us" para=" Know everything about us..." bg={img08} />
      <div className="about_section  flex_box justify_evenly align_center container">
        <div className="about_left">
          <h5>
            About<span> Nova Asset</span>
          </h5>
          <h3>
            the journey of the <span>Nova Asset</span>
          </h3>
          <p>
            A game studio crafting exciting, high-quality games assets,
            prioritizing immersive games.
          </p>
          <div className="sarvices">
            <div className="flex_box row">
              <div className="service flex_box ">
                <div className="service_icons">
                  <TbDeviceVisionProFilled />
                </div>
                <div className="service_des">
                  <h3>Vision</h3>
                  <p>Provieding Games Asset for game development</p>
                </div>
              </div>
              <div className="service flex_box">
                <div className="service_icons">
                  <BiTargetLock />
                </div>
                <div className="service_des">
                  <h3>Location Tagging</h3>
                  <p>A game studio crafting excutive video game</p>
                </div>
              </div>
            </div>
            <div className="flex_box row">
              <div className="service flex_box">
                <div className="service_icons">
                  <BiTargetLock />
                </div>
                <div className="service_des">
                  <h3>Location Tagging</h3>
                  <p>A game studio crafting excutive video game</p>
                </div>
              </div>
              <div className="service flex_box">
                <div className="service_icons">
                  <BiTargetLock />
                </div>
                <div className="service_des">
                  <h3>Location Tagging</h3>
                  <p>A game studio crafting excutive video game</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_right">
          <div className="about_img flex_box align_end">
            <img src={img06} width={256} />
            <div className="about_info">
              <h2>
                Biggest Platform for <span>Game assets</span>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className=" features_section flex_box justify_evenly align_center container">
        <div className="features">
          <h5>Top Features</h5>
          <h2>great team deliver perfect work</h2>
          <p>
            We are specialized in developing out-of-the-box solutions using
            emerging technologies
          </p>
          <ul>
            <li className="flex_box align_center">
              <div className="icon">
                <LuAudioLines />
              </div>
              <div className="list_item">
                <h5>Audio & Sound Design</h5>
                <p>
                  We’re passionate about what we do and always seek new
                  opportunities. We are also flexible and proactive in business.
                </p>
              </div>
            </li>
          </ul>

          <ul>
            <li className="flex_box align_center">
              <div className="icon">
                <LuAudioLines />
              </div>
              <div className="list_item">
                <h5>Graphics & Performance</h5>
                <p>
                  We’re passionate about what we do and always seek new
                  opportunities. We are also flexible and proactive in business.
                </p>
              </div>
            </li>
          </ul>

          <ul>
            <li className="flex_box align_center">
              <div className="icon">
                <LuAudioLines />
              </div>
              <div className="list_item">
                <h5>Graphics & Performance</h5>
                <p>
                  We’re passionate about what we do and always seek new
                  opportunities. We are also flexible and proactive in business.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="poster">
          <img src={img05} alt="" />
        </div>
      </div>
      <div className="container ">
        <Title semi_title="our testimonials" title="Our Testimonials" />
        <div className="my-24 ">
          <Review />
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default About;
