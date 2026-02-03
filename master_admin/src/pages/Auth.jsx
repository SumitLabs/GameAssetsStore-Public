import "./auth.css";
import { MdEmail } from "react-icons/md";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
const Auth = () => {
  const [register, setRegister] = useState(false);
  const [close, setClose] = useState(true);

  let handleChangetype = () => {
    setClose(!close);
  };

  const [auth, setAuth] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  // ✅ Validation function
  const validation = () => {
    let valid = true;
    let newErrors = { username: "", email: "", password: "" };

    // ✅ Username validation ONLY for Sign Up
    if (register) {
      if (!auth.username.trim()) {
        newErrors.username = "Username is required";
        valid = false;
      } else if (auth.username.length < 3) {
        newErrors.username = "Username must be at least 3 characters long";
        valid = false;
      }
    }

    // Email validation (Both Sign In & Sign Up)
    if (!auth.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(auth.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Password validation (Both Sign In & Sign Up)
    if (!auth.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (auth.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      valid = false;
    } else if (!/[A-Z]/.test(auth.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
      valid = false;
    } else if (!/[0-9]/.test(auth.password)) {
      newErrors.password = "Password must contain at least one number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validation()) return;

    if (register) {
      console.log("SIGN UP:", auth);
      alert("Signup successful!");
    } else {
      console.log("SIGN IN:", {
        email: auth.email,
        password: auth.password,
      });
      alert("Signin successful!");
    }

    setAuth({ username: "", email: "", password: "" });
    setErrors({ username: "", email: "", password: "" });
  };

  return (
    <div className="auth_page flex_box justify_between align_center  ">
      <div className="info_section">
        <div className="logo">
          <h3>
            Nova<span>Asset</span>
          </h3>
        </div>
        <div className="uses">
          <h3>How to Use Admin Panel</h3>
          <dl>
            <dt>Sign In / Sign Up</dt>
            <dd>
              Master Admin must sign in using master-level credentials to access
              system-wide controls.
            </dd>

            <dt>Monitor Users & Admins</dt>
            <dd>
              View all registered users and admins, assign roles, block/unblock
              accounts, and manage permissions.
            </dd>

            <dt>Approve & Moderate Assets</dt>
            <dd>
              Review newly uploaded or updated assets, approve or reject them,
              and control marketplace visibility.
            </dd>

            <dt>Review Reports & Logs</dt>
            <dd>
              Analyze system reports, user activity logs, asset abuse reports,
              and security events.
            </dd>

            <dt>Performance Analytics</dt>
            <dd>
              Analyze revenue growth, asset popularity, top creators, and
              marketplace trends.
            </dd>
          </dl>
        </div>
      </div>
      <div className="auth_section flex_box flex_col justify_center">
        <div className="auth_section_header">
          {register ? <h3>Come join us !</h3> : <h3>Welcome Back !</h3>}
        </div>
        <form onSubmit={handleSubmit} className="auth_form">
          {/* Username – ONLY for Sign Up */}
          {register && (
            <>
              <div className="row">
                <FaUser />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="OFF"
                  value={auth.username}
                  onChange={handleChange}
                />
              </div>
              {errors.username && <p className="error">{errors.username}</p>}
            </>
          )}

          <div className="row">
            <MdEmail />
            <input
              type="email"
              name="email"
              autoComplete="OFF"
              placeholder="Email"
              value={auth.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="row">
            <FaLock />
            <input
              type={close ? "text" : "password"}
              name="password"
              placeholder="Password"
              autoComplete="OFF"
              value={auth.password}
              onChange={handleChange}
            />
            <span onClick={handleChangetype}>
            {close?<IoIosEye className="input_icon_eye"/>:<IoIosEyeOff className="input_icon_eye"/>}
            </span>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          <input
            type="submit"
            value={register ? "Sign Up" : "Sign In"}
            className="round"
          />

          {register ? (
            <p onClick={() => setRegister(false)}>
              Already have an account? Sign In
            </p>
          ) : (
            <p onClick={() => setRegister(true)}>
              Don’t have an account? Sign Up
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Auth;
