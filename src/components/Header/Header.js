import "./Header.css";
import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as Profile } from "./Profile.svg";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Bell } from "./Bell.svg";

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <ul className="menu-items">
            <li>
              <Link to="/Favorites">My recipes</Link>{" "}
            </li>
            <li>
              <Link to="/Tips">Tips and Tricks</Link>{" "}
            </li>
            <li>
              <Link to="/Community">Community</Link>
            </li>
            <li>
              <Link to="/About">About</Link>{" "}
            </li>
            <li>
              <Link className="Bell" to="/notes">
                <Bell />
              </Link>
            </li>
            <li>
              <Link className="Profile" to="/Profile">
                <Profile />
              </Link>
            </li>
          </ul>
          <Link className="logo" to="/">
            <Logo />
          </Link>
        </div>
      </nav>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <Link to="/Favorites">My recipes</Link>{" "}
            </li>
            <li>
              <Link to="/Tips">Tips and Tricks</Link>{" "}
            </li>
            <li>
              <Link to="/Community">Community</Link>
            </li>
            <li>
              <Link to="/About">About</Link>{" "}
            </li>
            <li>
              <Link className="Bell" to="/notes">
                <Bell />
              </Link>
            </li>
            <li>
              <Link className="Profile" to="/Profile">
                <Profile />
              </Link>
            </li>
          </ul>
          <Link className="logo" to="/">
            <Logo />
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Header;
