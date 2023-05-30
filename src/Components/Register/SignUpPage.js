/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SignUpPage.css";
import { BsTwitter } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
// import { addtoStorage } from "../Store/authSlice";
import { setDate, setPhone, setEmail, setUserName } from '../Store/authSlice'


function SignUpPage() {

  
  //state for using navigate to pages
  const navigate = useNavigate()

  //selector for data assigning
  const { date, phone, email, userName } = useSelector(state => state.auth)

  //dispatch data to authSlice
  const dispatch = useDispatch()

  //function to get userData
  function submitSignUpData(e) {
    e.preventDefault()

    //assigning input fields to userData variable
    const userData = {
      userName,
      phone,
      email,
      date
    }

    const storeData = localStorage.getItem("userData")
    let newData = []
    if (storeData) {
      newData = JSON.parse(storeData)
    }
    newData.push(userData)

    localStorage.setItem('userData', JSON.stringify(newData))
    navigate('/sign-in')
  }

  return (
    <div className="signup_style">
      <div className="logo-box">

        <BsTwitter className="twitter_icon" />

        <h2>Join Twitter today</h2>

        <form className="box-form">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => dispatch(setUserName(e.target.value))}
            value={userName}
          />

          <br /><br /><br />
          <input
            type="number"
            placeholder="Phone"
            onChange={(e) => dispatch(setPhone(e.target.value))}
            value={phone}
          />

          <input
            placeholder="Email"
            type='email'
            onChange={(e) => dispatch(setEmail(e.target.value))}
            value={email}
          />
          <br />

          <p>User email instead</p>

          <h3>Date of birth</h3>
          <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
          <input
            type="date"
            placeholder="DOB"
            onChange={(e) => dispatch(setDate(e.target.value))}
            value={date}
          />

          <Link to={'/sign-in'} onClick={submitSignUpData}><button>Next</button></Link>


        </form>

      </div>
    </div>
  );
}

export default SignUpPage;
