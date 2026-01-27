import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import "./auth.css";

const Signup = () => {
  const [close,setClose]=useState(true);
  
  let handleChangetype=()=>{
    setClose(!close);
  }
  const [Signup, setSignup] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({ email: "", password: "" });

  // Validation function
  const validation = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    // Email validation
    if (!Signup.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Signup.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Password validation
    if (!Signup.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (Signup.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      valid = false;
    } else if (!/[A-Z]/.test(Signup.password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
      valid = false;
    } else if (!/[0-9]/.test(Signup.password)) {
      newErrors.password = "Password must contain at least one number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    setSignup({ ...Signup, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validation()) return; // stop submission if validation fails

    try {
      console.log(Signup.email, Signup.password);
      setSignup({ email: "", password: "" });
      alert("Signup successful!");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth_form">
      <div className="row">
        <MdEmail/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={Signup.email}
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
                   value={Signup.password}
                   onChange={handleChange}
                 />
                 <span onClick={handleChangetype}>
                 {close?<IoIosEyeOff className="input_icon_eye"/>:<IoIosEye className="input_icon_eye"/>}
                 </span>
               </div>
      {errors.password && <p className="error">{errors.password} !</p>}

      <input type="submit" value="Sign In" className="round" />
    </form>
  );
};

export default Signup;
