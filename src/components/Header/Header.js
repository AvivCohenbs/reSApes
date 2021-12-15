import "./Header.css";
import { ReactComponent as Ingredients } from "./ingredients.svg";
import { ReactComponent as Profile } from "./Profile.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/Profile">
        <Profile />
      </Link>
      <div className="titles">
        <div className="main-title">Hello, </div>
        <div className="second-title"> Let's start cooking</div>
      </div>
      <Ingredients className="greentext"></Ingredients>
      <div className="popular"> Popular Recipes</div>
    </div>
  );
}
export default Header;
