import "./title.css";

const Title = ({semi_title,title}) => {
  return (
    <div className="title_section">
      <div className="semi_title">
        <h5>{semi_title}</h5>
      </div>
      <div className="title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Title;
