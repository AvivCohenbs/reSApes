import "./Header.css";
import { ReactComponent as Ingredients } from "./ingredients.svg";

function Header() {
  return (
    <div className="header">
      <div className="titles">
        <div className="main-title">Hello, </div>
        <div className="second-title"> Let's start cooking</div>
      </div>
      <Ingredients className="greentext"></Ingredients>
    </div>
  );
}
export default Header;
