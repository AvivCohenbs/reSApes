import "./Community.css";

function Community() {
  return (
    <>
      <div className="maintitle">
        <h1 className="firsttitle">Share Your Favorite Recipe With Us</h1>
        <h1 className="sectitle">Add New Recipe</h1>
      </div>
      <div className="form-wrapper">
        <form post="#">
          <div className="row">
            <div className="form-col">
              <div className="form__item">
                <label className="recipe__name" for="recipe-name">
                  Recipe Name<i className="red">( max length 200 )</i>
                </label>
                <input name="recipe-name" />
              </div>
              <div className="form__item">
                <label for="short-desc">Short Description</label>
                <textarea name="short-desc" cols="30" rows="5"></textarea>
              </div>
              <div className="form__item">
                <label for="ing-list">Ingredients</label>
                <textarea name="ing-list" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div className="form-col">
              <div className="row">
                <div className="form__item">
                  <label className="recipe__time" for="prep_time">
                    Prep Time
                  </label>
                  <input className="time__input" type="text" />
                </div>
                <div className="form__item">
                  <label className="recipe__time">Cooking Time</label>
                  <input className="time__input" type="text" />
                </div>
                <div className="form__item">
                  <label className="recipe__time" for="servings">
                    Servings
                  </label>
                  <input className="time__input" for="servings" type="text" />
                </div>
              </div>
              <div className="form__item">
                <label for="direction">Directions</label>
                <textarea name="direction" rows="10"></textarea>
              </div>
              <div className="form__item">
                <label for="cook-tips">Cooking Tips</label>
                <textarea name="cook-tips" rows="5"></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Community;
