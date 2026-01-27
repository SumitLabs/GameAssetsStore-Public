import "./nav.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { TiTimes, TiThMenu } from "react-icons/ti";
import Signin from "./signin";
import Signup from "./signup";
import "./auth.css";
const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  // Toggle hamburger menu
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  // Handle window resize to auto-hide hamburger menu
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
      if (window.innerWidth > 768) {
        setHamburger(false); // Auto-hide menu on larger screens
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [showAuth, setAuth] = useState(false);
  const closeAuth = () => setAuth(false);
  const [sign, setSign] = useState("Sign Up");

  useEffect(() => {
    if (showAuth) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // restore scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [showAuth]);

  let Auth = () => {
    return (
      <div className="modal_overlay">
        <div
          className="modal_container round"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={closeAuth} className="close">
            X
          </button>
          <div
            className={`auth flex_box justify_between ${sign === "Sign In" ? "auth_reverse" : "auth_inverse"}`}
          >
            <div className="left_auth  flex_box justify_center align_center flex_col">
              <h2 className="A_logo">
                Nova<span>Asset</span>
              </h2>

              <div className="toggle_form">
                {sign === "Sign In" ? (
                  <h2>Come join us!</h2>
                ) : (
                  <h2>Nice to meet you again!</h2>
                )}
                {sign === "Sign In" ? (
                  <p>
                    We are so excited to have you here.If you haven't already,
                    create an account to get access to exclusive Games or Game
                    Assets
                  </p>
                ) : (
                  <p>
                    We’re glad to see you again. Sign in to continue and access
                    your personalized dashboard, exclusive offers, and rewards.
                  </p>
                )}
                {sign === "Sign In" ? (
                  <button onClick={() => setSign("Sign Up")} className="round">
                    {" "}
                    Already have an account? Sign In{" "}
                  </button>
                ) : (
                  <button onClick={() => setSign("Sign In")} className="round">
                    Don’t have an account? Sign Up
                  </button>
                )}
              </div>
            </div>

            <div className="right_auth flex_box justify_center flex_col">
              <div className="auth_header">
                {sign === "Sign In" ? (
                  <h2>Create Account</h2>
                ) : (
                  <h2>Welcome Back</h2>
                )}
              </div>
              <div className="auth_body ">
                {sign === "Sign In" ? <Signin /> : <Signup />}
              </div>
              <div className="auth_mobile_toggle">
                {sign === "Sign In" ? (
                  <p onClick={() => setSign("Sign Up")} className="round">
                    {" "}
                    Don’t have an account? Sign Up
                  </p>
                ) : (
                  <p onClick={() => setSign("Sign In")} className="round">
                    Already have an account? Sign In
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="navbar flex_box align_center justify_evenly">
      <div className="logo">
        <Link to="/">
          <h2>
            Nova<span>Asset</span>
          </h2>
        </Link>
      </div>

      {/* Nav Links */}
      <ul
        className={`nav_links ${hamburger ? "active" : ""} ${
          isLargeScreen ? "desktop" : "mobile"
        }`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>

        <li
          className="dropdown"
          onMouseEnter={isLargeScreen ? () => setDropdown(true) : undefined}
          onMouseLeave={isLargeScreen ? () => setDropdown(false) : undefined}
          onClick={!isLargeScreen ? () => setDropdown(!dropdown) : undefined}
        >
          <Link to="#">Audio Assets</Link>
          {dropdown && (
            <ul className="dropdown_menu">
              <li>
                <Link to="/music">Music</Link>
              </li>
              <li>
                <Link to="/sound">Sound FX</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/threed">3D Assets</Link>
        </li>

        <li>
          <Link to="/twod">2D Assets</Link>
        </li>

        <li>
          <Link to="/gui">GUI Assets</Link>
        </li>
        <li><Link to="">News</Link></li>
        <li><Link to="">Blog</Link></li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="mobile_profile">
          <Link
            onClick={() => {
              setAuth(true);
            }}
          >
            Login
          </Link>
        </li>
      </ul>

      <ul className="profile">
        <li
          className="btn btn_sm"
          onClick={() => {
            setAuth(true);
          }}
        >
          <Link>Signup</Link>
        </li>
      </ul>
      {showAuth && <Auth closeAuth={closeAuth} />}
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleHamburger}>
        {hamburger ? <TiTimes /> : <TiThMenu />}
      </div>
    </nav>
  );
};

export default Nav;
