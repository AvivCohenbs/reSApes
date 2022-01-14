import "./Header.css";
import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as Profile } from "./Profile.svg";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Bell } from "./Bell.svg";
// import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  // export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {["recipes", "Tips and Tricks", "Community", "About"].map(
  //         (text, index) => (
  //           <ListItem button key={text}>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         )
  //       )}
  //     </List>
  //     <Divider />
  //     {/* <List>
  //       {["All mail", "Trash", "Spam"].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>
  //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //           </ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List> */}
  //   </Box>
  // );

  return (
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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#food">Category</a>
          </li>
          <li>
            <a href="#food-menu">Menu</a>
          </li>
          <li>
            <a href="#testimonials">Testimonial</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <h1 className="logo">RS</h1>
      </div>
    </nav>
    // <div className="header">
    //   <Link className="logo" to="/">
    //     <Logo />
    //   </Link>
    //   {/* <input class="menu-btn" type="checkbox" id="menu-btn" /> */}
    //   <ul className="menu">
    //     <li>
    //       <Link to="/Favorites">My recipes</Link>{" "}
    //     </li>
    //     <li>
    //       <Link to="/Tips">Tips and Tricks</Link>{" "}
    //     </li>
    //     <li>
    //       <Link to="/Community">Community</Link>
    //     </li>
    //     <li>
    //       <Link to="/About">About</Link>{" "}
    //     </li>
    //   </ul>
    //   <div className="lefticones">
    //     <Link className="bell" to="/notes">
    //       <Bell />
    //     </Link>
    //     <Link className="signup" to="/Profile">
    //       <Profile />
    //     </Link>
    //   </div>
    /* <div>
        {["|||"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div> */
    // </div>
  );
}
export default Header;
