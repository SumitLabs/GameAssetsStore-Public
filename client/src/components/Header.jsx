import "./header.css";

const Header = (props) => {
  return (
    <div className="header_section flex_box justify_center align_center flex_col">
      <h3>{props.title}</h3>
      <p>{props.para}</p>
      <div className="img">
        <img src={props.bg}/>
      </div>
    </div>
  );
};

export default Header;
