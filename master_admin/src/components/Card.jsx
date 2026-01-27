import "./card.css";
const Card = ({ title, number, icon }) => {
  return (
    <div className="card round">
      <div className="flex_box justify_evenly align_center">
        <div className="icon">{icon}</div>
        <div className="num">{number}</div>
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

export default Card;
