import "./Header.css";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { ReactComponent as Profile } from "./Profile.svg";
import { ReactComponent as Logo } from "./logo.svg";
// import { ReactComponent as Bell } from "./Bell.svg";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import userContext from "../../UserContext";

function Header() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user, logout } = useContext(userContext);

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

  // const [isOpen, setIsOpen] = React.useState(false);

  // const handClick = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handClickAway = () => {
  //   setIsOpen(false);
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
            <li
              className={`${contentMainFilter === "myfav" ? "active" : ""}`}
              onClick={() => {
                setContentMainFilter("myfav");
              }}
            >
              <Link to="/Favorites">My recipes</Link>
            </li>
            <li
              className={`${contentMainFilter === "tiptricks" ? "active" : ""}`}
              onClick={() => {
                setContentMainFilter("tiptricks");
              }}
            >
              <Link to="/Tips">Tips and Tricks</Link>{" "}
            </li>
            <li
              className={`${contentMainFilter === "communiy" ? "active" : ""}`}
              onClick={() => {
                setContentMainFilter("communiy");
              }}
            >
              <Link to="/Community">Community</Link>
            </li>
            <li
              className={`${contentMainFilter === "about" ? "active" : ""}`}
              onClick={() => {
                setContentMainFilter("about");
              }}
            >
              <Link to="/About">About</Link>{" "}
            </li>
            {/* <li>
              <ClickAwayListener
                mouseEvent="onMouseDown"
                touchEvent="onTouchStart"
                onClickAway={handClickAway}
              >
                <Box>
                  <button className="bell" type="button" onClick={handClick}>
                    <Bell />
                  </button>
                  {isOpen ? (
                    <Box className="notes-container">
                      <div>NOTES</div>
                    </Box>
                  ) : null}
                </Box>
              </ClickAwayListener>
            </li> */}

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
