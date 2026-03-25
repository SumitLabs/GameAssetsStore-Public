import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { useState } from "react";

import Avatar from "../assets/avatar.jpg";
import "./auth.css";

const Signup = () => {

  const [close, setClose] = useState(true);

  const handleChangetype = () => {
    setClose(!close);
  };

  /* Avatar Image */

  const [profileImage, setProfileImage] = useState(Avatar);

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      const reader = new FileReader();

      reader.onloadend = () => {
        setProfileImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };


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


  /* Validation */

  const validation = () => {

    let valid = true;

    let newErrors = {
      username: "",
      email: "",
      password: "",
    };

    if (!Signin.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    }
    else if (Signin.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
      valid = false;
    }

    if (!Signin.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Signin.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!Signin.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }
    else if (Signin.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }
    else if (!/[A-Z]/.test(Signin.password)) {
      newErrors.password = "Password must contain one uppercase letter";
      valid = false;
    }
    else if (!/[0-9]/.test(Signin.password)) {
      newErrors.password = "Password must contain one number";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };


  const handleChange = (e) => {

    setSignin({
      ...Signin,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (!validation()) return;

    try {

      console.log(
        Signin.username,
        Signin.email,
        Signin.password,
        profileImage
      );

      alert("Signup successful!");

      /* Reset Form */

      setSignin({
        username: "",
        email: "",
        password: "",
      });

      setErrors({
        username: "",
        email: "",
        password: "",
      });

      /* Reset Avatar to Default */

      setProfileImage(Avatar);

    } catch (err) {

      alert("Signup failed",err);

    }

  };


  return (
    <>
      <form onSubmit={handleSubmit} className="auth_form">

        {/* Avatar Upload */}

        <div className="profile-upload">

          <div className="avatar-wrapper">

            <img
              src={profileImage}
              alt="avatar"
              className="avatar-img"
            />

            <label htmlFor="avatarInput" className="avatar-edit">
              <GrEdit />
            </label>

            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
               required="true"
            />

          </div>

        </div>


        {/* Username */}

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

        {errors.username && <p className="error">{errors.username}</p>}


        {/* Email */}

        <div className="row">

          <MdEmail className="input_icon" />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={Signin.email}
            onChange={handleChange}
          />

        </div>

        {errors.email && <p className="error">{errors.email}</p>}


        {/* Password */}

        <div className="row">

          <FaLock className="input_icon" />

          <input
            type={close ? "password" : "text"}
            name="password"
            placeholder="Password"
            autoComplete="OFF"
            value={Signin.password}
            onChange={handleChange}
          />

          <span onClick={handleChangetype}>
            {close ?
              <IoIosEye className="input_icon_eye" />
              :
              <IoIosEyeOff className="input_icon_eye" />
            }
          </span>

        </div>

        {errors.password && <p className="error">{errors.password}</p>}


        <input
          type="submit"
          value="Sign Up"
          className="round"
        />

      </form>
    </>
  );
};

export default Signup;