/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SignUpPage.css";
import { useState } from "react";
import { BsTwitter } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@mui/material/TextField';
import { setDate, setPhone, setEmail, setUserName } from '../../Store/authSlice'


function SignUpPage() {
  //state for using navigate to pages
  const navigate = useNavigate()
  const [useEmail, setUseEmail] = useState(false)
  //selector for data assigning
  const { date, phone, email, userName } = useSelector(state => state.auth)

  //dispatch data to authSlice
  const dispatch = useDispatch()
 

  //function to toggle Input Field
  function toggleFunction() {
    setUseEmail(!useEmail)
  }


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

    //Validation
    // let nameRegex = /^[a-zA-Z- ]+$/g;
    // let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    // let phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/g;


    // if(!nameRegex.test(userName)){
    //   alert("Enter Correct Name")
    // }else if

    //storing data to local Storage
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

        <h2>Create Your Account</h2>

        <form className="box-form">

          <TextField
            className="outlined-basic"
            label="UserName"
            variant="outlined"
            type="text"
            onChange={(e) => dispatch(setUserName(e.target.value))}
            value={userName}
          />

          <br /><br /><br />



          <div>
            {useEmail ?
              <TextField
                className="outlined-basic"
                label="Phone"
                variant="outlined"
                type="number"
                onChange={(e) => dispatch(setPhone(e.target.value))}
                value={phone}
              />
              :
              <TextField
                className="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                onChange={(e) => dispatch(setEmail(e.target.value))}
                value={email}
              />
              // "Hello"

            }

            <Link className="toggleLink" onClick={toggleFunction}>{useEmail ? "Use Email Instead" : "Use Phone Instead"}</Link>

          </div>
          <br />

          <div className="text">
            <h3>Date of birth</h3>
            <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>

          </div>

          <TextField
            className="outlined-basic"
            label="Date"
            variant="outlined"
            type="date"
            placeholder="DOB"
            onChange={(e) => dispatch(setDate(e.target.value))}
            value={date}
          />

          <div className="navigate-button">
            <Link to={'/sign-in'} onClick={submitSignUpData}><button className="next">Next</button></Link>
          </div>
        </form>

      </div>
    </div>
  );
}

export default SignUpPage;
