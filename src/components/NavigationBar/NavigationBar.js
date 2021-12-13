import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { ReactComponent as Bookmark } from "./bookmark.svg";
import { ReactComponent as Chat } from "./chat.svg";
import { ReactComponent as Home } from "./home.svg";

function NavigationBar() {
  return (
    <div className="links">
      <Link to="/Favorites">
        <Bookmark />
      </Link>

      <Link to="/">
        <Home />
      </Link>

      <Link to="/Chat">
        <Chat />
      </Link>
    </div>
  );
}

export default NavigationBar;
