import "./Header.css";
import { ReactComponent as Ingredients } from "./ingredients.svg";
import Text from "react-svg-text";

function Header() {
  return (
    <div className="header">
      <div className="titles">
        <div className="main-title">Hello, </div>
        <div className="second-title"> Let's start cooking</div>
      </div>
      <Ingredients className="greentext">
        <Text verticalAnchor="Ingredients">{""}</Text>
      </Ingredients>
    </div>
  );
}
export default Header;
