/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SignUpPage.css";


function SignUpPage() {
  return (
    <div className="App">
      <div className="logo-box">
        <img src="./twitter.png" alt="logo" className="logo"/>
        <h2>Join Twitter today</h2>

        <form action="" className="box-form">
            <input type="text" placeholder="Username" />
            <input type="tel" placeholder="Phone" />
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
