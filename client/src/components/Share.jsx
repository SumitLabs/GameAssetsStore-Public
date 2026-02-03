import "./share.css";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  FaTag,
  FaTelegram,
  FaFacebookMessenger,
  FaFacebook,
} from "react-icons/fa";


const Share = () => {
  let copy = async () => {
    await navigator.clipboard
      .writeText("https://www.ikea.com/in/en/p/alex-desk-black-brown-90473556/")
      .then(alert("copyed!"));
  };
  return (
    <section className="share">
         <h3>Share</h3>
      <div className="modal_body">
        {/* As a post */}
        <h4 className="section_title">As a post</h4>
        <ul className="share_list">
          <li>
            <FaFacebook size={40} className="facebook" />
            <span>Facebook</span>
          </li>
          <li>
            <RiInstagramFill size={40} className="instagram" />
            <span>Instagram</span>
          </li>

          <li>
            <FaXTwitter size={40} className="twitter" />
            <span>Twitter</span>
          </li>
        </ul>

        {/* As a message */}
        <h4 className="section_title">As a message</h4>
        <ul className="share_list">
          <li>
            <FaFacebookMessenger size={40} className="messenger" />
            <span>Messenger</span>
          </li>
          <li>
            <IoLogoWhatsapp size={40} className="whatsapp" />
            <span>WhatsApp</span>
          </li>
          <li>
            <FaTelegram size={40} className="telegram" />
            <span>Telegram</span>
          </li>
        </ul>

        {/* Copy Link */}
        <h4 className="section_title">Or copy link</h4>
        <div className="copy_link">
          <input
            type="text"
            value="https://www.ikea.com/in/en/p/alex-desk-black-brown-90473556/"
            readOnly
          />
          <button className="copy_btn" onClick={copy}>
            COPY
          </button>
        </div>
      </div>
    </section>
  );
};

export default Share;
