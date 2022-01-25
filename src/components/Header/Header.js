import "./Header.css";
import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as Profile } from "./Profile.svg";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Bell } from "./Bell.svg";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";

function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  // const styles = {
  //   position: "absolute",
  // };

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
            <li>
              <Link className="Bell" to="/notes">
                <Bell />
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
            <li>
              <Link className="Bell" to="/notes">
                <Bell />
              </Link>
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
                        <div className="intro-text">
                          <h1 className="signintitle">Sign in</h1>
                          <p className="secotitle">
                            Stay tuned with our new recipes{" "}
                          </p>
                        </div>
                        <div className="inputs">
                          <div className="inputin">
                            <input
                              type="text"
                              name="email"
                              id="email"
                              required
                            />
                            <label for="email">Email</label>
                          </div>
                          <div className="inputin">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              required
                            />
                            <label className="passlog" for="password">
                              Password
                            </label>
                          </div>
                        </div>
                        <div href="/" className="forgot" to="/">
                          Forgot Your Password?
                        </div>
                        <button className="butsignin">Sign in</button>
                        <p className="join-link">
                          New at reSApes? <a href="#">Join now</a>
                        </p>
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
