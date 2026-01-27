import "./card.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="card round">
      <div className="img">
        <img src={props.img}/>
      </div>
      <div className="card_info">
        <div className="card_title">
          <h4>{props.title}</h4>
        </div>
        <div className="card_dev">
          <p>by {props.dev}</p>
        </div>
        <div className="card_product_info">
          <p>{props.info}</p>
        </div>
      </div>
      <div className=" card_bottom flex_box justify_between align_center">
        <div className="card_price">
          {props.price}
          <span>$</span>
        </div>
        <button className="card_button round">
          <Link to={props.link}>View Asset</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
