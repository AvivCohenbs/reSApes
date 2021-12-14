import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { ReactComponent as Bookmark } from "./bookmark.svg";
import { ReactComponent as Chat } from "./chat.svg";
import { ReactComponent as Home } from "./home.svg";
// import { ReactComponent as BottonBack } from "./botton-back.svg";

function NavigationBar() {
  return (
    <div className="links">
      <Link to="/Favorites">
        <Bookmark />
      </Link>

      <Link to="/">
        <Home />
      </Link>
      {/* <div className="BottonBack">
        <img src={BottonBack} />
      </div> */}

      <Link to="/Chat">
        <Chat />
      </Link>
    </div>
  );
}

export default NavigationBar;
