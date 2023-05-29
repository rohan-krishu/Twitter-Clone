import "./signin.css"

function Signin() {
  return (
    <div className="signin">
      <div className="logo-box">
        <img src="./twitter.png" alt="logo" className="logo"/>
        <h2>Join Twitter today</h2>
        <button>
          <img src="./google.png" alt="Google"/>
          Sign in with Google
        </button>
        <button>
          <img src="./apple.png" alt="Apple"/>
          Sign in with Apple
        </button>
        
        
        <hr></hr>
        <span>or</span>
        
        <button>
            <a href="./reg.js">Create Account</a>
        </button>
        <p>By signing up, you agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>, including <a href="">Cookie Use</a>.</p>
        
        <p className="accCreate">Have an account already? <a href="">Log in</a></p>
        
      </div>
    </div>
  );
}

export default Signin;
