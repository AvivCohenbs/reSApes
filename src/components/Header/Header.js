import "./Header.css";
// import { ReactComponent as Ingredients } from "./ingredients.svg";

function Header() {
  return (
    <div className="header">
      <div className="titles">
        <div className="main-title">Hello, </div>
        <div className="second-title"> Let's start cooking</div>
      </div>
      {/* <Ingredients className="greentext"></Ingredients> */}
      <form className="search-wrapper cf">
        <label>
          <input type="text" placeholder="Which ingredient do you have?" />
          <button className="plus" type="submit">
            +
          </button>
        </label>
      </form>

      <div className="popular"> Popular Recipes</div>
    </div>
  );
}
export default Header;
