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
      <div className="menu-icons">
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <div className="lefticones">
          <Link className="bell" to="/notes">
            <Bell />
          </Link>
          <Link className="signup" to="/Profile">
            <Profile />
          </Link>
        </div>
      </div>
      <ul className="menu">
        <li>
          <Link to="/About">About</Link>{" "}
        </li>
        <li>
          <Link to="/Favorites">My recipes</Link>{" "}
        </li>
        <li>
          <Link to="/Tips">Tips and Tricks</Link>{" "}
        </li>
        <li>
          <Link to="/Community">Community</Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
