/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SignUpPage.css";
import { BsTwitter } from 'react-icons/bs';


function SignUpPage() {
  return (
    <div className="signup_style">
        <div className="logo-box">
        
        <BsTwitter className="twitter_icon"/>
        
        <h2>Join Twitter today</h2>

        <form action="" className="box-form">
            <input type="text" placeholder="Username" />
            <br/><br/><br/>
            <input type="tel" placeholder="Phone" />
            <br/>
            <p>User email instead</p>

            <h3>Date of birth</h3>
            <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
            <input type="date" placeholder="DOB" />

            <button>Next</button>
        </form>

      </div>
    </div>
  );
}

export default SignUpPage;
