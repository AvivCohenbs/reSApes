import "./Header.css";
import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as Profile } from "./Profile.svg";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Bell } from "./Bell.svg";

function Header() {
  return (
    <div className="header">
      <Link className="logo" to="/">
        <Logo />
      </Link>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          {" "}
          <Link to="/Favorites">My recipes</Link>{" "}
        </li>
        <li>
          <Link to="/About">About</Link>{" "}
        </li>
        <li>
          <Link to="/Profile">Community</Link>
        </li>
        <div className="lefticones">
          <Link className="signup" to="/Profile">
            <Profile />
          </Link>
          <Link className="bell" to="/notes">
            <Bell />
          </Link>
        </div>
      </ul>
    </div>
  );
}
export default Header;
