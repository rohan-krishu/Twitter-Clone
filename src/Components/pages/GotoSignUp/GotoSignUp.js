import { Link } from "react-router-dom";
import "./GotoSignUp.css"
import { SiTwitter } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'


function GotoSignUp() {
  return (
    <div className="signin">
      <div className="logo-box">
        <SiTwitter className="twitter-logo" />
        <h2>Join Twitter today</h2>
        <button className="icon-text">
          <FcGoogle className="google-icon" />
          Sign in with Google
        </button>
        <button className="icon-text">

          <BsApple className="apple-icon" />
          Sign in with Apple
        </button>

        <hr></hr>
        <h3>or</h3>

        <button className="account-creation">
          <Link to={'/sign-up'} className="create-account">Create Account</Link>
        </button>
        <p >By signing up, you agree to the <a href="" className="gotoLink">Terms of Service</a> and <a className="gotoLink" href="">Privacy Policy</a>, including <a href="" className="gotoLink">Cookie Use</a>.</p>

        <p className="accCreate">Have an account already? <Link to={'/sign-in'} className="gotoLink">Log in</Link></p>

      </div>
    </div>
  );
}

export default GotoSignUp;
