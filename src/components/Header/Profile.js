import "./Profile.css";
import { ReactComponent as Singin } from "./singin.svg";
import React, { useState } from "react";
import showPwdImg from "./showpsd.svg";
import hidePwdImg from "./hidepsd.svg";
import { ReactComponent as Arrow } from "./Arrow.svg";
import { Link } from "react-router-dom";

function Profile() {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <div className="profile-page">
      <div className="arrow-svg">
        <Link to="/">
          <Arrow />
        </Link>
      </div>
      <div className="sing-In">Sign In Now</div>
      <div className="login">
        <div className="login-email">
          <input type="text" placeholder="Email" />
          <Singin className="iconMan" />
        </div>
        <br />
        <div className="pwd-container">
          <input
            name="pwd"
            placeholder="Enter Password"
            type={isRevealPwd ? "text" : "password"}
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <img
            className="img-pass"
            title={isRevealPwd ? "Hide password" : "Show password"}
            src={isRevealPwd ? hidePwdImg : showPwdImg}
            onClick={() => setIsRevealPwd((prevState) => !prevState)}
            alt="img"
          />
        </div>
      </div>

      <div className="container">
        <button className="btn">Submit</button>
      </div>
    </div>
  );
}
export default Profile;
