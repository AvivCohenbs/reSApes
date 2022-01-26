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
                  Recipe Name<i className="max">( max length 200 )</i>
                </label>
                <input className="recipe-name" />
              </div>
              <div className="form__item">
                <label className="short-des">Description</label>
                <textarea className="short-desc" cols="30" rows="5"></textarea>
              </div>
              <div className="ing-list">Which ingredients do you have?</div>
            </div>
            <div className="form-col">
              <div className="row">
                {/* <div className="form__item">
                  <label className="recipe__time" for="prep_time">
                    Prep Time
                  </label>
                  <input className="time__input" type="text" />
                </div> */}
                <div className="form__item">
                  <div className="recipe__time">Cooking Time</div>
                  {/* <input className="time__input" type="text" /> */}
                  <input
                    type="time"
                    id="appt"
                    name="appt"
                    min="09:00"
                    max="18:00"
                    required
                  ></input>
                </div>
                {/* <div className="form__item">
                  <label className="recipe__time" for="servings">
                    Servings
                  </label>
                  <input className="time__input" for="servings" type="text" />
                </div> */}
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
