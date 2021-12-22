import "./Profile.css";
import { ReactComponent as Singin } from "./singin.svg";

function Profile() {
  return (
    <div className="profile-page">
      <div className="sing-In">Sign In Now</div>
      <div className="login">
        <form className="login-email">
          <label>
            <input type="text" placeholder="Email" />
            <Singin className="iconMan" />
          </label>
        </form>
        <form>
          <div class="login-pas">
            <input type="password" placeholder="Password" />
          </div>
        </form>
      </div>
      <div className="container">
        <button className="btn">Submit</button>
      </div>
    </div>
  );
}
export default Profile;
