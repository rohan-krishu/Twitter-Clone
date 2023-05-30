/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SignUpPage.css";
import { BsTwitter } from 'react-icons/bs';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function SignUpPage() {

  //state for maintaining input fields
  const [userName, setUserName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  
  const [localList, setLocalList] = useState([])

  //state for using navigate to pages
  const navigate = useNavigate()


  //function to get userData
  function submitSignUpData(e) {
    e.preventDefault()


    //assigning input fields to userData variable
    const userData = {
      userName: userName,
      phone: phone,
      email: email,
      date: date
    }

    //to empty for after submitting
    setDate("")
    setEmail("")
    setPhone("")
    setUserName("")


    // using Regex for Validation
    const nameRegex = /^[a-zA-Z- ]+$/g;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/g;

    if (!nameRegex.test(userName)) {
      alert("Enter Correct Name")
    } else if (!emailRegex.test(email)) {
      alert("Enter Correct Email")
    } else if (!mobileRegex.test(phone)) {
      alert("Enter correct Mobile Number")
    } else {
      alert("You are Succesfully Registered")

      //setting userData to local Storage
      setLocalList((prevList) => [...prevList, userData])
      localStorage.setItem('userData', JSON.stringify([...localList, userData]))
      navigate('/sign-in')
    }
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
            onChange={(e) => setUserName(e.target.value)}
          />

          <br /><br /><br />


          <input
            type="number"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            placeholder="Email"
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <p>User email instead</p>

          <h3>Date of birth</h3>
          <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
          <input
            type="date"
            placeholder="DOB"
            onChange={(e) => setDate(e.target.value)}
          />

          <Link to={'/sign-in'} onClick={submitSignUpData}><button>Next</button></Link>


        </form>

      </div>
    </div>
  );
}

export default SignUpPage;
