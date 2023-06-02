import "./SignUpPage.css";
import React, { useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { setPhone, setEmail, setUserName, setMonth, setYear, setDay } from "../../Store/authSlice";

function SignUpPage() {
  //state for using navigate to pages
  const navigate = useNavigate();

  const [useEmail, setUseEmail] = useState(false);

  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorNumber, setErrorNumber] = useState('')
  const [errorDOB, setErrorDOB] = useState('')

  //selector for data assigning
  const { day, phone, email, userName, month, year } = useSelector((state) => state.auth);

  //dispatch data to authSlice
  const dispatch = useDispatch();


  const days = [];
  for (let day = 1; day <= 31; day++) {
    days.push(day);
  }

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = [];
  for (let year = 1950; year <= 2016; year++) {
    years.push(year)
  }

  //function to toggle Input Field
  function toggleFunction() {
    setUseEmail(!useEmail);
  }

  //function to get userData
  function submitSignUpData(e) {
    e.preventDefault();

    //assigning input fields to userData variable
    const userData = {
      userName,
      phone,
      email,
      day,
      month,
      year
    };

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (userName.length < 5) {
      setErrorName("Name should be greater than 6 Characters");
    } else {
      setErrorName("");
    }

    if (!emailRegex.test(email)) {
      setErrorEmail("Enter Correct Email");
    } else {
      setErrorEmail("");
    }

    if (phone.length !== 10) {
      setErrorNumber("Number should be 10 digits");
    } else {
      setErrorNumber("");
    }

    let DOBValidation = (day === "" || month === "" || year === "")
    if (DOBValidation) {
      setErrorDOB("Select a Day or Month or year")
    } else {
      setErrorDOB("")
    }


    if (userName.length >= 6 && emailRegex.test(email) && !DOBValidation) {
      const storeData = localStorage.getItem("userData");
      let newData = [];
      if (storeData) {
        newData = JSON.parse(storeData);
      }
      newData.push(userData);

      localStorage.setItem("userData", JSON.stringify(newData));
      navigate("/sign-in");

      dispatch(setEmail(""))
      dispatch(setPhone(""))
      dispatch(setUserName(""))
      dispatch(setDay(""))
      dispatch(setMonth(""))
      dispatch(setYear(""))

    } else if (userName.length >= 6 && phone.length === 10 && !DOBValidation) {
      const storeData = localStorage.getItem("userData");
      let newData = [];
      if (storeData) {
        newData = JSON.parse(storeData);
      }
      newData.push(userData);

      localStorage.setItem("userData", JSON.stringify(newData));
      navigate("/sign-in");

      dispatch(setEmail(""))
      dispatch(setPhone(""))
      dispatch(setUserName(""))
      dispatch(setDay(""))
      dispatch(setMonth(""))
      dispatch(setYear(""))

    }

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
          <p className="errorMessage">{errorName} </p>

          <br />

          <div>
            {useEmail ? (
              <>
                <TextField
                  className="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  type="number"
                  onChange={(e) => dispatch(setPhone(e.target.value))}
                  value={phone}

                />
                <p className="errorMessage">{errorNumber}</p>
              </>

            ) : (
              <>
                <TextField
                  className="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                  value={email}
                />
                <p className="errorMessage">{errorEmail}</p>
              </>
            )}

            <Link className="toggleLink" onClick={toggleFunction}>
              {useEmail ? "Use Email Instead" : "Use Phone Instead"}
            </Link>
          </div>
          <br />

          <div className="text">
            <h3>Date of birth</h3>
            <p>
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
          </div>

          <div className="datePicker">
            <div className="date-picker-month">
              <InputLabel id="demo-simple-select-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Month"
                variant="outlined"
                className="pickMonth"
                value={month}
                onChange={(e) => dispatch(setMonth(e.target.value))}
              >
                {months.map((month, index) => (
                  <MenuItem key={index} value={month}>{month}</MenuItem>
                ))}
              </Select>
            </div>

            <div className="date-picker-date">
              <InputLabel id="demo-simple-select-label">Date</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Date"
                variant="outlined"
                className="pickDate"
                value={day}
                onChange={(e) => dispatch(setDay(e.target.value))}
              >
                {days.map((day) => (
                  <MenuItem key={day} value={day}>{day}</MenuItem>
                ))}
              </Select>
            </div>

            <div className="date-picker-Year">
              <InputLabel id="demo-simple-select-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Year"
                variant="outlined"
                className="pickYear"
                value={year}
                onChange={(e) => dispatch(setYear(e.target.value))}
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year}>{year}</MenuItem>
                ))}
              </Select>
            </div>

          </div>
          <p className="errorMessage">{errorDOB}</p>

          <div className="navigate-button">
            <Link to={"/sign-in"} onClick={submitSignUpData}>
              <button className="next">Next</button>
            </Link>
          </div>
          <p className="alreadyMember">Already a Member <Link to={'/sign-in'}>Log-In</Link></p>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
