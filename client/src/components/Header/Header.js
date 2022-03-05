import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { ReactComponent as Profile } from "./Profile.svg";
import { ReactComponent as Logo } from "./logo.svg";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import userContext from "../../UserContext";

function Header() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user, logout } = useContext(userContext);
  const { pathname } = useLocation();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);

    setEmail("");
    setPassword("");
  };

  const [contentMainFilter, setContentMainFilter] = useState("");

  useEffect(() => {
    let route = "";
    if (pathname.includes("Community")) {
      route = "community";
    } else if (pathname.includes("Favorites")) {
      route = "myfav";
    } else if (pathname.includes("Tips")) {
      route = "tiptricks";
    } else if (pathname.includes("About")) {
      route = "about";
    }
    setContentMainFilter(route);
  }, [pathname]);

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

          <ul className="menu-itemss">
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

          <ul className="menu-itemss">
            <li className={`${contentMainFilter === "myfav" ? "active" : ""}`}>
              <Link to="/Favorites">My recipes</Link>
            </li>
            <li
              className={`${contentMainFilter === "tiptricks" ? "active" : ""}`}
            >
              <Link to="/Tips">Tips and Tricks</Link>{" "}
            </li>
            <li
              className={`${contentMainFilter === "community" ? "active" : ""}`}
            >
              <Link to="/Community">Community</Link>
            </li>
            <li className={`${contentMainFilter === "about" ? "active" : ""}`}>
              <Link to="/About">About</Link>{" "}
            </li>

            <li>
              <ClickAwayListener
                mouseEvent="onMouseDown"
                touchEvent="onTouchStart"
                onClickAway={handleClickAway}
              >
                <Box>
                  <button className="profile" onClick={handleClick}>
                    {" "}
                    <Profile />
                  </button>
                  {open ? (
                    <Box>
                      <div className="login-container">
                        {!user ? (
                          <form class="form-login" onSubmit={handleSubmit}>
                            <div>SIGN IN</div>
                            <input
                              className="input-login"
                              type="email"
                              name="email"
                              placeholder="Email"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                            />
                            <input
                              className="input-login"
                              type="password"
                              name="Password"
                              placeholder="Password"
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                            />
                            <div className="buttons-log">
                              <button className="button-login" type="submit">
                                Sign in
                              </button>
                            </div>
                          </form>
                        ) : (
                          <div className="user-connect">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"
                              alt="user-img"
                              className="user-img"
                            ></img>
                            <div>Hi,</div>
                            <div className="email-logout">{user.email} </div>
                            <button className="button-logout" onClick={logout}>
                              Log out
                            </button>
                          </div>
                        )}
                      </div>
                    </Box>
                  ) : null}
                </Box>
              </ClickAwayListener>
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