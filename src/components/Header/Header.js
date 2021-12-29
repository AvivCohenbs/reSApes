import "./Header.css";
import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <div className="header">
      <Link className="Logo" to="/">
        <div>reSApes</div>
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
          <Link to="/Chat">Chat</Link>{" "}
        </li>
        <li>
          <Link to="/Profile">Community</Link>
        </li>

        <li>
          {" "}
          <Link to="/Profile">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
