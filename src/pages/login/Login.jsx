import "./login.scss";
import video from "./video/ezgif.com-video-cutter.mp4";
import navimage from "../../media/Kiembeni2.png";

export default function Login() {
  return (
    <div className="login">
      <video autoPlay loop muted className="loginvideo" >
        <source src={video} type="video/mp4"/>
      </video>
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={navimage}
            alt=""
          />

        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Kiembeni? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
      
    </div>
  );
}