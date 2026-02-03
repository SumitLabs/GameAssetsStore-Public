import "./card.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const Card = (props) => {
  const isFree =
    props.isFree === true || props.price === 0 || props.price === "0";

  return (
    <div className="card round">

      <div className="card_img_wrap">
        <img src={props.img} alt={props.title} />
      </div>

      <div className="card_info">
        <h4>{props.title}</h4>
        <p className="card_dev">by {props.dev}</p>
        <p className="card_product_info">{props.info}</p>
      </div>

      <div className="card_bottom flex_box justify_between align_center">

        <div className="card_price_rate flex_box align_center">
          {isFree ? (
            <span className="free_price">Free</span>
          ) : (
            <>
              <span className="currency">$</span>
              <span className="price_value">{props.price}</span>
            </>
          )}

          <div className="rate flex_box align_center">
            <span><FaStar /></span><p>3.9</p>
          </div>
        </div>

        <Link to={props.link} className="card_button">
          View Asset
        </Link>

      </div>

    </div>
  );
};

export default Card;
