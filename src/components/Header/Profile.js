import "./Profile.css";
import { ReactComponent as Singin } from "./singin.svg";
import React, { useState } from "react";
import { ReactComponent as showpsd } from "./showpsd.svg";
import { ReactComponent as hidepsd } from "./hidepsd.svg";

function Profile() {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <div className="profile-page">
      <div className="sing-In">Sign In Now</div>
      <div className="login">
        <form className="login-email">
          <label>
            <input type="text" placeholder="Email" />
            <Singin className="iconMan" />
          </label>
        </form>
        <div className="pwd-container">
          <hidePwdImg />
          <showPwdImg />
          <input
            name="pwd"
            placeholder="Enter Password"
            type={isRevealPwd ? "text" : "password"}
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <img
            title={isRevealPwd ? "Hide password" : "Show password"}
            src={isRevealPwd ? hidepsd : showpsd}
            onClick={() => setIsRevealPwd((prevState) => !prevState)}
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
