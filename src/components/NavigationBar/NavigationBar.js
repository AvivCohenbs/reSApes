import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { ReactComponent as Bookmark } from "./bookmark.svg";
import { ReactComponent as Chat } from "./chat.svg";
import { ReactComponent as Home } from "./home.svg";
// import { ReactComponent as BottonBack } from "./botton-back.svg";

function NavigationBar() {
  return (
    <div className="links">
      <div className="link1">
        <Link to="/Favorites">
          <Bookmark />
        </Link>
      </div>

      <div className="link2">
        <Link to="/">
          <Home />
        </Link>
      </div>

      <div className="link3">
        <Link to="/Chat">
          <Chat />
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
