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

  const styles = {
    position: "absolute",
    // top: 40,
    // right: 0,
    // left: -350,
    // zIndex: 1,
    // border: "1px solid",
    // pb: "350px",
    // bgcolor: "background.paper",
  };

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
              <ClickAwayListener
                mouseEvent="onMouseDown"
                touchEvent="onTouchStart"
                onClickAway={handleClickAway}
              >
                <Box sx={{ position: "relative" }}>
                  <button
                    className="profile"
                    // type="button"
                    onClick={handleClick}
                  >
                    <Profile />
                  </button>
                  {open ? (
                    <Box sx={styles}>
                      <div className="formlog">
                        <div className="form">
                          <img
                            className="googleimg"
                            src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3"
                          />

                          <input
                            className="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                          />

                          <input
                            className="pass"
                            type="password"
                            name="Password"
                            placeholder="Password"
                          />

                          <button className="submit">Sign in</button>

                          <a href="https://www.google.com/">Create account</a>
                        </div>
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
