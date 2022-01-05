import "./Profile.css";
// import { ReactComponent as Singin } from "./singin.svg";
// import React, { useState } from "react";
// import showPwdImg from "./showpsd.svg";
// import hidePwdImg from "./hidepsd.svg";

function Profile() {
  // const [pwd, setPwd] = useState("");
  // const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <div className="accountPage">
      <div className="accountPage__title">Sign Up</div>
      <div className="paragraph">
        Sign up to get meal ideas, save your favorite recipes, upload your own
        recipes, and more!
      </div>
      <button type="button" className="login-with-google-btn">
        Sign Up with Google
      </button>
    </div>
    // <div className="profile-page">
    //   <div className="sing-In">Sign Up</div>
    //   <div className="login">
    //     <div className="login-email">
    //       <input type="text" placeholder="Email" />
    //       <Singin className="iconMan" />
    //     </div>
    //     <br />
    //     <div className="pwd-container">
    //       <input
    //         name="pwd"
    //         placeholder="Enter Password"
    //         type={isRevealPwd ? "text" : "password"}
    //         value={pwd}
    //         onChange={(e) => setPwd(e.target.value)}
    //       />
    //       <img
    //         className="img-pass"
    //         title={isRevealPwd ? "Hide password" : "Show password"}
    //         src={isRevealPwd ? hidePwdImg : showPwdImg}
    //         onClick={() => setIsRevealPwd((prevState) => !prevState)}
    //         alt="img"
    //       />
    //     </div>
    //   </div>

    //   <div className="container">
    //     <button className="btn">Submit</button>
    //   </div>
    // </div>
  );
}
export default Profile;
