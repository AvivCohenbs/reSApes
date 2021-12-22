import "./Favorites.css";
import { ReactComponent as ProfileGreen } from "./ProfileGreen.svg";
import { Link } from "react-router-dom";

function Favorites() {
  return (
    <div className="bookmark-header">
      <div className="main-title-fav">My Favorites</div>
      <div className="user-favorites">
        <Link to="/Profile">
          <ProfileGreen />
        </Link>
      </div>
    </div>
  );
}
export default Favorites;
