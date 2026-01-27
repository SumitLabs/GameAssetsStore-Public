import "./errorpage.css";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="error_page">
      <div className="error_message flex_box flex_col justify_center">
        <h3>OOPS!</h3>
        <p>You Came to the Wrong Place!</p>
        <div className="goto">
          <Link to="/" className="btn btn_sm">
            Go Home
          </Link>
        </div>
      </div>
      <div className="texture">
      <div className="moon"></div>
        <div className="grass"></div>
        <div className="hand">
            <h3>404</h3>
        </div>
      </div>
    </div>
  );
};
