import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import "./auth.css";

const Signin = () => {
  const [close,setClose]=useState(true);
  
  let handleChangetype=()=>{
    setClose(!close);
  }
  const [Signin, setSignin] = useState({
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

    // Username validation
    if (!Signin.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    } else if (Signin.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long";
      valid = false;
    }

    // Email validation
    if (!Signin.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Signin.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Password validation
    if (!Signin.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (Signin.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    } else if (!/[A-Z]/.test(Signin.password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
      valid = false;
    } else if (!/[0-9]/.test(Signin.password)) {
      newErrors.password = "Password must contain at least one number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    setSignin({ ...Signin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validation()) return; // Stop if validation fails

    try {
      console.log(Signin.username, Signin.email, Signin.password);
      alert("Signin successful!");
      setSignin({ username: "", email: "", password: "" });
      setErrors({ username: "", email: "", password: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Signin failed");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="auth_form">
        <div className="row">
          <FaUser className="input_icon" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={Signin.username}
            onChange={handleChange}
          />
        </div>
        {errors.username && <p className="error">{errors.username} !</p>}

        <div className="row">
          <MdEmail  />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={Signin.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <p className="error">{errors.email} !</p>}

               <div className="row">
            <FaLock/>
            <input
              type={close?'text':'password'}
              name="password"
              placeholder="Password"
              autoComplete="OFF"
              value={Signin.password}
              onChange={handleChange}
            />
            <span onClick={handleChangetype}>
            {close?<IoIosEyeOff className="input_icon_eye"/>:<IoIosEye className="input_icon_eye"/>}
            </span>
          </div>
        {errors.password && <p className="error">{errors.password} !</p>}

        <input type="submit" value="Sign Up" className="round" />
      </form>
    </>
  );
};

export default Signin;
