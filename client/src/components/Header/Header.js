import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useContext, useMemo } from "react";
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

  const route = useMemo(() => {
    let internalRoute = "";
    if (pathname.includes("Community")) {
      internalRoute = "community";
    } else if (pathname.includes("Favorites")) {
      internalRoute = "myfav";
    } else if (pathname.includes("Tips")) {
      internalRoute = "tiptricks";
    } else if (pathname.includes("About")) {
      internalRoute = "about";
    }

    return internalRoute;
  }, [pathname]);

  return (
    <div className="header">
      <Link className="logo" to="/">
        <Logo />
      </Link>{" "}
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <div className="menu-icon-position">
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
      </div>
      <ul className="menu">
        <li className={`${route === "myfav" ? "active" : ""}`}>
          {" "}
          <Link to="/Favorites">My recipes</Link>{" "}
        </li>
        <li className={`${route === "tiptricks" ? "active" : ""}`}>
          <Link to="/Tips">Tips and Tricks</Link>{" "}
        </li>
        <li className={`${route === "community" ? "active" : ""}`}>
          <Link to="/Community">Community</Link>
        </li>
        <li className={`${route === "about" ? "active" : ""}`}>
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
                      <form className="form-login" onSubmit={handleSubmit}>
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
                        <div>Hello,</div>
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
        </li>{" "}
      </ul>
    </div>
  );
}
export default Header;
