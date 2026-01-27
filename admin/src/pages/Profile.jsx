import "./profile.css";
import { useState } from "react";
import { GrEdit } from "react-icons/gr";
import Avatar from "../assets/avatar.jpg";
const Profile = () => {
  let [formToggle, setFormToggle] = useState(true);

  return (
    <section className="admin_profile round">
      <div className="header">
        <h3>Profile</h3>
      </div>
      <div className="main">
        <div className="main_header flex_box align_center">
          <div className="profile_pic">
            <img src={Avatar} alt="profile_pic" />
          </div>
          <div className="profile_info">
            <div className="username_email">
              <h4>Admin</h4>
              <p>admin@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="edit_form">
          <div className="flex_box justify_evenly form_header">
            <h3 className="round" onClick={() => setFormToggle(true)}>
              Update Profile
            </h3>
            <h3 className="round" onClick={() => setFormToggle(false)}>
              Change Password
            </h3>
          </div>
          {formToggle ? (
            <div className="edit_form_body">
              <form action="" method="post" className="flex_box flex_col">
                <div className="pic_choose">
                <input type="file" name="profile_pic" />
                <GrEdit />
                </div>
                <input type="text" name="username" placeholder="Username" autoComplete="OFF"/>
                <input type="submit" value="Update Profile" className="round" />
              </form>
            </div>
          ) : (
            <div className="edit_form_body">
              <form action="" method="post" className="flex_box flex_col">
                <input type="password" placeholder="Old Password" autoComplete="OFF"/>
                <input type="password" placeholder="New Password" autoComplete="OFF"/>
                 <input type="password" placeholder="Conform Password" autoComplete="OFF"/>
                <input
                  type="submit"
                  value="Update Password"
                  className="round"
                />
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
